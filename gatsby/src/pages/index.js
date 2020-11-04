import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Daily Self" />

    <div className="article-container">
      <h1>Daily Self</h1>

      {data.allMdx.edges.map(({node}, i) => (
        <Link
          to={node.fields.slug}
          key={i}
        >
          <h2>
            {node.frontmatter.title}
          </h2>
        </Link>
      ))}
    </div>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`