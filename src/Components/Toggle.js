import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Toggle(props) {
    const [toggle, setToggle] = useState(false);
    let titleBar;
    let classNameToggle = "accordion__item-content";
    if(toggle){
        titleBar  = <div className="accordion__item-title" onClick={()=> setToggle(false)}><h4>{props.title}</h4><FontAwesomeIcon icon={['fab', 'apple']} /></div>
        classNameToggle += " active";
    }else{
        titleBar = <div className="accordion__item-title" onClick={()=> setToggle(true) }><h4>{props.title}</h4><FontAwesomeIcon icon="coffee" /></div>
        classNameToggle += " ";
    }
  return (
    <div className="accordion__item">
      {titleBar}
      <FontAwesomeIcon icon="faPlus" />
      <div className={classNameToggle}>{props.content}</div>
    </div>
  )
}
