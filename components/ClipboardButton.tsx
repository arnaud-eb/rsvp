"use client";

import { FC, useEffect, useRef, useState } from "react";

type ClipboardButtonProps = {
  target: string;
};

const ClipboardButton: FC<ClipboardButtonProps> = ({ target }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout>();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(target);
      setCopySuccess("Copié !");

      timeoutRef.current = setTimeout(() => {
        setCopySuccess("");
        clearTimeout(timeoutRef.current);
      }, 2000);
    } catch (err) {
      setCopySuccess("Oups, réessaie !");
    }
  };

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    [],
  );

  return (
    <>
      <button
        className="absolute end-2 top-1 inline-flex items-center justify-center rounded p-2 hover:bg-primary-500 lg:top-1.5"
        onClick={copyToClipboard}
      >
        {!copySuccess ? (
          <span>
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        ) : (
          <span className="inline-flex items-center">
            <svg
              className="h-3.5 w-3.5 text-primary-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        )}
      </button>
      <div
        role="tooltip"
        className={`absolute -top-8 end-0 z-10 inline-block rounded bg-secondary-100 px-1.5 py-1 text-sm font-medium text-primary-800 shadow-sm transition-opacity duration-300 ${
          copySuccess ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <span className="hidden">{copySuccess}</span>
        <span>{copySuccess}</span>
        <div className="absolute -bottom-1 left-[calc(50%-3px)] h-2 w-2 rotate-45 bg-secondary-100"></div>
      </div>
    </>
  );
};

export default ClipboardButton;
