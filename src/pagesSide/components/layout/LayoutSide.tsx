import { useState } from 'react';
import scss from './LayoutSide.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';
import SideBar from '@/src/pagesSide/components/layout/sideBar/SideBar.tsx';

const LayoutSide = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className={scss.layout} onClick={() => setIsOpen(false)}>
				<Header isOpen={isOpen} setIsOpen={setIsOpen} />
				<main>
					<div className="container">
						<div className={scss.content}>
							<div className={scss.side_bar}>
								<SideBar />
							</div>
							<div className={scss.page_body}>
								<Outlet />
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutSide;
