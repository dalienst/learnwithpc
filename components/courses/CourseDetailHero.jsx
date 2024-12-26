"use client";

function CourseDetailHero({ course }) {
    return (
        <div>
        <div className="mt-3">
            <h1 className='font-semibold font-display underline text-3xl lg:text-4xl mb-4 lg:text-center'>{course?.title}</h1>
            <div className="flex justify-center gap-2 flex-wrap">
                <p className='text-navy bg-[#ededed] text-base rounded-full px-4 py-1'>{course?.duration}</p>
                <p className='text-navy bg-[#ededed] text-base rounded-full px-4 py-1'>{course?.level}</p>
                <p className='text-navy bg-[#ededed] text-base rounded-full px-4 py-1'>{course?.method}</p>
            </div>
        </div>
        <section className="grid grid-cols-1 mt-3 lg:mt-0 md:grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-3 lg:space-y-0">
                    <div className="lg:p-6">
                      <h5 className="text-2xl font-semibold mb-4">
                        Content in this course
                      </h5>
                      <ul className="list-disc list-inside px-4 space-y-2">
                        {course?.content?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:p-6">
                      <h5 className="text-2xl font-semibold mb-4">
                        What you&apos;ll learn
                      </h5>
                      <ol className="list-decimal list-inside px-4 space-y-2">
                        {course?.what_you_will_learn?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </section>
        </div>
        
    )
}

export default CourseDetailHero