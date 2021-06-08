module.exports = {
  title: 'Docs',
  // url: 'https://127.0.0.1:1291',
  themeConfig: {
    logo: 'headerlogo-interactor.svg',
    sidebar: [
      '/',
      {
        title: 'Interactor',
        sidebarDepth: 1,
        children: [
          './md/interactor/web',
          './md/interactor/account',
          './md/interactor/entity'
        ]
      },
      {
        title: 'Device Protocol',
        sidebarDepth: 1,
        children: [
          './md/device/deviceProtocol',
          './md/device/melsecE',
          './md/device/modbusTcp',
          './md/device/fenet'
        ]
      },
      {
        title: 'Server Protocol',
        sidebarDepth: 1,
        children: [
          './md/server/serverProtocol',
          './md/server/http',
        ]
      },
      {
        title: 'Database Protocol',
        sidebarDepth: 1,
        children: [
          './md/database/databaseProtocol'
        ]
      },
      {
        title: 'Internal Entity',
        sidebarDepth: 1,
        children: [
          './md/internalEntity/internalEntity',
          './md/internalEntity/virtual'
        ]
      },
      {
        title: 'Details',
        sidebarDepth: 1,
        children: [
          './md/details/details',
          './md/details/dataType',
          './md/details/valueType',
          './md/details/transform',
          './md/details/buffer'
        ]
      },
      {
        title: 'Elixir Syntax',
        sidebarDepth: 1,
        children: [
          './md/elixir/elixirSyntax',
          './md/elixir/basics',
          './md/elixir/collections',
          './md/elixir/enum',
          './md/elixir/controlStructures',
          './md/elixir/functions',
          './md/elixir/binary',
          './md/elixir/etc'
        ]
      }
    ]
  }
}