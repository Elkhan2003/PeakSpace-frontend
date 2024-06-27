import { useEffect, useRef, useState } from 'react';
import scss from './ChatUser.module.scss';
import { useParams } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';
import { useGetChatUserQuery } from '@/src/redux/api/chat';
import { useGetMeQuery } from '@/src/redux/api/auth';

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

	useEffect(() => {
		if (userData && userName && userChatData.length) {
			const filteredUser = userChatData.find(
				(item) => item.userName === userName
			);
			if (filteredUser) {
				setRoom(`${filteredUser.email}+${userData.email}`);
			}
		}
	}, [userData, userName, userChatData]);

	useEffect(() => {
		if (room) {
			socket.current = new WebSocket(import.meta.env.VITE_PUBLIC_API_WSS);
			socket.current.onopen = () => {
				console.log('WebSocket connection open');
				const message = {
					event: 'getChatMessage',
					room
				};
				socket.current?.send(JSON.stringify(message));
			};
			socket.current.onmessage = (event) => {
				console.log('Получаю сообщения комнаты...');
				const message: Message = JSON.parse(event.data);
				console.log(message);
			};
			socket.current.onclose = () => {
				console.log('WebSocket closed');
			};
			socket.current.onerror = () => {
				console.log('WebSocket error');
			};
		}

		return () => {
			socket.current?.close();
		};
	}, [room]);

	return (
		<div className={scss.ChatUser}>
			<div className={scss.container}>
				<div className={scss.content}>
					<h3 className={scss.user}>{userName}</h3>
					<ScrollArea h={'82.3vh'}>
						<div className={scss.chat}>
							{Array.from({ length: 50 }).map((_, index) => (
								<p key={index}>awdawd</p>
							))}
						</div>
					</ScrollArea>
					<input type="text" />
				</div>
			</div>
		</div>
	);
};

export default ChatUser;
