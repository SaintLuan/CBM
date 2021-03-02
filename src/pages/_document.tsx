import Document, { Html, Head, Main, NextScript } from 'next/Document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="icons/logo.png" type="image/png"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet"/>

                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"></link>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}