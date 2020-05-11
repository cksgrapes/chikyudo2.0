import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import { getContentPaths, getBlogEntries } from '~/components/general/fetch'
import getMeta from '~/components/general/getMeta'

type SingleBlogPostProps = {
  post: {
    title: string
    body: string
    slug: string
    metaDescription: string
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
}

const SingleBlogPost = ({ post }: SingleBlogPostProps) => {
  const meta = getMeta(post, post.body)
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={meta.openGraph}
      />
      <Layout>
        <SingleBlog post={post} isArchive={false} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getContentPaths('blog', '/blog')
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
}: any) => {
  const post = await getBlogEntries('single', params.slug, preview)
  return {
    props: {
      post: post,
    },
  }
}

export default SingleBlogPost
