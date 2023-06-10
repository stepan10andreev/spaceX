import React, { FC } from 'react';
import styles from './rightmaincontent.css';
import { InfoCard } from '../../ui-components/InfoCard';
import { motion } from 'framer-motion';


export const RightMainContent: FC = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, x: 600}}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6}}
    >
      <InfoCard text1={'Мы'} text2={'1'} text3={'на рынке'}/>
      <InfoCard text1={'Гарантируем'} text2={'50%'} text3={'безопасности'}/>
      <InfoCard text1={'Календарик за'} text2={'2001'} text3={'в подарок'}/>
      <InfoCard text1={'Путешествие'} text2={'597'} text3={'дней'}/>
    </motion.div>
  );
}
