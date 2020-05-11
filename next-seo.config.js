/* eslint-disable @typescript-eslint/camelcase */
const seoConfig = {
  title: '千柩堂',
  description: '柾千樫 / mercy オフィシャルサイト『千柩堂』',
  canonical: 'https://chikyudo.xyz/',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://chikyudo.xyz/',
    site_name: '千柩堂',
    images: [
      {
        url: 'https://chikyudo.xyz/assets/images/ogp.jpg',
      },
    ],
  },
  twitter: {
    handle: '@masakichikashi',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '1066060773766653',
  },
  additionalMetaTags: [
    {
      name: 'copyright',
      content: '© Masaki Chikashi',
    },
  ],
}

export default seoConfig
