import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics text-center">
      <div className="phonetics-text"> {props.phonetics.text}</div>

      <ReactAudioPlayer
        src={props.phonetics.audio}
        autoPlay={false}
        controls
        className="phonetic-audio"
      />
    </div>
  );
}
