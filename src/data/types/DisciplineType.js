import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import ActivityType from './ActivityType';

const DisciplineType = new GraphQLObjectType({
  name: 'Discipline',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    score: { type: GraphQLFloat },
    unit: { type: GraphQLString },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve() {},
    },
  }),
});

export default DisciplineType;
