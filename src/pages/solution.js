import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const Page = ({data}) => (
    <div>
        <Layout>
        <h1>Hi</h1>
        </Layout>
        
    </div>
)

export const pagQuery = graphql`

`

export default Page