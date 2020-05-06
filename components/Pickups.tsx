import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from '@material-ui/icons'
import classNames from 'classnames'

import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs'

import styles from '~/components/styles/modules/layouts/General.module.scss'
import postStyles from '~/components/styles/modules/layouts/Post.module.scss'
import tabStyles from '~/components/styles/modules/components/Tab.module.scss'

const BookPanel = ({ data }) => {
  return (
    <>
      <Link
        href={`/works/books/[slug]`}
        as={`/works/books/${data.fields.slug}`}
      >
        <a>
          <picture>
            <source
              type="image/webp"
              srcSet={`https:${data.fields.coverimage[0].fields.file.url}?fm=webp`}
            />
            <img
              src={`https:${data.fields.coverimage[0].fields.file.url}`}
              alt={data.fields.title}
            />
          </picture>
        </a>
      </Link>
      <div className={postStyles.post_moreWrap}>
        <Link href="/books">
          <a className={postStyles.post_more}>
            All Books
            <ChevronRight />
          </a>
        </Link>
      </div>
    </>
  )
}

const GamePanel = ({ data }) => {
  return (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${data.id.videoId}`}
        target="_blank"
        rel="noopener"
      >
        <img
          src={`https://img.youtube.com/vi/${data.id.videoId}/maxresdefault.jpg`}
          alt=""
        />
      </a>
      <div className={postStyles.post_moreWrap}>
        <Link href="/works/games">
          <a className={postStyles.post_more}>
            All Games
            <ChevronRight />
          </a>
        </Link>
      </div>
    </>
  )
}

const PhotoPanel = ({ data }) => {
  return (
    <>
      <a href={data.permalink} target="_blank" rel="noopener">
        <img src={data.media_url} alt="" />
      </a>
      <div className={postStyles.post_moreWrap}>
        <Link href="/works/photos">
          <a className={postStyles.post_more}>
            All Photos
            <ChevronRight />
          </a>
        </Link>
      </div>
    </>
  )
}

type PickupsProps = {
  book: React.FC
  game: React.FC
  photo: React.FC
  page?: boolean
}

const Pickups: React.FC<PickupsProps> = ({ book, game, photo, page }) => {

  useEffect(() => {
    resetIdCounter();
  }, []);

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
