import { TableBody } from './TableBody'
import { TableFooter } from './TableFooter'
import Spinner from '../Spinner'
import Alert from '@/components/ui/Alert'

type TProps = {
  tableInstance: any
  isLoading?: boolean
  error?: any
  cellProps?: object
  rowProps?: any
}

export const UniversalTable = ({ tableInstance, isLoading, error, cellProps, rowProps }: TProps) => {
  if (isLoading) return <Spinner />

  if (error)
    return <Alert label={`${error?.status} ${JSON.stringify(error?.data)}`} className='alert-danger light-mode' />

  return (
    <>
      <TableBody tableInstance={tableInstance} cellProps={cellProps} rowProps={rowProps} />
      <TableFooter tableInstance={tableInstance} />
    </>
  )
}
