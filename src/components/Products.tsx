import Image from 'next/image';
import slide1 from '../assets/images/slide-1.jpeg';

export default function Products() {
  return (
    <div className="px-12">
      <h2 className="text-black text-4xl text-center pt-9 font-bold">
        Produtos em Destaque
      </h2>
      <p className="text-black text-center pt-4 pb-6">Os mais vendidos</p>
      <div className="px-6 grid grid-cols-4 pb-2">
        <div className="product px-6 grid-cols-4 pb-4">
          <Image
            src={slide1}
            alt="Calça"
            className="object-cover h-72 w-72 rounded-3xl"
          ></Image>
          <h3 className="productName text-blue-900 font-semibold py-1 text-center">
            Calça Jeans Premium
          </h3>
          <p className="price text-blue-900 text-center pb-1">R$ 40,00</p>
          <button className="rounded p-1 w-full bg-blue-900">Comprar</button>
        </div>
        <div className="product px-6 grid-cols-4 pb-4">
          <Image
            src={slide1}
            alt="Calça"
            className="object-cover h-72 w-72 rounded-3xl"
          ></Image>
          <h3 className="productName text-blue-900 font-semibold py-1 text-center">
            Calça Jeans Premium
          </h3>
          <p className="price text-blue-900 text-center pb-1">R$ 40,00</p>
          <button className="rounded p-1 w-full bg-blue-900">Comprar</button>
        </div>
        <div className="product px-6 grid-cols-4 pb-4">
          <Image
            src={slide1}
            alt="Calça"
            className="object-cover h-72 w-72 rounded-3xl"
          ></Image>
          <h3 className="productName text-blue-900 font-semibold py-1 text-center">
            Calça Jeans Premium
          </h3>
          <p className="price text-blue-900 text-center pb-1">R$ 40,00</p>
          <button className="rounded p-1 w-full bg-blue-900">Comprar</button>
        </div>
        <div className="product px-6 grid-cols-4 pb-4">
          <Image
            src={slide1}
            alt="Calça"
            className="object-cover h-72 w-72 rounded-3xl"
          ></Image>
          <h3 className="productName text-blue-900 font-semibold py-1 text-center">
            Calça Jeans Premium
          </h3>
          <p className="price text-blue-900 text-center pb-1">R$ 40,00</p>
          <button className="rounded p-1 w-full bg-blue-900">Comprar</button>
        </div>
        <div className="product px-6 grid-cols-4 pb-4">
          <Image
            src={slide1}
            alt="Calça"
            className="object-cover h-72 w-72 rounded-3xl"
          ></Image>
          <h3 className="productName text-blue-900 font-semibold py-1 text-center">
            Calça Jeans Premium
          </h3>
          <p className="price text-blue-900 text-center pb-1">R$ 40,00</p>
          <button className="rounded p-1 w-full bg-blue-900">Comprar</button>
        </div>
        <div className="product px-6 grid-cols-4 pb-4">
          <Image
            src={slide1}
            alt="Calça"
            className="object-cover h-72 w-72 rounded-3xl"
          ></Image>
          <h3 className="productName text-blue-900 font-semibold py-1 text-center">
            Calça Jeans Premium
          </h3>
          <p className="price text-blue-900 text-center pb-1">R$ 40,00</p>
          <button className="rounded p-1 w-full bg-blue-900">Comprar</button>
        </div>
      </div>
    </div>
  );
}
