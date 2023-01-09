import { IShortProductResponse } from '@/interfaces';

export interface IOrderResponse {
  id:             string;
  name:           string;
  phoneNumber:    string;
  paymentMethod:  string;
  deliveryMethod: string;
  city:           string;
  address:        string;
  totalPrice:     number;
  paid:           boolean;
  products:       IShortProductResponse[];
};