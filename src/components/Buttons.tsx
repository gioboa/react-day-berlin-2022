import React from 'react';

type IPros = {
  handleSave: () => void;
  handleDelete: () => void;
};

export const Buttons: React.FC<IPros> = ({ handleRead, handleSave, handleDelete }: any) => {
  return (
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-lg text-blueGray-700">Authors</h3>
        </div>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
