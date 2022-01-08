import styles from '../styles/Hero.module.css'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.hero}>
      <h1>{t('welcome')}</h1>
      <h2>{t('energy')}</h2>
    </div>
  )
}

export default Hero