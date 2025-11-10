import { ArrowRight, Target, Heart, Lightbulb } from 'lucide-react';
import { coursesData } from '../Data/data';

import CourseCard from './CourseCard'

interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCourse: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with your course type if available
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, setSelectedCourse }) => {
    
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[55vh] flex flex-col items-center justify-center ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Empowering Computer Science Students to Learn, Build, and Grow
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Your comprehensive platform for CS education and resources
                    </p>
                    <button 
                    onClick={() => setCurrentPage('courses')} 
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all inline-flex items-center"
                    >
                    Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>
            <section id="About" className="py-16 bg-gray-50">
                {/* Three Pillars Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Our Mission */}
                            <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To bridge the gap between classroom teaching and real-world Computer Science skills by curating the best educational learning resources.
                            </p>
                            </div>

                            {/* Why We Exist */}
                            <div className="text-center">
                            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We know university CS courses often fall short. Students deserve access to quality tutorials, structured paths, and practical resources that actually help them learn.
                            </p>
                            </div>

                            {/* Our Approach */}
                            <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Lightbulb className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We don't create content—we find the best. Every resource is handpicked, tested, and organized to help you master your departmental subjects independently.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">{coursesData.length}+</div>
                        <div className="text-gray-600">Active Courses</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">777+</div>
                        <div className="text-gray-600">Students Learning</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Courses</h2>
                    <p className="text-gray-600 mb-8">Most popular courses among students</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.slice(0, 3).map((course: any) => (
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
                </div>
            </section>

        </div>

    )
}

export default HomePage