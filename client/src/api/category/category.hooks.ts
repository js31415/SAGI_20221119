import {useQuery} from "@tanstack/react-query"
import { queryKeys } from "api"
import { getCategories } from "./category.services"

export const useCategories = () => useQuery([queryKeys.categories], getCategories)