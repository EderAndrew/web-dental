/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cn } from "@/lib/utils"

type Props = {
    title: string,
    value: number,
    itemValue: number,
    itemIcon: any,
    itemBgColor: string,
    itemColor: string
}

export const AppCard = (props: Props) => {
    return (
        <div className="flex flex-col justify-between bg-white/30 w-1/4 h-1/2 rounded-lg p-2">
            <h3>{props.title}</h3>
            <div className="flex justify-between">
                <span className="text-3xl">{props.value}</span>
                <div className={cn(`flex justify-between items-center p-2 w-20 h-8 ${props.itemBgColor} rounded-lg`)}>
                <span className={cn(`text-sm ${props.itemColor} font-bold`)}>{props.itemValue}%</span>
                <span className={cn(`text-sm ${props.itemColor}`)}>{props.itemIcon}</span>
                </div>
            </div>
        </div>
    )
}