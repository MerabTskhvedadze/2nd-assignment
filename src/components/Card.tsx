import { Link } from "react-router-dom";
import { User } from "./User";

type CardPropTypes = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export function Card({ id, title, userId, body }: CardPropTypes) {
  return (
    <article className="  flex flex-col justify-between p-6 bg-gray-800  rounded-lg border border-gray-400 shadow-md ">
      <div className="flex justify-between items-center mb-5 text-gray-900">
        <span className="bg-indigo-300 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          Article
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {body.slice(0, 100) + "..."}
      </p>
      <div className="flex justify-between items-center">
        <User userId={userId} />
        <Link
          to={`/post/${id}`}
          className="inline-flex items-center font-medium text-indigo-300 dark:text-primary-500 hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
