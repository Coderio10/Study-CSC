type Video = {
  title: string,
  duration: string
}

type Topics = {
  title: string, 
  content: string, 
  resources: string[]
}

type coursesDataType = {
  id: number,
  code: string,
  title: string,
  description: string,
  difficulty: string,
  thumbnail: string,
  topics: Topics[],
  videos: Video[]
}

export const coursesData: coursesDataType[] = [
  {
    id: 1,
    code: 'CSC 201',
    title: 'Python Programming',
    description: 'Master Python from basics to advanced concepts including OOP, data structures, and real-world applications.',
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    topics: [
      { title: 'Introduction to Python', content: 'Variables, data types, basic operations', resources: ['intro_slides.pdf', 'python_basics.py'] },
      { title: 'Control Structures', content: 'If statements, loops, functions', resources: ['control_flow.pdf', 'exercises.py'] },
      { title: 'Object-Oriented Programming', content: 'Classes, inheritance, polymorphism', resources: ['oop_guide.pdf'] },
      { title: 'Data Structures', content: 'Lists, dictionaries, sets, tuples', resources: ['data_structures.pdf'] }
    ],
    videos: [
      { title: 'Python Fundamentals', duration: '45 min' },
      { title: 'OOP in Python', duration: '60 min' }
    ]
  },
  {
    id: 2,
    code: 'CSC 302',
    title: 'Data Structures & Algorithms',
    description: 'Deep dive into essential data structures and algorithmic problem-solving techniques.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    topics: [
      { title: 'Arrays and Linked Lists', content: 'Basic data structures and operations', resources: ['arrays_notes.pdf'] },
      { title: 'Trees and Graphs', content: 'Hierarchical structures and traversal', resources: ['trees_guide.pdf'] },
      { title: 'Sorting Algorithms', content: 'QuickSort, MergeSort, HeapSort', resources: ['sorting_viz.pdf'] }
    ],
    videos: [
      { title: 'Big O Notation', duration: '30 min' },
      { title: 'Graph Algorithms', duration: '55 min' }
    ]
  },
  {
    id: 3,
    code: 'CSC 401',
    title: 'Database Management Systems',
    description: 'Learn database design, SQL, normalization, and modern database technologies.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
    topics: [
      { title: 'SQL Fundamentals', content: 'SELECT, JOIN, INSERT, UPDATE', resources: ['sql_basics.pdf'] },
      { title: 'Database Design', content: 'ER diagrams, normalization', resources: ['db_design.pdf'] }
    ],
    videos: [
      { title: 'Introduction to SQL', duration: '40 min' }
    ]
  },
  {
    id: 4,
    code: 'CSC 501',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to ML algorithms, neural networks, and practical applications.',
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    topics: [
      { title: 'Supervised Learning', content: 'Regression, classification algorithms', resources: ['ml_intro.pdf'] },
      { title: 'Neural Networks', content: 'Deep learning basics', resources: ['nn_guide.pdf'] }
    ],
    videos: [
      { title: 'ML Overview', duration: '50 min' }
    ]
  },
  {
    id: 5,
    code: 'CSC 301',
    title: 'Computer Architecture',
    description: 'Understand the fundamentals of computer organization, digital logic, and processor design.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=250&fit=crop',
    topics: [
      { title: 'Digital Logic', content: 'Logic gates, Boolean algebra, combinational circuits', resources: ['digital_logic.pdf', 'logic_gates.pptx'] },
      { title: 'Processor Organization', content: 'CPU structure, instruction cycle, control unit', resources: ['cpu_structure.pdf'] },
      { title: 'Memory Hierarchy', content: 'RAM, cache, virtual memory', resources: ['memory_hierarchy.pdf'] }
    ],
    videos: [
      { title: 'Introduction to Computer Architecture', duration: '40 min' },
      { title: 'Memory Systems', duration: '35 min' }
    ]
  },
  {
    id: 6,
    code: 'CSC 303',
    title: 'Design and Analysis of Algorithms',
    description: 'Study algorithm design paradigms, complexity analysis, and optimization techniques.',
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop',
    topics: [
      { title: 'Greedy Algorithms', content: 'Strategy and examples', resources: ['greedy_algorithms.pdf'] },
      { title: 'Dynamic Programming', content: 'Memoization, tabulation', resources: ['dp_guide.pdf'] },
      { title: 'NP-Completeness', content: 'P vs NP, reductions', resources: ['np_completeness.pdf'] }
    ],
    videos: [
      { title: 'Algorithm Complexity', duration: '50 min' },
      { title: 'Dynamic Programming', duration: '45 min' }
    ]
  },
  {
    id: 7,
    code: 'CSC 304',
    title: 'Operating Systems 1',
    description: 'Explore OS concepts including process management, memory, and file systems.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=250&fit=crop',
    topics: [
      { title: 'Processes and Threads', content: 'Concurrency, scheduling', resources: ['processes_threads.pdf'] },
      { title: 'Memory Management', content: 'Paging, segmentation', resources: ['memory_management.pdf'] },
      { title: 'File Systems', content: 'Organization, access methods', resources: ['file_systems.pdf'] }
    ],
    videos: [
      { title: 'Introduction to OS', duration: '35 min' },
      { title: 'Process Scheduling', duration: '40 min' }
    ]
  },
  {
    id: 8,
    code: 'CSC 305',
    title: 'C Programming',
    description: 'Learn the C programming language, pointers, memory management, and practical applications.',
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
    topics: [
      { title: 'C Basics', content: 'Syntax, variables, data types', resources: ['c_basics.pdf'] },
      { title: 'Pointers', content: 'Memory addresses, pointer arithmetic', resources: ['pointers.pdf'] },
      { title: 'File I/O', content: 'Reading and writing files', resources: ['file_io.pdf'] }
    ],
    videos: [
      { title: 'Pointers in C', duration: '30 min' },
      { title: 'C File Handling', duration: '25 min' }
    ]
  },
  {
    id: 9,
    code: 'CSC 306',
    title: 'System Design and Analysis',
    description: 'Learn methodologies for analyzing and designing information systems.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    topics: [
      { title: 'System Development Life Cycle', content: 'Phases and models', resources: ['sdlc.pdf'] },
      { title: 'Requirements Analysis', content: 'Gathering and documenting requirements', resources: ['requirements_analysis.pdf'] },
      { title: 'System Design', content: 'Architectural and detailed design', resources: ['system_design.pdf'] }
    ],
    videos: [
      { title: 'SDLC Overview', duration: '40 min' },
      { title: 'Requirements Gathering', duration: '30 min' }
    ]
  },
  {
    id: 10,
    code: 'CSC 307',
    title: 'Discrete Structures',
    description: 'Study logic, set theory, combinatorics, and graph theory for computer science.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
    topics: [
      { title: 'Logic and Proofs', content: 'Propositional and predicate logic', resources: ['logic_proofs.pdf'] },
      { title: 'Combinatorics', content: 'Counting, permutations, combinations', resources: ['combinatorics.pdf'] },
      { title: 'Graph Theory', content: 'Graphs, trees, connectivity', resources: ['graph_theory.pdf'] }
    ],
    videos: [
      { title: 'Combinatorics Basics', duration: '35 min' },
      { title: 'Graph Theory', duration: '40 min' }
    ]
  },
  {
    id: 11,
    code: 'CSC 308',
    title: 'OOP Analysis and Design',
    description: 'Explore object-oriented analysis, design patterns, and UML modeling.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
    topics: [
      { title: 'OOP Concepts', content: 'Encapsulation, inheritance, polymorphism', resources: ['oop_concepts.pdf'] },
      { title: 'UML Diagrams', content: 'Class, sequence, use case diagrams', resources: ['uml_diagrams.pdf'] },
      { title: 'Design Patterns', content: 'Singleton, factory, observer', resources: ['design_patterns.pdf'] }
    ],
    videos: [
      { title: 'UML Basics', duration: '30 min' },
      { title: 'Design Patterns', duration: '45 min' }
    ]
  },
  {
    id: 12,
    code: 'CSC 309',
    title: 'Theory of Computation',
    description: 'Learn automata theory, formal languages, and computability.',
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    topics: [
      { title: 'Finite Automata', content: 'DFA, NFA, regular expressions', resources: ['finite_automata.pdf'] },
      { title: 'Context-Free Grammars', content: 'CFGs, parsing', resources: ['cfgs.pdf'] },
      { title: 'Turing Machines', content: 'Decidability, halting problem', resources: ['turing_machines.pdf'] }
    ],
    videos: [
      { title: 'Automata Theory', duration: '40 min' },
      { title: 'Turing Machines', duration: '35 min' }
    ]
  },
  {
    id: 13,
    code: 'CSC 310',
    title: 'Hardware Repair and Maintenance',
    description: 'Practical skills for diagnosing and repairing computer hardware.',
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop',
    topics: [
      { title: 'PC Components', content: 'Motherboards, CPUs, RAM, storage', resources: ['pc_components.pdf'] },
      { title: 'Diagnostics', content: 'Troubleshooting hardware issues', resources: ['diagnostics.pdf'] },
      { title: 'Repair Techniques', content: 'Replacing and upgrading parts', resources: ['repair_techniques.pdf'] }
    ],
    videos: [
      { title: 'PC Assembly', duration: '25 min' },
      { title: 'Troubleshooting', duration: '30 min' }
    ]
  },
  {
    id: 14,
    code: 'CSC 311',
    title: 'Digital Signal Processing (DSP)',
    description: 'Introduction to DSP concepts, transforms, and applications.',
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=250&fit=crop',
    topics: [
      { title: 'Signals and Systems', content: 'Continuous and discrete signals', resources: ['signals_systems.pdf'] },
      { title: 'Transforms', content: 'Fourier, Laplace, Z-transform', resources: ['transforms.pdf'] },
      { title: 'DSP Applications', content: 'Audio, image processing', resources: ['dsp_applications.pdf'] }
    ],
    videos: [
      { title: 'Fourier Transform', duration: '40 min' },
      { title: 'DSP in Audio', duration: '35 min' }
    ]
  },
  {
    id: 15,
    code: 'CSC 313',
    title: 'Data Communications',
    description: 'Study data transmission, networking protocols, and communication systems.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    topics: [
      { title: 'Transmission Media', content: 'Wired and wireless media', resources: ['transmission_media.pdf'] },
      { title: 'Networking Protocols', content: 'TCP/IP, OSI model', resources: ['networking_protocols.pdf'] },
      { title: 'Error Detection', content: 'Parity, CRC, checksums', resources: ['error_detection.pdf'] }
    ],
    videos: [
      { title: 'OSI Model', duration: '30 min' },
      { title: 'Error Detection', duration: '25 min' }
    ]
  },
  {
    id: 16,
    code: 'CSC 315',
    title: 'Data Analysis',
    description: 'Learn data analysis techniques, visualization, and statistical methods.',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    topics: [
      { title: 'Data Visualization', content: 'Charts, graphs, dashboards', resources: ['data_visualization.pdf'] },
      { title: 'Statistical Analysis', content: 'Descriptive and inferential statistics', resources: ['statistical_analysis.pdf'] },
      { title: 'Data Mining', content: 'Clustering, classification', resources: ['data_mining.pdf'] }
    ],
    videos: [
      { title: 'Data Visualization', duration: '30 min' },
      { title: 'Data Mining', duration: '35 min' }
    ]
  }
];