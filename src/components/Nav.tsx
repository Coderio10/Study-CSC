import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react'

interface NavigationProps {
	currentPage: string;
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) => {

	return (
		<nav className="bg-white shadow-sm sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
						<BookOpen className="w-8 h-8 text-blue-600" />
						<span className="ml-2 text-2xl font-bold text-gray-900">Study CSC</span>
					</div>
					
					<div className="hidden md:flex space-x-8">
					{['home', 'about', 'courses', 'contact'].map(page => (
						<button 
						type="button"
						key={page}
						onClick={() => setCurrentPage(page)} 
						className={`${currentPage === page ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 transition-colors capitalize`}
						>
						{page}
						</button>
					))}
					</div>

					<button type="button" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
					{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{menuOpen && (
					<div className="md:hidden pb-4 space-y-2">
					{['home', 'courses', 'about', 'contact'].map(page => (
						<button 
						type="button"
						key={page}
						onClick={() => { setCurrentPage(page); setMenuOpen(false); }} 
						className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 capitalize"
						>
						{page}
						</button>
					))}
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navigation
