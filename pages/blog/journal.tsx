import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { getBlogEntries } from '~/components/general/fetch'
import SEO from '~/next-seo.config'

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
  ogpImage: any
}

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Journal - 千柩堂"
        description="日々つれづれよもやまばなし"
        openGraph={{
          title: 'Journal - 千柩堂',
          description: '日々つれづれよもやまばなし',
          type: 'article',
          url: `${SEO.openGraph.url}blog/journal`,
        }}
      />
      <Layout>
        <CategoryHeading
          name="Journal"
          description="日々つれづれよもやまばなし"
          type="blog"
        />
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
      posts: await getBlogEntries('category', 'journal'),
    },
  }
}

export default Blog
