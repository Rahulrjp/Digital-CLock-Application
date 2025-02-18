import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-red-500">Oops! Something went wrong.</h1>
      <p className="text-lg mt-2">{error.statusText || error.message}</p>
      <a href="/" className="mt-4 bg-blue-500 px-4 py-2 rounded text-white">Go Home</a>
    </div>
  );
}
