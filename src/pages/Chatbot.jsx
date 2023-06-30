import React from "react";

const Chatbot = ({ user, message }) => {
  return (
    <div className="row ">
      {!user ? <div className="mt-3 d-flex justify-content-start bg-info">🤖{message}</div> : <div className="mt-3 d-flex justify-content-end bg-dark-subtle">🥰{message}</div>}
    </div>
  );
};

export default Chatbot;
