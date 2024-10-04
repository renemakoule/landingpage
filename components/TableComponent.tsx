import React from 'react';
import Image from 'next/image';

const TableComponent: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <tbody>
          <tr>
            <td className="border border-gray-200 items-end justify-end text-right">
              <div className="bg-sky-100 rounded-lg w-[100px] h-[100px]"></div>
            </td>
            <td className="border border-gray-200 col-span-2 align-top"> {/* Ajout de align-top */}
              <Image
                src="/poket.jpg"
                alt="Femme avec un manteau et un bonnet"
                width={100}
                height={100}
                className="w-[200px] h-[200px] rounded-lg"
              />
            </td>
            <td className="border border-gray-200 p-0"> {/* Suppression de l'espacement */}
              <Image
                src="/poket.jpg"
                alt="Femme avec un manteau et un bonnet"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-lg"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-0"> {/* Suppression de l'espacement */}
              <Image
                src="/poket.jpg"
                alt="Femme avec un manteau et un bonnet"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-lg"
              />
            </td>
            <td className="border border-gray-200 p-0"> {/* Suppression de l'espacement */}
              <div className="bg-sky-100 rounded-lg w-[100px] h-[100px]"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
