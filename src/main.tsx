import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReduxProvider } from './providers/ReduxProvider.tsx';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ReduxProvider>
			<App />
		</ReduxProvider>
	</React.StrictMode>
);
