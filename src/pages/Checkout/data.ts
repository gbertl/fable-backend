import { DeliveryMethods, PaymentMethods } from '../../enums';

export const paymentMethods = [
  {
    method: PaymentMethods.Card,
    title: 'Payment Card',
  },
  {
    method: PaymentMethods.Cod,
    title: 'Cash on delivery',
  },
];

export const deliveryMethods = [
  {
    method: DeliveryMethods.PickUp,
    title: 'In-store pick up',
  },
  {
    method: DeliveryMethods.ToDoor,
    title: 'To the door',
  },
];

export const initialOrderData = {
  city: 'Quezon City',
  deliveryMethod: DeliveryMethods.ToDoor,
  paymentMethod: PaymentMethods.Card,
  address: 'Batasan Road',
  loyaltyCard: 9204,
  name: 'Gilbert',
  phone: 9989934111,
  email: '',
  orderComment: 'Pack all the items separately, please',
  agree: true,
};

export const initialData = {
  deliveryMethod: initialOrderData.deliveryMethod,
  paymentMethod: initialOrderData.paymentMethod,
  agree: initialOrderData.agree,
};
