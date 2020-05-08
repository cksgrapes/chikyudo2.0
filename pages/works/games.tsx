import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleGame from '~/components/SingleGame'
import CategoryHeading from '~/components/elements/CategoryHeading'
import NoData from '~/components/elements/NoData'
import { fetchVideos } from '~/components/general/fetch'

type GamesProps = {
  videos: {
    id: string
    snippet: {
      title: string
      description: string
      publishedAt: Date
    }
  }[]
}

const Games = ({ videos }: GamesProps) => {
  return (
    <>
      <NextSeo
        title="Games - 千柩堂"
        description="柾千樫ことmercyが送るおだやかなるゲーム実況"
      />
      <Layout>
        <CategoryHeading name="Games" description="ゲーム実況" type="works" />
        {videos ? (
          videos.map(
            (video: {
              id: string
              snippet: {
                title: string
                description: string
                publishedAt: Date
              }
            }) => (
              <SingleGame
                id={video.id}
                snippet={video.snippet}
                key={video.id}
              />
            )
          )
        ) : (
          <NoData />
        )}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let videos = await fetchVideos('search', {
    part: 'id,snippet',
    channelId: 'UCfN4BiPIfaTzuuX2n1aYyRg',
    order: 'date',
    maxResults: 50,
  })

  if (videos != null) {
    videos = videos.filter((video: any) => video.id.videoId != null)
    videos = videos.map((video: any) => {
      console.log(video)
      return {
        id: video.id.videoId ? video.id.videoId : null,
        snippet: {
          title: video.snippet.title,
          description: video.snippet.description,
          publishedAt: video.snippet.publishedAt,
        },
      }
    })
  } else {
    videos = null
  }

  return {
    props: {
      videos,
    },
  }
}

export default Games
