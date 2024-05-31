import scss from './LayoutAuth.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LayoutAuth = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === '/auth') {
			navigate('/auth/login');
		}
	}, [pathname, navigate]);

	return (
		<>
			<div className={scss.layout}>
				<Outlet />
			</div>
		</>
	);
};
export default LayoutAuth;
