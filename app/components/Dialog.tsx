"use client"
import { useSearchParams } from "next/navigation"
import { useRef, useEffect, useState } from "react"
import React from 'react'

type Props = {
    onClose: () => void,
    children: React.ReactNode,
}



export default function Dialog({onClose, children}: Props) {
  const [shareState, setShareState] = useState(false)
  const searchParams = useSearchParams()
  const dialogRef = useRef<null | HTMLDialogElement>(null)
  const showDialog = searchParams.get('showDialog')

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [showDialog])

  const closeDialog = () => {
    dialogRef.current?.close()
    onClose()
  }

  const dialog: JSX.Element | null = showDialog === 'y'
  ? (
    <dialog ref={dialogRef} className="backdrop:bg-gray-800/50">
      <div>
        <div>
          <button 
          onClick={closeDialog}
          >X</button>
        </div>
        <div>
          {children}
        </div>
      </div>

      </dialog>
  ) : null

  return dialog
}
