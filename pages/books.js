import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import CheckHasPosts from '~/components/CheckHasPosts'
import CategoryHeading from '~/components/elements/CategoryHeading'
import { fetchEntries } from '~/components/general/fetchEntries';

const meta = {
  title: 'Books - 千柩堂',
  description: 'ですくりぷしょん'
};

const Blog = ( {posts} ) => {
  return(
    <Layout meta={meta}>
      <CategoryHeading
        name="Books"
        description="出版物"
      />
      <CheckHasPosts posts={posts}>
        {posts.map(post => (<SingleBook key={post.fields.slug} post={post} />))}
      </CheckHasPosts>
    </Layout>
  )
}

export async function getStaticProps({params}) {
  const posts = await fetchEntries({
    content_type: 'books',
    order: '-fields.issue'
  })
  return {
    props: {
      posts
    }
  };
}

export default Blog
