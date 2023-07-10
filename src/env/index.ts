import 'dotenv/config'
import { z } from 'zod'

const envSchema= z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(5000),
    OPENAI_API_KEY: z.string().nonempty(),
    OPENAI_ORGANIZATION: z.string().nonempty(),
})
const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    throw new Error(_env.error.message)
}

export const env = _env.data