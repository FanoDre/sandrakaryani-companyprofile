import Link from "next/link";
import localFont from "next/font/local";


const upakarti = localFont({ src: '../Fonts/Upakarti-Serong.woff2' })


export default function Footer() {
  return (
    <footer className="footer p-1 dark:border-t dark:border-yellow-500 backdrop-blur-lg">
      <div className="flex relative gap-2 container lg:py-2 flex-wrap items-center justify-center mx-auto px-1 py-1">
        <p className="text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
}