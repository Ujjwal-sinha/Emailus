"use client"

import React from 'react'
import { Button } from './button'
import { getaurinkoAuthurl } from '~/lib/aurinko'

function Linkbuttonaccount() {
  return (
 <Button onClick={async()=>{
    const authurl= await getaurinkoAuthurl('Google');
   window.location.href= authurl;
   
 }}>
    link button
 </Button>
  )
}

export default Linkbuttonaccount