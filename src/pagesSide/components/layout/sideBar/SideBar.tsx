import { FC } from 'react';
import scss from './SideBar.module.scss';

const SideBar: FC = () => {
	return (
		<>
			<nav className={scss.nav}>
				<h3>SideBar</h3>
			</nav>
		</>
	);
};
export default SideBar;
