import axios from 'axios';
import { BASE_URL } from "./base_url";

export const GETALL = async (names) => {
  let globalData;
  let URL;
  if (!names) {
    URL = BASE_URL+'/person';
  }
  else{
    URL = BASE_URL+'/person'+`?name=${names}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data;
  });
  return globalData;
};
export const GetById=async(id)=>{
    let singleData;
    await axios.get(`${BASE_URL}/person/${id}`)
    .then((res)=>{
        singleData=res.data
    })
    return singleData
}
export const Delete= async(id)=>{
    let deleted;
    await axios.delete(`${BASE_URL}/person/${id}`)
    .then((res)=>{
deleted=res.data

    })
    return deleted
}
export const POST=async(payload)=>{
await axios.post(`${BASE_URL}/person`, payload)
}
export const PUT=async(id,news)=>{
    await axios.put(`${BASE_URL}/person/${id}`,news)
}