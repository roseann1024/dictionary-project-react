import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics text-center">
      <div className="phonetics-text"> {props.phonetics.text}</div>

      <ReactAudioPlayer
        src={props.phonetics.audio}
        autoPlay={false}
        controls
        className="phonetics-audio"
      />
    </div>
  );
}
