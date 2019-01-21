module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
      }],
      ['module-resolver', {
        'alias': {
          'mobx': './node_modules/mobx/lib/mobx.es6.js'
        }
      }]
    ]
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};