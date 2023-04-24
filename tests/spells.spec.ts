import {describe, expect, it} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('spells', () => {
    it('should be able to list all spells', async () =>{
        const response = await request(app).get('/api/spells').expect(200)
        //console.log(response.body)
        expect(response.body).toBeInstanceOf(Array)
    })
    it('should be able to list spells by query', async () =>{
        const response = await request(app).get('/api/spells/query?nome=wish').expect(200)
        expect(response.body).toEqual([
            expect.objectContaining({
                
                    "id": "103738cf-ff30-475b-ba8a-8dfd3d9c8925",
                    "name": "Wish",
                    "source": "PHB",
                    "level": 9,
                    "ritual": false,
                    "concentration": false,
                    "classes": [
                      "Sorcerer",
                      "Wizard"
                    ],
                    "school": "Conjuration"
                  
            })
        ])
    })
    it('should be able to list a unique spell', async () =>{
        const response = await request(app).get('/api/spells/103738cf-ff30-475b-ba8a-8dfd3d9c8925').expect(200)
        expect(response.body).toEqual([
            expect.objectContaining({
                "name": "Wish",
                "source": "PHB",
                "level": 9,
                "ritual": false,
                "school": "Conjuration",
                "casting_time": "1 action",
                "range": "Self",
                "components": "V",
                "duration": {
                  "time": "Instantaneous",
                  "concentration": false
                },
                "description": "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.\f The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice:\f \f - You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.\f - You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell.\f You grant up to ten creatures that you can see resistance to a damage type you choose.\f - You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack.\f - You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.\f \f You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner.\f The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.",
                "subclasses": [
                  "Arcana Cleric",
                  "Genie Warlock"
                ],
                "classes": [
                  "Sorcerer",
                  "Wizard"
                ],
                "id": "103738cf-ff30-475b-ba8a-8dfd3d9c8925"
            })
        ])
    })
})