import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<>            
			<header className='fixed top-0 w-full z-50'>
				<Header />
			</header>

			<main className='mt-[110px]'>
				{children}
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;