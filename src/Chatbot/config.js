import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./components/Avatar";
import StartBtn from "./components/StartBtn";
import data from "./data";
import DipslayImage from "./components/DipslayImage";
import UserAvatar from "./components/UserAvatar";

const botName = "CGS Gennie";
const userName = "Jane";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      <>
        Hi {userName} – I’m Gennie, how can I assist you today?
        <br />
        <br />
        Click here to know more about me and how I can help you?​​
      </>,
      {
        widget: "startBtn",
      }
    ),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  state: {
    checker: null,
    data,
    userData: {
      name: "",
      age: "",
      category: "",
      product: {
        name: "",
        link: "",
        imageUrl: "",
      },
    },
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "image",
      widgetFunc: (props) => <DipslayImage {...props} />,
    },
  ],
};

export default config;
