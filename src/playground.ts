import { GlobalState } from "@/store/types";

const state: Partial<GlobalState> = {
  isLoggedIn: true,
  selectedOrganizations: [],
};
//Partial делает поля GlobalState  не обязательными
