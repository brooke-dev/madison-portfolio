// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
