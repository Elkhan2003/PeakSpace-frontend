import scss from './ConfirmEmailPage.module.scss';
import logo from '@/src/assets/logo.png';
import { GetProp, Input } from 'antd';
import { OTPProps } from 'antd/es/input/OTP';

const ConfirmEmailPage = () => {
	const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
		console.log('onChange:', text);
	};

	const sharedProps: OTPProps = {
		onChange
	};

	return (
		<>
			<section className={scss.ConfirmEmailPage}>
				<div className={scss.container}>
					<div className={scss.content}>
						<img className={scss.logo} src={logo} alt="logo" />
						<Input.OTP
							formatter={(str) => str.toUpperCase()}
							{...sharedProps}
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default ConfirmEmailPage;
