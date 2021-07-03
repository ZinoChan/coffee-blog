const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
    query {
        allWpPost {
          nodes {
            slug
          }
        }
      }
      
    `)

    data.allWpPost.nodes.forEach(node => {
        actions.createPage({
            path: `/post/${node.slug}`,
            component: path.resolve('./src/components/PostDetails.tsx'),
            context: {slug: node.slug}
        })
    });
}