import React, { useEffect, useState } from "react";
import Chatbot from "./Chatbot";


const Reservation = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState(0);
  const [off, setOff] = useState(false);
 
  
  const [messages, setMessages] = useState([
    {
      message: "Hey can i have your Name",
    },
  ]);
  const [text, setText] = useState("");
  const handleSubmit = () => {
    let List = [
      ...messages,
      {
        message: text,
        user: true,
      },
    ];
    if (List.length === 2) {
      setName(text);
      List = [
        ...List,
        {
          message: `Hey ${text}, Pls tell me the date u want to reserve`
        },
      ];
    }
    if (List.length == 4) {
      setDate(text);
      List = [
        ...List,
        {
          message: `${text}, Pls tell me the time`
        },
      ];
    }

    if (List.length == 6) {
      setTime(text);
      List = [
        ...List,
        {
          message: `Can i know the number of people joining you?`,
        },
      ];
    }
    if (List.length == 8) {
      setPax(text);

      List = [
        ...List,
        {
          message: `Thank you so much for the information! Do you want to confirm reservation? `,
        },
      ];
    }
    if (List.length == 10) {
      List = [
        ...List,
        {
          message: `A table has been reserved under the name ${name} for ${pax} people on ${date} at ${time} `,
        },
      ];
      setOff(true);
    }
    setMessages(List);
    setText("");
  };


  return (
    <div className="container-fluid">
      <div className="row mt-5 mx-5 gx-5">
        <div className="col-6">
          <h1 className="reservation" style={{ "margin-top": "150px" }}>
            Make a Reservation
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            semper eget duis at tellus at urna. At elementum eu facilisis sed
            odio morbi quis commodo. Lorem mollis aliquam ut porttitor leo a
            diam. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Duis ultricies lacus sed turpis tincidunt id.
          </p>
          <div
            className="row mt-5"
            style={{ height: "500px", border: " 3px solid black" }}
          >
            <div className="col">
              {messages.map((item) => {
                return <Chatbot key={item} {...item} />;
              })}
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter details"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: "500px" }}
              className="box"
            />
          </div>

          {<div className="row d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
              style={{ width: "200px" }}
              disabled={off}
            >
              Submit
            </button>
          </div>}
        </div>
        <div className="col-6">
          <img
            src="https://cdn.pixabay.com/photo/2015/09/06/00/28/sushi-926628_1280.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
