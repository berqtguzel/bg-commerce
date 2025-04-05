"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "../../assets/images/logo.png"
import styles from "./header.module.css"
import { Input } from '../input'
import { headerComponents } from '@/common/mocks/header'
import { useRouter } from 'next/navigation' // Next.js yönlendirme hook'u

const Header: React.FC = () => {
  const router = useRouter()

  const handleClick = (index: number) => {
    
    if (index === headerComponents.length - 1) {
      router.push("/login")
    }
  }

  return (
    <div className={styles.header}>
      <Image src={Logo} alt="Logo" width={75} height={75} />
      <Input />
      <div className={styles.headerComponentContainer}>
        {headerComponents.map((component, index) => (
          <div
            key={index}
            className={styles.headerComponent}
            onClick={() => handleClick(index)}
          >
            {component.buttonSrc}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
