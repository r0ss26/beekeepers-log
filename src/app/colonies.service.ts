import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import {
  GetAllColoniesAndCollectionsQuery,
  GetColonyAndCollectionsQuery,
} from '../generated/graphql';

export const GET_ALL_COLONIES_AND_COLLECTIONS = gql`
  query GetAllColoniesAndCollections {
    colonies(order_by: { created: desc }) {
      id
      created
      hives
      bees
      collections(order_by: { date: desc }) {
        id
        date
        amount
      }
    }
  }
`;

export const CREATE_COLONY = gql`
  mutation createColony($bees: Int!, $hives: Int!) {
    insert_colonies(objects: { bees: $bees, hives: $hives }) {
      returning {
        id
        created
        hives
        bees
        collections(order_by: { date: desc }) {
          id
          date
          amount
        }
      }
    }
  }
`;

export const CREATE_COLLECTION = gql`
  mutation insertCollection($amount: Int!, $colony_id: uuid!, $date: date) {
    insert_collections_one(
      object: { amount: $amount, colony_id: $colony_id, date: $date }
    ) {
      id
      amount
      colony_id
      date
      colony {
        id
      }
    }
  }
`;

export const GET_COLONY_AND_COLLECTIONS = gql`
  query GetColonyAndCollections($id: uuid!) {
    colonies(where: { id: { _eq: $id } }) {
      bees
      created
      hives
      id
      collections {
        amount
        date
        id
      }
    }
  }
`;

export const ADD_HIVE = gql`
  mutation updateHives($id: uuid!, $hives: Int!) {
    update_colonies(where: { id: { _eq: $id } }, _set: { hives: $hives }) {
      returning {
        id
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ColoniesService {
  constructor(private apollo: Apollo) {}

  getColony(id: string): QueryRef<GetColonyAndCollectionsQuery> {
    return this.apollo.watchQuery({
      query: GET_COLONY_AND_COLLECTIONS,
      variables: {
        id,
      },
    });
  }

  getAllColoniesAndCollections(): QueryRef<GetAllColoniesAndCollectionsQuery> {
    return this.apollo.watchQuery({
      query: GET_ALL_COLONIES_AND_COLLECTIONS,
    });
  }

  createColony(bees: number, hives: number) {
    return this.apollo.mutate({
      mutation: CREATE_COLONY,
      variables: {
        bees: bees,
        hives: hives,
      },
      refetchQueries: [{ query: GET_ALL_COLONIES_AND_COLLECTIONS }],
    });
  }

  createCollection(amount: number, colony_id: string, date: Date) {
    return this.apollo.mutate({
      mutation: CREATE_COLLECTION,
      variables: {
        amount,
        colony_id,
        date,
      },
      refetchQueries: [
        { query: GET_ALL_COLONIES_AND_COLLECTIONS },
        { query: GET_COLONY_AND_COLLECTIONS, variables: { id: colony_id } },
      ],
    });
  }

  updateHives(id: string, hives: number) {
    return this.apollo.mutate({
      mutation: ADD_HIVE,
      variables: {
        id,
        hives,
      },
      refetchQueries: [
        { query: GET_ALL_COLONIES_AND_COLLECTIONS },
        { query: GET_COLONY_AND_COLLECTIONS, variables: { id } },
      ],
    });
  }
}
