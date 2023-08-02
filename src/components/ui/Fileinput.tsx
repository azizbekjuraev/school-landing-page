import React from 'react'

type SelectedFile = {
  name: string
  size: number
  type: string
}

type Fileinput = {
  name: string
  label: string
  onChange: boolean
  placeholder: string
  multiple: boolean
  preview: boolean
  className: string
  id: string
  selectedFile: boolean
  badge: boolean
  selectedFiles: SelectedFile[]
}

const Fileinput = ({
  name,
  label = 'Browse',
  onChange,
  placeholder = 'Choose a file or drop it here...',
  multiple,
  preview,
  className = 'custom-class',
  id,
  selectedFile,
  badge,
  selectedFiles
}) => {
  return (
    <div>
      <div className='filegroup'>
        <label>
          <input
            type='file'
            onChange={onChange}
            className='hidden w-full bg-red-400'
            name={name}
            id={id}
            multiple={multiple}
            placeholder={placeholder}
          />
          <div className={`file-control flex h-[40px] w-full items-center ${className}`}>
            {!multiple && (
              <span className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                {selectedFile && (
                  <span className={badge ? ' badge-title' : 'text-slate-900 dark:text-white'}>{selectedFile.name}</span>
                )}
                {!selectedFile && <span className='text-slate-400'>{placeholder}</span>}
              </span>
            )}

            {multiple && (
              <span className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                {selectedFiles.length > 0 && (
                  <span className={badge ? ' badge-title' : 'text-slate-900 dark:text-white'}>
                    {selectedFiles.length > 0 ? selectedFiles.length + ' files selected' : ''}
                  </span>
                )}
                {selectedFiles.length === 0 && <span className='text-slate-400'>{placeholder}</span>}
              </span>
            )}
            <span className='file-name inline-flex h-full flex-none cursor-pointer items-center rounded-br rounded-tr border-l border-slate-200 bg-slate-100 px-4 text-base font-normal text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400'>
              {label}
            </span>
          </div>
          {!multiple && preview && selectedFile && (
            <div className='mx-auto mt-6 h-[200px] w-[200px]  '>
              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : ''}
                className='block  h-full w-full rounded border border-slate-200 object-contain  p-2'
                alt={selectedFile?.name}
              />
            </div>
          )}
          {multiple && preview && selectedFiles.length > 0 && (
            <div className='flex flex-wrap space-x-5 rtl:space-x-reverse'>
              {selectedFiles.map((file, index) => (
                <div className='mt-6 w-1/2 rounded border border-slate-200 p-2 md:w-1/3  xl:w-1/5' key={index}>
                  <img
                    src={file ? URL.createObjectURL(file) : ''}
                    className='h-full w-full rounded object-cover'
                    alt={file?.name}
                  />
                </div>
              ))}
            </div>
          )}
        </label>
      </div>
    </div>
  )
}

export default Fileinput
