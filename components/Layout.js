import Head from 'next/head'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const meta = {
  title: '千柩堂',
  description: 'ですくりぷしょん',
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, meta } = this.props

    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

Layout.defaultProps = {
  meta: meta,
}

export default Layout
