// import React from "react";

// const Image = ({
//   wrapperClass = "custom-class",
//   src,
//   className,
//   alt = "image-title",
// }) => {
//   return (
//     <div className={`relative ${wrapperClass}`}>
//       {src ? (
//         <img src={src} alt={alt} className={`max-w-full block ${className}`} />
//       ) : (
//         <div className="bg-neutral-300 w-full h-[200px] flex flex-col items-center justify-center font-medium rounded-md text-xl text-slate-900 capitalize">
//           Please Set Image
//           <code className="text-sm text-primary-500 lowercase mt-3">
//             [src="images/all-img/image-1.png"]
//           </code>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Image;

import React from 'react'

interface ImageProps {
  wrapperClass?: string;
  src: string;
  className?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ wrapperClass = 'custom-class', src, className, alt = 'image-title' }) => {
  return (
    <div className={`relative ${wrapperClass}`}>
      {src ? (
        <img src={src} alt={alt} className={`block max-w-full ${className}`} />
      ) : (
        <div className='flex h-[200px] w-full flex-col items-center justify-center rounded-md bg-neutral-300 text-xl font-medium capitalize text-slate-900'>
          Please Set Image
          <code className='mt-3 text-sm lowercase text-primary-500'>[src="images/all-img/image-1.png"]</code>
        </div>
      )}
    </div>
  )
}

export default Image
