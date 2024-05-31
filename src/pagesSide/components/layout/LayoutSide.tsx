import scss from './LayoutSide.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';

const LayoutSide = () => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutSide;
