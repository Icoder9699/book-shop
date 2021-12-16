import React from 'react'

export default function NotFound() {
   return (
      <div 
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 200px)',
            color: 'rgb(64, 65, 95)'
         }}
      >
         <div className='container'>
            <h1>Ошибка 404</h1>
            <h2>Страница не найдено</h2>
         </div>
      </div>
   )
}
