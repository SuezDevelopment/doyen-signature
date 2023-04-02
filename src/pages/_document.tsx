import React from 'react'
import Document, { Html, 
  Head, 
  Main, 
  NextScript,
  DocumentContext,
  DocumentInitialProps, } from 'next/document'
import {CssBaseline} from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(
     ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
     const initialProps = await Document.getInitialProps(ctx);
     return {
        ...initialProps,
        styles: React.Children.toArray([initialProps.styles]),
     };
  }
  render() {
    return (
      <Html lang="en">
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
         />
         <Head>
            <meta name="description" content="Our fashion clothing brand offers stylish clothing that celebrates and accentuates the beauty of every woman, regardless of their body shape or size. We cater to all body types, and our collections feature trendy and timeless pieces that are sure to make you feel confident and empowered." key="desc" />
            <link rel="icon" type="image/x-icon" href="https://signaturesbydoyen.org/favicon.ico" />
            <link rel="shortcut icon" type="image/x-icon" href="https://signaturesbydoyen.org/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://signaturesbydoyen.org/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="https://signaturesbydoyen.org/favicon-16x16.png" />
				<link rel='icon' sizes='192x192' type='image/jpeg' href='https://signaturesbydoyen.org/doyen-signature.jpg' />
				<link rel='icon' sizes='512x512' type='image/jpeg' href='https://signaturesbydoyen.org/doyen-signature.jpg' />
				<meta name="apple-mobile-web-app-title" content="Signatures by Doyen - BRIDALS▪️CUSTOM•MADE▪️LUXURY▪️TRAINING | Coming Soon" />
				<link rel='apple-touch-icon' type='image/png' href='https://signaturesbydoyen.org/doyen-signature.jpg' />
				<meta name='msapplication-square310x310logo' content='https://signaturesbydoyen.org/doyen-signature.jpg' />
            <link rel='manifest' href='https://signaturesbydoyen.org/' />
				<link rel='canonical' href='https://signaturesbydoyen.org/' />

            {/* open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Signatures by Doyen" />
				<meta
					property="og:title"
					content="Signatures by Doyen - BRIDALS▪️CUSTOM•MADE▪️LUXURY▪️TRAINING | Coming Soon"
					key="title"
				/>
				<meta
					property="og:description"
					content="Our fashion clothing brand offers stylish clothing that celebrates and accentuates the beauty of every woman, regardless of their body shape or size. We cater to all body types, and our collections feature trendy and timeless pieces that are sure to make you feel confident and empowered."
				/>
				<meta property="og:image" content="https://signaturesbydoyen.org/doyen-signature.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:alt" content="Signatures by Doyen" />
				<meta property="og:image:secure_url" content="https://signaturesbydoyen.org/doyen-signature.jpg" />
				<meta property="og:url" content="https://signaturesbydoyen.org/" />

            {/* twitter cards */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@doyenyen_" />
				<meta name="twitter:creator" content="@doyenyen_" />
				<meta
					name="twitter:title"
					content="Signatures by Doyen - BRIDALS▪️CUSTOM•MADE▪️LUXURY▪️TRAINING | Coming Soon"
				/>
				<meta
					name="twitter:description"
					content="Our fashion clothing brand offers stylish clothing that celebrates and accentuates the beauty of every woman, regardless of their body shape or size. We cater to all body types, and our collections feature trendy and timeless pieces that are sure to make you feel confident and empowered."
				/>
				<meta name="twitter:image" content="https://signaturesbydoyen.org/doyen-signature.jpg" />
				<meta name="twitter:image:alt" content="Signatures by Doyen" />
            {CssBaseline.flush()}
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
    );
  }
}

export default MyDocument