import { content } from "./content"

const alevel = [
    {
        id: "MCEOWZI37V",
        title: "Data Representation",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Data"],
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
        id: "MRTRFJLPKL",
        title: "Communication and internet technologies",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Communication", "Internet", "Networks"],
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
        id: "ZGEO1AAV05",
        title: "Hardware and Virtual Machines",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Hardware", "Virtual Machines"],
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
        id: "PPUCZNT5S4",
        title: "System Software",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Operating Systems", "Systems"],
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
    },
    {
        id: "FQHHUBJVZ9",
        title: "Security",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Security"],
        content: [
            "Encryption",
            "Encryption Protocols",
            "Digital Certificates",
        ],
        what_you_will_learn: [
            `How encryption works and what it is used for`,
            `The use of public key, private key, plain text, cipher text, encryption, symmetric key cryptography and asymmetric key cryptography`,
            `How the keys can be used to send a private message from the public to an individual/organisation`,
            `How the keys can be used to send a verified message to the public`,
            `How data is encrypted and decrypted, using symmetric and asymmetric cryptography`,
            `Purpose, benefits and drawbacks of quantum cryptography`,
            `The Secure Socket Layer (SSL)/Transport Layer Security (TLS)`,
            `Purpose of SSL/TLS`,
            `Use of SSL/TLS in client-server communication`,
            `Understanding of digital certificates`,
            `How a digital certificate is used to produce digital signatures`,
        ]
    },
    {
        id: "XR4FGGS0VI",
        title: "Artificial Intelligence",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "AI", "ML", "Artificial Intelligence", "Machine Learning"],
        content: [
            "Artificial Intelligence (AI)",
            "Machine Learning",
        ],
        what_you_will_learn: [
            `How graphs can be used to aid Artificial Intelligence (AI)`,
            `Purpose and structure of a graph`,
            `Use A* and Djikstra's algorithm to perform searches on a graph`,
            `How artificial neural networks have helped with machine learning`,
            `Machine learning categories: supervised and unsupervised learning`,
            `Deep Learning, Machine Learning and Reinforcement Learning and the reasons for using these methods`,
            `Back propagation of errors and regression methods in machine learning`,
        ],
    },
    {
        id: "UXNPHLGAN3",
        title: "Computational thinking and Problem-solving",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Computational thinking", "Problem-solving"],
        content: [
            "Algorithms",
            "Recursion",
        ],
        what_you_will_learn: [
            `Linear and binary searching methods`,
            `Insertion sort and bubble sort methods`,
            `Use of Abstract Data Types`,
            `Implementation of ADTs from another ADT`,
            `Recursion`,
            `Stacks and Queues`,
            `Time, Space and Complexity`,
        ]
    },
    {
        id: "WXWBYVYR9X",
        title: "Further Programming",
        image: "/computer.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "A level",
        tags: ["A level", "Programming"],
        content: [
            "Programming Paradigms",
            "File Processing and Exception Handling",
        ],
        what_you_will_learn: [
            `Introduction to programming paradigms`,
            `Low-level Programming`,
            `Imperative (Procedural) programming`,
            `Object-Oriented Programming (OOP)`,
            `Declarative programming`,
            `FIle processing and exception handling: read, write, append, close`,
        ]

    }
]

export { alevel }