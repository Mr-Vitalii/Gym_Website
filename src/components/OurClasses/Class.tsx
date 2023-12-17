import React from 'react'

type Props = {
  name: string
  description?: string
  image: string
}

export const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 translate-y-[60%] transition-all duration-500 group-hover:opacity-90 group-hover:translate-y-0`

  return (
    <li className="group relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}
