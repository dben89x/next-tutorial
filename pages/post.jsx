import {withRouter} from 'next/router'
import Layout from '../components/Layout'
// import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

export default withRouter( props => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
))

// const Post = props => (
//   <div>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium} alt={props.show.name}/>
//   </div>
// )
//
// Post.getInitialProps = async function(context) {
//   console.log('context', Object.keys(context))
//   // console.log(context.req)
//   // console.log('context.res', context.res)
//   console.log(context.pathname)
//   console.log(context.query)
//   console.log(context.asPath)
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return {show}
// }

// const Page = props => (
//   <Layout>
//     <Content/>
//   </Layout>
// )

// export default Post
//
