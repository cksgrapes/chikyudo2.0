import Head from 'next/head'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const meta = {
  title: '千柩堂',
  description: '柾千樫公式サイト『千柩堂』',
}

const Layout = (props) => {
  const { children, meta } = props

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  meta,
}

export default Layout
