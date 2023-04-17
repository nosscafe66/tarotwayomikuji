import Background from '@/components/Background/background'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
    </>
  );
}
