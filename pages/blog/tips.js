import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchEntries } from '~/components/general/fetch'

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo title="Tips - 千柩堂" description="Web制作やDTPなどの知識蔵" />
      <Layout>
        <CategoryHeading
          name="Tips"
          description="Web制作やDTPなどの知識蔵"
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
    'fields.category.fields.slug': 'tips',
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blog
