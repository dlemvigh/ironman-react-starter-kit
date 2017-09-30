/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import ActivityType from './ActivityType';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    email: { type: GraphQLString },
    name: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    active: {
      type: GraphQLBoolean,
    },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve() {},
    },
    // summary: {
    //   type: summaryType,
    //   args: {
    //     week: {
    //       name: "week",
    //       type: GraphQLInt
    //     },
    //     year: {
    //       name: "year",
    //       type: GraphQLInt
    //     }
    //   },
    //   resolve: (root, args) => {
    //     return database.getWeekSummary(root._id, args.week, args.year);
    //   }
    // },
  }),
});

export default UserType;
