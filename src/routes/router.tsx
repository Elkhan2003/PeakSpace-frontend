import { createBrowserRouter } from 'react-router-dom';
import LayoutSide from '@/src/pagesSide/components/layout/LayoutSide.tsx';
import ErrorPage from '@/src/errorPage/ErrorPage.tsx';
import HomePage from '@/src/pagesSide/components/pages/HomePage.tsx';
import AboutPage from '@/src/pagesSide/components/pages/AboutPage.tsx';
import PricePage from '@/src/pagesSide/components/pages/PricePage.tsx';
import ContactsPage from '@/src/pagesSide/components/pages/ContactsPage.tsx';
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
				path: '/about',
				element: <AboutPage />
			},
			{
				path: '/price',
				element: <PricePage />
			},
			{
				path: '/contacts',
				element: <ContactsPage />
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
