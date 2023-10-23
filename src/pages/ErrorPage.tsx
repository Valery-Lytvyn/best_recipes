import { useRouteError } from "react-router-dom";
import { RouteError } from "../types";

function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-5 p-5 text-center">
      <h1>Oops, something went wrong!</h1>
      <h2>{error?.statusText || error?.message}</h2>
      <p>
        We are currently experiencing some technical difficulties. Please try
        again later.
      </p>
    </div>
  );
}

export default ErrorPage;
