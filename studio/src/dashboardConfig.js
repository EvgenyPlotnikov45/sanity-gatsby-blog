export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63062ad7dc18d900a88f4919",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xbztj5yc",
                  apiId: "8613b2c1-b576-4419-93e3-65680816e3c8",
                },
                {
                  buildHookId: "63062ad876f12c00c4bde216",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-83y6qsi2",
                  apiId: "3dc352fd-98e4-47a8-b32c-a9412ea13f11",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/EvgenyPlotnikov45/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-83y6qsi2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
