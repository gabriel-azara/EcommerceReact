// import MyAccount from 'next/MyAccount';

import Carousel from '@/components/Carousel';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import HeaderInfo from '@/components/HeaderInfo';
import HeaderSearch from '@/components/HeaderSearch';
import Navbar from '@/components/Navbar';
import Payment from '@/components/Payment';
import Products from '@/components/Products';

export default function Home() {
  return (
    <div className="">
      <HeaderInfo />
      <HeaderSearch />
      <Navbar />
      <Carousel />
      <Products />
      <Categories />
      <Footer />
      <Payment />
    </div>
  );
}
