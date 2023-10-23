import { PropagateLoader } from "react-spinners";

function Loader(): JSX.Element {
  return (
    <div className="position-absolute">
      <PropagateLoader color="#ffffff" speedMultiplier={0.5} />
    </div>
  );
}

export default Loader;
