import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import TextBody from "./components/TextBody";

function App() {
  const [current, setCurrent] = useState(0);
  const [showText, setShowText] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (current === 15) {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 1600);

      return () => clearTimeout(timeout); // cleanup
    }
  }, [current]);
  return (
    <>
      <div className="w-full md:h-screen 2xl:h-screen h-200 overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center pt-5 md:pt-5 2xl:pt-5">
        <Navbar setCurrent={setCurrent} menu={menu} setMenu={setMenu} />
        {current == 15 && showText ? (
          <TextBody menu={menu} />
        ) : (
          <Gallery menu={menu} current={current} setCurrent={setCurrent} />
        )}
      </div>
    </>
  );
}

export default App;
