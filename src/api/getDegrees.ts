import axios from "axios";

import { Degree } from "@/api/types";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<Degree[]>(`${baseUrl}/degrees`);
  console.log("degree ", response.data);
  return response.data;
};
export default getDegrees;
