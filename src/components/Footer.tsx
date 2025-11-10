import { Mail, Github, Twitter, BookOpen } from 'lucide-react';

const Footer = () => {

    return (
        <>
            <footer className="bg-gray-900 text-white border-t border-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="flex flex-col  md:flex-row gap-8 justify-between">
                        {/* Brand */}
                            <div className='w-[320px]'>
                                <div className="flex items-center space-x-2 mb-4">
                                    <BookOpen className="w-8 h-8 text-blue-600" />
                                    <span className="text-xl font-bold text-gray-200">Study CSC</span>
                                </div>
                                <p className="text-gray-200 text-sm">
                                    Empowering Computer Science students with curated resources and structured learning paths beyond the classroom.
                                </p>
                            </div>
            
                        {/* Quick Links */}
                            <div className='w-[200px]'>
                                <h3 className="font-semibold text-gray-200 mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm text-gray-200">
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">All Courses</a></li>
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>

                        {/* Connect */}
                        <div className='w-[200px]'>
                            <h3 className="font-semibold text-gray-200 mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#">
                                <Mail className="w-5 h-5 text-gray-400" />
                                </a>
                                <a href="#">
                                <Github className="w-5 h-5 text-gray-400" />
                                </a>
                                <a href="#">
                                <Twitter className="w-5 h-5 text-gray-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
                        © 2025 Lovable. Empowering CSC students to learn and grow.
                    </div>
                </div>
            </footer>
        </>      
        
    )
}

export default Footer
