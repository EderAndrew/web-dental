"use client"
import { TrendingDown, TrendingUp } from "lucide-react"
import { AppCard } from "./app-card"

export const AppCardVisitors = () => {
    return (
        <div className="w-full h-52 bg-gradient-to-r from-sky-300 from-10% via-sky-400 via-30% to-brand-100 to-90% rounded-lg p-3">
            <div>
                <span>Pacientes do dia</span>
                <h1 className="text-4xl">104</h1>
            </div>
            <div className="flex gap-8 h-full mt-5">
                <AppCard
                    title="Novos Pacientes"
                    value={40}
                    itemValue={51}
                    itemIcon={<TrendingUp />}
                    itemBgColor="bg-green"
                    itemColor="text-green-500"
                />
                <AppCard
                    title="Pacientes Antigos"
                    value={64}
                    itemValue={20}
                    itemIcon={<TrendingDown />}
                    itemBgColor="bg-red"
                    itemColor="text-red-700"
                />
            </div>
        </div>
    )
}