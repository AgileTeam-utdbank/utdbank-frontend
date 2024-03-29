import React from "react"
import { Image, Spinner } from "react-bootstrap"

const LoadingPage = () => {
  return (
    <div className="spinner-loading">
      <Image src={`/assets/images/logo.png`} className="logo" />
    </div>
  )
}

export default LoadingPage
