import React, { FC } from "react";
import { Message } from "./Message";

interface MessagesListProps {
  messages: Message[];
}

const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  return (
    <section className="flex flex-col items-center gap-2">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </section>
  );
};

export default MessagesList;
