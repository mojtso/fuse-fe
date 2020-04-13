import { IState, AsyncAction } from "overmind"
import { BlogResponse } from "../api/models"

interface State extends IState {
  blogs: BlogResponse[]
  currentBlog: BlogResponse[]
  loading: Boolean
  errors?: string
}

export const state: State = {
  blogs: [],
  currentBlog: [],
  loading: false,
  errors: undefined,
}

const getAllBlogs: AsyncAction = async ({ state, effects }) => {
  state.blogs.loading = true
  try {
    const {
      data: { data },
    } = await effects.getAllBlogList()
    console.log(data)
    state.blogs.blogs = data
  } catch (err) {
    console.log(err)
    if (err) {
      state.blogs.errors = err
    }
  }
  state.blogs.loading = false
}

const getBlogBySlug: AsyncAction<string> = async (
  { state, effects },
  value: string
) => {
  state.blogs.loading = true
  try {
    const {
      data: { data },
    } = await effects.getBlogBySlug(value)
    state.blogs.currentBlog = data
  } catch (err) {
    state.blogs.errors = err
  }

  state.blogs.loading = false
}

export const actions = {
  getAllBlogs,
  getBlogBySlug,
}
