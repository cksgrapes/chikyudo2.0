import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { getBlogEntries } from '~/components/general/fetch'

type BlogProps = {
  title: string
  body: string
  slug: string
  date: {
    publishedAt: Date
    createdAt: Date
  }
  category: {
    title: string
    slug: string
  }
}

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo title="Blog - 千柩堂" description="ブログ" />
      <Layout>
        <CategoryHeading name="Blog" description="ブログ" type="blog" />
        {posts ? (
          posts.map((post: BlogProps) => (
            <SingleBlog key={post.slug} post={post} />
          ))
        ) : (
          <p>記事がありません。</p>
        )}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getBlogEntries(),
    },
  }
}

export default Blog
