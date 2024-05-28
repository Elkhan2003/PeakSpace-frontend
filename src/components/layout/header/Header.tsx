import scss from './Header.module.scss';
import { useGetMeQuery } from '../../../redux/api/me';

const Header = () => {
	const { data } = useGetMeQuery();
	console.log(data);

	const GoogleLogin = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/google`,
			'_self'
		);
	};

	const GitHubLogin = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/github`,
			'_self'
		);
	};

	const logout = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/logout`,
			'_self'
		);
	};

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<button onClick={GoogleLogin}>GoogleAuth</button>
						<button onClick={GitHubLogin}>GitHubAuth</button>
						<button onClick={logout}>logout</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
