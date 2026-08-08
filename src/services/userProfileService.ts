import api from './api'

export const userProfileService = {
  getProfile: async () => {
    const res = await api.get('/api/v1/user-profile/me')
    return res.data
  },
  createProfile: async (data: any) => {
    const res = await api.post('/api/v1/user-profile/', data)
    return res.data
  },
  updateProfile: async (data: any) => {
    const res = await api.put('/api/v1/user-profile/me', data)
    return res.data
  },
}
