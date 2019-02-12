import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      createdAt
      name
    }
    onSale: products(where: { sale: true }) {
      ...productItems
    }
    allProducts: products(where: { sale: false }) {
      ...productItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
