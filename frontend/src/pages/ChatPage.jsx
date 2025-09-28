import AnimatedBorder from "../components/AnimatedBorder";
import { useChatStore } from "../store/useChatStore";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl">
        <AnimatedBorder>
          <div className="w-full flex h-full min-h-[650px]">
            <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col">
              <ProfileHeader />
              <ActiveTabSwitch />
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {activeTab === "chats" ? <ChatsList /> : <ContactList />}
              </div>
            </div>
            <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm">
              {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
            </div>
          </div>
        </AnimatedBorder>
      </div>
    </div>
  );
}

export default ChatPage;
