"use client"

import { Ellipsis } from "lucide-react"
import { AppDayBox } from "./app-dayBox"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"

export const AppPatientList = () => {
    return (
        <div className="flex bg-white rounded-lg p-2">
            <div className="w-[50%]">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold">Lista de Pacientes</p>
                    <AppDayBox />
                </div>
                <div className="mt-5">
                    <div className="flex items-center bg-green-100 p-2 rounded-lg">
                        <Avatar>
                            <AvatarFallback className="bg-green-300 border border-brand">DW</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center w-full justify-between ml-5">
                            <div className="flex flex-col">
                                <span className="font-semibold">Denzel White</span>
                                <span className="text-xs font-semibold text-green-600">Atendimento</span>
                            </div>
                            <Badge variant="outline" className="text-[.65rem] rounded-lg bg-green-400 h-8 text-green-700">09:00 AM</Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="ml-5">
                    <p className="text-xl font-semibold">Consultas</p>
                </div>
                <div className="mt-5 border-2 rounded-lg border-green-200 p-2">
                    <div className="flex justify-between bg-white ">
                        <div className="flex">
                            <Avatar>
                                <AvatarFallback className="bg-green-300 border border-brand">DW</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col ml-5">
                                <span className="font-semibold">Denzel White</span>
                                <span className="text-xs font-semibold text-gray-500">Masculino - 28 anos 3 meses</span>
                            </div>
                        </div>
                        <Ellipsis className="bg-gray-200 text-sm p-1 rounded-full text-gray-500"/>
                    </div>
                    <div className="mt-4">
                        
                    </div>
                    <div>Lista de informações</div>
                </div>
            </div>
        </div>
    )
}