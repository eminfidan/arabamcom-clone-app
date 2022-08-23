import axios from "../config.js";

export default {
  get: async (params) => {
    return await axios.get("/listing?take=50", {
      params: params,
    });
  },
  getDetail: async (params) => {
    return await axios.get("/detail", {
      params: params,
    });
  },
};
