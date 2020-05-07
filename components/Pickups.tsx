import { useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from '@material-ui/icons'
import classNames from 'classnames'
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs'
import styles from '~/components/styles/modules/layouts/General.module.scss'
import postStyles from '~/components/styles/modules/layouts/Post.module.scss'
import tabStyles from '~/components/styles/modules/components/Tab.module.scss'

const NoData = () => {
  return <p>Sorry. No Data : (</p>
}

type AllPostsLinkProps = {
  text: string
  path: string
}
const AllPostsLink = ({ text, path }: AllPostsLinkProps) => {
  return (
    <div className={postStyles.post_moreWrap}>
      <Link href={path}>
        <a className={postStyles.post_more}>
          {text}
          <ChevronRight />
        </a>
      </Link>
    </div>
  )
}

type BookPanelProps = {
  data: {
    title: string
    slug: string
    coverUrl: string
  }
}
const BookPanel = ({ data }: BookPanelProps) => {
  return data ? (
    <>
      <Link href={`/works/books/[slug]`} as={`/works/books/${data.slug}`}>
        <a>
          <picture>
            <source
              type="image/webp"
              srcSet={`https:${data.coverUrl}?fm=webp`}
            />
            <img src={`https:${data.coverUrl}`} alt={data.title} />
          </picture>
        </a>
      </Link>
      <AllPostsLink text="All Books" path="/works/books" />
    </>
  ) : (
    <NoData />
  )
}

type GamePanelProps = {
  data: {
    id: string
  }
}
const GamePanel = ({ data }: GamePanelProps) => {
  return data ? (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${data.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://img.youtube.com/vi/${data.id}/maxresdefault.jpg`}
          alt=""
        />
      </a>
      <AllPostsLink text="All Games" path="/works/game" />
    </>
  ) : (
    <NoData />
  )
}

type PhotoPanelProps = {
  data: {
    permalink: string
    media_url: string
  }
}
const PhotoPanel = ({ data }: PhotoPanelProps) => {
  return data ? (
    <>
      <a href={data.permalink} target="_blank" rel="noopener noreferrer">
        <img src={data.media_url} alt="" />
      </a>
      <AllPostsLink text="All Photos" path="/works/photos" />
    </>
  ) : (
    <NoData />
  )
}

type PickupsProps = {
  book: {
    title: string
    slug: string
    coverUrl: string
  } | null
  game: {
    id: string
  } | null
  photo: {
    permalink: string
    media_url: string
  } | null
  page?: boolean
}
const Pickups = ({ book, game, photo, page }: PickupsProps) => {
  useEffect(() => {
    resetIdCounter()
  }, [])

  return (
    <Tabs
      className={classNames(tabStyles.tabWrap, {
        [`${tabStyles['tabWrap-page']}`]: page,
      })}
    >
      <TabList className={tabStyles.tab}>
        <Tab>Book</Tab>
        <Tab>Game</Tab>
        <Tab>Photo</Tab>
      </TabList>

      <TabPanel>
        <div className={styles.pickup}>
          <BookPanel data={book} />
        </div>
      </TabPanel>

      <TabPanel>
        <div className={classNames(styles.pickup, styles['pickup-game'])}>
          <GamePanel data={game} />
        </div>
      </TabPanel>

      <TabPanel>
        <div className={styles.pickup}>
          <PhotoPanel data={photo} />
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default Pickups
