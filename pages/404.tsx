import { NextSeo } from 'next-seo'
import Page from '~/components/Page'

const Page404 = () => (
  <>
    <NextSeo title="404 not found - 千柩堂" />
    <Page heading="404 not found" description="ページが見つかりません">
      <p>おさがしのページはみつかりませんでした。</p>
    </Page>
  </>
)

export default Page404
