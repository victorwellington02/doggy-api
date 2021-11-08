module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "doggy-api",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckvqjq2dw4ijf01z253u02t5h/master",
    },
  },
],
};
