import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-6xl font-extrabold">Oops!</h1>
      <p className="text-2xl font-medium mb-6">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-[#8e8e8e] text-3xl font-semibold">
          {error.statusText || error.message}
        </i>
      </p>
      <a href="/" className="text-xl text-[#4285F4] font-semibold hover:underline mt-3">Go back</a>
    </div>
  );
};
