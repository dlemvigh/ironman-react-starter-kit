/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import UserType from '../types/UserType';

const me = {
  type: UserType,
  resolve() {
    return {
      id: '42',
      name: 'John Doe',
    };
  },
};

export default me;
