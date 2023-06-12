import {MonthCardMethod} from "../constants";
import {postData} from './api';

export const getMonthCards = async (phone: string) => {
  const data = await postData('prc/location', {
    method: MonthCardMethod.GET_MONTH_CARDS,
    params: {
      phone: phone
    }
  });
  console.log(data);
  return data;
};

export const submitMonthCard = async (phone: string, location_id: string, price: string, numOfMonth: string) => {
  const data = await postData('prc/location', {
    method: MonthCardMethod.SUBMIT_MONTH_CARD,
    params: {
      phone: phone,
      location_id: location_id,
      price: price,
      number: numOfMonth,
    }
  });
  console.log(data);
  return data;
};

export const extendMonthCard = async (month_card_id: string, phone: string, location_id: string, price: string, numOfMonth: string) => {
  const data = await postData('prc/location', {
    method: MonthCardMethod.UPDATE_MONTH_CARD,
    params: {
      month_card_id: month_card_id,
      phone: phone,
      location_id: location_id,
      price: price,
      addition_number: numOfMonth,
    }
  });
  console.log(data);
  return data;
};

export const giftMonthCard = async (month_card_id: string, phone: string, location_id: string, price: string, use_user_id: string) => {
  const data = await postData('prc/location', {
    method: MonthCardMethod.GIFT_MONTH_CARD,
    params: {
      month_card_id: month_card_id,
      phone: phone,
      location_id: location_id,
      price: price,
      use_user_id: use_user_id
    }
  });
  console.log(data);
  return data;
};
