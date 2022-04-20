import Image from 'next/image'
import src from '../../assets/images/investment.svg'
import styles from './ImageBackground.module.css'

const Background = () => (
  <div>
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export default Background
