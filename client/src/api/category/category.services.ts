import axios from "axios"
import { CONTEXT } from "api"
import { ICategory } from "api/interfaces"
import camelcaseKeys from 'camelcase-keys';

export const getCategories = async (): Promise<ICategory[]> => {
    const {data} = await axios.get(`${CONTEXT}/categories`);
    
    return camelcaseKeys(data, {deep: true})
}