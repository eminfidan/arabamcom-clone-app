import axios from "../config.js";

export default {
  getVehicles: async (params) => {
    return await axios.get("/listing", { ...params });
  },
  getVehicleDetail: async (params) => {
    return await axios.get("/detail", {
      params: params,
    });
  },
};
