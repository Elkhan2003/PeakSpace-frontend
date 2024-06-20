/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import scss from './RegistrationPage.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { usePostRegistrationMutation } from '@/src/redux/api/auth';
import { Button, Checkbox, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import logo from '@/src/assets/logo.png';

interface IFormInput {
	lastName: string;
	firstName: string;
	userName: string;
	login: string;
	password: string;
	confirmPassword: string;
}

const RegistrationPage = () => {
	const [postRegisterMutation] = usePostRegistrationMutation();
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
			const response = await postRegisterMutation(userData);
			handleResponse(response, userData);
		} catch (e) {
			console.error('An error occurred:', e);
		}
	};

	const renderForm = () => (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="lastName"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input
						className={scss.input}
						size="large"
						placeholder="Фамилия"
						{...field}
					/>
				)}
			/>
			<Controller
				name="firstName"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input
						className={scss.input}
						size="large"
						placeholder="Имя"
						{...field}
					/>
				)}
			/>
			<Controller
				name="userName"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input
						className={scss.input}
						size="large"
						placeholder="Имя пользователя"
						{...field}
					/>
				)}
			/>
			<Controller
				name="login"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input
						className={scss.input}
						size="large"
						placeholder="Номер телефона или email"
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
			<Controller
				name="confirmPassword"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input.Password
						className={scss.input}
						size="large"
						placeholder="Повторите пароль"
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
				Зарегистрироваться
			</Button>
		</form>
	);

	return (
		<section className={scss.RegistrationPage}>
			<div className={scss.container}>
				<div className={scss.content}>
					<img className={scss.logo} src={logo} alt="logo" />
					{renderForm()}
				</div>
			</div>
		</section>
	);
};

export default RegistrationPage;
