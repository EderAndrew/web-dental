import { Bell, MessageCircle } from "lucide-react"
import { Search } from "./ui/search"
import { AppDropdown } from "./app-dropdown"

export const AppMenubar = () => {
    return (
        <header className=" w-full p-3 flex justify-between">
            <Search />
            <div className=" flex gap-3 items-center mr-10">
                <MessageCircle width={20} height={20}/>
                <Bell width={20} height={20}/>
                <AppDropdown />
            </div>
        </header>
    )
}