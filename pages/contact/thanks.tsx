import { NextSeo } from 'next-seo'
import Page from '~/components/Page'

const Contact = () => (
  <>
    <NextSeo title="Contact 送信完了 - 千柩堂" description="お問い合わせ" />
    <Page heading="Contact" description="お問い合わせ">
      <p className="taC">お問い合わせの送信が完了しました。</p>
    </Page>
  </>
)

export default Contact
