import urls from "@/api/urls";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {

    const mutate = useMutation((data)=>axios.post(urls.login , data));

    return mutate;
}
export const useRegister = () => {

    const mutate = useMutation((data)=>axios.post(urls.register , data));

    return mutate;
}
export const useForgotPassword = () => {

    const mutate = useMutation((data)=>axios.post(urls.forgotPassword , data));

    return mutate;
}
export const useAdminLogin = () => {

    const mutate = useMutation((data)=>axios.post(urls.adminLogin , data));

    return mutate;
}
export const useLogout = () => {

    const mutate = useMutation((data)=>axios.post(urls.logout , data));

    return mutate;
}