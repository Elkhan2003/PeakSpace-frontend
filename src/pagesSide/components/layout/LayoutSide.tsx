import scss from './LayoutSide.module.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';
import HomePage from '../pages/HomePage.tsx';
import DashboardPage from '../pages/DashboardPage.tsx';

const LayoutSide = () => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutSide;
