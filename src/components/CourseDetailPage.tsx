import { BookOpen, Video, Download, Star, Clock, Users } from 'lucide-react';

interface CourseDetailPageProps {
  course: any; // Replace 'any' with your Course type if available
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, setCurrentPage }) => {
  if (!course) return null;

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          type="button"
          onClick={() => setCurrentPage('courses')} 
          className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center"
        >
          ← Back to Courses
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover" />
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
            Course Topics
          </h2>
          <div className="space-y-4">
            {Array.isArray(course.topics) && course.topics.map((topic: any, idx: number) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-6 py-3 hover:bg-blue-50 transition-colors rounded-r">
                <h3 className="font-bold text-gray-900 mb-1">{topic.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{topic.content}</p>
                <div className="flex gap-2 flex-wrap">
                  {Array.isArray(topic.resources) && topic.resources.map((resource: any, ridx: number) => (
                    <button 
                      type="button"
                      key={ridx} 
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full flex items-center transition-colors"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      {resource}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Video className="w-6 h-6 mr-3 text-blue-600" />
            Video Tutorials
          </h2>
          <div className="space-y-3">
            {Array.isArray(course.videos) && course.videos.map((video: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Video className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.duration}</p>
                  </div>
                </div>
                <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Watch
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage