import Layout from '~/components/Layout'
import SingleBook from '~/components/SingleBook'
import { fetchEntries } from '~/components/general/fetch'

const meta = {
  title: 'Books詳細 - 千柩堂',
  description: '',
}

const SingleBookPost = (post) => {
  return (
    <Layout meta={meta}>
      <SingleBook post={post} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fetchEntries({
    content_type: 'books',
  })

  const paths = posts.map((post) => `/books/${post.fields.slug}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const posts = await fetchEntries({
    content_type: 'books',
    'fields.slug': params.slug,
  })

  return { props: posts[0] }
}

export default SingleBookPost
