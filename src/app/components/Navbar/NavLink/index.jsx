import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ subsets: ['latin'] })

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-3 pl-3 pr-4 tracking-widest text-white md:text-sm sm:text-xl rounded md:p-0 hover:text-yellow-400"
    >
      <span className={playFair.className}>{title}</span>
    </Link>
  )
}