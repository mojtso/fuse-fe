import { AxiosResponse } from "axios"

// interface BaseEntity {
//   id: number;
//   createdAt: string;
//   updatedAt: string;
// }

type Body<K extends string, T> = {
  [S in K]: T
}

export type RequestBody<K extends string, T> = Body<K, T>
export type ResponseData<K extends string, T> = AxiosResponse<Body<K, T>>

export interface Image {
  id: number
  kind: string
  url: string
  lazyload: string
}

export interface Banner {
  title: string
  description: string
  excerpt: string
  image: Image
}

export interface PostDate {
  date: string
  timezone_type: string
  timezone: string
}

export interface BlogResponse {
  title: string
  url: string
  slug: string
  author: string
  pageData?: string
  category: string
  postDate: PostDate
  banner: Banner
}
