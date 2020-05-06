import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import loadTypekit from '~/components/general/loadTypekit'

import '~/components/styles/main.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loadTypekit()
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
