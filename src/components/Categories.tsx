import Image from 'next/image';
import slide1 from '../assets/images/slide-1.jpeg';

export default function Categories() {
  return (
    <div className="px-12">
      <h2 className="text-black text-4xl text-center pt-9 font-bold">
        Categorias
      </h2>
      <div>
        <ul className="px-6 grid grid-cols-3 pb-2">
          <li className="relative product px-6 pb-4">
            <a href="#" className="flex justify-center">
              <Image
                src={slide1}
                alt="Calça"
                className="object-cover h-80 w-80 rounded-3xl"
              ></Image>
              <h2 className="text-2xl absolute text-center rounded-b-3xl bottom-4 w-80  bg-blue-900 opacity-60 text-white">
                Calças
              </h2>
            </a>
          </li>
          <li className="relative product px-6 pb-4">
            <a href="#" className="flex justify-center">
              <Image
                src={slide1}
                alt="Calça"
                className="object-cover h-80 w-80 rounded-3xl"
              ></Image>
              <h2 className="text-2xl absolute text-center rounded-b-3xl bottom-4 w-80 text-white bg-blue-900 opacity-60">
                Jaquetas
              </h2>
            </a>
          </li>

          <li>Jaquetas</li>
          <li>Shorts</li>
          <li>Saias</li>
          <li>Blusas</li>
        </ul>
      </div>
    </div>
  );
}
