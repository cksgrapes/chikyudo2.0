import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '~/components/Layout'
import Pickups from '~/components/Pickups'
import { getPickups } from '~/components/general/fetch'

type HomeProps = {
  pickupBook: {
    title: string
    slug: string
    coverUrl: string
  } | null
  pickupGame: {
    id: string
  } | null
  pickupPhoto: {
    permalink: string
    media_url: string
  } | null
}

const Home = ({ pickupBook, pickupGame, pickupPhoto }: HomeProps) => {
  return (
    <>
      <Layout>
        <Pickups book={pickupBook} game={pickupGame} photo={pickupPhoto} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { pickupBook, pickupGame, pickupPhoto } = await getPickups()
  return {
    props: {
      pickupBook: pickupBook
        ? {
            title: pickupBook.fields.title,
            slug: pickupBook.fields.slug,
            coverUrl: pickupBook.fields.coverimage[0].fields.file.url,
          }
        : null,
      pickupGame: pickupGame
        ? {
            id: pickupGame.id.videoId,
          }
        : null,
      pickupPhoto: pickupPhoto
        ? {
            permalink: pickupPhoto.permalink,
            // eslint-disable-next-line @typescript-eslint/camelcase
            media_url: pickupPhoto.media_url,
          }
        : null,
    },
  }
}

export default Home
