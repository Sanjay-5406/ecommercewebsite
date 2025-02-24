import Link from "next/link";
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <>
      <nav className="p-4 bg-blue-500 text-white">
        <Link href="/" className="ml-4">🏠 Home</Link>
        <Link href="/cart" className="ml-4">🛒 Cart</Link>
      </nav>
      <main>{children}</main>
    </>
  );
    

}

