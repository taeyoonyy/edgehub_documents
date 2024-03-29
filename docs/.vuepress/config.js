module.exports = {
  head: [
    ['/', { rel: 'shortcut icon', href: 'favicon.ico' }]
  ],
  title: 'EdgeHub - i | Interator User Manual',
  themeConfig: {
    sidebar: [
      './md/introduction/intro',
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
          './md/device/modbusRtu',
          './md/device/fenet',
          './md/device/port'
        ]
      },
      {
        title: 'Server',
        sidebarDepth: 1,
        children: [
          './md/server/http',
          './md/server/apiServer',
          './md/server/modbusServer'
        ]
      },
      {
        title: 'Database',
        sidebarDepth: 1,
        children: [
          './md/database/influxDB',
          './md/database/mariaDBEdgehub',
          './md/database/mariaDBCustom',
          './md/database/msSqlDB'
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
          './md/sync/sync'
        ]
      },
      {
        title: 'Function',
        sidebarDepth: 1,
        children: [
          './md/function/function'
        ]
      },
      {
        title: 'Protocol Builder',
        sidebarDepth: 1,
        children: [
          './md/protocolBuilder/protocol',
          './md/protocolBuilder/protocolDetail',
          './md/protocolBuilder/model',
          './md/protocolBuilder/function'
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