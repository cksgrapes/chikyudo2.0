import { GetStaticProps } from 'next'
import Layout from '~/components/Layout'
import {
  fetchEntries,
  fetchVideos,
  fetchPhotos,
} from '~/components/general/fetch'

// const getWorkItems = () => {
//   return [
//       { name: 'Book', path: '/'},
//       { name: 'Game', path: '/'},
//       // { name: 'Song', path: '/'},
//       { name: 'Photo', path: '/'},
//   ];
// };

// const pickupBook = () => {
//   return(
//     <div className="pickup_book">
//         <Link href="/"><a><img src="https://placehold.jp/150x300.png" /></a></Link>
//     </div>
//   );
// };

// const pickupGame = () => {
//   return(
//     <div className="pickup_book">
//         <Link href="/"><a><img src="https://placehold.jp/300x150.png" /></a></Link>
//     </div>
//   );
// };

// const pickupPhoto = () => {
//   return(
//     <div className="pickup_photo">
//         <Link href="/"><a><img src="https://placehold.jp/150x150.png" /></a></Link>
//     </div>
//   );
// };

// const pickupItems = () => {
//   return [
//       {
//         id: 'book',
//         view: pickupBook
//       },
//       {
//         id: 'game',
//         view: pickupGame
//       },
//       {
//         id: 'photo',
//         view: pickupPhoto
//       }
//   ];
// }

const Home = ({ pickupBook, pickupGame, pickupPhoto }) => {
  console.log({ pickupBook })
  console.log({ pickupGame })
  console.log({ pickupPhoto })
  return (
    <>
      <Layout>
        {/* {posts.length > 0
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
        </div> */}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pickupBook = await fetchEntries({
    content_type: 'books',
    order: '-fields.issue',
    limit: 1,
  })
  const pickupGame = await fetchVideos('search', {
    part: 'id,snippet',
    channelId: 'UCfN4BiPIfaTzuuX2n1aYyRg',
    order: 'date',
    maxResults: 1,
  })
  const pickupPhoto = await fetchPhotos(1)

  return {
    props: {
      pickupBook: pickupBook[0],
      pickupGame: pickupGame[0],
      pickupPhoto: pickupPhoto.data[0],
    },
  }
}

export default Home
