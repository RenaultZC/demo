//schema.js
import {
  buildSchema
} from 'graphql';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'
import db from './db'

const graphqlHTTP = require('koa-graphql')
const path = require('path')

const typesArray = fileLoader(path.join(__dirname, '/**/*.graphql'),)
console.log(typesArray);
const types = mergeTypes(typesArray)

const schema = buildSchema(types)

const graphql = graphqlHTTP({
  schema: schema,
  rootValue: {
    getUser: async function(){
      let result = await db();
      return result;
    }
  },
  graphiql: true,
})

export default graphql
