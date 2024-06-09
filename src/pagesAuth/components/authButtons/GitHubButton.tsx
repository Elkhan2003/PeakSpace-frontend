'use client';
import { FC } from 'react';
import scss from './Buttons.module.scss';
import { FaGithub } from 'react-icons/fa';

const GitHubButton: FC = () => {
	const login = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/github`,
			'_self'
		);
	};

	return (
		<button className={`${scss.button} ${scss.GitHubButton}`} onClick={login}>
			<span className={scss.icon}>
				<FaGithub />
			</span>
			Log in with GitHub
		</button>
	);
};
export default GitHubButton;
