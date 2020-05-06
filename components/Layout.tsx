import React from 'react'
import Head from 'next/head'

import Header from '~/components/Header'
import Footer from '~/components/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
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

export default Layout
