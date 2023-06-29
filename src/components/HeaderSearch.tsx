import Image from 'next/image';
import logo from '../assets/Logo.png';
import { BsBagDash } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch() {
  return (
    <div className="px-12">
      <div className="px-6 flex justify-between items-center">
        <Image src={logo} alt="logo" width={127} height={127} />

        <div className="searchWrapper text-blue-500 flex items-center rounded border-solid border-2 focus:border-sky-500">
          {/* <form action="" className="rounded border-solid border-2 focus:border-sky-500 "> */}
          <label htmlFor="" className="flex items-center">
            <span>
              <FiSearch />
            </span>
            <input
              type="text"
              className="w-[300px]  border-gray-500 placeholder-blue-200 placeholder:italic"
              placeholder="Pesquisar por peça"
            />
          </label>
          {/* </form> */}
        </div>
        <a href="#" className="text-blue-500 flex items-center">
          <span className="px-1">
            <BsBagDash />
          </span>
          0 Itens - R$ 0,00
        </a>
      </div>
    </div>
  );
}
