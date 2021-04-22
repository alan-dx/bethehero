import Modal from 'react-modal'

interface SignUpModalProps {
  isOpen: boolean
}

export default function SignUpModal({isOpen}: SignUpModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => console.log('fechar')}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => console.log('fechar modal')}
        className="react-modal-close"
      >
        X
      </button>
      <h1>SIGNUP</h1>
    </Modal>
  )
}