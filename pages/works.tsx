import { GetStaticProps } from 'next'

import React from 'react'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import Pickups from '~/components/Pickups'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { getPickups } from '~/components/general/fetch'

type WorksProps = Partial<{
  pickupBook: React.FC
  pickupGame: React.FC
  pickupPhoto: React.FC
}>

const Works: React.FC<WorksProps> = ({
  pickupBook,
  pickupGame,
  pickupPhoto,
}) => {
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
  const props = await getPickups()
  return {
    props,
  }
}

export default Works
