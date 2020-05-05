import Layout from '~/components/Layout'
import SinglePhoto from '~/components/SinglePhoto'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchPhotos } from '~/components/general/fetch'

const meta = {
  title: 'Photos - 千柩堂',
  description: 'ですくりぷしょん',
}

function Photos ({ posts }) {
  if (!posts) {
    return null;
  }

  return (
    <Layout meta={meta}>
      <CategoryHeading name="Photos" description="Instagram" />
      {posts.map((post) => (
          <SinglePhoto data={post} key={post.id} />
        ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await fetchPhotos()

  return {
    props: {
      posts: posts.data
    }
  }
}

export default Photos
