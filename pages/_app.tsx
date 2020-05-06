import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import TagManager from 'react-gtm-module'

import loadTypekit from '~/components/general/loadTypekit'

import '~/components/styles/main.scss'

const tagManagerArgs = {
  gtmId: 'GTM-K6JXTHX'
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loadTypekit()
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
