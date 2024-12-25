import React from "react";

const QuoteCard = ({ getQuote, quote, author, currentColor }) => {
  const cardStyle = {
    width: "500px",
    margin: "10px",
    padding: "35px",
    backgroundColor: currentColor || "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.05)",
    boxSize: "border-box",
    border: "1px solid black",
    position: "relative",
  };

  return (
    <div style={cardStyle} id="quote-box">
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          padding: "10px",
          color: "white",
          backgroundColor: "#44856b",
          borderRadius: "0 8px 0 8px",
        }}
      >
        Quote of the day
      </div>
      <p
        id="text"
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
          fontStyle: "italic",
        }}
      >
        " {quote} "
      </p>
      <p
        id="author"
        style={{
          fontSize: "16px",
          textAlign: "right",
          padding: "10px 0px",
        }}
      >
        ~ {author}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src="twitter.png"
              width={"40px"}
              height={"30px"}
              alt="twitter logo"
            />
          </a>
          <a
            id="upload-quote"
            href="https://www.tumblr.com/dashboard"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src="tumblr.png"
              width={"25px"}
              height={"25px"}
              alt="twitter logo"
            />
          </a>
        </div>
        <button
          id="new-quote"
          onClick={getQuote}
          style={{
            cursor: "pointer",
            border: "1px solid black",
            backgroundColor: currentColor,
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
