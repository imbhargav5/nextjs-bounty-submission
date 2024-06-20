export function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-slate-100 dark:bg-slate-800">
      <div className="container px-60 py-24 mx-auto my-16 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 ml-96 flex-shrink-0 md:mx-0 text-center md:text-left">
          <a className="ml-8 flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
            <img
              src="./logos/acme-logo-dark.png"
              width={40}
              height={40}
              alt="logo"
              className="dark:hidden block h-8 w-8"
            />
            <img
              src="./logos/acme-logo-light.png"
              width={40}
              height={40}
              alt="logo"
              className="hidden dark:block h-8 w-8"
            />
            <span className="ml-2 text-xl text-slate-800 dark:text-slate-50">
              Nextbase
            </span>
          </a>
          <p className="ml-8 mt-2 text-sm text-gray-500">
            Acme Inc. 123 Acme Street, London, UK, SW1A 1AA
          </p>
        </div>
        <div className="flex-grow flex flex-wrap ml-60 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 items-center">
            <h2 className="title-font font-medium text-slate-800 dark:text-slate-50 tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-500 dark:text-slate-400 hover:text-gray-800">
                  NextBase
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-800 dark:text-slate-50 tracking-widest text-sm mb-3">
              Follow Us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-500 dark:text-slate-400 hover:text-gray-800">
                  Github
                </a>
              </li>
              <li>
                <a className="text-slate-500 dark:text-slate-400 hover:text-gray-800">
                  Twitter
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-800 dark:text-slate-50 tracking-widest text-sm mb-3">
              Legal
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-500 dark:text-slate-400 hover:text-gray-800">
                  Privacy Polcy
                </a>
              </li>
              <li>
                <a className="text-slate-500 dark:text-slate-400 hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-slate-500 dark:bg-slate-400 mx-40"></hr>
      <div className="bg-slate-100 dark:bg-slate-800 pb-10">
        <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 ml-8 text-sm text-center sm:text-left">
            © 2023 Arni Creative Private Limited. All Rights Reserved.
          </p>
          <span className="inline-flex pr-40 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
