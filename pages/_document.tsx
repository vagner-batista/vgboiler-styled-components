import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="VG Boilerplate utilizando NextJS, StoryBook, Husky gitHooks, EsLint, Prettier" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;