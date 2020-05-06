import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import classNames from 'classnames'
import { GetStaticProps } from 'next'
import { ChevronRight } from '@material-ui/icons'

import Link from 'next/link'
import Layout from '~/components/Layout'
import {
  fetchEntries,
  fetchVideos,
  fetchPhotos,
} from '~/components/general/fetch'

import styles from '~/components/styles/modules/layouts/General.module.scss'
import postStyles from '~/components/styles/modules/layouts/Post.module.scss'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}))

const Home = ({ pickupBook, pickupGame, pickupPhoto }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <>
      <Layout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Book" {...a11yProps(0)} />
              <Tab label="Game" {...a11yProps(1)} />
              <Tab label="Photo" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div
                className={classNames(postStyles.post, styles.commonSection)}
              >
                <div className="topBooks">
                  <Link
                    href={`/books/[slug]`}
                    as={`/books/${pickupBook.fields.slug}`}
                  >
                    <a>
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={`https:${pickupBook.fields.coverimage[0].fields.file.url}?fm=webp`}
                        />
                        <img
                          src={`https:${pickupBook.fields.coverimage[0].fields.file.url}`}
                          alt={pickupBook.fields.title}
                        />
                      </picture>
                    </a>
                  </Link>
                </div>
                <div className={postStyles.post_moreWrap}>
                  <Link href='/books'>
                    <a className={postStyles.post_more}>
                      All Books
                      <ChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div
                className={classNames(postStyles.post, styles.commonSection)}
              >
                <div className="topBooks">
                  <a
                    href={`https://www.youtube.com/watch?v=${pickupGame.id.videoId}`}
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${pickupGame.id.videoId}/maxresdefault.jpg`}
                      alt=""
                    />
                  </a>
                </div>
                <div className={postStyles.post_moreWrap}>
                  <Link href='/games'>
                    <a className={postStyles.post_more}>
                      All Games
                      <ChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div
                className={classNames(postStyles.post, styles.commonSection)}
              >
                <div className="topBooks">
                  <a
                    href={pickupPhoto.permalink}
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={pickupPhoto.media_url} alt="" />
                  </a>
                </div>
                <div className={postStyles.post_moreWrap}>
                  <Link href='/photos'>
                    <a className={postStyles.post_more}>
                      All Photos
                      <ChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
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
