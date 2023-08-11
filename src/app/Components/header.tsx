import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
        <div className="w-0 flex-1 flex">
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={toggleMenu}
            >
              &#127760;
            </button>
            {showMenu && (
              <div
                id="dropdown"
                className="w-auto z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <div className="flex flex-col">
                      <Link href="/en" locale="en">
                        <button className=" text-white font-semibold py-2 px-4 ">
                          EN
                        </button>
                      </Link>
                      <Link href="/fr" locale="fr">
                        <button className=" text-white font-semibold py-2 px-4 ">
                          FR
                        </button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
