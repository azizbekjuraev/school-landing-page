import React, { useState, FC, useRef } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'
import uploadSvgImage from '@/assets/images/svg/upload.svg'
import { Icon } from '@iconify/react'

export interface DroppedFile extends File {
  preview: string
}

const UniversalDropZone: FC<{
  onChange: (files: DroppedFile[]) => void
  selectedFiles: DroppedFile[]
  accept: string
  preview?: boolean
  onImageUpload: (image: DroppedFile) => void
}> = ({ onChange, selectedFiles, accept, preview = false, onImageUpload }) => {
  const [files, setFiles] = useState<DroppedFile[]>([])
  const [editedImage, setEditedImage] = useState<DroppedFile | null>(null)

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    // @ts-ignore
    accept,
    onDrop: (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setEditedImage(null)
      onChange(files)
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )

      if (acceptedFiles.length > 0 && acceptedFiles[0].type.startsWith('image/')) {
        // @ts-ignore
        onImageUpload(acceptedFiles[0])
      }
    },
    isFileAccepted: file => accept.includes(file.type)
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = () => {
    if (editedImage) {
      // setEditedImage(null)
      inputRef.current?.click()
    } else {
      inputRef.current?.click()
    }
  }

  const renderInput = () => {
    return (
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className='hidden' {...getInputProps()} />
        <img src={uploadSvgImage} alt='' className='mx-auto mb-4' />
        {isDragAccept ? (
          <p className='text-sm text-slate-500 dark:text-slate-300'>Drop the files here ...</p>
        ) : (
          <p className='f text-sm text-slate-500 dark:text-slate-300'>
            Drop or upload your Image here in <b>300*400</b>
          </p>
        )}
      </div>
    )
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFile = event.target.files[0]
      const newPreview = URL.createObjectURL(newFile)

      setEditedImage({
        ...newFile,
        preview: newPreview
      })
      setFiles([])

      onChange([Object.assign(newFile, { preview: newPreview })])
    }
  }

  const renderPreview = (file: DroppedFile, index: number) => {
    return (
      <div key={index} className='mb-14 flex-none'>
        <div className='mx-auto mt-14 h-[200px] w-[200px] overflow-hidden rounded-full'>
          <img
            src={file.preview}
            className='block h-full w-full rounded-full object-cover'
            onLoad={() => {
              URL.revokeObjectURL(file.preview)
            }}
            alt={`Preview ${index + 1}`}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border border-dashed border-secondary-500 py-[52px] text-center'>
        {files.length === 0 && !editedImage && renderInput()}
        <div className='flex space-x-4'>
          {preview &&
            (editedImage ? (
              <div className='mb-14 flex-none'>
                <div className='mx-auto mt-14 h-[200px] w-[200px] overflow-hidden rounded-full'>
                  <img
                    src={editedImage.preview}
                    className='block h-full w-full rounded-full object-cover'
                    onLoad={() => {
                      URL.revokeObjectURL(editedImage.preview)
                    }}
                    alt='Preview Edited Image'
                  />
                </div>
              </div>
            ) : (
              files.map((file, i) => renderPreview(file, i))
            ))}
        </div>
        {files.length > 0 && (
          <div className='absolute bottom-0 right-0 px-4 py-2'>
            <div
              className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-50 text-slate-600 shadow-sm'
              onClick={handleAdd}
              ref={inputRef}
            >
              <Icon icon='heroicons:pencil-square' />
            </div>
            <input type='file' style={{ display: 'none' }} ref={inputRef} onChange={handleFileInputChange} />
          </div>
        )}
      </div>
    </div>
  )
}

export default UniversalDropZone
