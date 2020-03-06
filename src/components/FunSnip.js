import React from 'react'

import {T} from '../App'

export default function FunSnip(props){
  console.log("F U N  P R O P S", props)
  return(
    <section>
    <h4 style={{color:"#D41BB9"}}>fun</h4>
    <T.UL>
      <T.LI></T.LI>
      <T.LI></T.LI>
      <T.LI></T.LI>
      <T.LI></T.LI>
    </T.UL>
    </section>
  )
}