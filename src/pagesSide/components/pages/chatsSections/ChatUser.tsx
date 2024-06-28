import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import scss from './ChatUser.module.scss';
import { useParams } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';
import { useGetChatUserQuery } from '@/src/redux/api/chat';
import { useGetMeQuery } from '@/src/redux/api/auth';
import InputEmoji from 'react-input-emoji';
import { IconPhone } from '@tabler/icons-react';

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
	const chatEndRef = useRef<HTMLDivElement>(null); // ref для конца чата

	const filteredUserName = useMemo(
		() => userChatData.find((item) => item.userName === userName),
		[userChatData, userName]
	);

	const setChatRoom = useCallback(
		(userData: any, userName: any, userChatData: any) => {
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

	useEffect(() => {
		if (userData && userName && userChatData.length) {
			setChatRoom(userData, userName, userChatData);
		}
	}, [userData, userName, userChatData, setChatRoom]);

	const initWebSocket = useCallback(() => {
		if (!room) return;

		socket.current = new WebSocket(import.meta.env.VITE_PUBLIC_API_WSS);

		socket.current.onopen = () => {
			console.log('WebSocket connection open');
			sendWebSocketMessage({ event: 'getChatMessage', room });
		};

		socket.current.onmessage = (event: MessageEvent) => {
			console.log('Получаю сообщения комнаты...');
			const { messages }: { messages: Message[] } = JSON.parse(event.data);
			setMessages(messages);
		};

		socket.current.onclose = () => {
			console.log('WebSocket closed');
		};

		socket.current.onerror = () => {
			console.log('WebSocket error');
		};

		return () => {
			socket.current?.close();
		};
	}, [room]);

	useEffect(() => {
		initWebSocket();
	}, [initWebSocket]);

	const sendWebSocketMessage = (message: Message) => {
		socket.current?.send(JSON.stringify(message));
	};

	const handleOnEnter = (message: string) => {
		sendWebSocketMessage({
			event: 'sendChatMessage',
			message,
			username: userData?.userName,
			room
		});
		setText('');
	};

	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className={scss.ChatUser}>
			<div className={scss.container}>
				<div className={scss.content}>
					<div className={scss.user}>
						<h3>
							{filteredUserName?.firstName} {filteredUserName?.lastName}
						</h3>
						<div className={scss.buttons}>
							<button>
								<IconPhone stroke={2} />
							</button>
							<button></button>
						</div>
					</div>
					<ScrollArea h={'80.8vh'}>
						<div className={scss.chat}>
							{messages.map((msg, index) => (
								<p
									className={
										msg.username === userData?.userName
											? scss.myMessage
											: scss.otherMessage
									}
									key={index}
								>
									{msg.message}
								</p>
							))}
							<div ref={chatEndRef} />
						</div>
					</ScrollArea>
					{/*// @ts-ignore*/}
					<InputEmoji
						value={text}
						onChange={setText}
						cleanOnEnter
						onEnter={handleOnEnter}
						placeholder="Type a message"
					/>
				</div>
			</div>
		</div>
	);
};

export default ChatUser;
