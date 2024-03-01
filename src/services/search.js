import { apiKey, axiosInstance } from "../utils/config/axios";


const searchByNameService= async(query, number)=>{
    const res = await axiosInstance({
      url: `/recipes/complexSearch?query=${query}&number=${number}&apiKey=${apiKey}`,
      method: "GET",
    });
    return res.data;
}

// const searchByName = async () => {
//   const res = await instance({
//     url: "/recipes/random/",
//     method: "GET",
//   });
//   return (data = res.data);
// };

export { searchByNameService };