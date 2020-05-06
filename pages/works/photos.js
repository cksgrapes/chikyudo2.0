import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SinglePhoto from '~/components/SinglePhoto'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchPhotos } from '~/components/general/fetch'

const Photos = ({ posts }) => {
  if (!posts) {
    return null
  }

  return (
    <>
      <NextSeo title="Photos - 千柩堂" description="さまざまの景色" />
      <Layout>
        <CategoryHeading
          name="Photos"
          description="さまざまの景色"
          type="works"
        />
        {posts.map((post) => (
          <SinglePhoto data={post} key={post.id} />
        ))}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetchPhotos()

  return {
    props: {
      posts: posts.data,
    },
  }
}

export default Photos
