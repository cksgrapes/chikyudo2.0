import { useEffect, useState } from 'react'
import Layout from '~/components/Layout'
import Link from 'next/link';
import ExLink from '~/components/elements/ExLink';
import { fetchEntries } from '~/components/general/fetchEntries';

const getWorkItems = () => {
  return [
      { name: 'Book', path: '/'},
      { name: 'Game', path: '/'},
      // { name: 'Song', path: '/'},
      { name: 'Photo', path: '/'},
  ];
};

const pickupBook = () => {
  return(
    <div className="pickup_book">
        <Link href="/"><a><img src="https://placehold.jp/150x300.png" /></a></Link>
    </div>
  );
};

const pickupGame = () => {
  return(
    <div className="pickup_book">
        <Link href="/"><a><img src="https://placehold.jp/300x150.png" /></a></Link>
    </div>
  );
};

const pickupPhoto = () => {
  return(
    <div className="pickup_photo">
        <Link href="/"><a><img src="https://placehold.jp/150x150.png" /></a></Link>
    </div>
  );
};

const pickupItems = () => {
  return [
      {
        id: 'book',
        view: pickupBook
      },
      {
        id: 'game',
        view: pickupGame
      },
      {
        id: 'photo',
        view: pickupPhoto
      }
  ];
}

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries({
        content_type: 'books'
      })
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return(
    <>
      <Layout>
        {posts.length > 0
          ? posts.map(p => (
          <p key={p.fields.title}>{p.fields.title}</p>
            ))
          : null}
        <div className="pickup">
          <ul className="pickup_nav">
            {getWorkItems().map(item => <li key={ item.name }>{ ExLink(item) }</li>)}
          </ul>
          <div className="pickup_items">
            {pickupItems().map(item => <div key={ item.id } className={ item.id }>{ item.view() }</div>)}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
