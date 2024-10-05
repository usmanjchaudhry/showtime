import Link from 'next/link'
import MobileMenu from './mobile-menu'
import ShowtimeLogo from '../../public/images/SHOWTIME_LOGO_BLACK-removebg-preview.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Showtime">
              <Image 
                src={ShowtimeLogo} // Use the imported ShowtimeLogo
                alt="Showtime Logo" 
                width={120} // Adjust width as needed
                height={120} // Adjust height as needed
                style={{ backgroundColor: 'white' , borderRadius: '100%'}} // Add this line

              />
            </Link>
         
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link
                  href="/signin"
                  className="font-medium text-black-100 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-black-100 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-black-100 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Trainers
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
