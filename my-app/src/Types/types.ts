import { USERS } from "../Redux/Constants/users";

type AgricultureTypes = Array<string>;

type ProductionTypes = Array<string>;

type UserTypeIdentifier = "trading_house" | "farmer" | "advisor" | "mill";

interface Company {
  id: number;
  agricultureTypes: AgricultureTypes;
  description: string;
  logoPath: null | string;
  name: string;
  productionTypes: ProductionTypes;
  translatedUserType: string;
  userTypeIdentifier: UserTypeIdentifier;
}

interface Position {
  lng: number;
  lat: number;
}

export interface UserType {
  id: number;
  addressId: number;
  company: Company;
  listingsCount: number;
  position: Position;
  primaryTradeType: undefined | "buyer" | "seller";
  userId: number;
  userTypeIdentifier: UserTypeIdentifier;
}

export interface UserState {
  users: UserType[];
  loading: boolean;
}
export type UserAction = {
  type: typeof USERS.GET_SUCCESS | typeof USERS.GET;
  payload?: UserType[];
};
