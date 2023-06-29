export default function Footer() {
  return (
    <div className="bg-blue-900 h-60 mt-8">
      <div className="px-12 grid grid-cols-4 pt-4">
        <div className="px-12">
          <h3 className="text-2xl font-bold">Sobre</h3>
          <ul className="pt-2 grid gap-2">
            <li>
              <a href="#">Nossa Historia</a>
            </li>
            <li>
              <a href="#">Prazos de Entregas</a>
            </li>
            <li>
              <a href="#">Devoluções</a>
            </li>
            <li>
              <a href="#">Perguntas Frequentes</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold">Contato</h3>
          <ul className="pt-2 grid gap-2">
            <li>
              <a href="#">Telefone: +5562999999999</a>
            </li>
            <li>
              <a href="#">E-mail:contato@azarajeans.com</a>
            </li>
          </ul>
        </div>
        <div className="px-12 col-start-4">
          <h3 className="text-2xl font-bold">Redes Sociais</h3>
          <ul className="pt-2 grid gap-2">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
