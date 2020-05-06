import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchEntries } from '~/components/general/fetch'

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo title="Information - 千柩堂" description="お知らせ" />
      <Layout>
        <CategoryHeading
          name="Information"
          description="お知らせ"
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
    'fields.category.sys.contentType.sys.id': 'blogCategory',
    'fields.category.fields.slug': 'information',
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blog
