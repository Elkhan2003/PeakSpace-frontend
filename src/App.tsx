import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutSide from './pagesSide/components/layout/LayoutSide.tsx';
import ErrorPage from './errorPage/ErrorPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutSide />,
		errorElement: <ErrorPage />
	}
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
