import { hygraph } from "@/config";
import { IOrderResponse } from "@/interfaces";
import { GET_ORDER } from "src/graphql/queries/order";

type TGetOrderByIdResponse =
  | [IOrderResponse, null]
  | [null, any];

export const getOrderById = async (id: string): Promise<TGetOrderByIdResponse> => {

  try {

    const { order }: { order: IOrderResponse } = await hygraph.client.request({
      document: GET_ORDER,
      variables: { id }
    });

    return [order, null];

  } catch (error) {

    console.error(error);
    return [null, error];

  };

};