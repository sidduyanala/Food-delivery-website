import React from 'react'
import './AppsDownload.css'
import { assets } from '../../assets/assets'
const AppsDownload = () => {
  return (
    <div className='apps-download' id='apps-download'>
        <p>For Better Experience Download <br/> Tomato app</p>
        <div className="apps-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppsDownload
