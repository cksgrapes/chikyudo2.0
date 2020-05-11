import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import { getBookEntries, getContentPaths } from '~/components/general/fetch'
import getMeta from '~/components/general/getMeta'

type SingleBookPostProps = {
  post: {
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
    metaDescription: string
    ogpImage: string
  }
}

const SingleBookPost = ({ post }: SingleBookPostProps) => {
  if (post.ogpImage == null) {
    post.ogpImage = `https:${post.coverimage[0].fileUrl}`
  }

  const meta = getMeta(post, post.intro)
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={meta.openGraph}
      />
      <Layout>
        <SingleBook post={post} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getContentPaths('books', '/works/books')
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getBookEntries(true, params.slug)
  return {
    props: {
      post: post,
    },
  }
}

export default SingleBookPost
