import { Icon } from '../../../shared/icon'
import { Post } from '../types'
import styles from './index.module.css'

export const PostCard = ({ id, title, body }: Post) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.title}>
          <p>{id}</p>
          <h2>{title}</h2>
        </div>

        <p className={styles.text}>{body}</p>
      </div>

      <button className={styles.button}>
        <Icon type="view" className={styles.icon} />
      </button>
    </div>
  )
}
