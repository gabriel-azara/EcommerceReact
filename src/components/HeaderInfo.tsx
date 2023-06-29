import { FaPhoneAlt, FaTruck } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineFieldTime } from 'react-icons/Ai';
import { VscAccount } from 'react-icons/Vsc';

export default function HeaderInfo() {
  return (
    <header className="w-full flex items-center justify-between px-12">
      <div className="px-6 text-sm font-medium">
        <ul className="flex items-center space-x-3">
          <a href="#">
            <li className="text-blue-500 hover:text-blue-400 flex items-center">
              <span className="px-1">
                <FaPhoneAlt />
              </span>{' '}
              Telefone: +556299999999
            </li>
          </a>
          <a href="#">
            <li className="text-blue-500 hover:text-blue-400 flex items-center">
              <span className="px-1">
                <HiOutlineMail />
              </span>
              Email: contato@azarajeans.com.br
            </li>
          </a>
          <li className="text-blue-500 flex items-center">
            <span className="px-1">
              <FaTruck />
            </span>
            Enviamos para todo o Brasil
          </li>
          <li className="text-blue-500 flex items-center">
            <span className="px-1">
              <AiOutlineFieldTime />
            </span>
            7 Dias de devolução
          </li>
        </ul>
      </div>
      <div className="py-4 px-6 text-sm font-medium ">
        <a
          href="https://www.azarajeans.com.br/minha-conta"
          className="text-blue-500 flex items-center"
        >
          <span className="px-1">
            <VscAccount />
          </span>
          Minha Conta
        </a>
      </div>
    </header>
  );
}