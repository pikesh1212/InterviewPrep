import Counter from "./Counter";
import Optimization from "./Optimization";

const Home = () => {
  return (
    <div className="home">
      <h1 class="text-3xl font-bold underline">Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
        var,let const
        Hoisting
        Prototype Inheritence
        closures
        Event Loop
      </p>
      <p>Phone number: </p>
      <input type="tel" pattern="\d{10}" className="phone-input" placeholder="Enter phone number" />
      <hr />
      <Counter/>
      <hr />
      <Optimization/>

    </div>
  );
};
export default Home;
