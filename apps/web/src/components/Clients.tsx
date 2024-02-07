import React from 'react'
import { clients } from '../constants'
import styles from '../style'
import { clientsTypes } from 'src/models/type/ui.type'

export default function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client: clientsTypes) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={client.logo} alt='client_logo' className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}
