import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import Page from '~/components/Page'
import ExLink from '~/components/elements/ExLink'

const Contact = () => {

  return (
    <>
      <NextSeo title="Contact 送信完了 - 千柩堂" description="お問い合わせ" />
      <Layout>
        <Page heading="Contact" description="お問い合わせ">
          <p>お問い合わせの送信が完了しました。</p>
        </Page>
      </Layout>
    </>
  )
}

export default Contact
