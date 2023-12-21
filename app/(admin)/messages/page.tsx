import MessagesList from "@/components/Messages/MessagesList";
import { prisma } from "@/lib/db";

const getMessages = async () => {
  const messages = await prisma.message.findMany();
  return messages;
};

const MessagesPage = async () => {
  const messages = await getMessages();
  return (
    <main className="p-4">
      <MessagesList messages={messages} />
    </main>
  );
};

export default MessagesPage;
