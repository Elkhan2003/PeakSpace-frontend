import scss from './ConfirmEmailPage.module.scss';
import { GetProp, Input } from 'antd';

const ConfirmEmailPage = () => {
	const onChange: GetProp<typeof Input.OTP, 'onChange'> = (code) => {
		console.log('onChange:', code);
	};

	return (
		<>
			<section className={scss.ConfirmEmailPage}>
				<div className={scss.container}>
					<div className={scss.content}>
						<div className={scss.texts}>
							<h1>Код подтверждения</h1>
							<p>Мы отправили вам SMS-код на адрес:</p>
							<p>boss.amsport@gmail.com</p>
						</div>
						<div className={scss.pin_input}>
							<Input.OTP
								size="large"
								length={4}
								formatter={(str) => str.replace(/\D/g, '')}
								onChange={onChange}
							/>
						</div>
						<button>Вернуться на страницу регистрации</button>
					</div>
				</div>
			</section>
		</>
	);
};
export default ConfirmEmailPage;
