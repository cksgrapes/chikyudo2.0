import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleGame from '~/components/SingleGame'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchVideos } from '~/components/general/fetch'

const Games = ({ videos }) => {
  return (
    <>
      <NextSeo
        title="Games - 千柩堂"
        description="柾千樫ことmercyが送るおだやかなるゲーム実況"
      />
      <Layout>
        <CategoryHeading name="Games" description="ゲーム実況" type="works" />
        <CheckHasPosts posts={videos}>
          {videos.map((video) => (
            <SingleGame
              id={video.id.videoId}
              snippet={video.snippet}
              key={video.etag}
            />
          ))}
        </CheckHasPosts>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const videos = await fetchVideos('search', {
    part: 'id,snippet',
    channelId: 'UCfN4BiPIfaTzuuX2n1aYyRg',
    order: 'date',
    maxResults: 50,
  })

  return {
    props: {
      videos,
    },
  }
}

export default Games
