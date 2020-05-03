import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Link from 'next/link';
import { fetchEntries } from '../components/functions/fetchEntries';

const meta = {
  title: 'ブログ記事 - 千柩堂',
  description: 'ですくりぷしょん'
};

const Blog = ( {posts} ) => {
  return(
    <ul>
    {posts.map(post => (
      <li key={post.fields.slug}><Link href={`/blog/${post.fields.slug}`}><a>{post.fields.title}</a></Link></li>
    ))}
  </ul>
  )
}

export async function getStaticProps({params}) {
  const blogPosts = await fetchEntries({
    content_type: 'blog'
  })
  return {
    props: {
      posts: blogPosts
    }
  };
}

export default Blog
