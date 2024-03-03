import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="computer" />
      <footer className="text-center mt-3">
        This website was coded by{" "}
        <a
          href="https://github.com/roseann1024"
          target="_blank "
          rel="noreferrer"
        >
          Rose Ann V. Austria
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/roseann1024/dictionary-project-react"
          target="_blank "
          rel="noreferrer"
        >
          Git-hub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-app-react-rva.netlify.app/"
          target="_blank "
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
