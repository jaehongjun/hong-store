import { gql } from "apollo-boost";

//  fragment product on Product ( on 뒤에 Product는 반드시 테이블명과 일치해야 함 )
export const PRODUCT_FRAGMENT = gql`
  fragment productItems on Product {
    id
    name
    detail: subTitle
    price
    sale
    photo {
      url
    }
  }
`;
