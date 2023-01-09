import { gql } from 'graphql-request';

export const GET_ORDER = gql`
  query getOrder ($id: ID!) {
    order(where: {id: $id}) {
      id
      name
      paid
      paymentMethod
      phoneNumber
      products
      totalPrice
      deliveryMethod
      city
      address
    }
  }
`;