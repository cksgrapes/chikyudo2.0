import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '~/components/Layout'
import Pickups from '~/components/Pickups'
import { getPickups } from '~/components/general/fetch'

type HomeProps = Partial<{
  pickupBook: React.FC
  pickupGame: React.FC
  pickupPhoto: React.FC
}>

const Home: React.FC<HomeProps> = ({ pickupBook, pickupGame, pickupPhoto }) => {
  return (
    <>
      <Layout>
        <Pickups book={ pickupBook } game={ pickupGame } photo={ pickupPhoto } />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await getPickups()
  return {
    props,
  }
}

export default Home
