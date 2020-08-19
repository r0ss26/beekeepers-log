import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { Colony } from './types';
import gql from 'graphql-tag';

const uri = 'http://localhost:8080/v1/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const ALL_COLONIES_QUERY = gql`
  query AllColoniesQuery {
    colonies {
      id
      hives
      bees
    }
  }
`;

export interface AllColoniesQueryResponse {
  colonies: Colony[];
}

export const CREATE_COLONY_MUTATION = gql`
  mutation createBees($bees: Int!, $hives: Int!) {
    insert_colonies(objects: { bees: $bees, hives: $hives }) {
      returning {
        id
      }
    }
  }
`;

export interface CreateColonyMutationResponse {
  createColony: Colony;
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

// add queries in the component that needs it
// add the database request as a service