import "./styles.css";
import { useState } from "react";

var name = ["JavaScript", "Fiction", "Finance"];
var bookdictionary = {
  JavaScript: [
    {
      Title: "Eloquent JavaScript",
      Rating: "3.5/5"
    },
    {
      Title: "You Don't Know JS",
      Rating: " 5/5"
    },
    {
      Title: "JavaScript for Kids: A Playful Introduction to Programming",
      Rating: "3.5/5"
    }
  ],
  Fiction: [
    {
      Title: "Shiva Trilogy",
      Rating: "5/5"
    },
    {
      Title: "Harry Potter and the Sorcerer's Stone",
      Rating: " 2/5"
    },
    {
      Title: "Ramayan",
      Rating: " 5/5"
    }
  ],
  Finance: [
    {
      Title: "Rich Dad Poor Dad",
      Rating: "5/5"
    },
    {
      Title: "Loonshots",
      Rating: " 2/5"
    },
    {
      Title: "Four Quadrants",
      Rating: "5/5"
    }
  ]
};

export default function App() {
  var [bookselected, setbook] = useState("");
  function nameBookHandler(name) {
    bookselected = name;
    setbook(name);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <span>Checkout my favorite books. Select a genre to get started</span>
      <div id="outer">
        <div className="inner">
          {name.map((name) => {
            console.log(name);
            return (
              <button className="msgBtn" onClick={() => nameBookHandler(name)}>
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <hr />
      {bookselected in bookdictionary ? (
        <div className="suggestions-box">
          {bookdictionary[bookselected].map((book) => {
            return (
              <div className="output-data">
                <h3>
                  <span>Title: </span>
                  {book.Title}
                </h3>
                <p>
                  <span>Ratings: </span> {book.Rating}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
