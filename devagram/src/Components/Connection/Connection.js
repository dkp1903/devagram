import React,{useState} from 'react'
import './Connection.css'
import Navbar from '../Navbar/Navbar'

function Connection() {
    const [follow,setFollow]=useState(false)
    
    return (
        <>
        <Navbar /> 
        <div className="connect-container">
            <div className="connect">
               <div className="card-row">
                   <div className="card">
                        <img src='https://avatars0.githubusercontent.com/u/39042169?s=400&u=c8ba8d2fb5e70175917bf939978014ea41ed5ba7&v=4' className="card-image" />
                        <div className="card-title">
			                DKP
		                </div>

                        <div className="card-desc">
                        React, Vue, Node, Mongo, PGSQL | ElasticSearch | NLP
                        Amazon intern ,Web developer 
		                </div>
                        <div className="card-actions">
			                <button type='button' className='card-action-readMore'>Follow</button>
		                </div>
                   </div>
               </div>
               <div className="card-row">
                   <div className="card">
                        <img src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' className="card-image" />
                        <div className="card-title">
			                Elon Musk
		                </div>

                        <div className="card-desc">
                        Something in your dreams
                        Tesla ,SpaceX , PayPal 
		                </div>
                        <div className="card-actions">
			                <button type='button' className='card-action-readMore'>Follow</button>
		                </div>
                   </div>
               </div>
               <div className="card-row">
                   <div className="card">
                        <img src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455' className="card-image" />
                        <div className="card-title">
			                Jeff bezos 
		                </div>

                        <div className="card-desc">
                        Almost Everything<br></br>
                        Amazon Owner  
		                </div>
                        <div className="card-actions">
			                <button type='button' className='card-action-readMore'>Follow</button>
		                </div>
                   </div>
               </div>
            </div>
        </div>
      </>
    )
}

export default Connection
