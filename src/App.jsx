import { useState } from "react";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <button onClick={() => setActiveTab("profile")}>Профіль</button>
        <button onClick={() => setActiveTab("friends")}>Друзі</button>
        <button onClick={() => setActiveTab("transactions")}>Транзакції</button>
      </nav>

      {activeTab === "profile" && (
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      )}

      {activeTab === "friends" && <FriendList friends={friends} />}

      {activeTab === "transactions" && <TransactionHistory items={transactions} />}
    </div>
  );
};

export default App;