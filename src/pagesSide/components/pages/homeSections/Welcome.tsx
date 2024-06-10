import scss from './Welcome.module.scss';
import { useRef, useState, useEffect } from 'react';
import { Button, Input } from 'antd';

interface Message {
	event: string;
	id: number;
	username: string;
	message?: string;
}

const Welcome = () => {
	const socket = useRef<WebSocket | null>(null);
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState<Message[]>([]);

	const connect = () => {
		socket.current = new WebSocket(import.meta.env.VITE_PUBLIC_API_WSS);
		socket.current.onopen = () => {
			console.log('WebSocket Connected');
			setConnected(true);
			const message = {
				event: 'connection',
				id: Date.now(),
				username
			};
			socket.current?.send(JSON.stringify(message));
		};
		socket.current.onmessage = (event) => {
			console.log('WebSocket message received');
			const message: Message = JSON.parse(event.data);
			setMessages((prev) => [message, ...prev]);
		};
		socket.current.onclose = () => {
			console.log('WebSocket closed');
			setConnected(false);
		};
		socket.current.onerror = () => {
			console.log('WebSocket error');
			setConnected(false);
		};
	};

	const sendMessage = () => {
		if (socket.current && connected) {
			const messageData = {
				event: 'message',
				id: Date.now(),
				username,
				message
			};
			socket.current.send(JSON.stringify(messageData));
			setMessage('');
		}
	};

	useEffect(() => {
		return () => {
			if (socket.current) {
				socket.current.close();
			}
		};
	}, []);

	if (!connected) {
		return (
			<div
				style={{
					display: 'flex',
					// justifyContent: 'center',
					alignItems: 'center',
					padding: '15px',
					background: '#83858b'
				}}
			>
				<Input
					style={{
						width: '300px'
					}}
					placeholder="Your login username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Button type="primary" onClick={connect}>
					Login
				</Button>
			</div>
		);
	}

	return (
		<section className={scss.Welcome}>
			<div className={scss.container}>
				<div className={scss.content}>
					<h1>Welcome Developer!</h1>
					<div
						style={{
							display: 'flex',
							// justifyContent: 'center',
							alignItems: 'center',
							padding: '15px',
							background: '#83858b'
						}}
					>
						<Input
							style={{
								width: '300px'
							}}
							placeholder="Your message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<Button type="primary" onClick={sendMessage}>
							Send
						</Button>
					</div>
					<div>
						{messages.map((msg, index) => (
							<p key={index}>
								{msg.event === 'connection' ? (
									<div>Пользователь {msg.username} подключился</div>
								) : (
									<div
										style={{
											display: 'flex',
											// justifyContent: 'center',
											alignItems: 'center',
											padding: '7px',
											margin: '10px 0',
											borderRadius: '5px',
											background: '#9c68ff',
											color: '#fff'
										}}
									>
										{msg.username}: {msg.message}
									</div>
								)}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
