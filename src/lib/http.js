import axios from 'axios'
import Vue from 'vue'
// 基础域名
let host = window.location.host
let port = window.location.port
if (port) {
  // 端口号不是80处理
  // window.location.href = '//' + window.location.hostname + window.location.pathname
}

let baseURL = ''
switch (host) {
  case 'www.soye.vip:8080':
    baseURL = 'http://www.nodejslive.com'
    break
  case 'localhost:8080':
    baseURL = 'http://www.nodejslive.com'
    break
}

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function errorState(response) {
  console.log(response)
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    alert('网络异常')
  }
}

function successState(res) {
  if (res.data.code === 99) {
    // 这里判断重新登陆
    alert(res.data.message || '网络异常')
    // Vue.$router.push('/login')
  } else if (res.data.code === -1) {
    // 这里判断其他异常
    alert(res.data.message || '网络异常')
  }
}

const httpServer = (opts, data) => {
  let httpDefaultOpts = { // http默认配置
    method: opts.method,
    baseURL,
    url: opts.url,
    timeout: 10000,
    params: data,
    data: data,
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }

  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        successState(res)
        resolve(res)
      }
    ).catch(
      (response) => {
        errorState(response)
        reject(response)
      }
    )
  })
  return promise
}

export default httpServer
