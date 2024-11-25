/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const MenuLayout = () => {
    const router = useRouter() 
    useEffect(()=>{
        const session = sessionStorage.getItem("token")
        if(!session) {
            router.push("/")
        }
    },[])
  return (
    <div>MenuLayout</div>
  )
}

export default MenuLayout