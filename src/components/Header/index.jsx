import logo from "@assets/images/logo.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="border-b border-s-teal-400">
      <div className="flex justify-between p-2 mx-auto">
        <div className="flex items-center header-left">
          <div>
            <img src={logo} alt="Logo medium" className="h-8" />
          </div>

          <div className="rounded-full bg-[#F9F9F9] flex items-center gap-2 p-2 ml-4">
            <CiSearch className="text-2xl text-slate-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-10 header-right">
          <div className="flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>

            <span className="pl-2">Write</span>
          </div>

          <button>
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Notifications"
            >
              <path
                d="M15 18.5a3 3 0 1 1-6 0"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
              <path
                d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                fill="currentColor"
                stroke="currentColor"
                strokeLinejoin="round"
              ></path>
            </svg> */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Notifications"
            >
              <path
                d="M15 18.5a3 3 0 1 1-6 0"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
              <path
                d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                stroke="currentColor"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>

          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <img
              src="https://miro.medium.com/v2/resize:fill:100:100/0*DTMS5nh2NwsBnGMm"
              alt="Notification"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
