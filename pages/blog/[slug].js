import { useLayoutEffect } from 'react'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import SingleBlog from '~/components/SingleBlog'
import { fetchEntries } from '~/components/general/fetch'
import getMetaDesc from '~/components/general/getMetaDesc'

const SingleBlogPost = (post) => {
  return (
    <>
      <NextSeo
        title={`${post.fields.title} - 千柩堂`}
        description={getMetaDesc(post.fields.metaDescription, post.fields.body)}
      />
      <Layout>
        <SingleBlog post={post} isArchive={false} />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await fetchEntries({
    content_type: 'blog',
  })

  const paths = posts.map((post) => `/blog/${post.fields.slug}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const posts = await fetchEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  })

  return { props: posts[0] }
}

export default SingleBlogPost
