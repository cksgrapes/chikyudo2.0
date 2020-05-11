import { NextSeo } from 'next-seo'
import Page from '~/components/Page'
import SEO from '~/next-seo.config'

const About = () => (
  <>
    <NextSeo
      title="About - 千柩堂"
      description="芸術たれ。クリエイター柾千樫およびゲーム実況者mercy、千柩堂についてのご紹介。"
      openGraph={{
        title: 'About - 千柩堂',
        description:
          '芸術たれ。クリエイター柾千樫およびゲーム実況者mercy、千柩堂についてのご紹介。',
        type: 'article',
        url: `${SEO.openGraph.url}about`,
      }}
    />
    <Page heading="About" description="概要">
      <p>
        詩集・小説書籍・文芸誌の発行。
        <br />
        Webサイト構築およびWebアプリ開発。
      </p>
      <p>
        そのほか、エッセイやスナップショットなどあらゆる芸術による自己表現の場。
      </p>
      <h2>柾千樫</h2>
      <p>
        Masaki Chikashi／1993.03.14／Pisces／AB
        <br />
        詩人、小説家、編集、歌手、写真家、Webデベロッパー。
        <br />
        静脈管のうちがわに根づくひとつのクリエイティブ・ナーバス。
      </p>
      <p>
        おしごとのご相談は
        <a href="mailto:masakichikashi@chikyudo.org">お問い合わせ</a>
        よりご連絡ください。
      </p>
    </Page>
  </>
)

export default About
