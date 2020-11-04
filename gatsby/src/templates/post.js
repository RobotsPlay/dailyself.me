import React from "react";
import PostDate from "../components/PostDate";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Post({data}) {
    const post = data.mdx;
    const shortcodes = { Link };
    const date = new Date(post.frontmatter.date.replace('Z', ''));

    return (
        <Layout>
            <div className="post-layout">
                <div className="post-content">
                    <div className="article-container">
                        <h1>{post.frontmatter.title}</h1>

                        <PostDate month={date.getMonth() + 1} day={date.getDate()} year={date.getFullYear()} />

                        <MDXProvider components={shortcodes}>
                            <MDXRenderer>{post.body}</MDXRenderer>
                        </MDXProvider>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
        body
        frontmatter {
            date
            title
        }
    }
  }
`