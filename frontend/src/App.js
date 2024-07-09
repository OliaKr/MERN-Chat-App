import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/olia-krasilnikov.appspot.com/o/videos%2Fbackground.mp4?alt=media&token=796b8c82-cfaf-497e-8195-dc06ded1d519";

  const url = `https://olia-chat-app.web.app/`;
  const interval = 30000;

  function reloadWebsite() {
    axios
      .get(url)
      .then((response) => {
        console.log(
          `Reloaded at ${new Date().toISOString()}: Status Code ${
            response.status
          }`
        );
      })
      .catch((error) => {
        console.error(
          `Error reloading at ${new Date().toISOString()}:`,
          error.message
        );
      });
  }

  setInterval(reloadWebsite, interval);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/chats"
          element={<Chatpage />}
        />
      </Routes>
      <video
        autoPlay
        muted
        loop
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default App;
