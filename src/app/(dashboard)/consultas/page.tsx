//import { redirect } from 'next/navigation'
import { AppCardVisitors } from '@/components/app-cardVisitors'
import React from 'react'

const Consultas = async() => {
  return (
    <div className="flex gap-3 p-5">
      <section className="w-[70%]">
        <div>
          <h1 className="text-xl mb-6">Bom dia, <span className="font-semibold text-brand-100">usuário!</span></h1>
          <AppCardVisitors />
        </div>
        <div>
          lista de pacientes
        </div>
      </section>
      <div>
        Calendário
      </div>
    </div>
  )
}

export default Consultas