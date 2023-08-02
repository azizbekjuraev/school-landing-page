import React from 'react'
import useFooterType from '@/hooks/useFooterType'
import { useTranslation } from 'react-i18next'
interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className = 'custom-class' }) => {
  const { t } = useTranslation('components')

  const [footerType] = useFooterType()
  const footerClassName = (): string => {
    switch (footerType) {
      case 'sticky':
        return 'sticky bottom-0 z-[999]'
      case 'static':
        return 'static'
      case 'hidden':
        return 'hidden'
      default:
        return ''
    }
  }

  return (
    <footer className={`${className} ${footerClassName()}`}>
      <div className='site-footer bg-white px-6 py-4 text-slate-500 dark:bg-slate-800 dark:text-slate-300'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
          <div className='text-center text-sm ltr:md:text-start rtl:md:text-right'>
            {/* COPYRIGHT &copy; 2023 Template, All rights Reserved */}
            {t('footer')}
          </div>
          <div className='text-center text-sm ltr:md:text-right rtl:md:text-end'>
            {t('madeBy')}
            <a
              href='https://codeshaper.net'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-primary-500'
            >
              Askaraliev
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
