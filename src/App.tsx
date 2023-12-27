import { useState } from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [url, setUrl] = useState<string>("");
  const [subTitleUrl, setSubTitleUrl] = useState<string>("");

  return (
    <div className="App">
      <input
        value={url}
        placeholder="URL"
        className="url_input"
        onChange={(e) => setUrl(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        value={subTitleUrl}
        placeholder="Subtitle URL"
        className="url_input"
        onChange={(e) => setSubTitleUrl(e.target.value)}
      />
      {url && subTitleUrl && <Player url={url} subTileURL={subTitleUrl} />}
    </div>
  );
}

export default App;
