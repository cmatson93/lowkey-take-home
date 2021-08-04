import { useState } from "react";

import SideNav from "./components/SideNav";
import Text from "./components/Text";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Browse");

  const pages = [
    { text: "Browse", icon: "discovery" },
    { text: "Recordings", icon: "video" },
    { text: "New Message", icon: "edit" },
  ];

  return (
    <div className="App">
      <SideNav
        currentPage={currentPage}
        onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
          setCurrentPage(e.currentTarget.value);
        }}
        pages={pages}
      />
      <main>
        {pages.map((page) => (
          <Text
            key={page.text}
            text={page.text}
            visible={currentPage === page.text}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
