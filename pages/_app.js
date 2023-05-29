import { CSSReset } from "../src/components/CSSReset";
import Head from "next/head";
import { Titillium_Web } from 'next/font/google';
// import IconTab from "../public/assets/icon-logo.svg"

const titillium_Web = Titillium_Web({
    subsets: ['latin'],
    weight: ['400',"600", '700']
})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Vertigo - Bora Codar 11 </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/assets/icon-logo.svg" type="image/x-icon"/>
        </Head>
            <main className={titillium_Web.className}>
                <CSSReset/>
                <Component {...pageProps} />
            </main>
        </>
    )
}
