// import gql from 'graphql-tag';
// import { OnInit } from '@angular/core'
// import { Colony } from '../../types'
// import { Injectable } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import { createApollo } from '../../graphql.module'



// interface AllColoniesQueryResponse {
//   colonies: Colony[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ColoniesService implements OnInit {
//   public colonies: Colony[];

//   constructor(private apollo: Apollo) {}

//   getColonies() {
//     this.apollo.watchQuery({
//       query: ALL_COLONIES_QUERY
//     }).valueChanges.subscribe((response) => {
//       this.colonies = (<AllColoniesQueryResponse>response.data).colonies
//     })
//   }

//   ngOnInit() {}
// }
