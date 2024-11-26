"use client"
import React from "react"
import { Calendar } from "./ui/calendar"

export const AppCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className=" bg-white p-5"
        />
    )
}