import { SearchIcon } from "lucide-react"

export const  Search = () => {
    return (
        <div className="flex border border-gray-300 rounded-xl bg-gray-300 p-2 w-[32vw]">
            <input type="text" placeholder="Buscar..." className="w-full outline-none bg-gray-300" />
            <SearchIcon color="#9CA3AF"/>
        </div>
    )
}