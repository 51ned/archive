import { useState } from 'react'

import styles from '@/components/form.module.scss'


export default function Form() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    let data = {
      name,
      phone,
      message
    }

    await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then((res) => {res.status === 200 && evt.target.reset()})
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.form__fieldset}>
        <legend className={styles.form__title}>Заявка on-line</legend>
        <label className={styles.form__name} htmlFor='name'>
          Меня зовут:
          <input
            autoComplete='on'
            className={styles.form__input}
            id='name'
            name='name'
            onChange={(evt)=>{setName(evt.target.value)}}
            placeholder='Имя'
            required
            type='text'
          />
        </label>
        <label className={styles.form__phone} htmlFor='phone'>
          Мой телефон:
          <input
            autoComplete='on'
            className={styles.form__input}
            id='phone'
            name='phone'
            onChange={(evt)=>{setPhone(evt.target.value)}}
            placeholder='Телефон'
            required
            type='tel'
          />
        </label>
        <label className={styles.form__comment} htmlFor='message'>
          Мои комментарии:
          <input
            className={styles.form__input}
            id='message'
            name='message'
            onChange={(evt)=>{setMessage(evt.target.value)}}
            placeholder='Перезвоните мне в 12:00'
          />
        </label>
        <label className={styles.form__agreement} htmlFor='agreement'>
          <input
            defaultChecked
            className={styles.form__checkbox}
            id='agreement'
            name='agreement'
            required
            type='checkbox'
          />
          Cогласие на обработку данных
        </label>
        <button
          className={styles.form__button}
          onChange={(evt)=>{setSubmitted(evt.target.value)}}
        >
          Свяжитесь со мной
        </button>
      </fieldset>
    </form>
  )
}
