import { useEffect, useState } from 'react';
import scss from './LayoutSide.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';
import SideBar from '@/src/pagesSide/components/layout/sideBar/SideBar.tsx';
import { useGetMeQuery } from '@/src/redux/api/auth';
import Preloader from '@/src/ui/preLoader/Preloader.tsx';

const LayoutSide = () => {
	const { data, status } = useGetMeQuery();
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isPreLoader, setIsPreloader] = useState(true);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (status === 'fulfilled' || status === 'rejected') {
			setIsPreloader(false);
		}
	}, [status]);

	return (
		<>
			{isPreLoader ? (
				<>
					<Preloader />
				</>
			) : (
				<>
					<>
						<div className={scss.layout} onClick={() => setIsOpen(false)}>
							<Header
								isOpen={isOpen}
								setIsOpen={setIsOpen}
								isMobile={isMobile}
								user={data!}
							/>
							<main>
								<div className="container">
									<div className={scss.content}>
										{!isMobile && (
											<div className={scss.side_bar}>
												<SideBar />
											</div>
										)}
										<div className={scss.page_body}>
											<Outlet />
										</div>
									</div>
								</div>
							</main>
							<Footer />
						</div>
					</>
				</>
			)}
		</>
	);
};
export default LayoutSide;
