module.exports = {
  head: [
    ['link', { rel: 'shortcut icon', href: 'favicon.ico' }]
  ],
  title: 'Edgehub-i',
  // url: 'https://127.0.0.1:1291',
  themeConfig: {
    // logo: 'headerlogo-interactor.svg',
    sidebar: [
      './md/introduction/intro',
      // {
      //   title: 'Introduction',
      //   sidebarDepth: 1,
      //   children: [
      //     './md/introduction/intro'
      //   ]
      // },
      {
        title: 'Getting Started',
        sidebarDepth: 1,
        children: [
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
          './md/general/actions',
          './md/general/calls'
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
          './md/device/fenet',
          './md/device/port'
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
          './md/database/influxDB'
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
        title: 'Protocol',
        sidebarDepth: 1,
        children: [
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