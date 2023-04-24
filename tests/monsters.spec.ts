import {describe, expect, it} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Monsters', () => {
    it('should be able to list all monsters', async () =>{
        const response = await request(app).get('/api/monsters').expect(200)
        //console.log(response.body)
        expect(response.body).toBeInstanceOf(Array)
    })
    it('should be able to list Monsters by query', async () =>{
        const response = await request(app).get('/api/monsters/query?nome=Aarakocra').expect(200)
        expect(response.body).toEqual([
            expect.objectContaining({
                
                "id": "f39d52d8-2810-4e5a-9000-7b4659a7e4ff",
                "name": "Aarakocra",
                "source": "MM",
                "type": {
                  "type": "humanoid",
                  "tags": [
                    "aarakocra"
                  ]
                },
                "cr": "1/4",
                "image": true,
                "ext": ".jpg"
                  
            })
        ])
    })
    it('should be able to list a unique Monster', async () =>{
        const response = await request(app).get('/api/monsters/e0332645-1534-422b-81f7-51969de2c9ae').expect(200)
        expect(response.body).toEqual([
            expect.objectContaining({
                "name": "Lich",
                "source": "MM",
                "page": 202,
                "srd": true,
                "otherSources": [
                {
                    "source": "CoS"
                },
                {
                    "source": "GoS"
                },
                {
                    "source": "IDRotF"
                },
                {
                    "source": "TCE"
                }
                ],
                "size": [
                "M"
                ],
                "type": "undead",
                "alignment": [
                "L",
                "NX",
                "C",
                "E"
                ],
                "ac": [
                {
                    "ac": 17,
                    "from": [
                    "natural armor"
                    ]
                }
                ],
                "hp": {
                "average": 135,
                "formula": "18d8 + 54"
                },
                "speed": {
                "walk": 30
                },
                "str": 11,
                "dex": 16,
                "con": 16,
                "int": 20,
                "wis": 14,
                "cha": 16,
                "save": {
                "con": "+10",
                "int": "+12",
                "wis": "+9"
                },
                "skill": {
                "arcana": "+19",
                "history": "+12",
                "insight": "+9",
                "perception": "+9"
                },
                "senses": [
                "truesight 120 ft."
                ],
                "passive": 19,
                "resist": [
                "cold",
                "lightning",
                "necrotic"
                ],
                "immune": [
                "poison",
                {
                    "immune": [
                    "bludgeoning",
                    "piercing",
                    "slashing"
                    ],
                    "note": "from nonmagical attacks",
                    "cond": true
                }
                ],
                "conditionImmune": [
                "charmed",
                "exhaustion",
                "frightened",
                "paralyzed",
                "poisoned"
                ],
                "languages": [
                "Common plus up to five other languages"
                ],
                "cr": {
                "cr": "21",
                "lair": "22"
                },
                "spellcasting": [
                {
                    "name": "Spellcasting",
                    "headerEntries": [
                    "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save {20}, +12} to hit with spell attacks). The lich has the following wizard spells prepared:"
                    ],
                    "spells": {
                    "0": {
                        "spells": [
                        "{ mage hand}",
                        "{ prestidigitation}",
                        "{ ray of frost}"
                        ]
                    },
                    "1": {
                        "slots": 4,
                        "spells": [
                        "{ detect magic}",
                        "{ magic missile}",
                        "{ shield}",
                        "{ thunderwave}"
                        ]
                    },
                    "2": {
                        "slots": 3,
                        "spells": [
                        "{ detect thoughts}",
                        "{ invisibility}",
                        "{ Melf's acid arrow}",
                        "{ mirror image}"
                        ]
                    },
                    "3": {
                        "slots": 3,
                        "spells": [
                        "{ animate dead}",
                        "{ counterspell}",
                        "{ dispel magic}",
                        "{ fireball}"
                        ]
                    },
                    "4": {
                        "slots": 3,
                        "spells": [
                        "{ blight}",
                        "{ dimension door}"
                        ]
                    },
                    "5": {
                        "slots": 3,
                        "spells": [
                        "{ cloudkill}",
                        "{ scrying}"
                        ]
                    },
                    "6": {
                        "slots": 1,
                        "spells": [
                        "{ disintegrate}",
                        "{ globe of invulnerability}"
                        ]
                    },
                    "7": {
                        "slots": 1,
                        "spells": [
                        "{ finger of death}",
                        "{ plane shift}"
                        ]
                    },
                    "8": {
                        "slots": 1,
                        "spells": [
                        "{ dominate monster}",
                        "{ power word stun}"
                        ]
                    },
                    "9": {
                        "slots": 1,
                        "spells": [
                        "{ power word kill}"
                        ]
                    }
                    },
                    "ability": "int"
                }
                ],
                "trait": [
                {
                    "name": "Legendary Resistance (3/Day)",
                    "entries": [
                    "If the lich fails a saving throw, it can choose to succeed instead."
                    ]
                },
                {
                    "name": "Rejuvenation",
                    "entries": [
                    "If it has a phylactery, a destroyed lich gains a new body in {1d10} days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
                    ]
                },
                {
                    "name": "Turn Resistance",
                    "entries": [
                    "The lich has advantage on saving throws against any effect that turns undead."
                    ]
                }
                ],
                "action": [
                {
                    "name": "Paralyzing Touch",
                    "entries": [
                    "{1d20 +12} to hit, reach 5 ft., one creature. 10( 3d6}) cold damage. The target must succeed on a {18} Constitution saving throw or be {paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                    ]
                }
                ],
                "legendary": [
                {
                    "name": "Cantrip",
                    "entries": [
                    "The lich casts a cantrip."
                    ]
                },
                {
                    "name": "Paralyzing Touch (Costs 2 Actions)",
                    "entries": [
                    "The lich uses its Paralyzing Touch."
                    ]
                },
                {
                    "name": "Frightening Gaze (Costs 2 Actions)",
                    "entries": [
                    "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a {18} Wisdom saving throw against this magic or become {frightened} for 1 minute. The {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
                    ]
                },
                {
                    "name": "Disrupt Life (Costs 3 Actions)",
                    "entries": [
                    "Each non-undead creature within 20 feet of the lich must make a {18} Constitution saving throw against this magic, taking 21 (6d6}) necrotic damage on a failed save, or half as much damage on a successful one."
                    ]
                }
                ],
                "legendaryGroup": {
                "name": "Lich",
                "source": "MM"
                },
                "soundClip": {
                "type": "internal",
                "path": "bestiary/lich.mp3"
                },
                "traitTags": [
                "Legendary Resistances",
                "Rejuvenation",
                "Turn Resistance"
                ],
                "senseTags": [
                "U"
                ],
                "languageTags": [
                "C",
                "X"
                ],
                "damageTags": [
                "C",
                "N"
                ],
                "damageTagsLegendary": [
                "N"
                ],
                "damageTagsSpell": [
                "A",
                "C",
                "F",
                "I",
                "N",
                "O",
                "T"
                ],
                "spellcastingTags": [
                "CW"
                ],
                "conditionInflict": [
                "frightened",
                "paralyzed"
                ],
                "conditionInflictSpell": [
                "charmed",
                "invisible",
                "stunned"
                ],
                "hasToken": true,
                "hasFluff": true,
                "hasFluffImages": true,
                "id": "e0332645-1534-422b-81f7-51969de2c9ae",
                "image": false,
                "ext": null
            })
        ])
    })
})