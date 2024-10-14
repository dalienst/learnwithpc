const content = [
    {
        id: "HH7T4H5XES",
        title: "Computer Systems",
        image: "/computer.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Beginner",
        subcontent: [
            {
                id: 1,
                title: "Data Representation",
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
            },
            {
                id: 2,
                title: "Data Transmission",
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
                ]
            },
            {
                id: 3,
                title: "Hardware",
                content: [
                    "Computer architecture, microprocessors, and memory",
                    "Input and output devices",
                    "Data Storage",
                    "Network hardware",
                    "Logic Gates and Logic Circuits"
                ],
                what_you_will_learn: [
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
                ]
            },
            {
                id: 4,
                title: "Software",
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
                ]
            },
            {
                id: 5,
                title: "The internet and its uses",
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
                ]
            },
            {
                id: 6,
                title: "Automated and emerging technologies",
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
                ]
            }
        ]
    },
    {
        id: "GQXVUAOFPT",
        title: "Algorithms, programming and logic",
        image: "/algorithm.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Intermediate",
        subcontent: [
            {
                id: 1,
                title: "Algorithm design and problem-solving",
                content: [
                    "Understand the program development life cycle, limited to: analysis, design, coding and testing",
                    "Understand how a problem can be decomposed into its component parts",
                    "Use different methods to design and construct a solution to a problem",
                    "Understand the purpose of a given algorithm",
                    "Understand standard methods of solution",
                ],
                what_you_will_learn: [
                    `Standard methods of solution`,
                    `Understand the need for validation checks`,
                    `Understand the need for verification checks`,
                    `Identification of errors in given algorithms and how to correct them`,
                ],
            },
            {
                id: 3,
                title: "Computational Thinking Skills",
                content: [
                    "Computational Thinking Skills",
                    "Describe and use decomposition ",

                ]
            },
            {
                id: 4,
                title: "Boolean Logic",
                content: [
                    "Identify and use the standard symbols for logic gates",
                    "Define and understand the functions of the logic gates",
                ]
            }
        ]
    },
    {
        id: "B0JF6P1NGL",
        title: "Information Representation",
        image: "/datascience.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Beginner",
        subcontent: [
            {
                id: 1,
                title: "Data Representation",
            },
            {
                id: 2,
                title: "Multimedia",
            },
            {
                id: 3,
                title: "Compression",
            }
        ]
    },
    {
        id: "3KHUXQKBBG",
        title: "Communication Networks",
        image: "/devops.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Intermediate",
        subcontent: [
            {
                id: 1,
                title: "Networks: Local Area Networks (LAN), and Wide Area Networks (WAN)",
            },
            {
                id: 2,
                title: "The internent: world wide web",
            },
            {
                id: 3,
                title: "Networking hardware: router configuration, ethernet and wifi",
            },
            {
                id: 4,
                title: "Use of IP address in transmission of data over the internet",
            },
            {
                id: 5,
                title: "Uniform Resource Locator (URL) and domain name services (DNS)",
                content: "Location of a resource in the world wide web and the role of domain name services (DNS)",
            }
        ]
    },
    {
        id: "IMOKUA1IXL",
        title: "Processor Fundamentals",
        image: "/ml.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Beginner",
        subcontent: [
            {
                id: 1,
                title: "Central Processing Unit (CPU) Architecture",
            },
            {
                id: 2,
                title: "Assembly Language",

            },
            {
                id: 3,
                title: "Bit manipulation",
            },

        ]
    },
    {
        id: "MXK9XWSNOA",
        title: "System Software",
        image: "/game.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Expert",
        subcontent: [
            {
                id: 1,
                title: "Operating System (OS)",
            },
            {
                id: 2,
                title: "Language Translators",
            },
        ]
    },
    {
        id: "7WGBEHFUZP",
        title: "Security, privacy and data integrity",
        image: "/cyber.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Advanced",
        subcontent: [
            {
                id: 1,
                title: "Data Security",
            },
            {
                id: 2,
                title: "Data Integrity",
            },
        ]
    },
    {
        id: "5APZNRIPQL",
        title: "Ethics and Ownership",
        image: "/block.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Advanced",
        subcontent: [
            {
                id: 1,
                title: "Ethics and Ownership",
            },
        ]
    },
    {
        id: "CNRHISSPJL",
        title: "Databases",
        image: "/devops.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Advanced",
        subcontent: [
            {
                id: 1,
                title: "Database Concepts",
            },
            {
                id: 2,
                title: "Database Management Systems (DBMS)",
            },
            {
                id: 3,
                title: "Data Definition Language (DDL) and Data Manipulation Language (DML)",
            },

        ]
    },
    {
        id: "EJLXGX7PFC",
        title: "Data Types and Structures",
        image: "/ai.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Advanced",
        subcontent: [
            {
                id: 1,
                title: "Data Types and Records",
            },
            {
                id: 2,
                title: "Arrays",
            },
            {
                id: 3,
                title: "Files",
            },
            {
                id: 4,
                title: "Introduction to Abstract Data Types (ADT)",
            }
        ]
    },
    {
        id: "VKX8IVOQ2J",
        title: "Programming",
        image: "/full.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Advanced",
        subcontent: [
            {
                id: 1,
                title: "Programming Basics",
            },
            {
                id: 2,
                title: "Constructs",
            },
            {
                id: 3,
                title: "Structured Programming",
            },
        ]
    },
    {
        id: "HMLEXSVKWJ",
        title: "Software Development",
        image: "/computer.png",
        duration: "6 weeks",
        subtitle: "Computer Science Modules",
        method: "Self-paced",
        level: "Advanced",
        subcontent: [
            {
                id: 1,
                title: "Software Development Life cycle",
            },
            {
                id: 2,
                title: "Software Design",
            },
            {
                id: 3,
                title: "Software Testing and Maintenance",
            },
        ]
    }
]

export { content }