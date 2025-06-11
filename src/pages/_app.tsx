import '../styles/globals.css';   // ← caminho relativo correto
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
