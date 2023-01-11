import { printSubgraphSchema } from '@apollo/subgraph';
import { ResourcesModule } from './resources/resources.module';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { writeFileSync } from 'fs';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: 'apps/shopper-gql-api/schema.gql',
      sortSchema: false,
      transformSchema: (schema) => {
        writeFileSync(
          'apps/shopper-gql-api/schema.gql',
          printSubgraphSchema(schema),
        );
        return schema;
      },
    }),
    ResourcesModule,
  ],
})
export class ShopperGqlApiModule {}
