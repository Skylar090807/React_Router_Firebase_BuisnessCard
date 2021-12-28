import React, { useState } from 'react'
import { useRef } from 'react/cjs/react.development'
import styles from './image_file_input.module.css'

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false) // ladingSpinner, fileupload button
  const inputRef = useRef()
  const onButtonClick = (event) => {
    event.preventDefault()
    inputRef.current.click()
  }

  const onChange = async (event) => {
    setLoading(true) // ladingSpinner, fileupload button
    //async 없이 imageUploader.upload(event.target.files[0]).then(console.log)도 가능하나, 리스너 콜백 자체를 async라고 붙여주고 uploaded = await 해주면 비동기적으로 할 수 있다.
    const uploaded = await imageUploader.upload(event.target.files[0]) //service>upload 받아옴. async이기 때문에 promise가 전달 된다.
    setLoading(false) // ladingSpinner, fileupload button
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  }
  return (
    // trick! css에서 input을 보여주지 않고, 내가 정의한 UI를 보여주되 UI에서 클릭 발생 시 input을 수동적 코드로 클릭.
    <div className={styles.container}>
      <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange} />
      {!loading && ( //!loading -> fasle for css
        <button className={`${styles.button} ${name ? styles.pink : styles.aliceblue}`} onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>} {/* loading -> true for css  */}
    </div>
  )
}

export default ImageFileInput
