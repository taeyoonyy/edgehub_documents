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
          './markdown/interactor/entity'
        ]
      },
      {
        title: 'Device Protocol',
        sidebarDepth: 1,
        children: [
          './markdown/device/deviceProtocol',
          './markdown/device/modbusTcp',
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
        title: 'Details',
        sidebarDepth: 1,
        children: [
          './markdown/details/details',
          './markdown/details/transform'
        ]
      },
      {
        title: 'Elixir Syntax',
        sidebarDepth: 1,
        children: [
          './markdown/elixir/elixirSyntax',
          './markdown/elixir/basics',
          './markdown/elixir/controlStructures',
        ]
      }
    ]
  }
}