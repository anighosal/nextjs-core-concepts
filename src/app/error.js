"use client";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h2 className="text-center text-4xl text-red-500">
        Something went wrong
      </h2>
      <h2 className="text-center text-4xl text-red-500">{error.message}</h2>
      <button onClick={() => reset()}>try again</button>
    </div>
  );
};

export default ErrorPage;
