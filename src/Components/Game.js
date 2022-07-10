import Image from 'next/image'
import styles from '../styles/game.module.scss'
import Link from 'next/link'

const Game = ({ title, href, image, children, ...props }) => (
  <div className={styles.card} {...props}>
    <Link href={href}>
      <a>
        <Image
          src={image}
          alt={title}
          width={250}
          height={200}
          style={{ borderRadius: 5 }}
        />
        <h2>{title}</h2>
        {children}
      </a>
    </Link>
  </div>
)

export default Game
