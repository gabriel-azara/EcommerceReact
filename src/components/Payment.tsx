import Image from 'next/image';
import payment from '../assets/images/payments.png';

export default function Payment() {
  return (
    <div className="my-4 flex justify-center">
      <Image src={payment} alt="pagamentos"></Image>
    </div>
  );
}
