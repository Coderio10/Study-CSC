import CourseCard from './CourseCard';
import { Search } from 'lucide-react'; 

import { coursesData } from '../Data/data';

interface CoursesPageProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCourse: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with your course type if available
}

const CoursesPage: React.FC<CoursesPageProps> = ({ searchQuery, setSearchQuery, setCurrentPage, setSelectedCourse }) => {
  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Courses</h1>
        
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses by name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: any) => (
            <CourseCard 
              key={String(course.id)} 
              course={course} 
              onClick={() => { 
                setSelectedCourse(course); 
                setCurrentPage('course-detail'); 
              }} 
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-xl">No courses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage