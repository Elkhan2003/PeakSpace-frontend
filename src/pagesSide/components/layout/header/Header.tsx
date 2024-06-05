import scss from './Header.module.scss';
import { Link } from 'react-router-dom';
import { links } from '@/src/routes/links.tsx';

const Header = () => {
	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>Logo</h1>
						</div>
						<div className={scss.search_input}>
							<input type="text" placeholder="Enter search" />
						</div>
						<div className={scss.auth}>
							<Link className={scss.login} to={links.auth.login.href}>
								{links.auth.login.name}
							</Link>
							<Link
								className={scss.registration}
								to={links.auth.registration.href}
							>
								{links.auth.registration.name}
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
