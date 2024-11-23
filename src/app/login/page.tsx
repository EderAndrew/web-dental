
import FormLogin from '@/components/FormLogin'
import React from 'react'

const Login = () => {
  return (
    <section className="flex justify-between">
      <div className="flex w-[50%] h-screen justify-center items-center">
        <FormLogin />
      </div>
      <div className="flex flex-col bg-blue-500 w-[50%] h-screen p-5">
        <h1 className="text-5xl text-white antialiased">Bem vindo! 👋</h1>
        <span className="text-2xl text-white">Organize e gerencie o seu consultório dentário.</span>
      </div>
    </section>
  )
}

export default Login