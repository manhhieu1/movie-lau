import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [url, setUrl] = useState<string>("");
  const [subTitleUrl, setSubTitleUrl] = useState<string>("");
  const link = useMemo(() => {
    const hef = window.location.origin;
    return hef + "?url=" + url + "&subtitle=" + subTitleUrl;
  }, [url, subTitleUrl]);

  const params = new URL(window.location.href).searchParams;

  useEffect(() => {
    setUrl(params.get("url") || "");
    setSubTitleUrl(params.get("subtitle") || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.get("url"), params.get("subtitle")]);
  return (
    <div className="App">
      {params.get("url") ? null : (
        <>
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
        </>
      )}
      <div>
        {url && subTitleUrl && !params.get("url") && (
          <button onClick={() => navigator.clipboard.writeText(link)}>
            Copy link
          </button>
        )}
      </div>
      {url && subTitleUrl && <Player url={url} subTileURL={subTitleUrl} />}
    </div>
  );
}

export default App;
