import React from 'react'
import './Logotype.css'

export const Logotype = (props: {collapsed: boolean}) => {
  return <div className="Logotype">{props.collapsed ? 'BO' : 'Back Office'}</div>
}
