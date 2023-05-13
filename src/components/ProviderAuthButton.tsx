import React from "react";
import { ProviderAuthButtonType } from "../types/typing";

const ProviderAuthButton = (props: ProviderAuthButtonType) => {
  const { providerText, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-white border-2 border-solid border-blue-500 hover:bg-[#e4e8ec] transition-all w-[45%] p-3 flex justify-center rounded-md"
    >
      {providerText === "google" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          color="#DF3E30"
          role="img"
          className="MuiBox-root css-19s7sm0 iconify iconify--eva"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g id="iconifyReact537">
            <g id="iconifyReact538">
              <path
                id="iconifyReact539"
                fill="currentColor"
                d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"
              ></path>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          color="#1877F2"
          className="MuiBox-root css-18qs3yl iconify iconify--eva"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g id="iconifyReact576">
            <g id="iconifyReact577">
              <path
                id="iconifyReact578"
                fill="currentColor"
                d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
              ></path>
            </g>
          </g>
        </svg>
      )}
    </button>
  );
};

export default ProviderAuthButton;
