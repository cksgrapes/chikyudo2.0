import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import { fetchEntries } from '~/components/general/fetch'
import getMetaDesc from '~/components/general/getMetaDesc'

type SingleBookPostProps = {
  post: {
    fields: {
      title: string
      intro: string
      metaDescription: string
    }
  }
}

const SingleBookPost = ({ post }: SingleBookPostProps) => {
  return (
    <>
      <NextSeo
        title={`${post.fields.title} - 千柩堂`}
        description={getMetaDesc(post.fields.metaDescription, post.fields.intro)}
      />
      <Layout>
        <SingleBook post={post} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: object[] = await fetchEntries({
    content_type: 'books',
  })

  const paths: string[] = posts.map(
    (post: { fields: { slug: string } }) => `/works/books/${post.fields.slug}`
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts: object[] = await fetchEntries({
    content_type: 'books',
    'fields.slug': params.slug,
  })

  return {
    props: {
      post: posts[0],
    },
  }
}

export default SingleBookPost
