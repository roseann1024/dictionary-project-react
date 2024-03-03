import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showKeyword(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showKeyword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <h1>
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/117/226/original/dictionary.png?1709338603"
              alt="book-dictionary"
              width="75"
            />{" "}
            ENGLISH DICTIONARY
          </h1>
          <section>
            <h2 className="header-title">What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeyword}
                autoFocus="on"
                defaultValue={props.defaultKeyword}
                className="input-search"
                placeholder="Search any word..."
              />
              <input type="submit" value="🔍Search" className="input-submit" />

              <div className="input-label mt-2">
                ie: sunset, sunrise, wine, book, beach.....
              </div>
            </form>
          </section>

          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
