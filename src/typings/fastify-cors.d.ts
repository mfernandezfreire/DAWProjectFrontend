declare module 'fastify-cors' {
  import { FastifyPluginCallback } from 'fastify';

  const fastifyCors: FastifyPluginCallback<{
    origin?: string | boolean | RegExp | (string | RegExp)[]
    methods?: string | string[]
    allowedHeaders?: string | string[]
  }>;

  export default fastifyCors;
}
