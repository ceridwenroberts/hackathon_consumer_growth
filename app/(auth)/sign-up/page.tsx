"use client"

import SignUpForm from "@/components/forms/SignUpForm"
import SignUpModal from "@/components/forms/signUpModal"
import { Button } from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import { useState } from "react"

const SignUpPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const handleClose = () => setIsOpen(false) 

    return (
        <>
        <SignUpModal />
            {/* <Button className="primary" onClick= {() => setIsOpen(true)}>
                    Signup
             </Button>
            <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    title="Create Account"
            >
                <SignUpForm onSuccess={handleClose} />
            </Modal > */}
         </>
        )
}

export default SignUpPage
