"use client"

import SignUpForm from "@/components/forms/SignUpForm"
import { Button } from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import { useState } from "react"

const SignUpPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const handleClose = () => setIsOpen(false) 

    return (
        <>
            <Button className="primary" onClick= {() => setIsOpen(true)}>
                    Signup
             </Button>
            <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    title="Create Account"
            >
                <SignUpForm onSuccess={handleClose} />
            </Modal >
         </>
        )
}

export default SignUpPage
