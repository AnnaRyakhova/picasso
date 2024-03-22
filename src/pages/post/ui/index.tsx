import { useParams } from 'react-router-dom'
import styles from './index.module.css'

export const PostPage = () => {
  const params = useParams()
  const id = params.id?.slice(1)
  console.log(id)
  const post = { title: 'title', text: 'text' }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  )
}
