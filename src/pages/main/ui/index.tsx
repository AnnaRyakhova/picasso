import { Post } from '../../../entities/post/types'
import { PostCard } from '../../../entities/post'
import styles from './index.module.css'
import { useGetPostsQuery } from '../../../app/api'
import { useEffect, useState } from 'react'

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [posts, setPosts] = useState(Array<Post>)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const { data, refetch } = useGetPostsQuery({ limit: 10, page: currentPage })

  useEffect(() => {
    if (fetching) {
      setCurrentPage((prev) => prev + 1)

      refetch().then(() => {
        if (data) {
          setFetching(false)
          setPosts((prevPosts) => [...prevPosts, ...data.response])
          setTotalCount(data.totalCount)
        }
      })
    }
  }, [data, fetching])

  const isEnoughPosts = posts.length < totalCount

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isEnoughPosts])

  const handleScroll = (e: Event) => {
    const document = e.target as Document
    const isEnoughScroll =
      document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100

    if (isEnoughScroll && isEnoughPosts) {
      setFetching(true)
    }
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Posts</h1>
      {posts?.map(({ id, title, body }: Post) => (
        <PostCard id={id} title={title} body={body} url={`post/${id}`} key={id} />
      ))}
    </div>
  )
}
