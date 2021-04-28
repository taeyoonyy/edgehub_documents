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
          './md/device/modbusTcp',
          './md/device/MelsecEthernet'
        ]
      },
      {
        title: 'Server Protocol',
        sidebarDepth: 1,
        children: [
          './md/server/serverProtocol'
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
          './md/internalEntity/internalEntity'
        ]
      },
      {
        title: 'Details',
        sidebarDepth: 1,
        children: [
          './md/details/details',
          './md/details/dataType',
          './md/details/valueType',
          './md/details/transform'
        ]
      },
      {
        title: 'Elixir Syntax',
        sidebarDepth: 1,
        children: [
          './md/elixir/elixirSyntax',
          './md/elixir/basics',
          './md/elixir/controlStructures',
        ]
      }
    ]
  }
}