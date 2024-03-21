import { getPosts } from '../../../pages/main/api/getPosts'
import { Post } from '../../../entities/post/types'
import { useEffect, useState } from 'react'
import { PostCard } from '../../../entities/post'
import styles from './index.module.css'

export const MainPage = () => {
  const [posts, setPosts] = useState(Array<Post>)

  useEffect(() => {
    ;(async () => {
      const response = await getPosts()
      setPosts(response)
    })()
  })

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Posts</h1>
      {posts.map(({ id, title, body }) => (
        <PostCard id={id} title={title} body={body} />
      ))}
    </div>
  )
}
