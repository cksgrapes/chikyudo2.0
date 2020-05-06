import Document, { Html, Head, Main, NextScript } from 'next/document'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-K6JXTHX'
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
