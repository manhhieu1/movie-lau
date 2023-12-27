import ReactPlayer from "react-player";
import React, { useState } from "react";

interface Props {
  url: string;
  subTileURL: string;
}

const Player = (props: Props) => {
  const { url, subTileURL } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <ReactPlayer
        style={{ background: "black" }}
        url={url}
        controls={true}
        pip={true}
        config={{
          file: {
            attributes: {
              crossOrigin: "anonymous",
            },
            tracks: [
              {
                kind: "subtitles",
                src: subTileURL,
                srcLang: "en",
                default: false,
                label: "English",
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Player;
