import React from 'react'
import { getDomain } from '../utils/site.helpers';
import Image from 'next/image';

type Props = {
  width: number;
  height: number;
  isTransparent?: boolean;
}

export default function Logo(props: Readonly<Props>) {
  const { width, height, isTransparent = true } = props

  const domain = getDomain()
  const pathArr = [
    `/logos/${domain}`,
    isTransparent ? '-transparent' : '',
    '.png'
  ]
  const path = pathArr.join('')
  return (
    <Image
      width={width}
      height={height}
      src={path}
      alt="logo"
    />
  )
}
