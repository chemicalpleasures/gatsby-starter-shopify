import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./404.module.css"
import { Seo } from "../components/seo"

const collections = await graphql(`
    query {
      allShopifyCollection (sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            handle
            products {
              title
              images {
                originalSrc
              }
              shopifyId
              handle
              description
              availableForSale
              priceRange {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  `)

  collections.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collection/${node.handle}`,
      component: path.resolve(`./src/components/Collection.js`),
      context: {
        collection: node,
        productCount: node.products.length
      },
    })
})  

export default function NotFoundPage() {
    return (
        <Layout>
            <div className={container}>
                <h1 className={heading}>Collections</h1>
                <p className={paragraph}>
                    Collections go here
                </p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo />
