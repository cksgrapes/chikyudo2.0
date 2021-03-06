import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import loadTypekit from '~/components/general/loadTypekit'
import '~/components/styles/main.scss'

const tagManagerArgs = {
  gtmId: 'GTM-K6JXTHX',
}

type MyAppProps = {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
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
