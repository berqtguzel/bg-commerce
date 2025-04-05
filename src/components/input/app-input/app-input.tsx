import React from 'react'
import styles from "./app-input.module.css"
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon } from '@hugeicons/core-free-icons';

const Input = () => {
  return (
    <div className={styles.inputContainer}>
         <HugeiconsIcon
      icon={SearchIcon}
      size={16}
      color="orange"
      strokeWidth={1.5}
    />
        <input type="text" className={styles.input} />
    </div>
  )
}

export default Input