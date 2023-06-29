// import MyAccount from 'next/MyAccount';

import Carousel from "@/components/Carousel";
import HeaderInfo from "@/components/HeaderInfo";
import HeaderSearch from "@/components/HeaderSearch";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";


export default function Home() {
  return (
    <div className=''>
      <HeaderInfo />
      <HeaderSearch />
      <Navbar />
      <Carousel />
      <Products />
    </div>
  );
}
