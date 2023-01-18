import * as React from "react"
import { graphql } from 'gatsby'
import { Layout } from "../../components/layout.jsx"
import { heading, paragraph, container } from "../404.module.css"
import { Seo } from "../../components/seo.jsx"



const CollectionsSubPage = ({ data, children }) => {
    return (
        <Layout >
            <div className={container}>
                <h1 className={heading}>{data.shopifyCollection.title}</h1>
                <p className={paragraph}>
                    {/* {data.shopifyCollection.products.map(product => (
                        <h1>{data.shopifyCollection.products.title}</h1>
                    ))} */}
                </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($id: String) {
  shopifyCollection(id: {eq: $id}) {
    title
    id
    products {
      title
    }
  }
}`

export const Head = () => <Seo />

export default CollectionsSubPage