import React, { useRef, useState } from 'react'
import Button from '../button/button'
import styles from './card_add_form.module.css'

const CardAddForm = ({ FileInput, onAdd }) => {
  //editor에서 전달받음
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [file, setFile] = useState({ fileName: null, fileURL: null })

  const onFileChange = (file) => {
    console.log(file)
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }
    formRef.current.reset()
    setFile({ fileName: null, fileURL: null })
    onAdd(card)
  }
  return (
    // option 누른 상태에서 원하는 단어들 다중선택 -> option+shift+방향키 누르고 단어 선택되면 한번에 copy
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company" />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message" />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm
