import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <Box w="100%">
      {user && <SideDrawer />}
      <Flex
        w="100%"
        p="10px"
        direction={{ base: "column", md: "row" }}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Chatpage;
