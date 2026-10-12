import { ReactNode } from "react"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    title:string
    children: ReactNode
    clickAway?: boolean
}

/* Usage
clickAway={false} disables close on click outside modal
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Confirm"
  clickAway={false}
>
  Are you super-duper sure?
</Modal>
 */

export default function Modal({ isOpen, onClose, title, children, clickAway }: ModalProps) {
    if (!isOpen) return null
    
    return (
        <div
            className=" fixed inset-0 z-50 flex items-center justify-center bg-teal-400/50 p-4"
        onClick={clickAway ? onClose : undefined}>
            <div role="dialog" aria-modal="true"
                className="w-full max-w-md rounded-xl p-6 bg-rose-300 drop-shadow-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}>
                <h2 className="mb-4 text-lg font-semibold">{title}</h2>
                {children}
                </div>
        </div>
    )
}
