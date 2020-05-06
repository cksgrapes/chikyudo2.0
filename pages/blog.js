import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchEntries } from '~/components/general/fetch'

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo title="Blog - 千柩堂" description="しんしんと蓄積される" />
      <Layout>
        <CategoryHeading
          name="Blog"
          description="しんしんと蓄積される"
          type="blog"
        />
        <CheckHasPosts posts={posts}>
          {posts.map((post) => (
            <SingleBlog key={post.fields.slug} post={post} />
          ))}
        </CheckHasPosts>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const posts = await fetchEntries({
    content_type: 'blog',
    order: '-sys.createdAt',
  })
  return {
    props: {
      posts,
    },
  }
}

export default Blog
