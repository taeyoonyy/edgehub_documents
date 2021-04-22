module.exports = {
  title: 'EdgeHub-i | Interactor Documents',
  // url: 'https://127.0.0.1:1291',
  themeConfig: {
    // logo: '/headerlogo.svg',
    sidebar: [
      '/',
      {
        title: 'Interactor',
        sidebarDepth: 1,
        children: [
          './markdown/interactor/web',
          './markdown/interactor/account',
          './markdown/interactor/entity',
          './markdown/interactor/details',
          './markdown/interactor/movie'
        ]
      },
      {
        title: 'Device Protocol',
        sidebarDepth: 1,
        children: [
          './markdown/device/deviceProtocol',
          './markdown/device/MelsecEthernet'
        ]
      },
      {
        title: 'Server Protocol',
        sidebarDepth: 1,
        children: [
          './markdown/server/serverProtocol'
        ]
      },
      {
        title: 'Database Protocol',
        sidebarDepth: 1,
        children: [
          './markdown/database/databaseProtocol'
        ]
      },
      {
        title: 'Internal Entity',
        sidebarDepth: 1,
        children: [
          './markdown/internalEntity/internalEntity'
        ]
      },
      {
        title: 'Elixir Syntax',
        sidebarDepth: 1,
        children: [
          './markdown/elixir/elixirSyntax'
        ]
      }
    ]
  }
}