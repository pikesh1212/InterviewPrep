import { useState} from "react";
const ProgressBar = ({ progress }) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${progress - 100}%)`,
        }}
      >
        {progress}%
      </div>
    </div>
  );
};
export default function Progress() {
  const [progress, setProgress] = useState(0);
  const increase = () => {
    setProgress((prev) => {
      if (prev <= 90) {
        return prev + 10;
      } else {
        return prev;
      }
    });
  };
  const decrease = () => {
    setProgress((prev) => {
      if (prev >= 20) {
        return prev - 10;
      } else {
        return prev;
      }
    });
  };
  return (
    <div className="flex flex-col w-2/4">
    <h1 className="text-3xl font-bold">Progress Bar {progress}%</h1>
    <div >
      <ProgressBar progress={progress} />
      <br />
      <button className="mx-2" onClick={increase}>Increase</button>
      <button className="mx-2" onClick={decrease}>Decrease</button>
    </div>
  </div>
  );
}
