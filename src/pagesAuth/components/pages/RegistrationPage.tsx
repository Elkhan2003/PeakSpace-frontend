import scss from './RegistrationPage.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { usePostRegistrationMutation } from '@/src/redux/api/auth';
import { Button, Input } from 'antd';
import logo from '@/src/assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

interface IFormInput {
	lastName: string;
	firstName: string;
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const InputField = ({ name, control, rules, placeholder, errors }: any) => (
	<Controller
		name={name}
		control={control}
		rules={rules}
		render={({ field }) => (
			<Input
				status={errors[name] ? 'error' : ''}
				className={scss.input}
				size="large"
				placeholder={placeholder}
				{...field}
			/>
		)}
	/>
);

const PasswordField = ({ name, control, rules, placeholder, errors }: any) => (
	<Controller
		name={name}
		control={control}
		rules={rules}
		render={({ field }) => (
			<Input.Password
				status={errors[name] ? 'error' : ''}
				className={scss.input}
				size="large"
				placeholder={placeholder}
				{...field}
			/>
		)}
	/>
);

const RegistrationForm = ({
	handleSubmit,
	control,
	errors,
	password,
	onSubmit
}: any) => (
	<form onSubmit={handleSubmit(onSubmit)}>
		<InputField
			name="lastName"
			control={control}
			rules={{ required: true, minLength: 2 }}
			placeholder="Фамилия"
			errors={errors}
		/>
		<InputField
			name="firstName"
			control={control}
			rules={{ required: true, minLength: 2 }}
			placeholder="Имя"
			errors={errors}
		/>
		<InputField
			name="userName"
			control={control}
			rules={{ required: true, minLength: 2 }}
			placeholder="Имя пользователя"
			errors={errors}
		/>
		<InputField
			name="email"
			control={control}
			rules={{ required: true, minLength: 2, pattern: /^\S+@\S+\.\S+$/i }}
			placeholder="Номер телефона или email"
			errors={errors}
		/>
		<PasswordField
			name="password"
			control={control}
			rules={{ required: true, minLength: 2 }}
			placeholder="Пароль"
			errors={errors}
		/>
		<PasswordField
			name="confirmPassword"
			control={control}
			rules={{
				required: true,
				minLength: 2,
				validate: (value: string) => value === password || 'Пароли не совпадают'
			}}
			placeholder="Повторите пароль"
			errors={errors}
		/>
		<Button type="primary" size="large" block htmlType="submit">
			Зарегистрироваться
		</Button>
	</form>
);

const RegistrationPage = () => {
	const [postRegisterMutation] = usePostRegistrationMutation();
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
		try {
			const response = await postRegisterMutation(userData);
			if (response.data?.userId) {
				localStorage.setItem('userId', JSON.stringify(response.data.userId));
				localStorage.setItem('email', JSON.stringify(userData.email));
				navigate('/auth/confirm');
			}
		} catch (e) {
			console.error('An error occurred:', e);
		}
	};

	const password = watch('password');

	return (
		<section className={scss.RegistrationPage}>
			<div className={scss.container}>
				<div className={scss.content}>
					<img className={scss.logo} src={logo} alt="logo" />
					<RegistrationForm
						handleSubmit={handleSubmit}
						control={control}
						errors={errors}
						password={password}
						onSubmit={onSubmit}
					/>
					<div className={scss.links}>
						<Link to="/auth/login" className={scss.link}>
							Уже есть аккаунт?
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegistrationPage;
