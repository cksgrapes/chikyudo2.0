import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SinglePhoto from '~/components/SinglePhoto'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchPhotos } from '~/components/general/fetch'
import SEO from '~/next-seo.config'

type PhotoProps = {
  posts: {
    id: string
    permalink: string
    media_url: string
    caption: string
    timestamp: Date
    media_type: string
  }[]
}

const Photos = ({ posts }: PhotoProps) => {
  if (posts == null) return null
  return (
    <>
      <NextSeo
        title="Photos - 千柩堂"
        description="さまざまの景色"
        openGraph={{
          title: 'Photos - 千柩堂',
          description: 'さまざまの景色',
          type: 'article',
          url: `${SEO.openGraph.url}works/photos`,
        }}
      />
      <Layout>
        <CategoryHeading
          name="Photos"
          description="さまざまの景色"
          type="works"
        />
        {posts
          ? posts.map((post) => <SinglePhoto data={post} key={post.id} />)
          : null}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetchPhotos()
  return {
    props: {
      posts: posts ? posts.data : null,
    },
  }
}

export default Photos
