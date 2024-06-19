import { useForm, SubmitHandler } from 'react-hook-form';
import { usePostRegistrationMutation } from '@/src/redux/api/auth';
import { useState } from 'react';

interface IFormInput {
	login: string;
	password: string;
	userName: string;
	photo: string;
}

const RegistrationPage = () => {
	const [postRegisterMutation] = usePostRegistrationMutation();
	const { register, handleSubmit } = useForm<IFormInput>();
	const [attempt, setAttempt] = useState(0);
	const maxAttempts = 3;
	const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
		if (attempt >= maxAttempts) {
			console.error('Maximum attempts reached');
			return;
		}

		try {
			const response = await postRegisterMutation(userData);
			if (response.data?.accessToken) {
				localStorage.setItem(
					'accessToken',
					JSON.stringify(response.data.accessToken)
				);
				window.location.reload();
			} else {
				setAttempt(attempt + 1);
				onSubmit(userData);
			}
		} catch (e) {
			console.error('An error occurred:', e);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input placeholder="login" {...register('login', { required: true })} />
			<input
				placeholder="password"
				type="password"
				{...register('password', { required: true })}
			/>
			<input
				placeholder="userName"
				{...register('userName', { required: true })}
			/>
			<input placeholder="photo" {...register('photo', { required: true })} />
			<button
				type="submit"
				style={{
					background: '#fff',
					padding: 10
				}}
			>
				Register
			</button>
		</form>
	);
};

export default RegistrationPage;
