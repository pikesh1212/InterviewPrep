import { useNavigate } from "react-router";
import Counter from "./Counter";
import Optimization from "./Optimization";

const Home = () => {
  const articles = [{
    id: 1,
    title: "Counter using redux",
    contentRoute: "counter"
  },
  {
    id: 2,
    title: "Progress Bar",
    contentRoute: "progressbar"
  }
]
  const navigate = useNavigate();
  return (
      <div className="home">
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        <hr />
        <h2>Topics</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h3 style={{ cursor: "pointer" }} onClick={() => navigate(`/${article.contentRoute}`)} >{article.title}</h3>
            </li>
          ))}
        </ul>
      </div>
  );
};
export default Home;
