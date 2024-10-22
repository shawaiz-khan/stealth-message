import { ChevronDown, Globe, Menu, Search, User } from "lucide-react";

export default function Navbar() {
    return (
        <header>
            <nav className="bg-white h-20 flex justify-evenly items-center px-5">
                <h1 className="text-xl font-bold">Stealth Message</h1> {/* Logo should be here */}
                <div className="flex gap-3 justify-center items-center">
                    <ul className="navigation flex gap-5 font-normal text-sm justify-center items-center">
                        <li className="flex justify-center items-center gap-1">PRODUCTS <ChevronDown size={15} /></li>
                        <li className="flex justify-center items-center gap-1">LEARN & SUPPORT <ChevronDown size={15} /></li>
                        <li className="flex justify-center items-center gap-1">COMMUNITY & EVENTS <ChevronDown size={15} /></li>
                        <li className="flex justify-center items-center gap-1">ABOUT US <ChevronDown size={15} /></li>
                    </ul>
                    <div className="flex gap-3 justify-center items-center">
                        <button className="border-2 border-blue-900 px-5 py-[2px] rounded-full font-bold hover:bg-blue-900 hover:text-neutral-50">Try now</button>
                        <button className="bg-orange-500 border-2 border-orange-500 px-5 py-[2px] rounded-full font-bold text-neutral-50 hover:bg-orange-600">Buy now</button>
                    </div>
                </div>
                <div className="flex gap-5 text-blue-900">
                    <Search className="hover:text-orange-600" size={20} />
                    <div className="flex gap-2">
                        <User className="hover:text-orange-600" size={20} />
                        <Globe className="hover:text-orange-600" size={20} />
                    </div>
                </div>
                <button className="border-2 border-blue-900 px-5 py-[2px] rounded-full font-bold hover:text-orange-600 flex gap-2 justify-center items-center"><Menu size={20} /> Menu</button>
            </nav>
            <nav className="bg-gray-200 h-10 flex justify-start items-center px-20">
                Home {'>'} Solutions {'>'} StealthMessage
            </nav>
        </header>
    )
}
