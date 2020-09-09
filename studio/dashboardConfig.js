export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f590ad492ffd76adfc0bf93',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-imzsaiv2',
                  apiId: '8b4fd1b2-2ff8-4012-8030-6beb303aa2dc'
                },
                {
                  buildHookId: '5f590ad422153d5602879451',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-hs4edj87',
                  apiId: '345aaab2-7e56-4bce-bbf3-23fc231cda92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/valipe/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-hs4edj87.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
