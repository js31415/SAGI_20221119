import { CONTEXT } from "api";
import { IVideo, VideoPayload } from "api/interfaces";
import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";




export const getVideos = async (): Promise<IVideo[]> => {
    const {data} = await axios.get(`${CONTEXT}/videos`)

    return camelcaseKeys(data, {deep: true})
}


export const doVideoUpload = async (payload: VideoPayload): Promise<IVideo> => {
    const transformedData = snakecaseKeys(payload, {deep: true})

    const {data} = await axios.post(`${CONTEXT}/videos`, transformedData);

    return camelcaseKeys(data, {deep: true})
}