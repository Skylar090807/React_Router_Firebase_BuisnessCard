import React from 'react'
import { useRef } from 'react/cjs/react.development'
import Button from '../button/button'

import styles from './card_edit_form.module.css'

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const { name, company, title, email, message, theme, fileName, fileURL } = card

  const onFileChange = (file) => {
    updateCard({
      ...card, //spread operator
      fileName: file.name,
      fileURL: file.url,
    })
  }

  //input에서 변경 사항이 생기면 onChange가 발생한다. 이때 내가 정의해둔 함수 onChange가 호출 된다.
  const onChange = (event) => {
    if (event.currentTarget == null) {
      //이벤트에 체인지 currentTarget null이면 아무것도 하지 않는다.
      return
    }
    event.preventDefault() //브라우저에서 기본적인 이벤트 처리하지 않도록 해둔다.
    //이벤트에 currentTarget에 있는 name이 card에 있는 key가 되고 value를 value로 쓴다.
    updateCard({
      //callback updateCard from CardEditForm
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  const onSubmit = () => {
    deleteCard(card)
  }
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" ref={nameRef} value={name} onChange={onChange} />
      <input className={styles.input} type="text" name="company" ref={companyRef} value={company} onChange={onChange} />
      <select className={styles.select} name="theme" ref={themeRef} value={theme} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" ref={titleRef} value={title} onChange={onChange} />
      <input className={styles.input} type="text" name="email" ref={emailRef} value={email} onChange={onChange} />
      <textarea className={styles.textarea} ref={messageRef} name="message" value={message} onChange={onChange} />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm
