import FormLogin from '@/components/FormLogin'
import InfoCarousel from '@/components/InfoCarousel'

import React from 'react'


const Login = () => {
  return (
    <section className="flex justify-between bg-light-300">
      <div className="flex w-[55%] h-screen flex-col">
        <header className="w-[100%] h-9 bg-white border-b border-light-200 flex items-center px-4">
          <h2 className="font-semibold"><span className="text-brand-100">Plataforma</span> de Gestão</h2>
        </header>
        <FormLogin />
        <p className="text-xs ml-4">nativcode &copy; 2024 - Todos os direitos reservados.</p>
      </div>
      <div className="flex flex-col bg-dental-cover bg-cover bg-center w-[45%] h-screen">
        <div className="w-[100%] bg-brand-100 opacity-60 p-5 h-screen flex flex-col justify-between">
          <div>
            <h1 className="text-5xl text-white antialiased">Bem vindo! 👋</h1>
            <span className="text-2xl text-white">Organize e gerencie o seu consultório dentário.</span>
          </div>
          <div className="w-[100%]">
            <InfoCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login