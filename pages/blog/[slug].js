import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import { fetchEntries } from '../../components/functions/fetchEntries';

const meta = {
  title: 'ブログ記事 - 千柩堂',
  description: 'ですくりぷしょん'
};

const BlogTemplate = (post) => {
  const {sys, fields} = post;

  return(
      <Layout meta={meta}>
      <Post
          heading="Blog"
          description="記事詳細"
      >
          <p>{ fields.title }</p>
          <p>詳細記事テスト。</p>
      </Post>
      </Layout>
  )
}
export async function getStaticPaths() {
  const blogPosts = await fetchEntries({
    content_type: 'blog'
  })

  const paths = blogPosts.map(post => `/blog/${post.fields.slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const blogPosts = await fetchEntries({
    content_type: 'blog'
  })
  const post = blogPosts.filter(post => post.fields.slug === params.slug)

  return { props: post[0] };
}

export default BlogTemplate
