import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-10">
      <Link to="/" className="px-2 lg:px-0 font-bold">
        Tech Blog
      </Link>
      <button className="block md:hidden px-2 text-3xl">
        <i className="bx bx-menu"></i>
      </button>
      <ul className="hidden md:inline-flex items-center">
        <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-green-800 font-semibold hover:text-green-600"
          >
            {" "}
            Home{" "}
          </Link>
        </li>

        <li className="px-2 md:px-4 hidden md:block">
          <Link
            to={"/addpost"}
            className="text-green-800 font-semibold hover:text-green-600"
          >
            Add article
          </Link>
        </li>
      </ul>
    </header>
  );
};
