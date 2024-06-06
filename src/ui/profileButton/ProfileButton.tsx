import { FC } from 'react';
import scss from './ProfileButton.module.scss';
import { IconChevronUp } from '@tabler/icons-react';
import { Avatar } from 'antd';

interface ProfileButtonProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const ProfileButton: FC<ProfileButtonProps> = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<button
				className={scss.ProfileButton}
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen(!isOpen);
				}}
			>
				<Avatar
					size={40}
					icon={
						<img
							src="https://elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felcho911.eabc74a3.png&w=640&q=75"
							alt="avatar"
						/>
					}
				/>
				<p className={scss.name}>Elcho911</p>
				<IconChevronUp
					className={isOpen ? `${scss.arrow} ${scss.active}` : `${scss.arrow}`}
					stroke={2.5}
				/>
			</button>
		</>
	);
};
export default ProfileButton;
