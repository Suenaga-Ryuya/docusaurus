/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {jest} from '@jest/globals';
import webpack from 'webpack';

import createServerConfig from '../server';
import loadSetup from '../../server/__tests__/testUtils';

describe('webpack production config', () => {
  it('simple', async () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const props = await loadSetup('simple');
    const config = await createServerConfig({
      props,
      onHeadTagsCollected: () => {},
      onLinksCollected: () => {},
    });
    const errors = webpack.validate(config);
    expect(errors).toBeUndefined();
  });

  it('custom', async () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const props = await loadSetup('custom');
    const config = await createServerConfig({
      props,
      onHeadTagsCollected: () => {},
      onLinksCollected: () => {},
    });
    const errors = webpack.validate(config);
    expect(errors).toBeUndefined();
  });
});
