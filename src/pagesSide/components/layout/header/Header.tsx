import { FC, useState, useEffect } from 'react';
import scss from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import { menuLinks, siteLinks } from '@/src/routes/links.tsx';
import ProfileButton from '@/src/ui/profileButton/ProfileButton.tsx';
import ProfileMenu from '@/src/ui/profileMenu/ProfileMenu.tsx';
import BurgerButton from '@/src/ui/burgerButton/BurgerButton.tsx';
import BurgerMenu from '@/src/ui/burgerMenu/BurgerMenu.tsx';

interface HeaderProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const Header: FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
	const { pathname } = useLocation();
	// const [headerScroll, setHeaderScroll] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// const handleScroll = () => setHeaderScroll(window.scrollY >= 10);
		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		// handleScroll();
		handleResize();
		// window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			// window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<button className={scss.logo}>
							<h1>
								Peak<span>space</span>
							</h1>
						</button>
						<div className={scss.search_input}>
							<input type="text" placeholder="Enter search" />
						</div>
						{!isMobile ? (
							<>
								<ProfileButton isOpen={isOpen} setIsOpen={setIsOpen} />
								<ProfileMenu
									menuLinks={menuLinks}
									isOpen={isOpen}
									setIsOpen={setIsOpen}
									pathname={pathname}
								/>
							</>
						) : (
							<>
								<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
								<BurgerMenu
									menuLinks={menuLinks}
									siteLinks={siteLinks}
									isOpen={isOpen}
									setIsOpen={setIsOpen}
									pathname={pathname}
								/>
							</>
						)}
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
