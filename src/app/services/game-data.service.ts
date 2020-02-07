import { Injectable } from '@angular/core';
import { Query, Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';

const lobby = gql`
  query {
    lobby {
      id
      name
      slug
      games {
        id
        name
        slug
        background
        description
        thumbnail
        height
        width
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class QLGameDataService {

  constructor(private apollo: Apollo) {}

  public getGameCategories() {
    return this.apollo.watchQuery<any>({
      query: lobby
    })
    .valueChanges;
  }
}
