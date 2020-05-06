import React from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchEntries } from '~/components/general/fetch'

type BlogProps = {
  posts: object[]
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      <NextSeo title="Books - 千柩堂" />
      <Layout>
        <CategoryHeading name="Books" description="出版物" type="works" />
        <CheckHasPosts posts={posts}>
          {posts.map((post: any) => (
            <SingleBook key={post.fields.slug} post={post} />
          ))}
        </CheckHasPosts>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await fetchEntries({
    content_type: 'books',
    order: '-fields.issue',
  })
  return {
    props: {
      posts,
    },
  }
}

export default Blog
