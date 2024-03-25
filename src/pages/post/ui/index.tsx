import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.css'
import { useGetPostByIdQuery } from '../../../app/api'

export const PostPage = () => {
  const params = useParams()
  const id = Number(params.id)
  const { data: post, isSuccess } = useGetPostByIdQuery(id)

  const navigate = useNavigate()
  const handleReturn = () => navigate(-1)

  if (isSuccess) {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>{post.title}</h2>
        <p>{post.body}</p>
        <button className={styles.button} onClick={handleReturn}>
          Назад
        </button>
      </div>
    )
  }
}
