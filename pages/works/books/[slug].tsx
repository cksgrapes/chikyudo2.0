import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import { getBookEntries, getContentPaths } from '~/components/general/fetch'
import getMetaDesc from '~/components/general/getMetaDesc'

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
  }
}

const SingleBookPost = ({ post }: SingleBookPostProps) => {
  return (
    <>
      <NextSeo
        title={`${post.title} - 千柩堂`}
        description={getMetaDesc(post.metaDescription, post.intro)}
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
