import { FC } from 'react';
import scss from './SideBar.module.scss';
import { links } from '@/src/routes/links.tsx';
import { Link } from 'react-router-dom';

const SideBar: FC = () => {
	return (
		<>
			<div className={scss.SideBar}>
				<nav className={scss.nav}>
					<ul>
						{links.side.map((item, index) => (
							<li key={index}>
								<Link className={scss.link} to={item.href}>
									{item.icon} {item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};
export default SideBar;
