import Axios from "axios";
import { ProfileDataFormType } from "../components/Profile/ProfileInfo/ProfileDataForm";

const instance = Axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9209cc73-1dd6-4bef-bbf6-e01b3e14b107'
    }
})

export const usersAPI = {
    getUsers (currentPage=1,pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(respons=>respons.data);
    },
}

export const followAPI = {
    unFollow (id:string) {
        return instance.delete(`follow/${id}`)
        .then(respons=>respons.data)
    },
    follow (id:string) {
        return instance.post(`follow/${id}`)
        .then(respons=>respons.data)
    },
}

export const profileAPI = {
    getProfile (userId:string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId:string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`,{status})
    },
    updateProfile (formData:ProfileDataFormType) {
        return instance.put(`profile`, formData)
    },
    updatePhotos (file: File) {
        let data = new FormData()
        data.append('file', file)
        return instance.put(`profile/photo`, data, {headers: {
            'Content-Type': 'multipart/form-data',
        }})
    },
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    captchIsReqired = 10 
}
type MeDataType = {
    id: number,
    login: string,
    email: string
}
type ResponsType<T> = {
    data: T
    messages: string[]
    resultCode: ResultCodeEnum
}

export const authAPI = {
    getMe () {
        return instance.get<ResponsType<MeDataType>>(`auth/me`)
        .then(respons=>respons.data)
    },
    login (email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponsType<{userId: number}>>(`auth/login`, {
          email,
          password,
          rememberMe
        }).then(res=>res.data)
    },
    logout () {
        return instance.post(`auth/logout`)
        .then(res=>res.data)
    }
}
