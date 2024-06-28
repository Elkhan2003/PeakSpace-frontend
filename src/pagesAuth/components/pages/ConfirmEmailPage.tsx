import scss from './ConfirmEmailPage.module.scss';
import { Checkbox, GetProp, Input } from 'antd';
import { useEffect, useState } from 'react';
import { usePostConfirmEmailMutation } from '@/src/redux/api/auth';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Link } from 'react-router-dom';

const ConfirmEmailPage = () => {
	const [postConfirmEmailMutation] = usePostConfirmEmailMutation();
	const [userId, setUserId] = useState<number | null>(null);
	const [userEmail, setUserEmail] = useState<string>('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleRememberMeChange = (e: CheckboxChangeEvent) => {
		setRememberMe(e.target.checked);
	};

	const onChange: GetProp<typeof Input.OTP, 'onChange'> = async (code) => {
		console.log('onChange:', code);
		const response = await postConfirmEmailMutation({
			codeInEmail: Number(code),
			id: userId!
		});

		if (response.data?.token) {
			const storage = rememberMe ? localStorage : sessionStorage;
			storage.setItem('accessToken', JSON.stringify(response.data.token));
			window.location.reload();
		}
	};

	useEffect(() => {
		setUserId(Number(localStorage.getItem('userId')));
		setUserEmail(String(localStorage.getItem('email')));
	}, []);

	return (
		<>
			<section className={scss.ConfirmEmailPage}>
				<div className={scss.container}>
					<div className={scss.content}>
						<div className={scss.texts}>
							<h1>Код подтверждения</h1>
							<p>Мы отправили вам SMS-код на адрес:</p>
							<p>{userEmail}</p>
						</div>
						<div className={scss.pin_input}>
							<Input.OTP
								size="large"
								length={4}
								formatter={(str) => str.replace(/\D/g, '')}
								onChange={onChange}
							/>
						</div>
						<Checkbox
							className={scss.customCheckbox}
							onChange={handleRememberMeChange}
						>
							Сохранить вход
						</Checkbox>
						<Link to="/auth/login">Вернуться на страницу регистрации</Link>
					</div>
				</div>
			</section>
		</>
	);
};
export default ConfirmEmailPage;
