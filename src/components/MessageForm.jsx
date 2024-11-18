import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";

const MessageForm = () => {
  const { url } = useContext(Context);
  console.log(url);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          // "http://localhost:4000/api/v1/message/send",
          `${url}/api/v1/message/send`,
          { firstName, lastName, phone, email, message },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="p-4 m-4">
      <h2 className="text-2xl font-bold text-center py-2">Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div className="flex space-x-4 py-4">
          <input
            className="border-2 border-black rounded-sm w-full"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="border-2 border-black rounded-sm w-full"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="flex space-x-4">
          <input
            className="border-2 border-black rounded-sm w-full"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border-2 border-black rounded-sm w-full"
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <textarea
          className="border-2 border-black rounded-sm w-full mt-8"
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-violet-500 p-2 px-8 m-4 text-white rounded-md shadow-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
