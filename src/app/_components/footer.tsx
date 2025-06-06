import Image from 'next/image';
import royal from '../../../public/royal.png';
import golden from '../../../public/golden.png';
import primier from '../../../public/primier.png';
import natural from '../../../public/natural.png';
import whiskas from '../../../public/whiskas.png';
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';

const brands = [
  { name: 'Royal Canin', logo: royal },	
  { name: 'Golden', logo: golden },
  { name: 'Primier', logo: primier },
  { name: 'Formula Natural', logo: natural },
  { name: 'Whiskas', logo: whiskas }, 
  { name: 'Golden', logo: golden }, 
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibol mb-8 text-center">Marcas que trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image 
                  src={item.logo} 
                  alt={`Logo da marca ${item.name}`} 
                  width={100} 
                  height={50} 
                  quality={100}
                  className="object-contain"
                  style={{
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </div>
            )) }
          </div>

        </div>

        <footer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">

            <div>
              <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
              <p className="mb-4">
                Cuidando do seu melhor amigo com amor e dedicação
              </p>
              <a 
                className="bg-green-500 px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2" href="#">
                <WhatsappLogoIcon className="w-5 h-5" />
                  Contato via WhatsApp
              </a>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
              <p className="">E-mail: teste@teste.com</p>
              <p className="">Telefone: (xx) 1234-1234</p>
              <p className="">Rua xyz, Centro, São Paulo-SP</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank">
                  <FacebookLogoIcon className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  target="_blank">
                  <InstagramLogoIcon className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  target="_blank">
                  <TwitterLogoIcon className="w-8 h-8" />
                </a>
                
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <p>
              © 2025 Pet Shop. Todos os direitos reservados.
            </p>
          </div>

        </footer>

      </div> 
    </section>
  )
}