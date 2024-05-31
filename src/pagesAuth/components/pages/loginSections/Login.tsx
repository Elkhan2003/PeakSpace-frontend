import scss from './Login.module.scss';

const Login = () => {
	return (
		<>
			<section className={scss.Login}>
				<div className="container">
					<div className={scss.content}>
						<h1>Login</h1>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
