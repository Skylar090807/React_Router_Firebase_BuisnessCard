import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css' // PostCSS
import App from './app'
import reportWebVitals from './reportWebVitals'
import { firebaseApp } from './service/firebase'
import AuthService from './service/auth_service' // Dependency Injection
import ImageUploader from './service/image_uploader'
import ImageFileInput from './components/image_file_input/image_file_input'

// Dependency Injection
const authService = new AuthService(firebaseApp)
//
const imageUploader = new ImageUploader()
const FileInput = (props) => <ImageFileInput {...props} imageUploader={imageUploader} />
//component를 index에 prop으로 받아와서 쓸 때의 장점: 쓸데없이 많은 서비스를 전달하지 않아도 된다.
// FileInput에 더 많은 서비스가 필요하다면 여기에서 수정 가능. 때문에 심플하게 dependency injection할 수 있다.

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
    {/* FileInput처럼 component prop은 대문자로 시작. */}
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
