import {describe, it} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Adventure', () => {
    it('should be able to generate adventure', async () =>{
        await request(app).get('/api/adventure?type=Dark Fantasy').expect(200)
    }, 70000)
})