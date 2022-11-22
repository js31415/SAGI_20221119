import {useQuery, useMutation} from "@tanstack/react-query"
import { queryKeys } from "api"
import { VideoPayload } from "api/interfaces"
import { doVideoUpload, getVideos } from "./video.services"



export const useVideos = () => useQuery([queryKeys.videos], getVideos)

export const useVideoUpload = () => useMutation((payload: VideoPayload) => doVideoUpload(payload))