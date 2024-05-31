import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReduxProvider } from './providers/ReduxProvider.tsx';
import App from './App.tsx';
import './index.scss';
import { SessionProvider } from '@/src/providers/SessionProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ReduxProvider>
			<SessionProvider>
				<App />
			</SessionProvider>
		</ReduxProvider>
	</React.StrictMode>
);
