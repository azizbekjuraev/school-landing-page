import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import LandingPage from './landing_page/LandingPage'
const Dashboard: FC = () => {
  const { t } = useTranslation('common')
  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default Dashboard
