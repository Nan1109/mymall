import axios from "./axios";

export const getHomeFunc = () => axios.get("/home/swiperdata");

export const getHomeList = () => axios.get('/home/catitems');

export const getHomeDetails = () => axios.get('/home/floordata');

export const getCarousle = data => axios.get('/goods/qsearch',{
  params:data,
})

export const getGoodsSearch = data => axios.get('/goods/search',{
  params: data,
})

// 商品详情
export const getParticulars = data => axios.get('/goods/detail',{
  params:data,
})