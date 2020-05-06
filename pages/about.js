import Layout from '~/components/Layout'
import Page from '~/components/Page'

const meta = {
  title: 'About - 千柩堂',
  description: '',
}

const About = () => (
  <Layout meta={meta}>
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
        <a href="https://chikyudo.org/contacts/">お問い合わせ</a>
        よりご連絡ください。
      </p>
    </Page>
  </Layout>
)

export default About
