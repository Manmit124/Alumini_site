import React from 'react'

const loading = () => {
  return (
    <div className="relative h-screen">
    <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 lg:left-44">
      <div className="container">
        <div className="half"></div>
        <div className="half"></div>
      </div>
    </div>
  </div>
  )
}

export default loading
