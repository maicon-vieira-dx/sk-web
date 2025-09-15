import { Controller, Get, Post } from '../decorators'
import { getQuery, getHeader, type H3Event } from 'h3'

@Controller('login')
export default class LoginController {

  @Get()
  async index(event: H3Event) {
    try {
      const { id, page } = getQuery(event)
      const authToken = getHeader(event, 'authorization')
      if (!authToken) throw new Error('Falha ao receber token')

      return await $fetch(
        '{{ URL_API }}',
        {
          query: { ...(id && { id }), ...(page && { page }) },
          headers: { Authorization: authToken },
        }
      )
    } catch (error: unknown) {
      const err = error as { data?: Record<string, unknown> }
      return {
        success: false,
        ...err.data,
      }
    }
  }

  @Post()
  async store(event: H3Event) {
    try {
      const authToken = getHeader(event, "authorization");
      if (!authToken) throw new Error("Falha ao receber token");
      
      return await $fetch(
        `{{ URL_API }}`,
        {
          method: "POST",
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: await readBody(event),
        }
      );
    } catch (error: unknown) {
      const err = error as { data?: Record<string, unknown> }
      return {
        success: false,
        ...err.data,
      }
    }
  }
}