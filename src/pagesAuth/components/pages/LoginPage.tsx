import { useState } from 'react';
import scss from './LoginPage.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { usePostLoginMutation } from '@/src/redux/api/auth';
import logo from '@/src/assets/logo.png';
import { Button, Checkbox, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IFormInput {
	email: string;
	password: string;
}

const LoginPage = () => {
	const [postLoginMutation] = usePostLoginMutation();
	const { control, handleSubmit } = useForm<IFormInput>();
	const [rememberMe, setRememberMe] = useState(false);

	const handleRememberMeChange = (e: CheckboxChangeEvent) => {
		setRememberMe(e.target.checked);
	};

	const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
		try {
			const response = await postLoginMutation(userData);
			if (response.data?.token) {
				const storage = rememberMe ? localStorage : sessionStorage;
				storage.setItem('accessToken', JSON.stringify(response.data.token));
				window.location.reload();
			}
		} catch (e) {
			console.error('An error occurred:', e);
		}
	};

	const renderForm = () => (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="email"
				control={control}
				rules={{ required: true, minLength: 2, pattern: /^\S+@\S+\.\S+$/i }}
				render={({ field }) => (
					<Input
						className={scss.input}
						size="large"
						placeholder="Номер телефона, имя пользователя или email"
						{...field}
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				rules={{ required: true, minLength: 2 }}
				render={({ field }) => (
					<Input.Password
						className={scss.input}
						size="large"
						placeholder="Пароль"
						{...field}
					/>
				)}
			/>
			<Checkbox
				className={scss.customCheckbox}
				onChange={handleRememberMeChange}
			>
				Сохранить вход
			</Checkbox>
			<Button type="primary" size="large" block htmlType="submit">
				Войти
			</Button>
		</form>
	);

	return (
		<section className={scss.LoginPage}>
			<div className={scss.container}>
				<div className={scss.content}>
					<img className={scss.logo} src={logo} alt="logo" />
					{renderForm()}
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
