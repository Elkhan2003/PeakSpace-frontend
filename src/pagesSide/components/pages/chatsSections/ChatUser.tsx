import { useEffect, useRef, useState, useCallback } from 'react';
import scss from './ChatUser.module.scss';
import { useParams } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';
import { useGetChatUserQuery } from '@/src/redux/api/chat';
import { useGetMeQuery } from '@/src/redux/api/auth';
import InputEmoji from 'react-input-emoji';

interface Message {
	event: string;
	message?: string;
	username?: string;
	room: string;
}

const ChatUser = () => {
	const { data: userData } = useGetMeQuery();
	const { data: userChatData = [] } = useGetChatUserQuery();
	const { userName } = useParams<{ userName: string }>();
	const socket = useRef<WebSocket | null>(null);
	const [room, setRoom] = useState('');
	const [messages, setMessages] = useState<Message[]>([]);
	const [text, setText] = useState<string>('');

	useEffect(() => {
		if (userData && userName && userChatData.length) {
			setChatRoom(userData, userName, userChatData);
		}
	}, [userData, userName, userChatData]);

	useEffect(() => {
		if (room) {
			initWebSocket();
		}

		return () => {
			socket.current?.close();
		};
	}, [room]);

	const setChatRoom = useCallback(
		(userData: any, userName: string | undefined, userChatData: any[]) => {
			const filteredUser = userChatData.find(
				(item: any) => item.userName === userName
			);
			if (filteredUser) {
				const emails = [filteredUser.email, userData.email].sort();
				setRoom(`${emails[0]}+${emails[1]}`);
			}
		},
		[]
	);

	const initWebSocket = useCallback(() => {
		socket.current = new WebSocket(import.meta.env.VITE_PUBLIC_API_WSS);
		socket.current.onopen = handleWebSocketOpen;
		socket.current.onmessage = handleWebSocketMessage;
		socket.current.onclose = handleWebSocketClose;
		socket.current.onerror = handleWebSocketError;
	}, [room]);

	const handleWebSocketOpen = () => {
		console.log('WebSocket connection open');
		sendWebSocketMessage({ event: 'getChatMessage', room });
	};

	const handleWebSocketMessage = (event: MessageEvent) => {
		console.log('Получаю сообщения комнаты...');
		const message: { event: string; messages: Message[] } = JSON.parse(
			event.data
		);
		setMessages(message.messages);
	};

	const handleWebSocketClose = () => {
		console.log('WebSocket closed');
	};

	const handleWebSocketError = () => {
		console.log('WebSocket error');
	};

	const sendWebSocketMessage = (message: Message) => {
		if (socket.current) {
			socket.current.send(JSON.stringify(message));
		}
	};

	const handleOnEnter = (message: string) => {
		const chatMessage = {
			event: 'sendChatMessage',
			message,
			username: userData?.userName,
			room
		};
		sendWebSocketMessage(chatMessage);
		setText('');
	};

	return (
		<div className={scss.ChatUser}>
			<div className={scss.container}>
				<div className={scss.content}>
					<h3 className={scss.user}>{userName}</h3>
					<ScrollArea h={'80.8vh'}>
						<div className={scss.chat}>
							{messages.map((msg, index) => (
								<p key={index}>{msg.message}</p>
							))}
						</div>
					</ScrollArea>
					{/*// @ts-ignore*/}
					<InputEmoji
						value={text}
						onChange={setText}
						cleanOnEnter={true}
						onEnter={handleOnEnter}
						placeholder="Type a message"
					/>
				</div>
			</div>
		</div>
	);
};

export default ChatUser;
