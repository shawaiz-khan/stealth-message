import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Hero from "./components/Hero"

function App() {
  return (
    <main>
      <Hero />
      <div className="social-icons fixed right-4 bottom-4 flex flex-col gap-5 text-blue-800">
        <Facebook className="hover:text-orange-600" />
        <Instagram className="hover:text-orange-600" />
        <Youtube className="hover:text-orange-600" />
        <Linkedin className="hover:text-orange-600" />
        <Twitter className="hover:text-orange-600" />
      </div>
    </main>
  )
}

export default App