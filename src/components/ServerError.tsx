import { Fragment } from 'react'

function ErrorItem({ field, error }) {
  if (field === 'nonFieldErrors' || field === 'detail') {
    return (
      <li>
        <strong>{error}</strong>
      </li>
    )
  }
  return (
    <li>
      <strong>{field}: </strong>
      {error[0]}
    </li>
  )
}

export default function ServerError({ error }) {
  if (!error || !error.data) return <Fragment />

  return (
    <div className='alert-danger light-mode rounded-md p-5'>
      <ul>
        {typeof error.data === 'string' ? (
          <ErrorItem field='detail' error='Неизвестная ошибка' />
        ) : (
          Object.keys(error.data).map(key => <ErrorItem key={key} field={key} error={error.data[key]} />)
        )}
      </ul>
    </div>
  )
}
