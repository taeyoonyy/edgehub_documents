module.exports = {
  head: [
    ['link', { rel: 'shortcut icon', href: 'favicon.ico' }]
  ],
  title: ' EdgeHub-i | Interactor  Docs',
  // url: 'https://127.0.0.1:1291',
  themeConfig: {
    // logo: 'headerlogo-interactor.svg',
    sidebar: [
      '/',
      {
        title: 'Getting Started',
        sidebarDepth: 1,
        children: [
          './md/gettingStarted/installation',
          './md/gettingStarted/guide',
          './md/gettingStarted/account',
          './md/gettingStarted/webPage',
          './md/gettingStarted/entity'
        ]
      },
      {
        title: 'General',
        sidebarDepth: 1,
        children: [
          './md/general/tags',
          './md/general/actions'
        ]
      },
      {
        title: 'Details',
        sidebarDepth: 1,
        children: [
          './md/details/dataType',
          './md/details/valueType',
          './md/details/transform',
          './md/details/buffer'
        ]
      },
      {
        title: 'Device',
        sidebarDepth: 1,
        children: [
          './md/device/melsecE',
          './md/device/modbusTcp',
          './md/device/fenet'
        ]
      },
      {
        title: 'Server',
        sidebarDepth: 1,
        children: [
          './md/server/http'
        ]
      },
      {
        title: 'Database',
        sidebarDepth: 1,
        children: [
        ]
      },
      {
        title: 'Virtual',
        sidebarDepth: 1,
        children: [
          './md/virtual/virtual'
        ]
      },
      {
        title: 'Sync',
        sidebarDepth: 1,
        children: [
        ]
      },
      {
        title: 'Function',
        sidebarDepth: 1,
        children: [
        ]
      },
      {
        title: 'Custom Protocol',
        sidebarDepth: 1,
        children: [
          './md/customProtocol/port'
        ]
      },
      {
        title: 'Elixir Syntax',
        sidebarDepth: 1,
        children: [
          './md/elixirSyntax/elixirSyntax',
          './md/elixirSyntax/basics',
          './md/elixirSyntax/collections',
          './md/elixirSyntax/enum',
          './md/elixirSyntax/controlStructures',
          './md/elixirSyntax/functions',
          './md/elixirSyntax/binary',
          './md/elixirSyntax/etc'
        ]
      },
    ]
  }
}