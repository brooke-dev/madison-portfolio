import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-white bg-opacity-50 fixed w-full top-0">
      <ul className="flex justify-around px-10 py-5">
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/" className="text-gray-800 hover:text-gray-600" >Home</Link>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
        </li>
        {/* Not yet created */}
        <li className={router.pathname === '/shop' ? 'active' : ''}>
          <Link href="/shop" className="text-gray-800 hover:text-gray-600">Shop</Link>
        </li>
        <li className={router.pathname === '/portfolio' ? 'active' : ''}>
          <Link href="/portfolio" className="text-gray-800 hover:text-gray-600">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}


