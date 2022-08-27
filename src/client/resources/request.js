import axios from "../config.js";

export default {
  get: async (params) => {
    return await axios.get("/listing", { ...params });
  },
  getDetail: async (params) => {
    return await axios.get("/detail", {
      params: params,
    });
  },
};
