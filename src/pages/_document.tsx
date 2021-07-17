import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css?family=Terminal+Dosis%3A200%2C400&#038;ver=5.7.2&display=swap"
                        as="style"
                    />
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `</style>
                        <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Terminal+Dosis%3A200%2C400&#038;ver=5.7.2&display=swap"
                        media="print"
                        onload="this.media='all';"
                        />
                        <style>`,
                        }}
                    ></style>
                    <noscript>
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://fonts.googleapis.com/css?family=Terminal+Dosis%3A200%2C400&#038;ver=5.7.2&display=swap"
                        />
                    </noscript>
                </Head>
                <body className="text-gray-900 dark:bg-black dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
