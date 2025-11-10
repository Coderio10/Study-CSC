interface Course {
  id: string | number;
  code: string;
  difficulty: string;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  students: number;
}

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" 
    onClick={onClick}
  >
    <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {course.code}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full ${
          course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 
          course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 
          'bg-red-100 text-red-700'
        }`}>
          {course.difficulty}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{course.description.substring(0, 100)}...</p>
    </div>
  </div>
);

export default CourseCard