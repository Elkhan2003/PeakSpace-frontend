import {
	IconAddressBook,
	IconCurrencyDollar,
	IconHome,
	IconLayoutDashboard
} from '@tabler/icons-react';

export const links = {
	side: [
		{
			name: 'Home',
			href: '/',
			icon: <IconHome stroke={2} />
		},
		{
			name: 'About',
			href: '/about',
			icon: <IconLayoutDashboard stroke={2} />
		},
		{
			name: 'Price',
			href: '/price',
			icon: <IconCurrencyDollar stroke={2} />
		},
		{
			name: 'Contacts',
			href: '/contacts',
			icon: <IconAddressBook stroke={2} />
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
