import React from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'

type Props = {
  activeModal: boolean
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
  handleDelete: () => void
  result: any
  refetch?: any
}

export const DeleteModal = ({ activeModal, setActiveModal, handleDelete, result, refetch }: Props) => {
  const onClose = () => {
    setActiveModal(false)
  }
  const { isLoading, isSuccess, error, reset } = result

  if (isSuccess && activeModal) {
    if (refetch) {
      refetch()
    }
    reset()
    setActiveModal(false)
  }

  return (
    <Modal activeModal={activeModal} onClose={onClose} centered title='Are you sure you want to delete?'>
      <div className='text-base text-slate-600 dark:text-slate-300'>
        Please note that if you choose to log out, all active sessions will be terminated and any unsaved data may be
        lost. Ensure you have saved your progress before proceeding.
      </div>
      <div className='mt-[20px] flex justify-evenly'>
        <Button disabled={isLoading} text='Yes, proceed' className='btn-success' onClick={handleDelete} />
        <Button disabled={isLoading} text='No, cancel' className='btn-danger' onClick={onClose} />
      </div>
      {error && <Alert label={`${error?.status} ${JSON.stringify(error?.data)}`} className='alert-danger light-mode' />}
    </Modal>
  )
}
