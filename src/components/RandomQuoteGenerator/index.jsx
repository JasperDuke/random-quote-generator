import React, { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import toast, { Toaster } from "react-hot-toast";

const RandomQuoteGenerator = () => {
  const colors = [
    "#FAD1AF", // Peach
    "#F3EAC2", // Vanilla
    "#E4D9F6", // Pale Lavender
    "#C9F4DE", // Mint Green
    "#FDD6E0", // Blush Pink
    "#D6E8FA", // Soft Blue
    "#F7F3B6", // Powder Yellow
    "#E9B8CE", // Dusty Rose
    "#D7E3D3", // Light Sage
    "#F6C8B5", // Muted Coral
  ];

  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleChangeColor = () => {
    const nextColor =
      colors[(colors.indexOf(currentColor) + 1) % colors.length];
    setCurrentColor(nextColor);
  };

  const getQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      handleChangeColor();
      setAuthor(data.author);
      setQuote(data.quote);
    } catch (e) {
      console.error(e);
      toast.error("Please try again");
    }
  };

  useEffect(() => getQuote(), []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: currentColor,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Toaster />
      <QuoteCard
        author={author}
        quote={quote}
        getQuote={getQuote}
        currentColor={currentColor}
      />
      <div className="scroll-box">
        <span className="name">Jasper Duke</span>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
