import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResourcesModule } from './resources/resources.module';
import { Shopper } from './resources/orders/entities/shopper.entity';
import { writeFileSync } from 'fs';
import { printSubgraphSchema } from '@apollo/subgraph';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: 'apps/order-gql-api/schema.gql',
      buildSchemaOptions: {
        orphanedTypes: [Shopper],
      },
      sortSchema: false,
      transformSchema: (schema) => {
        writeFileSync(
          'apps/order-gql-api/schema.gql',
          printSubgraphSchema(schema),
        );
        return schema;
      },
    }),
    ResourcesModule,
  ],
})
export class AppModule {}
