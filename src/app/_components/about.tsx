import Image from 'next/image';
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';
import { CheckFatIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { MapIcon } from 'lucide-react';

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">

      <div className="container px-4 mx-auto"> 

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image 
                src={about1Img}
                alt="Imagem de um cachorro e um gato"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image 
                src={about2Img}
                alt="Imagem de um gato"
                fill
                quality={100} 
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Somos uma empresa dedicada ao cuidado e bem-estar dos animais de estimação. Nossa missão é proporcionar serviços de alta qualidade que garantam a saúde, segurança e felicidade dos seus pets. Com uma equipe apaixonada e experiente, oferecemos desde hospedagem e banho até adestramento e cuidados especiais.
            </p>

            <ul className="space-y-4">
              <li className="flex images-center gap-2">
                <CheckFatIcon className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex images-center gap-2">
                <CheckFatIcon className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex images-center gap-2">
                <CheckFatIcon className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">

              <a 
                href="#"
                className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a 
                href="#"
                className="bg-white text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapIcon className="w-5 h-5 text-black" />
                Endereço da loja
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}