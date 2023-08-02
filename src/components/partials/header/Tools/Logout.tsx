import React from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/reducers/authSlice'

export const Logout = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <Modal activeModal={true} onClose={onClose} centered title='Are you sure you want to log out?'>
      <div className='text-base text-slate-600 dark:text-slate-300'>
        Please note that if you choose to log out, all active sessions will be terminated and any unsaved data may be
        lost. Ensure you have saved your progress before proceeding.
      </div>
      <div className='mt-[20px] flex justify-evenly'>
        <Button text='Yes, proceed' className='btn-success' onClick={handleLogout} />
        <Button text='No, cancel' className='btn-danger' onClick={onClose} />
      </div>
    </Modal>
  )
}
