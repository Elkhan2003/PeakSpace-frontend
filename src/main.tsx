import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReduxProvider } from './providers/ReduxProvider.tsx';
import App from './App.tsx';
import '@mantine/core/styles.css';
import './index.scss';
import AntdProvider from '@/src/providers/AntdProvider.tsx';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AntdProvider>
			<MantineProvider>
				<ReduxProvider>
					<App />
				</ReduxProvider>
			</MantineProvider>
		</AntdProvider>
	</React.StrictMode>
);
