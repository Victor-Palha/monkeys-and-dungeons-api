import {describe, expect, it} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('items', () => {
    it('should be able to list all items', async () =>{
        const response = await request(app).get('/api/items').expect(200)
        //console.log(response.body)
        expect(response.body).toBeInstanceOf(Array)
    })
    it('should be able to list Items by query', async () =>{
        const response = await request(app).get('/api/items/query?nome=Adamantine Armor').expect(200)
        expect(response.body).toEqual([
            expect.objectContaining({
                
                "name": "Adamantine Armor",
                "desc": "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
                "type": "Armor (medium or heavy)",
                "rarity": "uncommon",
                "id": "a5d9bf0a-bb44-4433-8575-a3215925f9ad"
                  
            })
        ])
    })
    it('should be able to list a unique Monster', async () =>{
        const response = await request(app).get('/api/items/60bbba8a-d372-48d6-893f-4e5360536183').expect(200)
        expect(response.body).toEqual([
            expect.objectContaining({
                "name": "Amulet of Health",
                "desc": "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.",
                "type": "Wondrous item",
                "rarity": "rare",
                "requiresAttunement": true,
                "id": "60bbba8a-d372-48d6-893f-4e5360536183"
            })
        ])
    })
})