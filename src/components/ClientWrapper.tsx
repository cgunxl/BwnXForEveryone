'use client'

import { useState } from 'react'
import { Header } from './Header'
import { SlideMenu } from './SlideMenu'

export function ClientWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} />
      <SlideMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  )
}