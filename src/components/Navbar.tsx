export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white font-bold">
      <div className="flex items-center justify-center mt-2">
        <a href="/" className="text-white px-6 hover:bg-sky-700 py-6">
          INICIO
        </a>

        <a
          href="#"
          className='className="text-white" px-6 hover:bg-sky-700 py-6'
        >
          CALÇAS
        </a>
        <a href="#" className="text-white px-6 hover:bg-sky-700 py-6">
          JAQUETAS
        </a>
        <a href="#" className="text-white px-6 hover:bg-sky-700 py-6">
          SHORTS
        </a>
        <a href="#" className="text-white px-6 hover:bg-sky-700 py-6">
          SAIAS
        </a>
        <a href="#" className="text-white px-6 hover:bg-sky-700 py-6">
          BLUSAS
        </a>
      </div>
    </nav>
  );
}
