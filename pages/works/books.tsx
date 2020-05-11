import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { getBookEntries } from '~/components/general/fetch'
import SEO from '~/next-seo.config'

type BlogProps = {
  posts: {
    title: string
    slug: string
    coverimage: {
      id: string
      fileUrl: string
    }[]
    credit: string
    intro: string
    bookData: {
      price: number
      bookFormat: string
      pageNum: number
      issue: Date
    }
    sample: string
    booth: string
  }[]
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      <NextSeo
        title="Books - 千柩堂"
        description="出版物"
        openGraph={{
          title: 'Books - 千柩堂',
          description: '出版物',
          type: 'article',
          url: `${SEO.openGraph.url}works/books`,
        }}
      />
      <Layout>
        <CategoryHeading name="Books" description="出版物" type="works" />
        {posts
          ? posts.map((post: any) => <SingleBook key={post.slug} post={post} />)
          : null}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getBookEntries(),
    },
  }
}

export default Blog
