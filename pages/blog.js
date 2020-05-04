import Layout from '~/components/Layout'
import BlogTemplate from '~/components/BlogTemplate'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchEntries } from '~/components/general/fetchEntries';

const meta = {
  title: 'Blog - 千柩堂',
  description: 'ですくりぷしょん'
};

const Blog = ( {posts} ) => {
  return(
    <Layout meta={meta}>
      <CategoryHeading
        name="Blog"
        description="日々つれづれよもやまばなし"
      />
      {posts.map(post => (<BlogTemplate key={post.fields.slug} post={post} />))}
    </Layout>
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
