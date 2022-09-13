import { useEffect, useState } from "react";
import Appbar from "./components/Appbar/Appbar";
import News from "./components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=35acf0f6d5d24ea5890c99906a98ec6f'
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <Appbar></Appbar>

      <h2>{articles.length}</h2>
      <br /><br />

      {
        articles.map(article =>
          <News
            article = {article}
          >
          </News>)
      }

    </div>
  );
}

export default App;
