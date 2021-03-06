import apiUserService from '../utils/apiUserService'

const userService = {
  getUser: async (id) => {
    let res = await apiUserService.get(`/user/${id}`)
    return res;
  },
  putUser: async (id,data) => {
    let res = await apiUserService.put(`/user/${id}`,data)
    return res
  },
  getMe: async () => {
    let res = await apiUserService.get(`/me`)
    return res;
  },
  putMe: async (data) => {
    let res = await apiUserService.put(`/me`,data)
    return res
  },
  postGeneralAnswer: async (id,data) => {
    let res = await apiUserService.post(`/user/${id}/general`,data)
    return res
  },
  getAllUser: async() => {
    let res = await apiUserService.get(`/users`)
    return res
  },
  getDailyGraph: async(date) => {
    let res = await apiUserService.get(`users?filter=graph&option=daily&date=${date}`)
    return res
  },
  getHourlyGraph: async(date) => {
    let res = await apiUserService.get(`users?filter=graph&option=hourly&date=${date}`)
    return res
  },
  getUserUpdateCount: async() =>{
    let res = await apiUserService.get(`users?filter=update`)
    return res
  },
  getUserInformation: async() =>{
    let res = await apiUserService.get(`users?filter=information`)
    return res
  }
}

export default userService