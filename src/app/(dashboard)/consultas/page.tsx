import { redirect } from 'next/navigation'
import React from 'react'
import { getServerSession } from 'next-auth'

const Consultas = async() => {
  const session = await getServerSession()
  if(!session) redirect('/')

  return (
    <div>
      Consultas
      <p>{session.user?.name}</p>
    </div>
  )
}

export default Consultas