import { useEffect, useState } from 'react';
import scss from './ConfirmEmailPage.module.scss';
import { Link } from 'react-router-dom';
import { Checkbox, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { usePostConfirmEmailMutation } from '@/src/redux/api/auth';

const ConfirmEmailPage = () => {
	const [postConfirmEmailMutation] = usePostConfirmEmailMutation();
	const [userId, setUserId] = useState<number | null>(null);
	const [userEmail, setUserEmail] = useState<string>('');
	const [rememberMe, setRememberMe] = useState(false);

	useEffect(() => {
		setUserId(Number(localStorage.getItem('userId')));
		setUserEmail(String(localStorage.getItem('email')));
	}, []);

	const handleRememberMeChange = (e: CheckboxChangeEvent) => {
		setRememberMe(e.target.checked);
	};

	const onChange = async (code: string) => {
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

	return (
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
	);
};

export default ConfirmEmailPage;
