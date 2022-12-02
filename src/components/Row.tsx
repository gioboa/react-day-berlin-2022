import Image from 'next/image';
import React from 'react';

type IPros = {
  author: any;
};

export const Row: React.FC<IPros> = ({ author }) => {
  return (
    <tr>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left flex items-center">
        <Image
          src={'https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg'}
          className="h-12 w-12 bg-white rounded-full border"
          width={60}
          height={60}
          alt="..."
        />
        <span className="ml-3">{author.firstName}</span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
        {author.lastName}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
        <i className="fas fa-circle text-orange-500 mr-2"></i> {author.country}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
        <div className="flex">
          <Image
            src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
            width={60}
            height={60}
          />
          <Image
            src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
            width={60}
            height={60}
          />
          <Image
            src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
            width={60}
            height={60}
          />
          <Image
            src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
            width={60}
            height={60}
          />
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
        <div className="flex items-center">
          <span className="mr-2">70%</span>
          <div className="relative w-full">
            <div className="overflow-hidden h-2 text-lg flex rounded bg-green-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right">
        <a className="text-blueGray-500 py-1 px-3" href="#pablo">
          <i className="fas fa-ellipsis-v"></i>
        </a>
        <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48">
          <a
            href="#pablo"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            Action
          </a>
          <a
            href="#pablo"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            Another action
          </a>
          <a
            href="#pablo"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            Something else here
          </a>
        </div>
      </td>
    </tr>
  );
};
