import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createTodo, updateTodo } from "@/services/todos";
import { useEffect, useState } from "react";
import { FiLoader, FiEdit } from "react-icons/fi";
import { FaCheckDouble } from "react-icons/fa6";
import toast from "react-hot-toast";

function Todos({todos, refetch}) {
    const [task, setTask] = useState('')
    const [newTodos, setNewTodos] = useState([])
    const [loading, setLoading] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);
    const [currentTask, setCurrentTask] = useState('');
    const [updating, setUpdating] = useState(false);
    const axios = useAxiosAuth()
    
    useEffect(()=>{
        const incompleteTodos = todos?.filter((todo)=> !todo.is_completed)
        setNewTodos(incompleteTodos)
    }, [todos])
    const handleSubmit = async() =>{
        setLoading(true);
        try {
            const values = {task, is_completed:false}
            await createTodo(values, axios)
            refetch()
            toast.success('Task created successfully')
        } catch (error) {
            toast.error('Failed to create task')
        }finally{
            setLoading(false);
            setTask('')
        }
    }
    const handleDone = async(todo) =>{
        setStatusLoading(true);
        const task = todo.task;
        const slug = todo.slug;
        setCurrentTask(slug);
        const values = {task, is_completed:true}
        try {
            await updateTodo(slug, values, axios)
            refetch()
            toast.success('Task updated successfully')
        } catch (error) {
            toast.error('Failed to update task')
        }finally{
            setStatusLoading(false);
            setTask('')
        }
    }

    const handleUpdate = async(slug) =>{
        setUpdating(true);
        setCurrentTask(slug);
        const values = {task, is_completed:false}
        try {
            await updateTodo(slug, values, axios)
            refetch()
            toast.success('Task updated successfully')
        } catch (error) {
            toast.error('Failed to update task')
        }finally{
            setUpdating(false);
            setTask('')
        }
    }
    
  return (
    <div>
        <div className="flex justify-between items-center gap-5">
        <span className="text-[#818997] text-lg block mt-5 mb-2 font-semibold">My todos</span>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-blue-600 grid place-content-center rounded-xl size-10 font-semibold text-xl leading-none text-white">+</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a todo</DialogTitle>
            <DialogDescription>
              Add a task you want to do here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name" className="text-left">
                Your Todo Task
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder='To create a course on the basics of AI'
              />
            </div>
          <DialogFooter>
            <button disabled={loading} type="button" onClick={handleSubmit} className="bg-navy text-white rounded-lg px-4 py-2">
                {loading ? <FiLoader className="animate-spin"/> : 'Save changes'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        </div>
        <ul className="w-full md:w-3/4 flex flex-col text-sm text-navy gap-3 h-fit max-h-[150px] px-4 border-l-4 border-blue-600 p-2 rounded-xl overflow-auto">
        {newTodos?.length > 0 ? 
            newTodos?.map((todo)=>(
                <li key={todo.slug} className="flex gap-2 items-center justify-between">
                    <span>~ {todo.task}</span>
                    <div className="flex gap-2">
                        {/* <button onClick={()=>handleUpdate(todo.slug)} className="bg-orange-500 rounded-lg size-8 text-white grid place-content-center">
                        {updating && currentTask === todo.slug ? <FiLoader className="animate-spin"/> : <FiEdit />}
                        </button> */}
                        <Dialog>
        <DialogTrigger asChild>
        <button className="bg-orange-500 rounded-lg size-8 text-white grid place-content-center">
        <FiEdit />
                        </button>        
                        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit todo</DialogTitle>

          </DialogHeader>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name" className="text-left">
                Your Todo Task
              </Label>
              <Input
                id="name"
                type='text'
                className="col-span-3"
                value={task}
                placeholder={todo.task}
                onChange={(e)=>setTask(e.target.value)}
              />
            </div>
          <DialogFooter>
            <button disabled={updating} type="button" onClick={()=>handleUpdate(todo.slug)} className="bg-navy text-white rounded-lg px-4 py-2">
                {updating ? <FiLoader className="animate-spin"/> : 'Save changes'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
                        <button onClick={()=>handleDone({task: todo.task, slug: todo.slug })} className="bg-blue-600 rounded-lg size-8 text-white grid place-content-center">
                            {statusLoading && currentTask === todo.slug ? <FiLoader className="animate-spin"/> : <FaCheckDouble />}
                        </button>
                    </div>
                </li>   
            ))
        : 
        <span>You do not have any pending tasks</span>
        }
        </ul>
    </div>
  );
}

export default Todos;
