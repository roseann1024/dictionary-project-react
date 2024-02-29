import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function showKeyword(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Looking for ${keyword} definition.......`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showKeyword);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter any word"
          onChange={handleKeyword}
        />
      </form>
    </div>
  );
}
