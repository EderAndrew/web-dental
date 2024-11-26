//import { redirect } from 'next/navigation'
import { AppCalendar } from '@/components/app-calendar'
import { AppCardVisitors } from '@/components/app-cardVisitors'
import { AppPatientList } from '@/components/app-patientList'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'

const Consultas = async() => {
  return (
    <div className="flex gap-5 p-5">
      <section className="w-[70%]">
        <div>
          <h1 className="text-xl mb-6">Bom dia, <span className="font-semibold text-brand-100">usuário!</span></h1>
          <AppCardVisitors />
        </div>
        <div className="mt-5">
          <AppPatientList />
        </div>
      </section>
      <div className="flex flex-col items-center w-[30%] bg-white rounded-lg mr-10 p-2">
        <div className="w-full ">
          <p className="font-semibold text-xl">Calendário</p>
        </div>
        <AppCalendar />
        <div className="w-full px-2 mt-4">
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Schedule</span>
            <Link href="/" className="text-sm text-brand-100 font-semibold underline">ver todos</Link>
          </div>
          <div className="flex gap-3 bg-blue-100 rounded-lg p-2 mt-2">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-r from-teal-200 from-10% via-teal-200 via-30% to-brand-100 to-90% border border-brand">CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold">Dr. João da Silva</span>
              <span className="text-xs italic">26 Nov 2024 | 09:00 AM - 06:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultas