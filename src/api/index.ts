import Axios from "axios"
import { ResponseData, BlogResponse } from "./models"

const baseUrl = "http://test.fuseclients.com/api"
const request = Axios.create({
  baseURL: baseUrl,
})

export const getAllBlogList = (): Promise<
  ResponseData<"data", BlogResponse[]>
> => request.get("/blog/list")

export const getBlogBySlug = (
  slug: string
): Promise<ResponseData<"data", BlogResponse[]>> => request.get(`/blog/${slug}`)
