
import request from "@package/request";

import {
  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,
} from './slice';


export const getProducts = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductsRequestAction());

    const result = await request({
      url: '/api/v1/products',
      method: 'get',
    });

    dispatch(getProductsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getProductsRequestFailAction());
  }
};
