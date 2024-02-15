import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { feedbackTypes } from 'src/models/type/ui.type'

export default function Testimonials() {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
          Our Team
        </h2>
        {/* <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            ...
          </p>
        </div> */}
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card: feedbackTypes) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  )
}
