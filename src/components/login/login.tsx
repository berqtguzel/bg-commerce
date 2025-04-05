"use client"
import React from 'react'
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <h2>Giriş Yap</h2>
        <form>
          <input
            type="text"
            placeholder="E-posta"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Şifre"
            className={styles.input}
          />
          <button type="submit" className={styles.loginButton}>Giriş Yap</button>
        </form>
        <p className={styles.bottomText}>
          Hesabınız yok mu? <a href="#">Kayıt Ol</a>
        </p>
      </div>
    </div>
  )
}

export default Login
