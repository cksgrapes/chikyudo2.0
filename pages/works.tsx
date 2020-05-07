import { GetStaticProps } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import Pickups from '~/components/Pickups'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { getPickups } from '~/components/general/fetch'

type WorksProps = {
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

const Works = ({ pickupBook, pickupGame, pickupPhoto }: WorksProps) => {
  return (
    <>
      <NextSeo title="Works - 千柩堂" />
      <Layout>
        <CategoryHeading name="Works" description="作品" type="works" />
        <Pickups book={pickupBook} game={pickupGame} photo={pickupPhoto} page />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { pickupBook, pickupGame, pickupPhoto } = await getPickups()
  return {
    props: {
      pickupBook,
      pickupGame,
      pickupPhoto,
    },
  }
}

export default Works
