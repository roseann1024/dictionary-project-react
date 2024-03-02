import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function showKeyword(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showKeyword);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="header-title">What word do you want to look up?</div>
      <header>
        <div className="row">
          <div className="col-2">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/117/226/original/dictionary.png?1709338603"
              alt="dictionary-icon"
              width="80"
              className="image-reading"
            />
          </div>
          <div className="col-10">
            <form onSubmit={search}>
              <input
                type="search"
                placeholder="i.e : sunshine, sunset, wine, book....."
                onChange={handleKeyword}
                autoFocus="on"
              />
            </form>
          </div>
        </div>
      </header>
      <Results results={results} />
      <footer className="text-center">
        This website was created by{" "}
        <a
          href="https://github.com/roseann1024"
          target="_blank "
          rel="noreferrer"
        >
          Rose Ann Austria
        </a>{" "}
        and open-sourced in{" "}
        <a
          href="https://github.com/roseann1024/dictionary-project-react"
          target="_blank "
          rel="noreferrer"
        >
          Git-hub
        </a>
      </footer>
    </div>
  );
}
