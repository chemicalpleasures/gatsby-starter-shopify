import * as React from "react"
import { Layout } from "../../components/layout.jsx"
import { heading, paragraph, container } from "../404.module.css"
import { Seo } from "../../components/seo"



export default function CollectionsPage() {
    return (
        <Layout>
            <div className={container}>
                <h1 className={heading}>Collections</h1>
                <p className={paragraph}>
                    Collections go here in the future
                </p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo />
