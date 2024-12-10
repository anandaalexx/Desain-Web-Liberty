import React from "react";

const Modal = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <button onClick={onClose} className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">{member.role}</p>
        <p className="mt-4">{member.description}</p>
        <div className="flex mt-4">
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18.25 3a3.25 3.25 0 013.25 3.25v14.5a3.25 3.25 0 01-3.25 3.25h-12.5a3.25 3.25 0 01-3.25-3.25v-14.5A3.25 3.25 0 015.75 3h12.5zm-4.5 14.5h-3v-6h3v6zm-1.5-7h-1.5c-.828 0-1.5-.672-1.5-1.5v-1c0-.828.672-1.5 1.5-1.5h1.5c.828 0 1.5.672 1.5 1.5v1c0 .828-.672 1.5-1.5 1.5zm-6 7h-3v-9h3v9z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href={member.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.2 8.15 7.62 9.49.56.1.76-.24.76-.52v-2.07c-3.07.67-3.71-1.48-3.71-1.48-.5-1.3-1.21-1.65-1.21-1.65-.99-.68 0-.67 0-.67 1.1.07 1.68 1.15 1.68 1.15 1.92 3.28 5.04 2.33 5.04-2.46 0-.61-.22-1.11-.75-1.55-.44-.44-1.04-.67-1.65-.67 0 0-.02 0-.03.02-.03.01-.06.02-.1.02h-.07c-.05 0-.1-.01-.15-.02-2.43-.61-4.42-1.4-6.4-2.62-1.73-1.34-2.97-2.77-3.75-4.42-.33-.67-.1-1.44.49-1.72 1.55-1.09 2.81-.82 4.48.22 1.18-.49 2.35-.9 3.55-1.27-1.01-.92-.94-2.64.01-3.67 2.61.31 3.43 1.85 3.43 3.3z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
