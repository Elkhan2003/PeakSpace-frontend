import scss from './Chats.module.scss';

const Chats = () => {
	return (
		<>
			<section className={scss.Chats}>
				<div className={scss.container}>
					<div className={scss.content}>
						<h3>Chats</h3>
					</div>
				</div>
			</section>
		</>
	);
};
export default Chats;
