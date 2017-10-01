import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

// Assume your schema is in ../data/schema
import { writeFile } from './lib/fs';
import schema from '../src/data/schema';

async function relay() {
  const yourSchemaPath = path.join(__dirname, '../schema');

  // Save JSON of full schema introspection for Babel Relay Plugin to use
  await graphql(schema, introspectionQuery).then(async result => {
    await writeFile(`${yourSchemaPath}.json`, JSON.stringify(result, null, 2));
  });

  // Save user readable type system shorthand of schema
  await writeFile(`${yourSchemaPath}.graphql`, printSchema(schema));
}

export default relay;
