import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions) {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
