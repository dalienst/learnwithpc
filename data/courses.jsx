const courses = [
    {
        id: "BEWZK51BI4",
        title: "Data and Information Representation",
        image: "/pc.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Data", "Information Representation"],
        content: [
            "Number systems, binary, hexadecimal, decimal, and more.",
            "Text, sound and images",
            "Data storage and compression",

        ],
        what_you_will_learn: [
            "Understand how and why computers use binary to represent all form of data",
            `Understand the denary, binary and hexadecimal number systems`,
            `Understand how and why hexadecimal is used as a beneficial method of data representation`,
            `Understand the concept of overflow and why it occurs in binary addition`,
            `Perform a logical binary shift on a positive 8-bit binary integer and understand the effect this has on the positive binary integer`,
            `Use two's complement to represent positive and negative 8-bit binary integers`,
            `Understand how and why a computer represents text and the use of character sets, including American standard code for information interchange (ASCII) and Unicode`,
            `Understand how and why a computer represents sound, including the effects of the sample rate and sample resolution`,
            `Understand how and why a computer represents an image, including the effects of the resolution and colour depth`,
            `Understand how data storage is measured.`,
            `Calculate the file size of an image file and a sound file, using information given`,
            `Understand the purpose of and need for data compression`,
            `Understand how files are compressed using lossy and lossless compression methods`,
        ],
        keySkills : [
            "Binary Number System",
            "Denary, Binary, and Hexadecimal Systems",
            "Hexadecimal Data Representation",
            "Binary Overflow",
            "Binary Shifts",
            "Two's Complement",
            "Character Encoding (ASCII, Unicode)",
            "Sound Representation",
            "Image Representation",
            "Data Storage Measurement",
            "File Size Calculation",
            "Data Compression",
            "Lossy and Lossless Compression"
          ]
    },
    {
        id: "UNJT9ZQJKO",
        title: "Data Transmission",
        image: "/data.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Networks", "Security"],
        content: [
            "Types and methods of data transmission",
            "Methods of error detection",
            "Understand encryption and decryption",
        ],
        what_you_will_learn: [
            `Understand that data is broken down into packets to be transmitted`,
            `The structure of a packet and the process of packet switching`,
            `How data is transmitted from one device to another using different methods of data transmission`,
            `The suitability of each method of data transmission`,
            `Understand the universal serial bus (USB) interface and explain how it is used to transmit data`,
            `Understand the need to check for errors after data transmission and how these errors can occur`,
            `The processes involved in each of the following error detection methods for detecting errors in data after transmission: parity check (odd and even), checksum and echo check`,
            `Describe how a check digit is used to detect errors in data entry and identify examples of when a check digit is used, including international standard book numbers (ISBN) and bar codes`,
            `Describe how an automatic repeat query (ARQ) can be used to establish that data is received without error`,
            `Understand the need for and purpose of encryption when transmitting data`,
            `Understand how data is encrypted using symmetric and asymetric encryption`,
        ],
        keySkills : [
            "Packet Switching",
            "Data Transmission Methods",
            "USB Interface and Data Transfer",
            "Error Detection Techniques",
            "Parity Check",
            "Checksum",
            "Echo Check",
            "Check Digit Validation",
            "ARQ Protocol",
            "Encryption Techniques",
            "Symmetric Encryption",
            "Asymmetric Encryption"
          ]
    },
    {
        id: "2CBY0PAXSN",
        title: "Hardware",
        image: "/hardware.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Hardware"],
        content: [
            "Computer architecture, microprocessors, and memory",
            "Input and output devices",
            "Data Storage",
            "Network hardware",
            "Logic Gates and Logic Circuits"
        ],
        what_you_will_learn: [
            `The differences between Random Access Memory (RAM) and Read Only Memory (ROM)`,
            `The difference between Programmable ROM (PROM), Erasable Programmable ROM (EPROM), and Electrically Erasable Programmable ROM (EEPROM)`,
            `The role of the central processing unit (CPU) in a computer`,
            `Understand what is meant by a microprocessor`,
            `Understand the purpose of the components in a CPU, in a computer that has a Von Neumann architecture`,
            `The process of the fetch-decode-execute cycle, including the role of each component in the process`,
            `Understand what is meant by a core, cache and clock in a CPU and explain how they can affect the performance of a CPU`,
            `Understand the purpose and use of an instruction set for a CPU`,
            `The purpose and characteristics of an embedded system and identify devices in which they are commonly used`,
            `Understand what is meant by an input device and why it is required`,
            `Understand what is meant by an output device and why it is required`,
            `Understand what is meant by a sensor and the purposes of sensors`,
            `The type of data captured by each sensor and understand when each sensor would be used`,
            `Understand what is meant by primary storage`,
            `Understand what is meant by secondary storage`,
            `The operation of magnetic, optical and solid state (flash memory) storage and their uses`,
            `What is meant by virtual memory, how it is created and used`,
            `What is meant by cloud storage`,
            `Advantages of storing data on the cloud in comparison to storing data on the locally`,
            `The need of a network interface card (NIC) to access a network`,
            `The meaning and purpose of a media access control (MAC) address, including its structure`,
            `The purpose of an internet protocol (IP) address`,
            `The role of a router in a network`,
            `The functions of NOT, AND, OR, NAND, NOR and XOR (EOR) gates`
        ],
        keySkills :[
            "Memory Components",
            "CPU Architecture",
            "Fetch-Decode-Execute Cycle",
            "CPU Performance Factors",
            "Instruction Set",
            "Embedded Systems",
            "Input/Output Devices",
            "Sensors and Data Capture",
            "Primary and Secondary Storage",
            "Storage Technologies",
            "Virtual Memory",
            "Cloud Storage",
            "Network Interface Cards",
            "MAC Addresses",
            "IP Addresses",
            "Routers",
            "Logic Gates",
          ]
    },
    {
        id: "C32NY1VMNG",
        title: "Software",
        image: "/pg.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Software"],
        content: [
            "Types of software and interrupts",
            "Types of programming language, translators and integrated development environments (IDEs)",
        ],
        what_you_will_learn: [
            `The difference between system software and application software`,
            `The role and basic functions of an operating system`,
            `Understand how hardware, firmware and an operating system are required to run applications software`,
            `The role and operation of interrupts`,
            `What is meant by a high-level language and a low-level language, including advantages and disadvantages of each`,
            `Understand assembly language and assemblers`,
            `The operation of a compiler and an interpreter including how high-level language is translated`,
            `The advantages and disadvantages of a compiler and an interpreter`,
            `The role of an IDE in a software development environment`,
        ],
        keySkills : [
            "System and Application Software",
            "Operating System Functions",
            "Hardware, Firmware, and OS Relationship",
            "Interrupts",
            "High-Level and Low-Level Languages",
            "Assembly Language and Assemblers",
            "Compilers and Interpreters",
            "IDE in Software Development"
          ]
    },
    {
        id: "WUGXQB52NC",
        title: "The internet and its uses",
        image: "/net.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Internet", "Cyber security", "Blockchain"],
        content: [
            "The internet and the world wide web",
            "Digital Currency",
            "Cyber security",
        ],
        what_you_will_learn: [
            `The difference between the internet and the world wide web`,
            `The meaning of a uniform resource locator (URL)`,
            `The purpose and operation of hypertext transfer protocol (HTTP) and hypertext transfer protocol secure (HTTPS)`,
            `The purpose and functions of a web browser`,
            `How web pages are located, retrieved and displayed on a device when a user enters a URL`,
            `What is meant by cookies and how they are used, including session cookies and persistent cookies`,
            `The concept of a digital currency and how digital currencies are used`,
            `Understand the process of blockchain and how it is used to track digital currency transactions`,
            `The process involved in, and the aim of carrying out, a range of cyber security threats`,
            `How a range of cyber security threats can be prevented`,
        ],
        keySkills: [
            "Internet vs. World Wide Web",
            "URL Structure",
            "HTTP and HTTPS Protocols",
            "Web Browser Function",
            "Web Page Retrieval and Display",
            "Cookies and Their Use",
            "Digital Currency",
            "Blockchain Technology",
            "Cybersecurity Threats",
            "Cybersecurity Prevention"
          ]
    },
    {
        id: "7XAHLKXVOE",
        title: "Automated and emerging technologies",
        image: "/drone.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Intermediate",
        tags: ["AS level", "Automated systems", "Robotics", "Artificial Intelligence"],
        content: [
            "Automated systems",
            "Robotics",
            "Artificial Intelligence",
        ],
        what_you_will_learn: [
            `How sensors, microprocessors and actuators can be used in collaboration to create automated systems`,
            `Advantages and disadvantages of automated systems`,
            `What is meant by robotics`,
            `The characteristics of a robot`,
            `The roles that robots can perform and describe the advantages and disadvantages of their use`,
            `What is meant by artificial intelligence (AI)`,
            `The main characteristics of AI as the collection of data and the rules for using that data, ability to reason, ability to learn and adapt`,
            `The basic operation and components of AI systems to simulate intelligent behaviour`,
        ],
        keySkills : [
            "Sensor-Microprocessor-Actuator Systems",
            "Automated System Advantages and Disadvantages",
            "Robotics",
            "Robot Characteristics and Roles",
            "AI",
            "AI Characteristics and Operation",
            "AI System Components"
          ]
    },
    {
        id: "LZVGLEF2W5",
        title: "Communication",
        image: "/comms.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Networks", "Security", "Internet"],
        content: [
            `Networks including the internet`,
            `The internet and the world wide web`,
        ],
        what_you_will_learn: [
            `The purpose and benefits of networking devices`,
            `The characteristics of Local Area Network (LAN) and a Wide Area Network (WAN)`,
            `The client-server and peer-to-peer models`,
            `Understanding of thin-client and thick-client and the differences between them`,
            `Understanding the bus, star, mesh and hybrid topologies`,
            `Understanding of cloud computing`,
            `The role and function of a router in a network`,
            `Understanding of Ethernet and how collissions are detected and avoided`,
            `The hardware that is used to support the internet`,
            `The use of IP addresses in the transmission of data over the internet`,
            `how a Uniform Resource Locator (URL) is used to locate a resource on the World Wide Web (WWW) and the role of the Domain Name Service (DNS)`
        ],
    },
    {
        id: "X5G7Y2Q7SP",
        title: "Processor Fundamentals",
        image: "/process.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Advanced",
        tags: ["AS level"],
        content: [
            `Central Processing Unit (CPU) Architecture`,
            `Assembly Language`,
            `Bit manipulation`,
        ],
        what_you_will_learn: [
            `The basic  Von Neumann model for a computer system and the stored program concept`,
            `The purpose and role of registers, including the difference between general purpose and special purpose registers`,
            `The purpose and roles of the Arithmetic Logic Unit (ALU), Control Unit (CU), and system clock, Immediate Access Store (IAS)`,
            `How data are transferred between various components if the computer system using the address bus, data bus and control bus`,
            `How different ports provide connection to peripheral devices`,
            `The stages of the Fetch-Execute cycle`,
            `The purpose of interrupts`,
            `The relationship between assembly language and machine code`,
            `The different stages of the assembly process for a two-pass assembler`,
            `Tracing a given simple assembly language program`,
            `Understanding of and perform binary shifts`,
            `Understanding of how bit manipulation can be used to monitor/control a device`,
        ]
    },
    {
        id: "IEEEENL4FU",
        title: "System Software",
        image: "/system.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level"],
        content: [
            `Operating Systems`,
            `Language Translators`,
        ],
        what_you_will_learn: [
            `The role and basic functions of an operating system (OS)`,
            `The key management tasks carried out by an OS`,
            `The need for typical utility software provided with an Operating System`,
            `Understanding of program libraries`,
            `The need for assembler software for the translation of an assembly language program`,
            `The need for a compiler for the translation of a high-level language program`,
            `The need for an interpreter for the translation and execution of a high-level language program`,
            `The benefits and drawbacks of using either a compiler or interpreter and justify the use of each`,

        ],
    },
    {
        id: "X48D8XQ3UR",
        title: "Security, privacy and data integrity",
        image: "/security.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Security"],
        content: [
            "Data Security",
            "Data Integrity",
        ],
        what_you_will_learn: [
            `The difference between the terms security, privacy and integrity of data`,
            `The need for both the security of data and the security of the computer system`,
            `Security measures designed to protect computer systems, ranging from the stand-alone PC to a network of computers`,
            `The threats to computer and data security posed by networks and the internet`,
            `Methods that can be used to restrict the risks posed by threats`,
            `Security methods designed to protect the security of data`,
            `How data validation and data verification help protect the integrity of data`,
            `Methods of data validation`,
            `Methods of data verification during data entry and data transfer`,
        ]
    },
    {
        id: "CL7Y0GNVLD",
        title: "Ethics and Ownership",
        image: "/block.png",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level"],
        content: [
            "Ethics",
            "Ownership",
        ],
        what_you_will_learn: [
            `The need for and purpose of ethics as a computing professional`,
            `The need to act ethically and the impact of acting ethically or unethically`,
            `The need for copyright legislation`,
            `The different types of software licensing`,
            `The understanding of Artificial Intelligence`,
        ]
    },
    {
        id: "SL8IQBTHCD",
        title: "Databases",
        image: "/database.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level", "Databases"],
        content: [
            `Database Concepts`,
            `Database Management Systems (DBMS)`,
            `Data Definition Language (DDL) and Data Manipulation Language (DML)`,
        ],
        what_you_will_learn: [
            `The limitations of using a file based approach for the storage and retrieval of data`,
            `Features of a relational database`,
            `Using an entity-relationship (E-R) diagram to document a database design`,
            `Understanding of the normalisation process`,
            `The different types of normalisation techniques for a database`,
            `The features of a Database Management System (DBMS)`,
            `Understanding of how software tools found within a DBMS are used in practice`,
        ]
    },
    {
        id: "ZQC7GPE5BH",
        title: "Data Types and Structures",
        image: "/etrd.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level"],
        content: [
            "Data Types and Records",
            "Arrays",
            "Files",
            "Introduction to Abstract Data Types (ADT)",
        ],
        what_you_will_learn: [
            `Using appropriate data types for a problem solution`,
            `Understanding of the purpose of a record structure to hold a set of data of different data types under one identifier`,
            `The technical terms associated with arrays`,
            `Writing pseudocode for a program and handling text files`,
            `Understanding of why files are needed`,
            `Understanding of an abstract data type (ADT)`,
            `The different types of abstract data types`,
            `Using a stack, queue and linked lists to store data`,
        ]
    },
    {
        id: "LZ4SGPPALO",
        title: "Programming",
        image: "/pg.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Beginner",
        tags: ["AS level"],
        content: [
            "Programming Basics",
            "Constructs",
            "Structured Programming",
        ],
        what_you_will_learn: [
            `Introduction to programming`,
            `Implementation and writing pseudocode from a given design`,
            `Writing pseudocode statements for expressions, variables declaration and assignments, and constants declaration and initialisation`,
            `Using built-in functions and library routines`,
            `Using pseudocode to write conditional statements; IF, IF...ELSE, CASE, postfix and prefix increment/decrement`,
            `Understanding looping structure`,
            `Define and using a procedure`,
            `How to use parameters`,
            `Definition and usage of a function`,
            `Writing efficient pseudocode`,
        ]
    },
    {
        id: "XEWELSFTOK",
        title: "Software Development",
        image: "/sdc.svg",
        duration: "6 weeks",
        method: "Self-paced",
        level: "Intermediate",
        tags: ["AS level"],
        content: [
            "Program Development Life Cycle",
            "Program Design",
            "Program Testing and Maintenance",
        ],
        what_you_will_learn: [
            `The purpose of a development life cycle`,
            `The need for different development life cycles: waterfall, iterative, rapid application development`,
            `The principles, benefits and drawbacks of each development life cycles`,
            `Understanding the analysis, design, coding, testing and maintenance phases of a software development life cycle`,
            `Understanding the purpose of state-transition diagrams to document an algorithm`,
            `The different types of state-transition diagrams`,
            `Ways of exposing and avoiding faults in programs`,
            `Locating and identifying the different types of errors: syntax, semantic, runtime and logical`,
            `Understanding the need for a test strategy and test plan and their likely contents`,
            `Choosing appropriate test data for a test plan: normal, abnormal and boundary`,
            `Understanding the need for continuing maintenance of a system and each type of maintenance: perfective, adaptive, and corrective`,
            `Analysing an existing program and making ammendments to enhance functionality`,
        ]
    }
]

export { courses }