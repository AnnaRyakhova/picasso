import { Icon } from '../../../shared/icon'
import { Post } from '../types'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

export const PostCard = ({ id, title, body, url }: Post) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.title}>
          <p>{id}</p>
          <h2>{title}</h2>
        </div>

        <p className={styles.text}>{body}</p>
      </div>

      <Link className={styles.button} to={url}>
        <Icon type="view" className={styles.icon} />
      </Link>
    </div>
  )
}
