import { Avatar, Tooltip, Flex } from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  console.log(messages, "messages");

  return (
    <ScrollableFeed>
      {messages &&
        messages?.map((m, i) => (
          <Flex
            justify={user._id === m.sender._id ? "start" : "end"}
            key={m._id}
            align="center"
          >
            <Tooltip
              label={m.sender.name}
              hasArrow
            >
              <Avatar
                mt="7px"
                mr={1}
                size="sm"
                cursor="pointer"
                name={m.sender.name}
                src={m.sender.pic}
              />
            </Tooltip>
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </Flex>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
