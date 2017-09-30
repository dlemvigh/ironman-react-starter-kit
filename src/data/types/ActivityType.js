import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

import DisciplineType from './DisciplineType';
import UserType from './UserType';

const ActivityType = new GraphQLObjectType({
  name: 'Activity',
  fields: () => ({
    discipline: {
      type: DisciplineType,
      resolve() {},
    },
    disciplineId: {
      type: GraphQLID,
    },
    disciplineName: {
      type: GraphQLString,
    },
    distance: {
      type: GraphQLFloat,
    },
    unit: {
      type: GraphQLString,
    },
    score: {
      type: GraphQLFloat,
    },
    date: {
      type: GraphQLString,
    },
    week: {
      type: GraphQLInt,
    },
    year: {
      type: GraphQLInt,
    },
    user: {
      type: UserType,
      resolve() {},
    },
    userId: {
      type: GraphQLID,
    },
    userName: {
      type: GraphQLString,
    },
  }),
});

export default ActivityType;
