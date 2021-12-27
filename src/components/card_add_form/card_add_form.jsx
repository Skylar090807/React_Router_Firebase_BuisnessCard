import React, { useRef } from 'react'
import Button from '../button/button'
import ImageFileInput from '../image_file_input/image_file_input'
import styles from './card_add_form.module.css'

const CardAddForm = (onAdd) => {
  //editor에서 전달받음
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const onSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    }
    formRef.current.reset()
    onAdd(card)
  }
  return (
    // option 누른 상태에서 원하는 단어들 다중선택 -> option+shift+방향키 누르고 단어 선택되면 한번에 copy
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company" />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="message"></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm
