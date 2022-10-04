import axios from "axios";

export const BASE_URL = "";
// 제일 먼저 실행되는 자바스크립트 파일의 최상위에 위치
// require("dotenv").config({path: '../../.env'})
// const BASE_URL = process.env.REACT_APP_BACKEND_HOST_URL

export const API_ACCOUNT = axios.create({
  baseURL : BASE_URL,
  headers: {
    "Authorization": localStorage.token
  }
});

export const API_COMMUNITY = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_NOTICE = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_MYPAGE = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_DRAW = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_HOME = axios.create({
  baseURL: BASE_URL,
  headers: {}             
})

export const ex = () => {};
