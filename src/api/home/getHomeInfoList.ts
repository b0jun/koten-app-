import api from '..';
import { IResponseBody } from '../types';

export interface IRepairList {
  orderIndex: number;
  client: string;
  serialNumber: string;
  product: string;
}
export interface IStockList {
  officeIndex: number;
  office: string;
  product: string;
  quantity: string;
  productIndex: number;
}
interface IDepositPrice {
  wait: string;
  success: string;
  settle: string;
  total: string;
}
export interface ISettleList {
  orderIndex: number;
  clientName: string;
  state: string;
  price: string;
}

export interface IDefaultSection {
  newReception: number;
  waitRepair: number;
  waitRelease: number;
  waitDelivery: number;
  onDelivery: number;
  completeDelivery: number;
  repairList: IRepairList[];
}
export interface ILogisticsSection {
  waitRelease: number;
  releaseRequest: number;
  inItem: number;
  outItem: number;
  moveItem: number;
  stockList: IStockList[];
}
export interface IAccountingSection {
  waitDeposit: number;
  successDeposit: number;
  depositPrice: IDepositPrice;
  settleList: ISettleList[];
}

export type GetHomeInfoListDataType = IDefaultSection | ILogisticsSection | IAccountingSection;

const getHomeInfoList = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<IResponseBody<any>>('/home').then((response) => response.data);
};

export default getHomeInfoList;
