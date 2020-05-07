import { useEffect, useState } from 'react'

const Ad = () => {
  const [ad, setAd] = useState(<span />)

  useEffect(() => {
    const adTag = (
      <>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <ins
          className="adsbygoogle"
          //  style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2791155573323890"
          data-ad-slot="5717891655"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <style jsx>{`
          .adsbygoogle {
            display: block;
            text-align: center;
          }
        `}</style>
      </>
    )
    setAd(adTag)
  }, [])

  return ad
}

export default Ad
