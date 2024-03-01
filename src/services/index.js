import { apiKey, axiosInstance } from "../utils/config/axios";

const recipesRandomService = async () => {
  const number = 9;
  const res = await axiosInstance({
    url: `/recipes/random?number=${number}&apiKey=${apiKey}`,
    method: "GET",
  });
  return res.data;
};

// const searchByName = async () => {
//   const res = await instance({
//     url: "/recipes/random/",
//     method: "GET",
//   });
//   return (data = res.data);
// };

export { recipesRandomService };
