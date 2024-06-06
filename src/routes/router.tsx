import { createBrowserRouter } from 'react-router-dom';
import LayoutSide from '@/src/pagesSide/components/layout/LayoutSide.tsx';
import ErrorPage from '@/src/errorPage/ErrorPage.tsx';
import HomePage from '@/src/pagesSide/components/pages/HomePage.tsx';
import ChatsPage from '@/src/pagesSide/components/pages/ChatsPage.tsx';
import NotificationPage from '@/src/pagesSide/components/pages/NotificationPage.tsx';
import SettingsPage from '@/src/pagesSide/components/pages/SettingsPage.tsx';
import MyProfilePage from '@/src/pagesSide/components/pages/MyProfilePage.tsx';
import MyPublicPage from '@/src/pagesSide/components/pages/MyPublicPage.tsx';
import LayoutAuth from '@/src/pagesAuth/components/layout/LayoutAuth.tsx';
import LoginPage from '@/src/pagesAuth/components/pages/LoginPage.tsx';
import RegistrationPage from '@/src/pagesAuth/components/pages/RegistrationPage.tsx';
import ForgotPage from '@/src/pagesAuth/components/pages/ForgotPage.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutSide />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/chats',
				element: <ChatsPage />
			},
			{
				path: '/notifications',
				element: <NotificationPage />
			},
			{
				path: '/settings',
				element: <SettingsPage />
			},
			{
				path: '/my-profile',
				element: <MyProfilePage />
			},
			{
				path: '/my-public',
				element: <MyPublicPage />
			}
		]
	},
	{
		path: '/auth',
		element: <LayoutAuth />,
		children: [
			{
				path: '/auth/login',
				element: <LoginPage />
			},
			{
				path: '/auth/registration',
				element: <RegistrationPage />
			},
			{
				path: '/auth/forgot',
				element: <ForgotPage />
			}
		]
	}
]);
