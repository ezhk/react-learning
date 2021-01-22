import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import MessageField from "./MessageField";
import ChatList from "./ChatList";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <MessageField className="message-field" />
        <ChatList className="chat-list" />
      </div>
      <Footer />
    </>
  );
}
