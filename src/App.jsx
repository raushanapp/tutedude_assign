import { ReferredFriend } from "./Components/FriendRefer/ReferredFriend";
import { Navbar } from "./Components/Navbar/Navbar";
import { Referal } from "./Components/ReferEarn/Referal";
import{Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Referal />} />
        <Route path="/refer-friend" element={<ReferredFriend />} />
      </Routes>
    </>
  );
}

export default App;
