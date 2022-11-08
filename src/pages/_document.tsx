import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}