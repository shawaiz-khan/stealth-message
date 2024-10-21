import { Globe, Search, User } from "lucide-react";

export default function Navbar() {
    return (
        <header>
            <nav className="bg-white h-20 flex justify-evenly items-center px-5">
                <h1>Logo</h1> {/* Logo should be here */}
                <ul className="navigation flex gap-5">
                    <li>PRODUCTS</li>
                    <li>LEARN & SUPPORT</li>
                    <li>COMMUNITY & EVENTS</li>
                    <li>ABOUT US</li>
                </ul>
                <div className="flex gap-5">
                    <button>Try now</button>
                    <button>Buy now</button>
                </div>
                <div className="flex gap-5">
                    <Search />
                    <User />
                    <Globe />
                </div>
                <button>Menu</button>
            </nav>
            <nav className="bg-gray-200 h-10 px-5">
                Under NavBar
            </nav>
        </header>
    )
}
