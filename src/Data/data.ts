type Video = {
  title: String,
  duration: String
}

type Topics = 
  { title: String, 
    content: String, 
    resources: String[]
  }

type coursesDataType = {
  id: Number,
  code: String,
  title: String,
  description: String,
  difficulty: String,
  duration: String,
  students: Number,
  rating: Number,
  thumbnail: String,
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
    duration: '12 weeks',
    students: 234,
    rating: 4.8,
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
    duration: '14 weeks',
    students: 189,
    rating: 4.9,
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
    duration: '10 weeks',
    students: 156,
    rating: 4.7,
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
    duration: '16 weeks',
    students: 198,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop',
    topics: [
      { title: 'Supervised Learning', content: 'Regression, classification algorithms', resources: ['ml_intro.pdf'] },
      { title: 'Neural Networks', content: 'Deep learning basics', resources: ['nn_guide.pdf'] }
    ],
    videos: [
      { title: 'ML Overview', duration: '50 min' }
    ]
  },
  {
    id: 2,
    code: 'CSC 301',
    title: 'Design and Analysis of Algorithms',
    description: 'Deep dive into essential data structures and algorithmic problem-solving techniques.',
    difficulty: 'Intermediate',
    duration: '14 weeks',
    students: 189,
    rating: 4.9,
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

];
