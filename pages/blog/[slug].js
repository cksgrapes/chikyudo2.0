import Layout from '~/components/Layout'
import BlogTemplate from '~/components/BlogTemplate'
import { fetchEntries } from '~/components/general/fetchEntries';

const meta = {
  title: 'Blog - 千柩堂',
  description: 'ですくりぷしょん'
};

const SingleBlog = (post) => {
  return(
      <Layout meta={meta}>
        <BlogTemplate post={post} />
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

export default SingleBlog
