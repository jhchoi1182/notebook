import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestModal from "../components/TestModal"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TestModal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router