module.exports = {
  type: 'HomePageOne',
  // logo: '/icon_vuepress_reco.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: '3D-for-Fun',
  authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '1990',
  // algolia: {
  // apiKey: '97357e58cac743c6de62036cb152f18b',
  // indexName: 'vuepress-theme-reco'
  // inputSelector: '### REPLACE ME ####',
  // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
  // debug: false // Set debug to true if you want to inspect the dropdown
  // },
  // valine 设置
  valineConfig: {
    appId: 'nLwgH9Ezcm983SDE1dIKjVUc-gzGzoHsz',
    appKey: 'T8VxAxjz9DgNREaJy7c1j6FY',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    notify: true, //
    recordIP: true,
    showComment: true,
  },
  // vssueConfig: {
  //   admins: ['recoluan'],
  //   platform: 'github',
  //   owner: 'vuepress-reco',
  //   repo: 'vuepress-reco.github.io',
  //   clientId: '4d81cea3b3d8aac8e88e',
  //   clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'https://github.com/3D-for-Fun/3D-for-Fun.github.io',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'gh-pages-source',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'auto', // dark, auto , light
  codeTheme: 'tomorrow',
};
