import scss from './Welcome.module.scss';

const Welcome = () => {
	return (
		<section className={scss.Welcome}>
			<div className={scss.container}>
				<div className={scss.content}>
					<h1>Welcome Developer!</h1>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
