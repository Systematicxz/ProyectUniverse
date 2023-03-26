import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import db from "./db/db.json";



const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  };
  const [quote, setQuote] = useState(getRandomItem(db));
  const [bgImage, setBgImage] = useState(getRandomItem(images)) 

  const handleNewQuote = () => {
   setQuote(getRandomItem(db))
   setBgImage(getRandomItem(images))
  }

  return (
    <div className={` App ${bgImage}`}>
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />

      {/* <img src="/espacio/bg1.jpg" alt="" /> */}



    </div>
  );
}

export default App;
