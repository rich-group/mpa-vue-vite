import legacy from '@vitejs/plugin-legacy';
import BaseConfig from './base.config';

BaseConfig.plugins.push(
  legacy({
    targets: ['defaults']
  })
)
export default BaseConfig;