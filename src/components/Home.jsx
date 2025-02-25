import { useNavigate } from "react-router";
import Counter from "./Counter";
import Optimization from "./Optimization";

const Home = () => {
  const navigate = useNavigate();
  const handleCounterClick = () => {
    navigate("/counter");
  };
  return (
      <div className="home">
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        <hr />
        <ul>
          <li onClick={handleCounterClick} style={{ cursor: "pointer" }}>
            1. Counter using redux
          </li>
        </ul>
        <hr />
        <Optimization />
      </div>
  );
};
export default Home;
