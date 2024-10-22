import { Globe, Menu, Search, User } from "lucide-react";

export default function Navbar() {
    return (
        <header>
            <nav className="bg-white h-20 flex justify-evenly items-center px-5">
                <h1 className="text-xl font-bold">Stealth Message</h1> {/* Logo should be here */}
                <ul className="navigation flex gap-5 font-normal text-sm justify-center items-center">
                    <li>PRODUCTS</li>
                    <li>LEARN & SUPPORT</li>
                    <li>COMMUNITY & EVENTS</li>
                    <li>ABOUT US</li>
                </ul>
                <div className="flex gap-3">
                    <button className="border-2 border-blue-900 px-5 py-[2px] rounded-full font-bold hover:bg-blue-900 hover:text-neutral-50">Try now</button>
                    <button className="bg-orange-500 px-5 py-[2px] rounded-full font-bold text-neutral-50 hover:bg-orange-600">Buy now</button>
                </div>
                <div className="flex gap-5 text-blue-900">
                    <Search className="hover:text-orange-600" />
                    <User className="hover:text-orange-600" />
                    <Globe className="hover:text-orange-600" />
                </div>
                <button className="border-2 border-blue-900 px-5 py-[2px] rounded-full font-bold hover:text-orange-600 flex gap-2 justify-center items-center"><Menu size={20} /> Menu</button>
            </nav>
            <nav className="bg-gray-200 h-10 flex justify-start items-center px-20">
                Home {'>'} Solutions {'>'} StealthMessage
            </nav>
        </header>
    )
}
