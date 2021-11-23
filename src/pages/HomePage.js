import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Footer from "../components/Footer";

const HomePage = () => {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");

  const saveFile = () => {
    if (!fileName) {
      alert("Please set the file name.");
    } else {
      const file = new Blob([text], { type: "text/plain" });
      const link = URL.createObjectURL(file);
      let a = document.createElement("a");
      a.setAttribute("href", link);
      a.setAttribute("download", fileName + ".txt");
      a.click();
      URL.revokeObjectURL(link);
    }
  };

  return (
    <>
      <Navbar />
      <Input setText={setText} />
      <Footer setFileName={setFileName} saveFile={saveFile} />
    </>
  );
};

export default HomePage;
