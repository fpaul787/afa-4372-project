import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      review1: file(relativePath: { eq: "review1.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review2: file(relativePath: { eq: "review2.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review3: file(relativePath: { eq: "review3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review4: file(relativePath: { eq: "review4.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review5: file(relativePath: { eq: "review5.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review6: file(relativePath: { eq: "review6.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review7: file(relativePath: { eq: "review7.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
      
    <div className="container">
      <Img
        fluid={data.review1.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(150vh - 4rem)" }}
        imgStyle={{ objectFit: "fill" }}
      />
      <Img
        fluid={data.review2.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(150vh - 4rem)" }}
        imgStyle={{ objectFit: "fill" }}
      />
      <hr style={{borderTop: '10px solid rebeccapurple'}}/>
      <Img
        fluid={data.review3.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(50vh - 4rem)" }}
        imgStyle={{ objectFit: "contain" }}
      />
      <hr style={{borderTop: '10px solid rebeccapurple'}}/>
      <Img
        fluid={data.review4.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(50vh - 4rem)" }}
        imgStyle={{ objectFit: "contain" }}
      />
      <hr style={{borderTop: '10px solid rebeccapurple'}}/>
      <Img
        fluid={data.review5.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(100vh - 4rem)" }}
        imgStyle={{ objectFit: "contain" }}
      />
      <Img
        fluid={data.review6.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(50vh - 4rem)" }}
        imgStyle={{ objectFit: "contain" }}
      />
      <hr style={{borderTop: '10px solid rebeccapurple'}}/>
      <Img
        fluid={data.review7.childImageSharp.fluid}
        style={{ margin: "1rem", maxHeight: "calc(50vh - 4rem)" }}
        imgStyle={{ objectFit: "contain" }}
      />
    </div>
  )
}

export default Gallery
