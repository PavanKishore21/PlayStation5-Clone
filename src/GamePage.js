import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GamesHeader } from './Components/Data'
import "./game.module.css"
export const GamePage = () => {
  const params = useParams()
  const [data,fetchdata] = useState(GamesHeader[params.id-1])
  useEffect(() => {
    GamesHeader.length && fetchdata(GamesHeader[params.id-1])
  },[params.id-1])
  return (
    <div style={{backgroundColor : "#000"}}>
      <main
        style={{
          position:'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{position:'absolute',top:'0',left:'0',right:'0',background: `rgba(0, 0, 0, 0.4) url(${data.backgroundImage}) no-repeat center center`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',}}/>

        <div className={'game-container'}>
          <div className={'top'}>
            <div className={'left'}>
              <img
                src={data.gameImage}
                width={300}
                height={300}
                style={{ borderRadius: 10 }}
              />
            </div>
            <div className={'right'}>
              <h1 className={'title'} style={{ color: '#f5f5f5' }}>
                {data.title}
              </h1>
              <h2 style={{fontSize:"18px", fontWeight : "400", margin:"20px 0"}}>{data.subTitle}</h2>
              <button className={'button'}>Play</button>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{color:'tomato'}}>Description</h1>
          <div
            style={{ color: '#f5f5f5', paddingLeft:'60px',paddingRight:'60px',fontFamily:'Nunito',fontSize:'20px' }}
          >
            <p>{data.popupMessage}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
