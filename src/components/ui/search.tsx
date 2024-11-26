import { SearchIcon } from "lucide-react"

export const  Search = () => {
    return (
        <div className="flex border border-gray-300 rounded-full p-2 w-[24vw]">
            <input type="text" placeholder="Buscar..." className="w-full outline-none" />
            <SearchIcon color="#9CA3AF"/>
        </div>
    )
}