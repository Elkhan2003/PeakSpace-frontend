/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import scss from './LoginPage.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { usePostLoginMutation } from '@/src/redux/api/auth';
import logo from '@/src/assets/logo.png';
import { Button, Checkbox, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IFormInput {
	login: string;
	password: string;
}

const LoginPage = () => {
	const [postLoginMutation] = usePostLoginMutation();
	const { control, handleSubmit } = useForm<IFormInput>();
	const [attempt, setAttempt] = useState(0);
	const [rememberMe, setRememberMe] = useState(false);
	const maxAttempts = 3;

	const handleRememberMeChange = (e: CheckboxChangeEvent) => {
		setRememberMe(e.target.checked);
	};

	const handleResponse = (response: any, userData: IFormInput) => {
		if (response.data?.accessToken) {
			const storage = rememberMe ? localStorage : sessionStorage;
			storage.setItem('accessToken', JSON.stringify(response.data.accessToken));
			window.location.reload();
		} else {
			setAttempt(attempt + 1);
			onSubmit(userData);
		}
	};

	const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
		if (attempt >= maxAttempts) {
			console.error('Maximum attempts reached');
			return;
		}

		try {
			const response = await postLoginMutation(userData);
			handleResponse(response, userData);
		} catch (e) {
			console.error('An error occurred:', e);
		}
	};

	const renderForm = () => (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="login"
				control={control}
				rules={{ required: true }}
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
				rules={{ required: true }}
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
