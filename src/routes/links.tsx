import {
	IconHome,
	IconMessageCircle,
	IconBell,
	IconSettings,
	IconUser,
	IconUsersGroup
} from '@tabler/icons-react';

export const links = {
	side: [
		{
			name: 'Главная',
			href: '/',
			icon: <IconHome stroke={2} />
		},
		{
			name: 'Чаты',
			href: '/chats',
			icon: <IconMessageCircle stroke={2} />
		},
		{
			name: 'Уведомления',
			href: '/notifications',
			icon: <IconBell stroke={2} />
		},
		{
			name: 'Настройки',
			href: '/settings',
			icon: <IconSettings stroke={2} />
		},
		{
			name: 'Мой профиль',
			href: '/my-profile',
			icon: <IconUser stroke={2} />
		},
		{
			name: 'Мои паблики',
			href: '/my-public',
			icon: <IconUsersGroup stroke={2} />
		}
	],
	auth: {
		login: {
			name: 'Sign In',
			href: '/login',
			icon: ''
		},
		registration: {
			name: 'Sign Up',
			href: '/registration',
			icon: ''
		}
	}
};
