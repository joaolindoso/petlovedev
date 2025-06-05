"use client";

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import tutor1 from '../../../public/tutor1.png';
import tutor2 from '../../../public/tutor2.png'; 
const testimonials = [
  {
    author: 'Maria Oliveira',
    content: 'Excelente serviço! Meu cachorro ficou muito bem cuidado durante a hospedagem.',
    rating: 5,
    role: 'Tutora de Luna (Golden Retriever)',       
    image: tutor2,
  },
  {
    author: 'João Silva',
    content: 'A equipe é super atenciosa e o serviço de banho e tosa é impecável.',
    rating: 4,
    role: 'Tutor do Thor (Bulldog Fancês)',     
    image: tutor1,
  },
  {
    author: 'Maria Oliveira',
    content: 'Meu gato adora ir lá! Sempre bem tratado e feliz.',
    rating: 5,
    role: 'Tutora da Mel e do Max', 
    image: tutor2,
  }
];

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#ffd449] py-16">
      <div className="container mx-auto px-4"> 
          <h2 className="text-4xl text-center font-bold mb-12">Depoimentos dos nossos clientes</h2>

          <div className="relative max-w-4xl mx-auto">

            {/* Container do slider */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (

                  <div key={index} className="flex-[0_0_100%] min-w-0 px-3">

                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                       
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-24 h-24">
                          <Image
                            src={item.image}
                            alt={`Foto de ${item.author}`}
                            fill
                            className="rounded-full object-cover"
                            quality={100}
                            sizes="96px"
                          />
                        </div>

                        <p className="text-gray-200">
                          {item.content}
                        </p>

                        <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm text-gray-400">{item.role}</p>
                        </div>

                      </div>
                       
                    </article>

                  </div>

                ))}
              </div>
            </div>

            {/* Botões de navegação */}
            <button className="absolute left-0 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10" onClick={scrollPrev}>
              <ChevronLeft 
                className="w-6 h-6 text-gray-600"
              />
            </button>

            <button className="absolute right-0 -translate-y-1/2 translate-x-1/2 top-1/2 z-10 bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10" onClick={scrollNext}>
              <ChevronRight 
                className="w-6 h-6 text-gray-600"
              />
            </button>

          </div> 

      </div>
    </section>
  )
}