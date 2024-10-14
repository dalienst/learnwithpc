const alevel = [
    {
        id: 1,
        title: "Data Representation",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["A level"],
        content: [
            `User defined data types`,
            `File organisation and access`,
            `Floating-point numbers, representation and manipulation`,
        ],
        what_you_will_learn: [
            `The purpose and role of user defined data types and their necessity`,
            `Define and use non-composite types`,
            `Define and use composite data types`,
            `Designing an appropriate user-defined data type for a given problem`,
            `The methods of file organisation and access: serial, sequential, and random`,
            `The mothods of file access`,
            `Hashing algotithms`,
            `The format of binary floating-point real numbers`,
            `Converting binary floating-point numbers into denary and vice versa`,
        ]
    },
    {
        id: 2,
        title: "Communication and internet technologies",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["A level"],
        content: [
            "Protocols",
            "Circuit switching, packet switching",
        ],
        what_you_will_learn: [
            `Why a protocol is essential for communication between computers`,
            `How a protocol implementation can be viewed as a stack, where each layer has its own functionality`,
            `Understanding of the TCP/IP protocol suite: Four Layers (Application, Transport, Internet, Link)`,
            `Understanding of protocols (HTTP, FTP, POP3, IMAP, SMTP, BitTorrent) and their purposes`,
            `Understanding of circuit switching: Benefits, drawbacks and where it is applicable`,
            `Understanding of packet switching: Benefits, drawbacks and where it is applicable`,
        ]
    },
    {
        id: 3,
        title: "Hardware and Virtual Machines",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["A level"],
        content: [
            "Processors, Parallel Processing and Virtual Machines",
            "Boolean Algebra and Logic Circuits",
        ],
        what_you_will_learn: [
            `Understanding of Reduced Instruction Set Computers (RISC) and Complex Instruction Set Computers (CISC) processors`,
            `Use of pipelining and registers in RISC processors`,
            `Understanding of the four basic computer architectures: SISD, SIMD, MISD, MIMD`,
            `Understanding of the characteristics of massively parallel computers`,
            `Understanding of the concept of a virtual machine`,
            `How to produce truth tables for logic circuits including half adders and full adders`
                `Understanding of a flip-flop (SR, JK)`,
            `Understanding of Boolean algebra`,
            `Understanding of Karnaugh maps (K-map) `
        ]
    },
    {
        id: 4,
        title: "System Software",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["A level"],
        content: [
            "Purposes of an Operating System (OS)",
            "Translation Software",
        ],
        what_you_will_learn: [
            `How an OS can maximise the use of resources`,
            `The ways in which the user interface hides the complexities of the hardware from the user`,
            `Process management: concept of multitasking. Running, ready and blocked processes`,
            `Understanding of virtual memory, paging and segmentation for memory management`,
            `How an interpreter can execute programs without producing a translated version`,
            `The various stages in the compilation of a program: lexical analysis, syntax analysis, code generation and code optimisation`,
            `How the grammar of a language can be expressed using syntax diagrams or Backus-Naur Form (BNF) notation`,
            `How Reverse Polish Notation (RPN) can be used to carry out the evaluation of expressions`
        ]
    }
]

export { alevel }