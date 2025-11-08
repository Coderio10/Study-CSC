import { Mail, MessageSquare, BookOpen } from 'lucide-react';

const Footer = () => {

    return (
        <>
            <footer className="bg-gray-900 text-white border-t border-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Brand */}
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <BookOpen className="w-6 h-6 text-blue-400" />
                                    <span className="text-xl font-bold text-gray-200">Study CSC FUTA</span>
                                </div>
                                <p className="text-gray-200 text-sm">
                                    Empowering Computer Science students with curated resources and structured learning paths beyond the classroom.
                                </p>
                            </div>
            
                        {/* Quick Links */}
                            <div>
                                <h3 className="font-semibold text-gray-200 mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm text-gray-200">
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">All Courses</a></li>
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>
            
                        {/* Connect */}
                        <div>
                            <h3 className="font-semibold text-gray-200 mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                                <Mail className="w-5 h-5 text-gray-600" />
                                </a>
                                <a href="#" className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                                <MessageSquare className="w-5 h-5 text-gray-900" />
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
