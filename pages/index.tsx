import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '~/components/Layout'
import Pickups from '~/components/Pickups'
import { getPickups } from '~/components/general/fetch'

type HomeProps = Partial<{
  pickupBook: object
  pickupGame: object
  pickupPhoto: object
}>

const Home = ({ pickupBook, pickupGame, pickupPhoto }: HomeProps) => {
  return (
    <>
      <Layout>
        {/* <Pickups book={ pickupBook } game={ pickupGame } photo={ pickupPhoto } /> */}
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
