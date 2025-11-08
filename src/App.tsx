import { useState } from 'react';
// import { Search, BookOpen, Video, Download, Menu, X, ArrowRight, Star, Clock, Users } from 'lucide-react';

// Components
import Footer from './components/Footer'
import Navigation from './components/Nav'
import ContactPage from './components/Contact';
import AboutPage from './components/About';
import HomePage from './components/Home'
import CoursesPage from './components/CoursePage'
import CourseDetailPage from './components/CourseDetailPage';


// Main App Component
const LovableApp = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-w-100vw flex flex-col">
      <Navigation 
        currentPage ={currentPage} 
        setCurrentPage={setCurrentPage} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            setSelectedCourse={setSelectedCourse} 
          />
        )}
        {currentPage === 'courses' && (
          <CoursesPage 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            setCurrentPage={setCurrentPage} 
            setSelectedCourse={setSelectedCourse} 
          />
        )}
        {currentPage === 'course-detail' && (
          <CourseDetailPage 
            course={selectedCourse} 
            setCurrentPage={setCurrentPage} 
          />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default LovableApp;