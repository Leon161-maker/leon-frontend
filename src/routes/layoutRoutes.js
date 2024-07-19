import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from "../layouts"

const LayoutRoutes = () => {
  return (
    <Layout>
        <Outlet/>
    </Layout>
  )
}

export default LayoutRoutes