import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" fixed flex flex-col top-24 left-0 w-14 hover:w-64 md:w-64 bg-white-900 dark:bg-white-900 h-full transition-all duration-300 border-none z-10 sidebar ">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="mb-4">
              <Link
                to="/profile"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                  <img
                    className="w-11 rounded-full"
                    src="https://i.imgur.com/e8nzIKr.png"
                    alt=""
                  />
                <span className="ml-5 text-md tracking-wide truncate">
                  Hollis
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/friends"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <span className="ml-6 text-md tracking-wide truncate">
                  Friends
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/photos"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Photos
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/memories"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Memories
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/savedposts"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Saved Posts
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/groups"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Groups
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/videos"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Videos
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/marketplace"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Marketplace
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/Events"
                className="relative flex flex-row items-center h-12 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:text-blue-800 pr-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>

                <span className="ml-6 text-md tracking-wide truncate">
                  Events
                </span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
