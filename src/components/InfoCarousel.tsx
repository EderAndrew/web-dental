'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const infoData = [
    {
        id: 1,
        title: 'Pacientes',
        description: 'Agende seus pacientes de forma simples e eficiente.',
    },
    {
        id: 2,
        title: 'Financeiro',
        description: 'Controle total dos pagamentos e recebimentos.',
    },
    {
        id: 3,
        title: 'Emergencial',
        description: 'Sempre disponível para o seu paciente.',
    }
]
const InfoCarousel = () => {
    const plugin = React.useRef(
        Autoplay({delay:5000, stopOnInteraction: true})
    )
  return (
    <Carousel
        plugins={[plugin.current]}
        className="w-[80%] m-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
    >
        <CarouselContent>
            {infoData.map((item) => (
                <CarouselItem key={item.id}>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-white font-semibold text-xl">{item.title}</h2>
                        <p className="text-white font-medium text-base">{item.description}</p>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default InfoCarousel