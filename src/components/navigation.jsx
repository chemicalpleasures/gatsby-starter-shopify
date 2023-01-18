import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"


//Query which pulls all product types
export function Navigation({ className }) {

  // Old Query
  const {
    // allShopifyProduct: { productTypes }, 
    allShopifyCollection: { collectionNames }
  } = useStaticQuery(graphql`
      {
        allShopifyProduct {
          productTypes: distinct(field: {productType: SELECT})
        }
        allShopifyCollection {
          collectionNames: distinct(field: {title: SELECT})
        }
      }
  `)

  // console.log(data)

  return (
    <nav className={[navStyle, className].join(" ")}>
      {/* Links to all products */}
      <Link
        key="All"
        className={navLink}
        to="/products/"
        activeClassName={activeLink}
      >
        All products
      </Link>



      {/* Links to all product types */}
      {/* {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))} */}
      {/* Links to all Collections */}
      {collectionNames.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/collections/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
