export const bestiaryMPMM = {
	"monster": [
		{
			"name": "Abjurer Wizard",
			"source": "MPMM",
			"page": 260,
			"otherSources": [
				{
					"source": "VGM",
					"page": 209
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 104,
				"formula": "16d8 + 32"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 14,
			"int": 18,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+8",
				"wis": "+5"
			},
			"skill": {
				"arcana": "+8",
				"history": "+8"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The abjurer casts one of the following spells, using Intelligence as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage hand}",
						"{ message}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ dispel magic}",
							"{ lightning bolt}",
							"{ mage armor}"
						],
						"1e": [
							"{ arcane lock}",
							"{ banishment}",
							"{ globe of invulnerability}",
							"{ invisibility}",
							"{ wall of force}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abjurer makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +8} to hit, reach 5 ft. or range 120 ft., one target. 20 (3d10 + 4}) force damage."
					]
				},
				{
					"name": "Force Blast",
					"entries": [
						"Each creature in a 20-foot cube originating from the abjurer must make a {16} Constitution saving throw. On a failed save, a creature takes 36 (8d8}) force damage and is pushed up to 10 feet away from the abjurer. On a successful save, a creature takes half as much damage and isn't pushed."
					]
				}
			],
			"reaction": [
				{
					"name": "Arcane Ward {Recharge - 4}",
					"entries": [
						"When the abjurer or a creature it can see within 30 feet of it takes damage, the abjurer magically creates a protective barrier around itself or the other creature. The barrier reduces the damage to the protected creature by 26 (4d10 + 4}), to a minimum of 0, and then vanishes."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/abjurer.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"O"
			],
			"damageTagsSpell": [
				"L"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflictSpell": [
				"incapacitated",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Adult Kruthik",
			"source": "MPMM",
			"page": 169,
			"otherSources": [
				{
					"source": "MTF",
					"page": 212
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 40,
				"burrow": 20,
				"climb": 40
			},
			"str": 15,
			"dex": 16,
			"con": 15,
			"int": 7,
			"wis": 12,
			"cha": 8,
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 15,
			"languages": [
				"Kruthik"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				},
				{
					"name": "Tunneler",
					"entries": [
						"The kruthik can burrow through solid rock at half its burrowing speed and leaves a 5-foot-diameter tunnel in its wake."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kruthik makes two Stab or Spike attacks."
					]
				},
				{
					"name": "Stab",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage."
					]
				},
				{
					"name": "Spike",
					"entries": [
						"1d20+5} to hit, range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/adult-kruthik.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Adult Oblex",
			"source": "MPMM",
			"page": 198,
			"otherSources": [
				{
					"source": "MTF",
					"page": 218
				}
			],
			"size": [
				"M"
			],
			"type": "ooze",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 20
			},
			"str": 8,
			"dex": 19,
			"con": 16,
			"int": 19,
			"wis": 12,
			"cha": 15,
			"save": {
				"int": "+7",
				"cha": "+5"
			},
			"skill": {
				"deception": "+5",
				"perception": "+4",
				"other": [
					{
						"oneOf": {
							"arcana": "+7",
							"history": "+7",
							"nature": "+7",
							"religion": "+7"
						}
					}
				]
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this distance)"
			],
			"passive": 14,
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"prone"
			],
			"languages": [
				"Common plus two more languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The oblex casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"daily": {
						"3e": [
							"{ charm person} (as 5th-level spell)",
							"{ detect thoughts}",
							"{ hypnotic pattern}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The oblex can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Aversion to Fire",
					"entries": [
						"If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The oblex doesn't require sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The oblex makes two pseudopod attacks, and it uses Eat Memories."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (2d6 + 4}) bludgeoning damage plus 7 (2d6}) psychic damage."
					]
				},
				{
					"name": "Eat Memories",
					"entries": [
						"The oblex targets one creature it can see within 5 feet of it. The target must succeed on a {15} Wisdom saving throw or take 18 (4d8}) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the { greater restoration} or { heal} spell. Constructs, Oozes, Plants, and Undead succeed on the save automatically.",
						"While memory drained, the target must roll a {@dice d4} and subtract the number rolled from its ability checks and attack rolls. Each time the target is memory drained beyond the first, the die size increases by one: the {@dice d4} becomes a {@dice d6}, the {@dice d6} becomes a {@dice d8}, and so on until the die becomes a {@dice d20}, at which point the target becomes {unconscious} for 1 hour. The effect then ends.",
						"The oblex learns all the languages a memory-drained target knows and gains all its skill proficiencies."
					]
				}
			],
			"bonus": [
				{
					"name": "Sulfurous Impersonation",
					"entries": [
						"The oblex extrudes a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate {@dice 1d4 + 1} different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. The simulacrum is an extension of the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex and the simulacrum. The simulacrum disappears if the tether is severed."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oblex-adult.mp3"
			},
			"traitTags": [
				"Amorphous",
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"unconscious"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"incapacitated",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Air Elemental Myrmidon",
			"source": "MPMM",
			"page": 122,
			"otherSources": [
				{
					"source": "MTF",
					"page": 202
				}
			],
			"size": [
				"M"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 117,
				"formula": "18d8 + 36"
			},
			"speed": {
				"walk": 30,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 18,
			"dex": 14,
			"con": 14,
			"int": 9,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"lightning",
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Auran",
				"one language of its creator's choice"
			],
			"cr": "7",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes three Flail attacks."
					]
				},
				{
					"name": "Flail",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) force damage."
					]
				},
				{
					"name": "Lightning Strike {Recharge -}",
					"entries": [
						"The myrmidon makes one Flail attack. On a hit, the target takes an extra 18 (4d8}) lightning damage, and the target must succeed on a {13} Constitution saving throw or be {stunned} until the end of the myrmidon's next turn."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/air-elemental-myrmidon.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AU"
			],
			"damageTags": [
				"L",
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Alhoon",
			"source": "MPMM",
			"page": 43,
			"otherSources": [
				{
					"source": "VGM",
					"page": 172
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "undead",
				"tags": [
					"mind flayer",
					"wizard"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "20d8 + 60"
			},
			"speed": {
				"walk": 30,
				"fly": {
					"number": 15,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 11,
			"dex": 12,
			"con": 16,
			"int": 19,
			"wis": 17,
			"cha": 17,
			"save": {
				"con": "+7",
				"int": "+8",
				"wis": "+7",
				"cha": "+7"
			},
			"skill": {
				"arcana": "+8",
				"deception": "+7",
				"history": "+8",
				"insight": "+7",
				"perception": "+7",
				"stealth": "+5"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				"lightning",
				"necrotic"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 120 ft."
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The alhoon casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ dancing lights}",
						"{ detect magic}",
						"{ detect thoughts}",
						"{ disguise self}",
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ dominate monster}",
							"{ globe of invulnerability}",
							"{ invisibility}",
							"{ modify memory}",
							"{ plane shift} (self only)",
							"{ wall of force}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The alhoon has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Turn Resistance",
					"entries": [
						"The alhoon has advantage on saving throws against any effect that turns Undead."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The alhoon makes two Chilling Grasp or Arcane Bolt attacks."
					]
				},
				{
					"name": "Chilling Grasp",
					"entries": [
						"{1d20 +8} to hit, reach 5 ft., one target. 14 (4d6}) cold damage, and the alhoon regains 14 hit points."
					]
				},
				{
					"name": "Arcane Bolt",
					"entries": [
						"{@atk rs} +8} to hit, range 120 ft., one target. 28 (8d6}) force damage."
					]
				},
				{
					"name": "Mind Blast {Recharge - 5}",
					"entries": [
						"The alhoon magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {16} Intelligence saving throw or take 22 (4d8 + 4}) psychic damage and be {stunned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"reaction": [
				{
					"name": "Negate Spell (3/Day)",
					"entries": [
						"The alhoon targets one creature it can see within 60 feet of it that is casting a spell. If the spell is 3rd level or lower, the spell fails, but any spell slots or charges are not wasted."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/alhoon.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Turn Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"C",
				"O",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflict": [
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"incapacitated",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Alkilith",
			"source": "MPMM",
			"page": 44,
			"otherSources": [
				{
					"source": "MTF",
					"page": 130
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 168,
				"formula": "16d8 + 96"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 12,
			"dex": 19,
			"con": 22,
			"int": 6,
			"wis": 11,
			"cha": 7,
			"save": {
				"dex": "+8",
				"con": "+10"
			},
			"skill": {
				"stealth": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"acid",
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Abyssal Rift",
					"entries": [
						"If the alkilith surrounds a door, window, or similar opening continuously for {@dice 6d6} days, the opening becomes a permanent portal to a random layer of the Abyss."
					]
				},
				{
					"name": "Amorphous",
					"entries": [
						"The alkilith can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"If the alkilith is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the alkilith move or act, that creature must succeed on a {18} Intelligence ({@skill Investigation}) check to discern that the alkilith isn't ordinary slime or fungus."
					]
				},
				{
					"name": "Foment Confusion",
					"entries": [
						"Any creature that isn't a demon that starts its turn within 30 feet of the alkilith must succeed on a {18} Wisdom saving throw, or it hears a faint buzzing in its head for a moment and has disadvantage on its next attack roll, saving throw, or ability check.",
						"If the saving throw against Foment Confusion fails by 5 or more, the creature is instead subjected to the { confusion} spell for 1 minute (no concentration required by the alkilith). While under the effect of that confusion, the creature is immune to Foment Confusion."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The alkilith has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The alkilith can climb difficult surfaces, such as upside down on ceilings, without making an ability check."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The alkilith doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The alkilith makes three Tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+8} to hit, reach 15 ft., one target. 18 (4d6 + 4}) acid damage."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/alkilith.mp3"
			},
			"traitTags": [
				"Amorphous",
				"False Appearance",
				"Magic Resistance",
				"Spider Climb",
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"A"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Allip",
			"source": "MPMM",
			"page": 45,
			"otherSources": [
				{
					"source": "MTF",
					"page": 116
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 6,
			"dex": 17,
			"con": 10,
			"int": 17,
			"wis": 15,
			"cha": 16,
			"save": {
				"int": "+6",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				"acid",
				"fire",
				"lightning",
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The allip can move through other creatures and objects as if they were {@quickref difficult terrain||3}. It takes 5 (1d10}) force damage if it ends its turn inside an object."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The allip doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Maddening Touch",
					"entries": [
						"{1d20 +6} to hit, reach 5 ft., one target. 17 (4d6 + 3}) psychic damage."
					]
				},
				{
					"name": "Howling Babble {Recharge -}",
					"entries": [
						"Each creature within 30 feet of the allip that can hear it must make a {14} Wisdom saving throw. On a failed save, a target takes 12 (2d8 + 3}) psychic damage, and it is {stunned} until the end of its next turn. On a successful save, it takes half as much damage and isn't {stunned}. Constructs and Undead are immune to this effect."
					]
				},
				{
					"name": "Whispers of Compulsion",
					"entries": [
						"The allip chooses up to three creatures it can see within 60 feet of it. Each target must succeed on a {14} Wisdom saving throw, or it takes 12 (2d8 + 3}) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and Undead are immune to this effect."
					]
				}
			],
			"environment": [
				"swamp",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/allip.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Amnizu",
			"source": "MPMM",
			"page": 46,
			"otherSources": [
				{
					"source": "MTF",
					"page": 164
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 202,
				"formula": "27d8 + 81"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 11,
			"dex": 13,
			"con": 16,
			"int": 20,
			"wis": 12,
			"cha": 18,
			"save": {
				"dex": "+7",
				"con": "+9",
				"wis": "+7",
				"cha": "+10"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"poisoned"
			],
			"languages": [
				"Common",
				"Infernal",
				"telepathy 1,000 ft."
			],
			"cr": "18",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The amnizu casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {19}):"
					],
					"will": [
						"{ command}"
					],
					"daily": {
						"1": [
							"{ feeblemind}"
						],
						"3": [
							"{ dominate monster}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the amnizu's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The amnizu has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The amnizu uses Blinding Rot or Forgetfulness, if available. It also makes two Taskmaster Whip attacks."
					]
				},
				{
					"name": "Taskmaster Whip",
					"entries": [
						"{1d20+11} to hit, reach 10 ft., one target. 9 (1d8 + 5}) slashing damage plus 16 (3d10}) force damage."
					]
				},
				{
					"name": "Blinding Rot",
					"entries": [
						"The amnizu targets one or two creatures that it can see within 60 feet of it. Each target must succeed on a {19} Wisdom saving throw or take 26 (4d12}) necrotic damage and be {blinded} until the start of the amnizu's next turn."
					]
				},
				{
					"name": "Forgetfulness {Recharge -}",
					"entries": [
						"The amnizu targets one creature it can see within 60 feet of it. That creature must succeed on a {18} Intelligence saving throw or take 26 (4d12}) psychic damage and become {stunned} for 1 minute. A {stunned} creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target is {stunned} for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours."
					]
				}
			],
			"reaction": [
				{
					"name": "Instinctive Charm",
					"entries": [
						"When a creature within 60 feet of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a {19} Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Devil Summoning",
					"entries": [
						"Some amnizus have an action that allows them to summon other devils:",
						{
							"name": "Summon Devil (1/Day)",
							"type": "entries",
							"entries": [
								"The amnizu summons {@dice 2d4} bearded devils or {@dice 1d4} barbed devils. A summoned devil appears in an unoccupied space within 60 feet of the amnizu, acts as an ally of the amnizu, and can't summon other devils. It remains for 1 minute, until the amnizu dies, or until its summoner dismisses it as an action"
							]
						}
					],
					"_version": {
						"name": "Amnizu (Summoner)",
						"addHeadersAs": "action"
					}
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/amnizu.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"I",
				"TP"
			],
			"damageTags": [
				"N",
				"O",
				"S",
				"Y"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Angry Sorrowsworn",
			"source": "MPMM",
			"page": 222,
			"otherSources": [
				{
					"source": "MTF",
					"page": 231
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 255,
				"formula": "30d8 + 120"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 10,
			"con": 19,
			"int": 8,
			"wis": 13,
			"cha": 6,
			"skill": {
				"perception": "+11"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 21,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "while in dim light or darkness",
					"cond": true
				}
			],
			"languages": [
				"Common"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Two Heads",
					"entries": [
						"The sorrowsworn has advantage on saving throws against being {blinded}, {charmed}, {deafened}, {frightened}, {stunned}, or knocked {unconscious}."
					]
				},
				{
					"name": "Rising Anger",
					"entries": [
						"If another creature deals damage to the sorrowsworn, the sorrowsworn's attack rolls have advantage until the end of its next turn, and the first time it hits with a Hook attack on its next turn, the attack's target takes an extra 19 (3d12}) psychic damage.",
						"On its turn, the sorrowsworn has disadvantage on attack rolls if no other creature has dealt damage to it since the end of its last turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sorrowsworn makes two Hook attacks."
					]
				},
				{
					"name": "Hook",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 16 (2d12 + 3}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-angry.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Annis Hag",
			"source": "MPMM",
			"page": 47,
			"otherSources": [
				{
					"source": "VGM",
					"page": 159
				}
			],
			"size": [
				"L"
			],
			"type": "fey",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 90,
				"formula": "12d10 + 24"
			},
			"speed": {
				"walk": 40
			},
			"str": 21,
			"dex": 12,
			"con": 14,
			"int": 13,
			"wis": 14,
			"cha": 15,
			"save": {
				"con": "+5"
			},
			"skill": {
				"deception": "+5",
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				"cold"
			],
			"languages": [
				"Common",
				"Giant",
				"Sylvan"
			],
			"cr": {
				"cr": "6",
				"coven": "8"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The hag casts one of the following spells, using Charisma as the spellcasting ability (spell save {13}):"
					],
					"daily": {
						"3e": [
							"{ disguise self} (including the form of a Medium Humanoid)",
							"{ Fog cloud}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The annis makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 15 (3d6 + 5}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 15 (3d6 + 5}) slashing damage."
					]
				},
				{
					"name": "Crushing Hug",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 36 (9d6 + 5}) bludgeoning damage, and the target is {grappled} (escape {15}) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6 + 5}) bludgeoning damage at the start of each of the hag's turns. The hag can't make attacks while grappling a creature in this way."
					]
				}
			],
			"environment": [
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/annis-hag.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI",
				"S"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Apprentice Wizard",
			"source": "MPMM",
			"page": 259,
			"otherSources": [
				{
					"source": "VGM",
					"page": 209
				},
				{
					"source": "SjA"
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				10,
				{
					"ac": 13,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 10,
			"con": 10,
			"int": 14,
			"wis": 10,
			"cha": 11,
			"skill": {
				"arcana": "+4",
				"history": "+4"
			},
			"passive": 10,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "1/4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The apprentice casts one of the following spells, using Intelligence as the spellcasting ability (spell save {12})"
					],
					"will": [
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ burning hands}",
							"{ disguise self}",
							"{ mage armor}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +4} to hit, reach 5 ft. or range 120 ft., one target. 7 (1d10 + 2}) force damage."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/apprentice-wizard.mp3"
			},
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"O"
			],
			"damageTagsSpell": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Archdruid",
			"source": "MPMM",
			"page": 48,
			"otherSources": [
				{
					"source": "VGM",
					"page": 210
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"druid"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item hide armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 154,
				"formula": "28d8 + 28"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 14,
			"con": 12,
			"int": 12,
			"wis": 20,
			"cha": 11,
			"save": {
				"int": "+5",
				"wis": "+9"
			},
			"skill": {
				"medicine": "+9",
				"nature": "+5",
				"perception": "+9"
			},
			"passive": 19,
			"languages": [
				"Druidic plus any two languages"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The archdruid casts one of the following spells, using Wisdom as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ beast sense}",
						"{ entangle}",
						"{ speak with animals}"
					],
					"daily": {
						"3e": [
							"{ animal messenger}",
							"{ dominate beast}",
							"{ faerie fire}",
							"{ tree stride}"
						],
						"1e": [
							"{ commune with nature} (as an action)",
							"{ mass cure wounds}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The archdruid makes three Staff or Wildfire attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Staff",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 5 (1d6 + 2}) bludgeoning damage plus 21 (6d6}) poison damage."
					]
				},
				{
					"name": "Wildfire",
					"entries": [
						"{@atk rs} +9} to hit, range 120 ft., one target. 26 (6d6 + 5}) fire damage, and the target is {blinded} until the start of the druid's next turn."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape (2/Day)",
					"entries": [
						"The archdruid magically transforms into a Beast or an Elemental with a challenge rating of 6 or less and can remain in that form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls {unconscious}. The archdruid can revert to its true form using a bonus action.",
						"While in a new form, the archdruid's stat block is replaced by the stat block of that form, except the archdruid keeps its current hit points, its hit point maximum, this bonus action, its languages and ability to speak, and its Spellcasting action.",
						"The new form's attacks count as magical for the purpose of overcoming resistances and immunity to nonmagical attacks."
					]
				}
			],
			"environment": [
				"forest",
				"mountain",
				"swamp",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/archdruid.mp3"
			},
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"DU",
				"X"
			],
			"damageTags": [
				"B",
				"F",
				"I"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"blinded"
			],
			"conditionInflictSpell": [
				"charmed",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Archer",
			"source": "MPMM",
			"page": 49,
			"otherSources": [
				{
					"source": "VGM",
					"page": 210
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 18,
			"con": 16,
			"int": 11,
			"wis": 13,
			"cha": 10,
			"skill": {
				"acrobatics": "+6",
				"perception": "+5"
			},
			"passive": 15,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "3",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The archer makes two Shortsword or Longbow attacks."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+6} to hit, range 150/600 ft., one target. 8 (1d8 + 4}) piercing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Archer's Eye (3/Day)",
					"entries": [
						"Immediately after making an attack roll or a damage roll with a ranged weapon, the archer can roll a {@dice d10} and add the number rolled to the total."
					]
				}
			],
			"environment": [
				"forest",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/archer.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Armanite",
			"source": "MPMM",
			"page": 50,
			"otherSources": [
				{
					"source": "MTF",
					"page": 131
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 94,
				"formula": "9d10 + 45"
			},
			"speed": {
				"walk": 60
			},
			"str": 21,
			"dex": 18,
			"con": 21,
			"int": 8,
			"wis": 12,
			"cha": 13,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The armanite has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The armanite makes one Claw attack, one Hooves attack, and one Serrated Tail attack."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 10 (2d4 + 5}) slashing damage plus 9 (2d8}) lightning damage."
					]
				},
				{
					"name": "Hooves",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 12 (2d6 + 5}) bludgeoning damage. If the target is a Large or smaller creature, it must succeed on a {16} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Serrated Tail",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 16 (2d10 + 5}) slashing damage."
					]
				},
				{
					"name": "Lightning Lance {Recharge - 5}",
					"entries": [
						"The armanite looses a bolt of lightning in a line that is 60 feet long and 10 feet wide. Each creature in the line must make a {15} Dexterity saving throw, taking 36 (8d8}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/armanite.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"B",
				"L",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Astral Dreadnought",
			"source": "MPMM",
			"page": 51,
			"otherSources": [
				{
					"source": "MTF",
					"page": 117
				}
			],
			"size": [
				"G"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"titan"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 297,
				"formula": "17d20 + 119"
			},
			"speed": {
				"walk": 15,
				"fly": {
					"number": 80,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 28,
			"dex": 7,
			"con": 25,
			"int": 5,
			"wis": 14,
			"cha": 18,
			"save": {
				"dex": "+5",
				"wis": "+9"
			},
			"skill": {
				"perception": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 19,
			"resist": [
				{
					"resist": [
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
				"petrified",
				"poisoned",
				"prone",
				"stunned"
			],
			"cr": "21",
			"trait": [
				{
					"name": "Antimagic Cone",
					"entries": [
						"The dreadnought's eye creates an area of antimagic, as in the { antimagic field} spell, in a 150-foot cone. At the start of each of its turns, it decides which way the cone faces. The cone doesn't function while the eye is closed or while the dreadnought is {blinded}."
					]
				},
				{
					"name": "Astral Entity",
					"entries": [
						"The dreadnought can't leave the Astral Plane, nor can it be banished or otherwise transported out of that plane."
					]
				},
				{
					"name": "Demiplanar Donjon",
					"entries": [
						"Anything the dreadnought swallows is transported to a demiplane that can be entered by no other means except a { wish} spell or the dreadnought's Bite and Donjon Visit. A creature can leave the demiplane only by using magic that enables planar travel, such as the { plane shift} spell. The demiplane resembles a stone cave roughly 1,000 feet in diameter with a ceiling 100 feet high. Like a stomach, it contains the remains of past meals. The dreadnought can't be harmed from within the demiplane. If the dreadnought dies, the demiplane disappears, and everything inside it appears around the dreadnought's corpse. The demiplane is otherwise indestructible."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the dreadnought fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Sever Silver Cord",
					"entries": [
						"If the dreadnought scores a critical hit against a creature traveling by means of the { astral projection} spell, the dreadnought can cut the target's silver cord instead of dealing damage."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The dreadnought doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The dreadnought makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 36 (5d10 + 9}) force damage. If the target is a Huge or smaller creature and this damage reduces it to 0 hit points or it is {incapacitated}, the dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the Demiplanar Donjon."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+16} to hit, reach 20 ft., one target. 19 (3d6 + 9}) force damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Claw",
					"entries": [
						"The dreadnought makes one Claw attack."
					]
				},
				{
					"name": "Donjon Visit (Costs 2 Actions)",
					"entries": [
						"One Huge or smaller creature that the dreadnought can see within 60 feet of it must succeed on a {19} Charisma saving throw or be teleported to an unoccupied space on the floor of the Demiplanar Donjon. At the end of the target's next turn, it reappears in the space it left or in the nearest unoccupied space if that space is occupied."
					]
				},
				{
					"name": "Psychic Projection (Costs 3 Actions)",
					"entries": [
						"Each creature within 60 feet of the dreadnought must make a {19} Wisdom saving throw, taking 26 (4d10 + 4}) psychic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/astral-dreadnought.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Swallow"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Aurochs",
			"source": "MPMM",
			"page": 71,
			"otherSources": [
				{
					"source": "VGM",
					"page": 207
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "beast",
				"tags": [
					"cattle"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 11,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 38,
				"formula": "4d10 + 16"
			},
			"speed": {
				"walk": 50
			},
			"str": 20,
			"dex": 10,
			"con": 19,
			"int": 2,
			"wis": 12,
			"cha": 5,
			"passive": 11,
			"cr": "2",
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 14 (2d8 + 5}) piercing damage. If the aurochs moved at least 20 feet straight toward the target immediately before the hit, the target takes an extra 9 (2d8}) piercing damage, and the target must succeed on a {15} Strength saving throw or be knocked {prone} if it is a creature."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/aurochs.mp3"
			},
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Autumn Eladrin",
			"source": "MPMM",
			"page": 115,
			"otherSources": [
				{
					"source": "MTF",
					"page": 195
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 165,
				"formula": "22d8 + 66"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 16,
			"con": 16,
			"int": 14,
			"wis": 17,
			"cha": 18,
			"skill": {
				"insight": "+7",
				"medicine": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"psychic"
			],
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The eladrin casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ hold person}"
					],
					"daily": {
						"2e": [
							"{ cure wounds} (as a 5th-level spell)",
							"{ lesser restoration}"
						],
						"1e": [
							"{ greater restoration}",
							"{ revivify}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Enchanting Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {16} Wisdom saving throw. On a failed save, the creature becomes {charmed} by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours.",
						"Whenever the eladrin deals damage to the {charmed} creature, the {charmed} creature can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The eladrin makes two Longsword or Longbow attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d8 + 1}) slashing damage, or 6 (1d10 + 1}) slashing damage if used with two hands, plus 22 (5d8}) psychic damage."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+7} to hit, range 150/600 ft., one target. 7 (1d8 + 3}) piercing damage plus 22 (5d8}) psychic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Fey Step {Recharge - 4}",
					"entries": [
						"The eladrin teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Foster Peace",
					"entries": [
						"If a creature {charmed} by the eladrin hits with an attack roll while within 60 feet of the eladrin, the eladrin magically causes the attack to miss, provided the eladrin can see the attacker."
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/autumn-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Babau",
			"source": "MPMM",
			"page": 52,
			"otherSources": [
				{
					"source": "VGM",
					"page": 136
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 82,
				"formula": "11d8 + 33"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 16,
			"con": 16,
			"int": 11,
			"wis": 12,
			"cha": 13,
			"skill": {
				"perception": "+5",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The babau casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save {11}):"
					],
					"will": [
						"{ darkness}",
						"{ dispel magic}",
						"{ fear}",
						"{ heat metal}",
						"{ levitate}"
					],
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The babau makes two Claw attacks. It can replace one attack with a use of Spellcasting or Weakening Gaze."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 6 (1d4 + 4}) slashing damage plus 2 (1d4}) acid damage."
					]
				},
				{
					"name": "Weakening Gaze",
					"entries": [
						"The babau targets one creature that it can see within 20 feet of it. The target must make a {13} Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/babau.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB"
			],
			"damageTags": [
				"A",
				"S"
			],
			"damageTagsSpell": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bael",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 54,
			"otherSources": [
				{
					"source": "MTF",
					"page": 170
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 24,
			"dex": 17,
			"con": 20,
			"int": 21,
			"wis": 24,
			"cha": 24,
			"save": {
				"dex": "+9",
				"con": "+11",
				"int": "+11",
				"cha": "+13"
			},
			"skill": {
				"intimidation": "+13",
				"perception": "+13",
				"persuasion": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 23,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "19",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Bael casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {21}):"
					],
					"will": [
						"{ alter self} (can become Medium)",
						"{ charm person}",
						"{ detect magic}",
						"{ invisibility}",
						"{ major image}"
					],
					"daily": {
						"1": [
							"{ dominate monster}"
						],
						"3e": [
							"{ dispel magic}",
							"{ fly}",
							"{ suggestion}",
							"{ wall of fire}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Dread",
					"entries": [
						"Any creature, other than a devil, that starts its turn within 10 feet of Bael must succeed on a {22} Wisdom saving throw or be {frightened} of him until the start of its next turn. A creature succeeds on this saving throw automatically if Bael wishes it or if he is {incapacitated}."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Bael fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Bael have advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Bael regains 20 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Bael dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Bael makes two Hellish Morningstar attacks."
					]
				},
				{
					"name": "Hellish Morningstar",
					"entries": [
						"{1d20+13} to hit, reach 20 ft., one target. 16 (2d8 + 7}) force damage plus 9 (2d8}) necrotic damage."
					]
				},
				{
					"name": "Infernal Command",
					"entries": [
						"Each of Bael's allies within 60 feet of him can't be {charmed} or {frightened} until the end of his next turn."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Bael teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Fiendish Magic",
					"entries": [
						"Bael uses Spellcasting or Teleport."
					]
				},
				{
					"name": "Infernal Command",
					"entries": [
						"Bael uses Infernal Command."
					]
				},
				{
					"name": "Attack (Costs 2 Actions)",
					"entries": [
						"Bael makes one Hellish Morningstar attack."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bael.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"N",
				"O"
			],
			"damageTagsSpell": [
				"B",
				"F",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Balhannoth",
			"source": "MPMM",
			"page": 55,
			"otherSources": [
				{
					"source": "MTF",
					"page": 119
				}
			],
			"size": [
				"L"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 114,
				"formula": "12d10 + 48"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 17,
			"dex": 8,
			"con": 18,
			"int": 6,
			"wis": 15,
			"cha": 8,
			"save": {
				"con": "+8"
			},
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"blindsight 500 ft. (blind beyond this radius)"
			],
			"passive": 16,
			"conditionImmune": [
				"blinded"
			],
			"languages": [
				"understands Deep Speech",
				"telepathy 1 mile"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Legendary Resistance (2/Day)",
					"entries": [
						"If the balhannoth fails a saving throw, it can choose to succeed instead."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The balhannoth makes one Bite attack and two Tentacle attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 19 (3d10 + 3}) piercing damage."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+7} to hit, reach 10 ft., one target. 10 (2d6 + 3}) bludgeoning damage, and the target is {grappled} (escape {15}) and is moved up to 5 feet toward the balhannoth. Until this grapple ends, the target is {restrained}, and the balhannoth can't use this tentacle against other targets. The balhannoth has four tentacles."
					]
				}
			],
			"legendary": [
				{
					"name": "Bite",
					"entries": [
						"The balhannoth makes one Bite attack against one creature it has {grappled}."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The balhannoth teleports, along with any equipment it is wearing or carrying and any creatures it has {grappled}, up to 60 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Vanish",
					"entries": [
						"The balhannoth magically becomes {invisible} for up to 10 minutes or until immediately after it makes an attack roll."
					]
				}
			],
			"legendaryGroup": {
				"name": "Balhannoth",
				"source": "MPMM"
			},
			"environment": [
				"coastal",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/balhannoth.mp3"
			},
			"traitTags": [
				"Legendary Resistances"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"invisible",
				"restrained"
			],
			"conditionInflictLegendary": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Banderhobb",
			"source": "MPMM",
			"page": 56,
			"otherSources": [
				{
					"source": "VGM",
					"page": 122
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 84,
				"formula": "8d10 + 40"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 12,
			"con": 20,
			"int": 11,
			"wis": 14,
			"cha": 8,
			"skill": {
				"athletics": "+8",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 12,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"understands Common and the languages of its creator but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Resonant Connection",
					"entries": [
						"If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object if it is within 1 mile of the banderhobb."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The banderhobb makes one Bite attack and one Tongue attack. It can replace one attack with a use of Shadow Step."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 15 (3d6 + 5}) piercing damage, and the target is {grappled} (escape {16}) if it is a Large or smaller creature. Until this grapple ends, the target is {restrained}, and the banderhobb can't use its Bite attack or Tongue attack on another target."
					]
				},
				{
					"name": "Tongue",
					"entries": [
						"{1d20+8} to hit, reach 15 ft., one creature. 10 (3d6}) necrotic damage, and the target must make a {16} Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb."
					]
				},
				{
					"name": "Shadow Step",
					"entries": [
						"The banderhobb teleports up to 30 feet to an un occupied space of dim light or darkness that it can see."
					]
				},
				{
					"name": "Swallow",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one Medium or smaller creature {grappled} by the banderhobb. 15 (3d6 + 5}) piercing damage. The creature is also swallowed, and the grapple ends. The swallowed creature is {blinded} and {restrained}, it has total cover against attacks and other effects outside the banderhobb, and it takes 10 (3d6}) necrotic damage at the start of each of the banderhobb's turns. A creature reduced to 0 hit points in this way stops taking the necrotic damage and becomes stable.",
						"The banderhobb can have only one creature swallowed at a time. While the banderhobb isn't {incapacitated}, it can regurgitate the creature at any time (no action required) in a space within 5 feet of it. The creature exits {prone}. If the banderhobb dies, it likewise regurgitates a swallowed creature."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the banderhobb takes the {@action Hide} action."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/banderhobb.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Swallow"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Baphomet",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 58,
			"otherSources": [
				{
					"source": "MTF",
					"page": 143
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 319,
				"formula": "22d12 + 176"
			},
			"speed": {
				"walk": 40
			},
			"str": 30,
			"dex": 14,
			"con": 26,
			"int": 18,
			"wis": 24,
			"cha": 16,
			"save": {
				"dex": "+9",
				"con": "+15",
				"wis": "+14"
			},
			"skill": {
				"intimidation": "+17",
				"perception": "+14"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 24,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "23",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Baphomet casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {18}):"
					],
					"daily": {
						"1": [
							"{ teleport}"
						],
						"3e": [
							"{ dispel magic}",
							"{ dominate beast}",
							"{ maze}",
							"{ wall of stone}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Labyrinthine Recall",
					"entries": [
						"Baphomet can perfectly recall any path he has traveled, and he is immune to the { maze} spell."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Baphomet fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Baphomet has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Baphomet makes one Bite attack, one Gore attack, and one Heartcleaver attack. He also uses Frightful Presence."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+17} to hit, reach 10 ft., one target. 19 (2d8 + 10}) piercing damage."
					]
				},
				{
					"name": "Gore",
					"entries": [
						"{1d20+17} to hit, reach 10 ft., one target. 17 (2d6 + 10}) piercing damage. If Baphomet moved at least 10 feet straight toward the target immediately before the hit, the target takes an extra 16 (3d10}) piercing damage. If the target is a creature, it must succeed on a {25} Strength saving throw or be pushed up to 10 feet away and knocked {prone}."
					]
				},
				{
					"name": "Heartcleaver",
					"entries": [
						"{1d20+17} to hit, reach 15 ft., one target. 21 (2d10 + 10}) force damage."
					]
				},
				{
					"name": "Frightful Presence",
					"entries": [
						"Each creature of Baphomet's choice within 120 feet of him and aware of him must succeed on a {18} Wisdom saving throw or become {frightened} for 1 minute. A {frightened} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. These later saves have disadvantage if Baphomet is within line of sight of the creature.",
						"If a creature succeeds on any of these saves or the effect ends on it, the creature is immune to Baphomet's Frightful Presence for the next 24 hours."
					]
				}
			],
			"legendary": [
				{
					"name": "Heartcleaver Attack",
					"entries": [
						"Baphomet makes one Heartcleaver attack."
					]
				},
				{
					"name": "Charge (Costs 2 Actions)",
					"entries": [
						"Baphomet moves up to his speed without provoking {@action opportunity attack||opportunity attacks}, then makes a Gore attack."
					]
				}
			],
			"legendaryGroup": {
				"name": "Baphomet",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Frightful Presence",
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"O",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"prone"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bard",
			"source": "MPMM",
			"page": 59,
			"otherSources": [
				{
					"source": "VGM",
					"page": 211
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item chain shirt|phb}"
					]
				}
			],
			"hp": {
				"average": 44,
				"formula": "8d8 + 8"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 14,
			"con": 12,
			"int": 10,
			"wis": 13,
			"cha": 14,
			"save": {
				"dex": "+4",
				"wis": "+3"
			},
			"skill": {
				"acrobatics": "+4",
				"perception": "+5",
				"performance": "+6"
			},
			"passive": 15,
			"languages": [
				"any two languages"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The bard casts one of the following spells, using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ charm person}",
							"{ invisibility}",
							"{ sleep}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The bard makes two Shortsword or Shortbow attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+4} to hit, range 80/320 ft., one target. 5 (1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Cacophony {Recharge - 4}",
					"entries": [
						"Each creature in a 15-foot cube originating from the bard must make a {12} Constitution saving throw. On a failed save, a creature takes 9 (2d8}) thunder damage and is pushed up to 10 feet away from the bard. On a successful save, a creature takes half as much damage and isn't pushed."
					]
				}
			],
			"bonus": [
				{
					"name": "Taunt (2/Day)",
					"entries": [
						"The bard targets one creature within 30 feet of it. If the target can hear the bard, the target must succeed on a {12} Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of the bard's next turn."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bard.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"P",
				"T"
			],
			"spellcastingTags": [
				"CB"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Barghest",
			"source": "MPMM",
			"page": 60,
			"otherSources": [
				{
					"source": "VGM",
					"page": 123
				}
			],
			"size": [
				"L"
			],
			"type": "fiend",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 60,
				"formula": "8d10 + 16"
			},
			"speed": {
				"walk": {
					"number": 60,
					"condition": "(30 ft. in goblin form)"
				}
			},
			"str": 19,
			"dex": 15,
			"con": 14,
			"int": 13,
			"wis": 12,
			"cha": 14,
			"skill": {
				"deception": "+4",
				"intimidation": "+4",
				"perception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				"cold",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Goblin",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The barghest casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ levitate}",
						"{ minor illusion}",
						"{ pass without trace}"
					],
					"daily": {
						"1e": [
							"{ charm person}",
							"{ dimension door}",
							"{ suggestion}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fire Banishment",
					"entries": [
						"When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a {15} Charisma saving throw or be instantly banished to Gehenna"
					]
				},
				{
					"name": "Soul Feeding",
					"entries": [
						"The barghest can feed on the corpse of a Fey or Humanoid it killed within the past 10 minutes. This feeding takes at least 1 minute, and it destroys the corpse. The victim's soul is trapped in the barghest for 24 hours, after which time it is digested and the person is incapable of being revived. If the barghest dies before the soul is digested, the soul is released. While a soul is trapped in the barghest, any magic that tries to restore the soul to life has a {@chance 50} chance of failing and being wasted."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The barghest makes one Bite attack and one",
						"Claw attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 13 (2d8 + 4}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The barghest transforms into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. The barghest reverts to its true form if it dies."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/barghest.mp3"
			},
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"AB",
				"C",
				"GO",
				"I",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Berbalang",
			"source": "MPMM",
			"page": 61,
			"otherSources": [
				{
					"source": "MTF",
					"page": 120
				}
			],
			"size": [
				"M"
			],
			"type": "aberration",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 49,
				"formula": "14d8 - 14"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 9,
			"dex": 16,
			"con": 9,
			"int": 17,
			"wis": 11,
			"cha": 10,
			"save": {
				"dex": "+5",
				"int": "+5"
			},
			"skill": {
				"arcana": "+5",
				"history": "+5",
				"insight": "+2",
				"perception": "+2",
				"religion": "+5"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 12,
			"languages": [
				"all"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The berbalang casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability:"
					],
					"will": [
						"{ speak with dead}"
					],
					"daily": {
						"1": [
							"{ plane shift} (self only)"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The berbalang makes one Bite attack and one",
						"Claw attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 8 (1d10 + 3}) piercing damage plus 4 (1d8}) psychic damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 8 (2d4 + 3}) slashing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Spectral Duplicate (Recharges after a Short or Long Rest)",
					"entries": [
						"The berbalang creates one spectral duplicate of itself in an unoccupied space it can see within 60 feet of it. While the duplicate exists, the berbalang is {unconscious}. A berbalang can have only one duplicate at a time. The duplicate disappears when it or the berbalang drops to 0 hit points or when the berbalang dismisses it (no action required).",
						"The duplicate has the same statistics and knowledge as the berbalang, and everything experienced by the duplicate is known by the berbalang. All damage dealt by the duplicate's attacks is psychic damage."
					]
				}
			],
			"environment": [
				"desert"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/berbalang.mp3"
			},
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"XX"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bheur Hag",
			"source": "MPMM",
			"page": 62,
			"otherSources": [
				{
					"source": "VGM",
					"page": 160
				}
			],
			"size": [
				"M"
			],
			"type": "fey",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 91,
				"formula": "14d8 + 28"
			},
			"speed": {
				"walk": 30,
				"fly": {
					"number": 50,
					"condition": "(hover, Graystaff magic)"
				},
				"canHover": true
			},
			"str": 13,
			"dex": 16,
			"con": 14,
			"int": 12,
			"wis": 13,
			"cha": 16,
			"save": {
				"wis": "+4"
			},
			"skill": {
				"nature": "+4",
				"perception": "+4",
				"stealth": "+6",
				"survival": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"immune": [
				"cold"
			],
			"languages": [
				"Auran",
				"Common",
				"Giant"
			],
			"cr": {
				"cr": "7",
				"coven": "9"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"While holding or riding the graystaff, the hag casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ hold person}"
					],
					"daily": {
						"1e": [
							"{ cone of cold}",
							"{ ice storm}",
							"{ wall of ice}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Control Weather (1/Day)",
					"entries": [
						"The hag can cast the { control weather} spell, requiring no material components and using Charisma as the spellcasting ability."
					]
				},
				{
					"name": "Graystaff Magic",
					"entries": [
						"The hag carries a graystaff, a magic staff. The hag can use its flying speed only while astride the staff. If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff"
					]
				},
				{
					"name": "Ice Walk",
					"entries": [
						"The hag can move across and climb icy surfaces without needing to make an ability check, and {@quickref difficult terrain||3} composed of ice or snow doesn't cost the hag extra moment."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hag makes two Slam or Frost Shard attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 10 (2d8 + 1}) bludgeoning damage plus 18 (4d8}) cold damage."
					]
				},
				{
					"name": "Frost Shard",
					"entries": [
						"{@atk rs} +6} to hit, range 60 ft., one target. 30 (6d8 + 3}) cold damage, and the target's speed is reduced by 10 feet until the start of the hag's next turn."
					]
				},
				{
					"name": "Horrific Feast",
					"entries": [
						"The hag feeds on the corpse of one enemy within reach that died within the past minute. Each creature of the hag's choice that is within 60 feet and able to see the feeding must succeed on a {15} Wisdom saving throw or be {frightened} of the hag for 1 minute. While {frightened} in this way, a creature is {incapacitated}, can't understand what others say, can't read, and speaks only in gibberish. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Feast for the next 24 hours."
					]
				}
			],
			"environment": [
				"arctic"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bheur-hag.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AU",
				"C",
				"GI"
			],
			"damageTags": [
				"B",
				"C"
			],
			"damageTagsSpell": [
				"B",
				"C"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"incapacitated"
			],
			"conditionInflictSpell": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Black Abishai",
			"source": "MPMM",
			"page": 38,
			"otherSources": [
				{
					"source": "MTF",
					"page": 160
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 14,
			"dex": 17,
			"con": 14,
			"int": 13,
			"wis": 16,
			"cha": 11,
			"save": {
				"dex": "+6",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes one Bite attack and two Scimitar attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d10 + 3}) piercing damage plus 9 (2d8}) acid damage."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 6 (1d6 + 3}) force damage."
					]
				},
				{
					"name": "Creeping Darkness {Recharge -}",
					"entries": [
						"The abishai casts { darkness} at a point within 120 feet of it, requiring no spell components or concentration. Wisdom is its spellcasting ability for this spell. While the spell persists, the abishai can move the area of darkness up to 60 feet as a bonus action."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the abishai takes the {@action Hide} action."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/black-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"A",
				"O",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Blackguard",
			"source": "MPMM",
			"page": 63,
			"otherSources": [
				{
					"source": "VGM",
					"page": 211
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"paladin"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 119,
				"formula": "14d8 + 56"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 11,
			"con": 18,
			"int": 11,
			"wis": 14,
			"cha": 15,
			"save": {
				"wis": "+5",
				"cha": "+5"
			},
			"skill": {
				"athletics": "+7",
				"deception": "+5",
				"intimidation": "+5"
			},
			"passive": 12,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The blackguard casts one of the following spells, using Charisma as the spellcasting ability (spell save {13}):"
					],
					"daily": {
						"2e": [
							"{ command}",
							"{ dispel magic}",
							"{ find steed}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The blackguard makes three attacks, using Glaive, Shortbow, or both."
					]
				},
				{
					"name": "Glaive",
					"entries": [
						"{1d20+7} to hit, reach 10 ft., one target. 9 (1d10 + 4}) slashing damage plus 9 (2d8}) necrotic damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+3} to hit, range 80/320 ft., one target. 5 (1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Dreadful Aspect (Recharges after a Short or Long Rest)",
					"entries": [
						"Each enemy within 30 feet of the blackguard must succeed on a {13} Wisdom saving throw or be {frightened} of the blackguard for 1 minute. If a {frightened} target ends its turn more than 30 feet away from the blackguard, the target can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"bonus": [
				{
					"name": "Smite",
					"entries": [
						"Immediately after the blackguard hits a target with an attack roll, the blackguard can force that target to make a {13} Constitution saving throw. On a failed save, the target suffers one of the following effects of the blackguard's choice:"
					]
				},
				{
					"name": "Blind",
					"entries": [
						"The target is {blinded} for 1 minute. The {blinded} target can repeat the save at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Shove",
					"entries": [
						"The target is pushed up to 10 feet away and knocked {prone}."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/blackguard.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"blinded",
				"frightened",
				"prone"
			],
			"conditionInflictSpell": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Blue Abishai",
			"source": "MPMM",
			"page": 39,
			"otherSources": [
				{
					"source": "MTF",
					"page": 161
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil",
					"wizard"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 202,
				"formula": "27d8 + 81"
			},
			"speed": {
				"walk": 30,
				"fly": 50
			},
			"str": 15,
			"dex": 14,
			"con": 17,
			"int": 22,
			"wis": 23,
			"cha": 18,
			"save": {
				"int": "+12",
				"wis": "+12"
			},
			"skill": {
				"arcana": "+12"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"lightning",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "17",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The abishai casts one of the following spells, using Intelligence as the spellcasting ability (spell save {20}):"
					],
					"will": [
						"{ disguise self}",
						"{ mage hand}",
						"{ minor illusion}"
					],
					"daily": {
						"2e": [
							"{ charm person}",
							"{ dispel magic}",
							"{ greater invisibility}",
							"{ wall of force}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes three Bite or Lightning Strike attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 13 (2d10 + 2}) piercing damage plus 14 (4d6}) lightning damage."
					]
				},
				{
					"name": "Lightning Strike",
					"entries": [
						"{@atk rs} +12} to hit, range 120 ft., one target. 36 (8d8}) lightning damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Teleport",
					"entries": [
						"The abishai teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space that it can see."
					]
				}
			],
			"environment": [
				"coastal",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/blue-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"L",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bodak",
			"source": "MPMM",
			"page": 64,
			"otherSources": [
				{
					"source": "VGM",
					"page": 127
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 16,
			"con": 15,
			"int": 7,
			"wis": 12,
			"cha": 12,
			"skill": {
				"perception": "+4",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"resist": [
				"cold",
				"fire",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"the languages it knew in life"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Death Gaze",
					"entries": [
						"When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a {13} Constitution saving throw if the bodak isn't {incapacitated} and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points unless it is immune to the {frightened} condition. Otherwise, a creature takes 16 (3d10}) psychic damage on a failed save.",
						"Unless {@quickref Surprise|PHB|3|0|surprised}, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it has disadvantage on attack rolls against the bodak until the start of its next turn. If the creature looks at the bodak in the meantime, that creature must immediately make the saving throw."
					]
				},
				{
					"name": "Sunlight Hypersensitivity",
					"entries": [
						"The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The bodak doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Fist",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 4 (1d4 + 2}) bludgeoning damage plus 9 (2d8}) necrotic damage."
					]
				},
				{
					"name": "Withering Gaze",
					"entries": [
						"One creature that the bodak can see within 60 feet of it must make a {13} Constitution saving throw, taking 22 (4d10}) necrotic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"bonus": [
				{
					"name": "Aura of Annihilation",
					"entries": [
						"The bodak activates or deactivates this deathly aura. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and Fiends ignore this effect."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bodak.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity",
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"LF"
			],
			"damageTags": [
				"B",
				"N",
				"R",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Boggle",
			"source": "MPMM",
			"page": 65,
			"otherSources": [
				{
					"source": "VGM",
					"page": 128
				}
			],
			"size": [
				"S"
			],
			"type": "fey",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 18,
				"formula": "4d6 + 4"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 8,
			"dex": 18,
			"con": 13,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+5",
				"sleight of hand": "+6",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				"fire"
			],
			"languages": [
				"Sylvan"
			],
			"cr": "1/8",
			"action": [
				{
					"name": "Pummel",
					"entries": [
						"{1d20+1} to hit, reach 5 ft., one target. 2 (1d6 - 1}) bludgeoning damage."
					]
				},
				{
					"name": "Oil Puddle",
					"entries": [
						"The boggle creates a puddle of nonflammable oil. The puddle is 1 inch deep and covers the ground in the boggle's space. The puddle is {@quickref difficult terrain||3} for all creatures except boggles and lasts for 1 hour. The oil has one of the following additional effects of the boggle's choice:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "Slippery Oil",
									"type": "item",
									"entries": [
										"Any non-boggle creature that enters the puddle or starts its turn there must succeed on a {11} Dexterity saving throw or fall {prone}."
									]
								},
								{
									"name": "Sticky Oil",
									"type": "item",
									"entries": [
										"Any non-boggle creature that enters the puddle or starts its turn there must succeed on a {11} Strength saving throw or be {restrained}. On its turn, a creature can use an action to try to extricate itself, ending the effect and moving into the nearest unoccupied space of its choice with a successful {11} Strength check."
									]
								}
							]
						}
					]
				}
			],
			"bonus": [
				{
					"name": "Boggle Oil",
					"entries": [
						"The boggle excretes nonflammable oil from its pores, giving itself one of the following benefits of its choice until it uses this bonus action again:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "Slippery Oil",
									"type": "item",
									"entries": [
										"The boggle has advantage on Dexterity ({@skill Acrobatics}) checks made to escape bonds and end grapples, and it can move through openings large enough for a Tiny creature without squeezing."
									]
								},
								{
									"name": "Sticky Oil",
									"type": "item",
									"entries": [
										"The boggle has advantage on Strength ({@skill Athletics}) checks made to grapple and any ability check made to maintain a hold on another creature, a surface, or an object. The boggle can also climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
									]
								}
							]
						}
					]
				},
				{
					"name": "Dimensional Rift",
					"entries": [
						"The boggle creates an {invisible} and immobile rift within an opening or frame it can see within 5 feet of it, provided that the space is no bigger than 10 feet on any side. The dimensional rift bridges the distance between that space and a point within 30 feet of it that the boggle can see or specify by distance and direction (such as \"30 feet straight up\"). While next to the rift, the boggle can see through it and is considered to be next to the destination as well, and anything the boggle puts through the rift (including a portion of its body) emerges at the destination. Only the boggle can use the rift, and it lasts until the end of the boggle's next turn."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/boggle.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"S"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Boneclaw",
			"source": "MPMM",
			"page": 66,
			"otherSources": [
				{
					"source": "MTF",
					"page": 121
				}
			],
			"size": [
				"L"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "20d10 + 40"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 16,
			"con": 15,
			"int": 13,
			"wis": 15,
			"cha": 9,
			"save": {
				"dex": "+7",
				"con": "+6",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Common plus one language spoken by its master"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Rejuvenation",
					"entries": [
						"While its master lives, a destroyed boneclaw gains a new body in {@dice 1d10} hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The boneclaw doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The boneclaw makes two Piercing Claw attacks."
					]
				},
				{
					"name": "Piercing Claw",
					"entries": [
						"{1d20+8} to hit, reach 15 ft., one target. 20 (3d10 + 4}) piercing damage plus 11 (2d10}) necrotic damage. If the target is a creature, the boneclaw can pull the target up to 10 feet toward itself, and the target is {grappled} (escape {14}). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target."
					]
				},
				{
					"name": "Shadow Jump {Recharge - 5}",
					"entries": [
						"If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 15 feet of it must succeed on a {14} Constitution saving throw or take 34 (5d12 + 2}) necrotic damage.",
						"The boneclaw then teleports up to 60 feet to an unoccupied space it can see. It can bring one creature it's grappling, teleporting that creature to an unoccupied space it can see within 5 feet of its destination. The destination spaces of this teleportation must be in dim light or darkness."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the boneclaw takes the {@action Hide} action."
					]
				}
			],
			"reaction": [
				{
					"name": "Deadly Reach",
					"entries": [
						"In response to a creature entering a space within 15 feet of it, the boneclaw makes one Piercing Claw attack against that creature."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/boneclaw.mp3"
			},
			"traitTags": [
				"Rejuvenation",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Brontosaurus",
			"source": "MPMM",
			"page": 95,
			"otherSources": [
				{
					"source": "VGM",
					"page": 139
				}
			],
			"size": [
				"G"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 121,
				"formula": "9d20 + 27"
			},
			"speed": {
				"walk": 30
			},
			"str": 21,
			"dex": 9,
			"con": 17,
			"int": 2,
			"wis": 10,
			"cha": 7,
			"save": {
				"con": "+6"
			},
			"passive": 10,
			"cr": "5",
			"action": [
				{
					"name": "Stomp",
					"entries": [
						"{1d20+8} to hit, reach 20 ft., one target. 27 (5d8 + 5}) bludgeoning damage, and the target must succeed on a {14} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{1d20+8} to hit, reach 20 ft., one target. 32 (6d8 + 5}) bludgeoning damage"
					]
				}
			],
			"environment": [
				"forest",
				"grassland"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/brontosaurus.mp3"
			},
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Bulezau",
			"source": "MPMM",
			"page": 67,
			"otherSources": [
				{
					"source": "MTF",
					"page": 131
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 15,
			"dex": 14,
			"con": 17,
			"int": 8,
			"wis": 9,
			"cha": 6,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 9,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 60 ft."
			],
			"cr": "3",
			"trait": [
				{
					"name": "Rotting Presence",
					"entries": [
						"When any creature that isn't a demon starts its turn within 30 feet of the bulezau, that creature must succeed on a {13} Constitution saving throw or take 3 (1d6}) necrotic damage."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The bulezau's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
					]
				},
				{
					"name": "Sure-Footed",
					"entries": [
						"The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it {prone}."
					]
				}
			],
			"action": [
				{
					"name": "Barbed Tail",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 8 (1d12 + 2}) piercing damage plus 4 (1d8}) necrotic damage. If the target is a creature, it must succeed on a {13} Constitution saving throw against disease or become {poisoned} until the disease ends. While {poisoned} in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target's hit point maximum is reduced by 4 ({@dice 1d8}). The target dies if its hit point maximum is reduced to 0."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bulezau.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"HPR",
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cadaver Collector",
			"source": "MPMM",
			"page": 68,
			"otherSources": [
				{
					"source": "MTF",
					"page": 122
				}
			],
			"size": [
				"L"
			],
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 21,
			"dex": 14,
			"con": 20,
			"int": 5,
			"wis": 11,
			"cha": 8,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"necrotic",
				"poison",
				"psychic",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands all languages but can't speak"
			],
			"cr": "14",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The collector has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The collector doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The collector makes two Slam attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 18 (3d8 + 5}) bludgeoning damage plus 16 (3d10}) necrotic damage."
					]
				},
				{
					"name": "Paralyzing Breath {Recharge - 5}",
					"entries": [
						"The collector releases paralyzing gas in a 30-foot cone. Each creature in that area must make a successful {18} Constitution saving throw or be {paralyzed} for 1 minute. A {paralyzed} creature repeats the saving throw at the end of each of its turns, ending the effect on itself with a success."
					]
				}
			],
			"bonus": [
				{
					"name": "Summon Specters (Recharges after a Short or Long Rest)",
					"entries": [
						"The collector calls up the enslaved spirits of those it has slain; {@dice 1d4} {@creature specter||specters} (without Sunlight Sensitivity) arise in unoccupied spaces within 15 feet of it. The specters act right after the collector on the same initiative count and fight until they're destroyed. They disappear when the collector is destroyed."
					]
				}
			],
			"environment": [
				"grassland"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cadaver-collector.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Breath Weapon",
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"XX"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Canoloth",
			"source": "MPMM",
			"page": 69,
			"otherSources": [
				{
					"source": "MTF",
					"page": 247
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 120,
				"formula": "16d8 + 48"
			},
			"speed": {
				"walk": 50
			},
			"str": 18,
			"dex": 10,
			"con": 17,
			"int": 5,
			"wis": 17,
			"cha": 12,
			"skill": {
				"investigation": "+3",
				"perception": "+9"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 19,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "8",
			"trait": [
				{
					"name": "Dimensional Lock",
					"entries": [
						"Other creatures can't teleport to or from a space within 60 feet of the canoloth. Any attempt to do so is wasted."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The canoloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Uncanny Senses",
					"entries": [
						"The canoloth can't be {@quickref Surprise|PHB|3|0|surprised} unless it's {incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The canoloth makes one Bite or Tongue attack and one Claw attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage plus 18 (4d8}) force damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (1d6 + 4}) slashing damage plus 9 (2d8}) force damage."
					]
				},
				{
					"name": "Tongue",
					"entries": [
						"{1d20+7} to hit, reach 30 ft., one target. 10 (1d12 + 4}) piercing damage plus 7 (2d6}) acid damage. If the target is Medium or smaller, it is {grappled} (escape {15}), pulled up to 30 feet toward the canoloth, and {restrained} until the grapple ends. The canoloth can grapple one target at a time with its tongue."
					]
				}
			],
			"environment": [
				"coastal",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/canoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"A",
				"O",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Catoblepas",
			"source": "MPMM",
			"page": 70,
			"otherSources": [
				{
					"source": "VGM",
					"page": 129
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 84,
				"formula": "8d10 + 40"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 12,
			"con": 21,
			"int": 3,
			"wis": 14,
			"cha": 8,
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"cr": "5",
			"trait": [
				{
					"name": "Stench",
					"entries": [
						"Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a {16} Constitution saving throw or be {poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the Stench of any catoblepas for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Tail",
					"entries": [
						"{1d20+7} to hit, reach 10 ft., one target. 21 (5d6 + 4}) bludgeoning damage, and the target must succeed on a {16} Constitution saving throw or be {stunned} until the start of the catoblepas's next turn."
					]
				},
				{
					"name": "Death Ray {Recharge - 5}",
					"entries": [
						"The catoblepas targets one creature it can see within 30 feet of it. The target must make a {16} Constitution saving throw, taking 36 (8d8}) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray."
					]
				}
			],
			"environment": [
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/catoblepas.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"poisoned",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cave Fisher",
			"source": "MPMM",
			"page": 73,
			"otherSources": [
				{
					"source": "VGM",
					"page": 130
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 16,
			"dex": 13,
			"con": 14,
			"int": 3,
			"wis": 10,
			"cha": 3,
			"skill": {
				"perception": "+2",
				"stealth": "+5"
			},
			"senses": [
				"blindsight 60 ft."
			],
			"passive": 12,
			"cr": "3",
			"trait": [
				{
					"name": "Flammable Blood",
					"entries": [
						"If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The cave fisher makes two Claw attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 10 (2d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Retract Filament",
					"entries": [
						"One Large or smaller creature {grappled} by the cave fisher's Adhesive Filament must make a {13} Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes one Claw attack against it. Anyone else who was attached to the filament is released. Until the grapple ends on the target, the cave fisher can't use Adhesive Filament."
					]
				}
			],
			"bonus": [
				{
					"name": "Adhesive Filament",
					"entries": [
						"The cave fisher extends a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature the filament adheres to is {grappled} by the cave fisher (escape {13}), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage). A weapon that fails to sever it becomes stuck to it, requiring an action and a successful {13} Strength check to pull free. Destroying the filament deals no damage to the cave fisher. The filament crumbles away if the cave fisher takes this bonus action again."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cave-fisher.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Champion",
			"source": "MPMM",
			"page": 74,
			"otherSources": [
				{
					"source": "VGM",
					"page": 212
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 143,
				"formula": "22d8 + 44"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 15,
			"con": 14,
			"int": 10,
			"wis": 14,
			"cha": 12,
			"save": {
				"str": "+9",
				"con": "+6"
			},
			"skill": {
				"athletics": "+9",
				"intimidation": "+5",
				"perception": "+6"
			},
			"passive": 16,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Indomitable (2/Day)",
					"entries": [
						"The champion rerolls a failed saving throw."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The champion makes three Greatsword or Shortbow attacks."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 12 (2d6 + 5}) slashing damage, plus 7 (2d6}) slashing damage if the champion has more than half of its total hit points remaining."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+6} to hit, range 80/320 ft., one target. 5 (1d6 + 2}) piercing damage, plus 7 (2d6}) piercing damage if the champion has more than half of its total hit points remaining."
					]
				}
			],
			"bonus": [
				{
					"name": "Second Wind (Recharges after a Short or Long Rest)",
					"entries": [
						"The champion regains 20 hit points."
					]
				}
			],
			"environment": [
				"desert",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/champion.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Chitine",
			"source": "MPMM",
			"page": 75,
			"otherSources": [
				{
					"source": "VGM",
					"page": 131
				}
			],
			"size": [
				"S"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item hide armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 18,
				"formula": "4d6 + 4"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 10,
			"dex": 14,
			"con": 12,
			"int": 10,
			"wis": 10,
			"cha": 7,
			"skill": {
				"athletics": "+4",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Undercommon"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The chitine has advantage on saving throws against being {charmed}, and magic can't put the chitine to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Web Sense",
					"entries": [
						"While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web."
					]
				},
				{
					"name": "Web Walker",
					"entries": [
						"The chitine ignores movement restrictions caused by webbing."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The chitine makes three Dagger attacks."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/chitine.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity",
				"Web Sense",
				"Web Walker"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"U"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Choker",
			"source": "MPMM",
			"page": 76,
			"otherSources": [
				{
					"source": "MTF",
					"page": 123
				}
			],
			"size": [
				"S"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 4,
			"wis": 12,
			"cha": 7,
			"skill": {
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"languages": [
				"Deep Speech"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Aberrant Quickness (Recharges after a Short or Long Rest)",
					"entries": [
						"The choker can take an extra action on its turn."
					]
				},
				{
					"name": "Boneless",
					"entries": [
						"The choker can move through and occupy a space as narrow as 4 inches wide without squeezing."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The choker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The choker makes two Tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one target. 5 (1d4 + 3}) piercing damage. If the target is a Large or smaller creature, it is {grappled} (escape {15}). Until this grapple ends, the target is {restrained}, and the choker can't use this tentacle on another target. The choker has two tentacles. If this attack is a critical hit, the target also can't breathe or speak until the grapple ends."
					]
				}
			],
			"environment": [
				"forest",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/choker.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Choldrith",
			"source": "MPMM",
			"page": 77,
			"otherSources": [
				{
					"source": "VGM",
					"page": 132
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"cleric"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 12,
			"dex": 16,
			"con": 12,
			"int": 11,
			"wis": 14,
			"cha": 10,
			"skill": {
				"athletics": "+5",
				"religion": "+2",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Undercommon"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The choldrith casts one of the following spells, using Wisdom as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ guidance}",
						"{ thaumaturgy}"
					],
					"daily": {
						"1e": [
							"{ bane}",
							"{ hold person}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The choldrith has advantage on saving throws against being {charmed}, and magic can't put the choldrith to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The choldrith can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the choldrith has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Web Sense",
					"entries": [
						"While in contact with a web, the choldrith knows the exact location of any other creature in contact with the same web."
					]
				},
				{
					"name": "Web Walker",
					"entries": [
						"The choldrith ignores movement restrictions caused by webbing."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +5} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage plus 10 (3d6}) poison damage."
					]
				},
				{
					"name": "Web {Recharge - 5}",
					"entries": [
						"1d20+5} to hit, range 30/60 ft., one Large or smaller creature. The target is {restrained} by webbing. As an action, the {restrained} target can make a {11} Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 hit points; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
					]
				}
			],
			"bonus": [
				{
					"name": "Spectral Dagger (Recharges after a Short or Long Rest)",
					"entries": [
						"The choldrith conjures a floating, spectral dagger within 60 feet of itself. The choldrith can make a melee spell attack (+4} to hit) against one creature within 5 feet of the dagger. On a hit, the target takes 6 (1d8 + 2}) force damage.",
						"The dagger lasts for 1 minute. As a bonus action on later turns, the choldrith can move the dagger up to 20 feet and repeat the attack against one creature within 5 feet of the dagger."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/choldrith.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Spider Climb",
				"Sunlight Sensitivity",
				"Web Sense",
				"Web Walker"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"U"
			],
			"damageTags": [
				"I",
				"O",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"restrained"
			],
			"conditionInflictSpell": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Clockwork Bronze Scout",
			"source": "MPMM",
			"page": 79,
			"otherSources": [
				{
					"source": "MTF",
					"page": 125
				}
			],
			"size": [
				"M"
			],
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 36,
				"formula": "8d8"
			},
			"speed": {
				"walk": 30,
				"burrow": 30
			},
			"str": 10,
			"dex": 16,
			"con": 11,
			"int": 3,
			"wis": 14,
			"cha": 1,
			"skill": {
				"perception": "+6",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 16,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Earth Armor",
					"entries": [
						"The clockwork doesn't provoke {@action opportunity attack||opportunity attacks} when it burrows."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The clockwork has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The clockwork doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) piercing damage plus 3 (1d6}) lightning damage."
					]
				},
				{
					"name": "Lightning Flare (Recharges after a Short or Long Rest)",
					"entries": [
						"Each creature in contact with the ground within 15 feet of the clockwork must make a {13} Dexterity saving throw, taking 14 (4d6}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bronze-scout.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"L",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Clockwork Iron Cobra",
			"source": "MPMM",
			"page": 79,
			"otherSources": [
				{
					"source": "MTF",
					"page": 125
				}
			],
			"size": [
				"M"
			],
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 91,
				"formula": "14d8 + 28"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 16,
			"con": 14,
			"int": 3,
			"wis": 10,
			"cha": 1,
			"skill": {
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The clockwork has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The clockwork doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage. If the target is a creature, it must succeed on a {13} Constitution saving throw or suffer one random effect (roll a {@dice d6}):",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1\u20132: Confusion",
									"type": "item",
									"entries": [
										"On its next turn, the target must use its action to make one weapon attack against a random creature it can see within 30 feet of it, using whatever weapon it has in hand and moving beforehand if necessary to get in range. If it's holding no weapon, it makes an unarmed strike. If no creature is visible within 30 feet, it takes the {@action Dash} action, moving toward the nearest creature."
									]
								},
								{
									"name": "3\u20134: Paralysis",
									"type": "item",
									"entries": [
										"The target is {paralyzed} until the end of its next turn."
									]
								},
								{
									"name": "5\u20136: Poison",
									"type": "item",
									"entries": [
										"The target takes 13 (3d8}) poison damage."
									]
								}
							]
						}
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/iron-cobra.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Clockwork Oaken Bolter",
			"source": "MPMM",
			"page": 80,
			"otherSources": [
				{
					"source": "MTF",
					"page": 126
				}
			],
			"size": [
				"M"
			],
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 117,
				"formula": "18d8 + 36"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 18,
			"con": 15,
			"int": 3,
			"wis": 10,
			"cha": 1,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The clockwork has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The clockwork doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The clockwork makes two Lancing Bolt attacks or one Lancing Bolt attack and one Harpoon attack."
					]
				},
				{
					"name": "Lancing Bolt",
					"entries": [
						"{@atk mw,rw} +7} to hit, reach 5 ft. or range 100/400 ft., one target. 15 (2d10 + 4}) piercing damage."
					]
				},
				{
					"name": "Harpoon",
					"entries": [
						"1d20+7} to hit, range 50/200 ft., one target. 9 (1d10 + 4}) piercing damage, and the target is {grappled} (escape {12}). While {grappled} in this way, a creature's speed isn't reduced, but it can move only in directions that bring it closer to the clockwork. A creature takes 5 (1d10}) slashing damage if it escapes from the grapple or if it tries and fails. The clockwork can grapple only one creature at a time with its harpoon."
					]
				},
				{
					"name": "Explosive Bolt {Recharge - 5}",
					"entries": [
						"The clockwork launches an explosive charge at a point within 120 feet. Each creature in a 20-foot-radius sphere centered on that point must make a {15} Dexterity saving throw, taking 17 (5d6}) fire damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"bonus": [
				{
					"name": "Reel In",
					"entries": [
						"The clockwork pulls the creature {grappled} by its Harpoon up to 20 feet closer."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oaken-bolter.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"F",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Clockwork Stone Defender",
			"source": "MPMM",
			"page": 80,
			"otherSources": [
				{
					"source": "MTF",
					"page": 126
				}
			],
			"size": [
				"M"
			],
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 105,
				"formula": "14d8 + 42"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 10,
			"con": 17,
			"int": 3,
			"wis": 10,
			"cha": 1,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The clockwork has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The clockwork doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 11 (2d6 + 4}) bludgeoning damage, and if the target is Large or smaller, it is knocked {prone}."
					]
				}
			],
			"reaction": [
				{
					"name": "Intercept Attack",
					"entries": [
						"In response to another creature within 5 feet of it being hit by an attack roll, the clockwork gives that creature a +5 bonus to its AC against that attack, potentially causing a miss. To use this ability, the clockwork must be able to see the creature and the attacker."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stone-defender.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cloud Giant Smiling One",
			"source": "MPMM",
			"page": 81,
			"otherSources": [
				{
					"source": "VGM",
					"page": 146
				}
			],
			"size": [
				"H"
			],
			"type": "giant",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 250,
				"formula": "20d12 + 120"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 26,
			"dex": 12,
			"con": 22,
			"int": 15,
			"wis": 16,
			"cha": 17,
			"save": {
				"con": "+10",
				"int": "+6",
				"cha": "+7"
			},
			"skill": {
				"deception": "+11",
				"insight": "+7",
				"perception": "+11",
				"sleight of hand": "+9"
			},
			"passive": 21,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The giant casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ detect magic}",
						"{ fog cloud}",
						"{ light}",
						"{ minor illusion}"
					],
					"daily": {
						"3e": [
							"{ invisibility}",
							"{ silent image}",
							"{ suggestion}",
							"{ tongues}"
						],
						"1e": [
							"{ gaseous form}",
							"{ major image}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Control Weather (8th-level Spell)",
					"entries": [
						"The giant can cast the { control weather} spell, requiring no material components and using Charisma as the spellcasting ability."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two Slam attacks or two Telekinetic Strike attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+12} to hit, reach 10 ft., one target. 21 (3d8 + 8}) bludgeoning damage plus 5 (1d10}) psychic damage."
					]
				},
				{
					"name": "Telekinetic Strike",
					"entries": [
						"{@atk rs} +7} to hit, range 240 ft., one target. 25 (4d10 + 3}) force damage."
					]
				},
				{
					"name": "Change Shape",
					"entries": [
						"The giant magically transforms to look and feel like a Beast or a Humanoid it has seen or to return to its true form. Any equipment the giant is wearing or carrying is absorbed by the new form. Its statistics, other than its size, don't change. It reverts to its true form if it dies."
					]
				}
			],
			"bonus": [
				{
					"name": "Cloud Step {Recharge - 4}",
					"entries": [
						"The giant teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cloud-giant-smiling-one.mp3"
			},
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B",
				"O",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Conjurer Wizard",
			"source": "MPMM",
			"page": 260,
			"otherSources": [
				{
					"source": "VGM",
					"page": 212
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 58,
				"formula": "13d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+6",
				"history": "+6"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "6",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The conjurer casts one of the following spells, using Intelligence as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ fireball}",
							"{ mage armor}",
							"{ unseen servant}"
						],
						"1e": [
							"{ fly}",
							"{ stinking cloud}",
							"{ web}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The conjurer makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +8} to hit, reach 5 ft. or range 120 ft., one target. 19 (3d10 + 3}) force damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Benign Transportation {Recharge - 4}",
					"entries": [
						"The conjurer teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places."
					]
				},
				{
					"name": "Summon Elemental (1/Day)",
					"entries": [
						"The conjurer magically summons an {@creature air elemental}, an {@creature earth elemental}, a {@creature fire elemental}, or a {@creature water elemental}. The elemental appears in an unoccupied space within 60 feet of the conjurer, whom it obeys. It takes its turn immediately after the conjurer. It lasts for 1 hour, until it or the conjurer dies, or until the conjurer dismisses it as a bonus action."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/conjurer.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"O"
			],
			"damageTagsSpell": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Corpse Flower",
			"source": "MPMM",
			"page": 82,
			"otherSources": [
				{
					"source": "MTF",
					"page": 127
				}
			],
			"size": [
				"L"
			],
			"type": "plant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 127,
				"formula": "15d10 + 45"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 14,
			"dex": 14,
			"con": 16,
			"int": 7,
			"wis": 15,
			"cha": 3,
			"senses": [
				"blindsight 120 ft. (blind beyond this radius)"
			],
			"passive": 12,
			"conditionImmune": [
				"blinded",
				"deafened",
				"poisoned"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Corpses",
					"entries": [
						"When first encountered, a corpse flower contains the corpses of {@dice 1d6 + 3} Humanoids. A corpse flower can hold the remains of up to nine Humanoids. These remains have total cover against attacks and other effects outside the corpse flower. If the corpse flower dies, the corpses within it can be pulled free."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The corpse flower can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Stench of Death",
					"entries": [
						"Each creature that starts its turn within 10 feet of the corpse flower or one of its zombies must make a {14} Constitution saving throw, unless the creature is a Construct or an Undead. On a failed save, the creature is {poisoned} until the start of its next turn. On a successful save, the creature is immune to the Stench of Death of all corpse flowers for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The corpse flower makes three Tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one target. 9 (2d6 + 2}) bludgeoning damage plus 10 (3d6}) poison damage."
					]
				},
				{
					"name": "Harvest the Dead",
					"entries": [
						"The corpse flower swallows one unsecured Humanoid corpse within 10 feet of it, along with any equipment the corpse is wearing or carrying."
					]
				}
			],
			"bonus": [
				{
					"name": "Digest",
					"entries": [
						"The corpse flower digests one corpse in its body and instantly regains 11 ({@dice 2d10}) hit points. Nothing of the digested corpse remains. Any equipment on the corpse is expelled from the corpse flower in its space."
					]
				},
				{
					"name": "Reanimate",
					"entries": [
						"The corpse flower animates one corpse in its body, turning it into a {@creature zombie}. The zombie appears in an unoccupied space within 5 feet of the corpse flower and acts immediately after it in the initiative order. The zombie acts as an ally of the corpse flower but isn't under its control, and the flower's stench clings to it (see Stench of Death)."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/corpse-flower.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"damageTags": [
				"B",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cranium Rat",
			"source": "MPMM",
			"page": 83,
			"otherSources": [
				{
					"source": "VGM",
					"page": 133
				}
			],
			"size": [
				"T"
			],
			"type": "aberration",
			"alignment": [
				"U"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 2,
				"formula": "1d4"
			},
			"speed": {
				"walk": 30
			},
			"str": 2,
			"dex": 14,
			"con": 10,
			"int": 4,
			"wis": 11,
			"cha": 8,
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"languages": [
				"telepathy 30 ft."
			],
			"cr": "0",
			"trait": [
				{
					"name": "Telepathic Shroud",
					"entries": [
						"The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 1 piercing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Illumination",
					"entries": [
						"The cranium rat sheds dim light from its exposed brain in a 5-foot radius or extinguishes the light."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cranium-rat.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Darkling",
			"source": "MPMM",
			"page": 84,
			"otherSources": [
				{
					"source": "VGM",
					"page": 134
				}
			],
			"size": [
				"S"
			],
			"type": "fey",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 16,
			"con": 12,
			"int": 10,
			"wis": 12,
			"cha": 10,
			"skill": {
				"acrobatics": "+5",
				"deception": "+2",
				"perception": "+5",
				"stealth": "+7"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
			"passive": 15,
			"languages": [
				"Elvish",
				"Sylvan"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Death Flash",
					"entries": [
						"When the darkling dies, nonmagical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must succeed on a {10} Constitution saving throw or be {blinded} until the end of its next turn."
					]
				},
				{
					"name": "Light Sensitivity",
					"entries": [
						"While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +5} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage plus 7 (2d6}) necrotic damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/darkling.mp3"
			},
			"traitTags": [
				"Light Sensitivity"
			],
			"senseTags": [
				"B",
				"SD"
			],
			"languageTags": [
				"E",
				"S"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"blinded"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Darkling Elder",
			"source": "MPMM",
			"page": 84,
			"otherSources": [
				{
					"source": "VGM",
					"page": 134
				}
			],
			"size": [
				"M"
			],
			"type": "fey",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d8 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 17,
			"con": 12,
			"int": 10,
			"wis": 14,
			"cha": 13,
			"skill": {
				"acrobatics": "+5",
				"deception": "+3",
				"perception": "+6",
				"stealth": "+7"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Elvish",
				"Sylvan"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Death Burn",
					"entries": [
						"When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a {11} Constitution saving throw. On a failed save, the creature takes 7 (2d6}) radiant damage and is {blinded} until the end of its next turn. On a successful save, the creature takes half as much damage and isn't {blinded}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The darkling elder makes two Scimitar attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) slashing damage plus 7 (2d6}) necrotic damage."
					]
				},
				{
					"name": "Darkness (Recharges after a Short or Long Rest)",
					"entries": [
						"The darkling elder casts { darkness}, requiring no spell components and using Wisdom as the spellcasting ability."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/darkling-elder.mp3"
			},
			"senseTags": [
				"B",
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"S"
			],
			"damageTags": [
				"N",
				"R",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"blinded"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Death Kiss",
			"source": "MPMM",
			"page": 85,
			"otherSources": [
				{
					"source": "VGM",
					"page": 124
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"beholder"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 142,
				"formula": "15d10 + 60"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 18,
			"dex": 14,
			"con": 18,
			"int": 10,
			"wis": 12,
			"cha": 10,
			"save": {
				"con": "+8",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"immune": [
				"lightning"
			],
			"conditionImmune": [
				"prone"
			],
			"languages": [
				"Deep Speech",
				"Undercommon"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Lightning Blood",
					"entries": [
						"A creature within 5 feet of the death kiss takes 5 (1d10}) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The death kiss makes three Tentacle attacks. Up to three of these attacks can be replaced by Blood Drain\u2014one replacement per tentacle grappling a creature."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+8} to hit, reach 20 ft., one target. 11 (2d6 + 4}) piercing damage, and the target is {grappled} (escape {14}) if it is a Huge or smaller creature. Until this grapple ends, the target is {restrained}, and the death kiss can't use the same tentacle on another target. The death kiss has ten tentacles."
					]
				},
				{
					"name": "Blood Drain",
					"entries": [
						"One creature {grappled} by a tentacle of the death kiss must make a {16} Constitution saving throw. On a failed save, the target takes 22 (4d10}) lightning damage, and the death kiss regains half as many hit points."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/death-kiss.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"U"
			],
			"damageTags": [
				"L",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deathlock",
			"source": "MPMM",
			"page": 86,
			"otherSources": [
				{
					"source": "MTF",
					"page": 128
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "undead",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 36,
				"formula": "8d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 15,
			"con": 10,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"int": "+4",
				"cha": "+5"
			},
			"skill": {
				"arcana": "+4",
				"history": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ detect magic}",
						"{ disguise self}",
						"{ mage armor}",
						"{ mage hand}"
					],
					"daily": {
						"1e": [
							"{ dispel magic}",
							"{ hunger of Hadar}",
							"{ invisibility}",
							"{ spider climb}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Turn Resistance",
					"entries": [
						"The deathlock has advantage on saving throws against any effect that turns Undead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The deathlock doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The deathlock makes two Deathly Claw or Grave Bolt attacks."
					]
				},
				{
					"name": "Deathly Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 9 (2d6 + 2}) necrotic damage."
					]
				},
				{
					"name": "Grave Bolt",
					"entries": [
						"{@atk rs} +5} to hit, range 120 ft., one target. 14 (2d10 + 3}) necrotic damage."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deathlock.mp3"
			},
			"traitTags": [
				"Turn Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N"
			],
			"damageTagsSpell": [
				"A",
				"C"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"blinded",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deathlock Mastermind",
			"source": "MPMM",
			"page": 87,
			"otherSources": [
				{
					"source": "MTF",
					"page": 129
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "undead",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 110,
				"formula": "20d8 + 20"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 16,
			"con": 12,
			"int": 15,
			"wis": 12,
			"cha": 17,
			"save": {
				"int": "+5",
				"cha": "+6"
			},
			"skill": {
				"arcana": "+5",
				"history": "+5",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"resist": [
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ detect magic}",
						"{ disguise self}",
						"{ mage armor}",
						"{ minor illusion}"
					],
					"daily": {
						"1e": [
							"{ darkness}",
							"{ dimension door}",
							"{ dispel magic}",
							"{ fly}",
							"{ invisibility}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the deathlock's {@sense darkvision}."
					]
				},
				{
					"name": "Turn Resistance",
					"entries": [
						"The deathlock has advantage on saving throws against any effect that turns Undead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The deathlock doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The deathlock makes two Deathly Claw or Grave Bolt attacks."
					]
				},
				{
					"name": "Deathly Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 13 (3d6 + 3} necrotic damage)."
					]
				},
				{
					"name": "Grave Bolt",
					"entries": [
						"{@atk rs} +6} to hit, range 120 ft., one target. 13 (3d8}) necrotic damage. If the target is Large or smaller, it must succeed on a {16} Strength saving throw or become {restrained} as shadowy tendrils wrap around it for 1 minute. A {restrained} target can use its action to repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deathlock-mastermind.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Turn Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"restrained"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deathlock Wight",
			"source": "MPMM",
			"page": 87,
			"otherSources": [
				{
					"source": "MTF",
					"page": 129
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "undead",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 37,
				"formula": "5d8 + 15"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 14,
			"con": 16,
			"int": 12,
			"wis": 14,
			"cha": 16,
			"save": {
				"wis": "+4"
			},
			"skill": {
				"arcana": "+3",
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ detect magic}",
						"{ disguise self}",
						"{ mage armor}"
					],
					"daily": {
						"1e": [
							"{ fear}",
							"{ hold person}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the deathlock has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The deathlock doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The deathlock makes two Life Drain or Grave Bolt attacks."
					]
				},
				{
					"name": "Life Drain",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one creature. 6 (1d8 + 2}) necrotic damage. The target must succeed on a {13} Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
						"A Humanoid slain by this attack rises 24 hours later as a {@creature zombie} under the deathlock's control, unless the Humanoid is restored to life or its body is destroyed. The deathlock can have no more than twelve zombies under its control at one time."
					]
				},
				{
					"name": "Grave Bolt",
					"entries": [
						"{@atk rs} +5} to hit, range 60 ft., one target. 12 (2d8 + 3}) necrotic damage."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deathlock-wight.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW"
			],
			"conditionInflictSpell": [
				"frightened",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deep Rothé",
			"source": "MPMM",
			"page": 71,
			"otherSources": [
				{
					"source": "VGM",
					"page": 208
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "beast",
				"tags": [
					"cattle"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 13,
				"formula": "2d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 4,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"cr": "1/4",
			"trait": [
				{
					"name": "Beast of Burden",
					"entries": [
						"The rothé is considered to be one size larger for the purpose of determining its carrying capacity."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage. If the rothé moved at least 20 feet straight toward the target immediately before the hit, the target takes an extra 7 (2d6}) piercing damage."
					]
				},
				{
					"name": "Dancing Lights",
					"entries": [
						"The rothé casts { dancing lights}, requiring no spell components and using Wisdom as the spellcasting ability."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rothe.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deep Scion",
			"source": "MPMM",
			"page": 88,
			"otherSources": [
				{
					"source": "VGM",
					"page": 135
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				11
			],
			"hp": {
				"average": 67,
				"formula": "9d8 + 27"
			},
			"speed": {
				"walk": {
					"number": 30,
					"condition": "(20 ft. and swim 40 ft. in hybrid form)"
				}
			},
			"str": 18,
			"dex": 13,
			"con": 16,
			"int": 10,
			"wis": 12,
			"cha": 14,
			"save": {
				"wis": "+3",
				"cha": "+4"
			},
			"skill": {
				"deception": "+6",
				"insight": "+3",
				"sleight of hand": "+3",
				"stealth": "+3"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"languages": [
				"Aquan",
				"Common",
				"thieves' cant"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Amphibious (Hybrid Form Only)",
					"entries": [
						"The deep scion can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The deep scion makes two Battleaxe attacks, or it makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Battleaxe",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 ({@dice 1d8 + 4}) slashing damage, or 9 (1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Bite (Hybrid Form Only)",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one creature. 6 (1d4 + 4}) piercing damage."
					]
				},
				{
					"name": "Claw (Hybrid Form Only)",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d6 + 4}) slashing damage."
					]
				},
				{
					"name": "Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest)",
					"entries": [
						"The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a {13} Wisdom saving throw or be {stunned} until the end of the deep scion's next turn. In water, the psychic screech also telepathically transmits the deep scion's memories of the last 24 hours to its master, regardless of distance, so long as it and its master are in the same body of water."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The deep scion transforms into a hybrid form (humanoid-piscine) or back into its true form, which is humanlike. Its statistics, other than its speed, are the same in each form. Any equipment it is wearing or carrying isn't transformed. The deep scion reverts to its true form if it dies."
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deep-scion.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"AQ",
				"C",
				"TC"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deinonychus",
			"source": "MPMM",
			"page": 95,
			"otherSources": [
				{
					"source": "VGM",
					"page": 139
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 40
			},
			"str": 15,
			"dex": 15,
			"con": 14,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"skill": {
				"perception": "+3"
			},
			"passive": 13,
			"cr": "1",
			"trait": [
				{
					"name": "Pounce",
					"entries": [
						"If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a Claw attack on the same turn, that target must succeed on a {12} Strength saving throw or be knocked {prone}. If the target is {prone}, the deinonychus can make one Bite attack against it as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The deinonychus makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 6 (1d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 6 (1d8 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deinonychus.mp3"
			},
			"traitTags": [
				"Pounce"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Demogorgon",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 90,
			"otherSources": [
				{
					"source": "MTF",
					"page": 144
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 464,
				"formula": "32d12 + 256"
			},
			"speed": {
				"walk": 50,
				"swim": 50
			},
			"str": 29,
			"dex": 14,
			"con": 26,
			"int": 20,
			"wis": 17,
			"cha": 25,
			"save": {
				"dex": "+10",
				"con": "+16",
				"wis": "+11",
				"cha": "+15"
			},
			"skill": {
				"insight": "+11",
				"perception": "+19"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 29,
			"resist": [
				"cold",
				"fire",
				"lightning"
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
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "26",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Demogorgon casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {23}):"
					],
					"will": [
						"{ detect magic}",
						"{ major image}"
					],
					"daily": {
						"3e": [
							"{ dispel magic}",
							"{ fear}",
							"{ telekinesis}"
						],
						"1e": [
							"{ feeblemind}",
							"{ project image}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Demogorgon fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Demogorgon has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Two Heads",
					"entries": [
						"Demogorgon has advantage on saving throws against being {blinded}, {deafened}, {stunned}, or knocked {unconscious}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Demogorgon makes two Tentacle attacks. He can replace one attack with a use of Gaze."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+17} to hit, reach 10 ft., one target. 28 (3d12 + 9}) force damage. If the target is a creature, it must succeed on a {23} Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Gaze",
					"entries": [
						"Demogorgon turns his magical gaze toward one creature he can see within 120 feet of him. The target must succeed on a {23} Wisdom saving throw or suffer one of the following effects (choose one or roll a {@dice d6}):",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1\u20132: Beguiling Gaze",
									"entries": [
										"The target is {stunned} until the start of Demogorgon's next turn or until Demogorgon is no longer within line of sight."
									]
								},
								{
									"type": "item",
									"name": "3\u20134: Confusing Gaze",
									"entries": [
										"The target suffers the effect of the { confusion} spell without making a saving throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon doesn't need to concentrate on the spell."
									]
								},
								{
									"type": "item",
									"name": "5\u20136: Hypnotic Gaze",
									"entries": [
										"The target is {charmed} by Demogorgon until the start of Demogorgon's next turn. Demogorgon chooses how the {charmed} target uses its action, reaction, and movement."
									]
								}
							]
						}
					]
				}
			],
			"legendaryActions": 2,
			"legendary": [
				{
					"name": "Gaze",
					"entries": [
						"Demogorgon uses Gaze and must use either Beguiling Gaze or Confusing Gaze."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{1d20+17} to hit, reach 15 ft., one target. 20 (2d10 + 9}) bludgeoning damage plus 11 (2d10}) necrotic damage."
					]
				},
				{
					"name": "Cast a Spell (Costs 2 Actions)",
					"entries": [
						"Demogorgon uses Spellcasting."
					]
				}
			],
			"legendaryGroup": {
				"name": "Demogorgon",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"N",
				"O"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"charmed",
				"stunned"
			],
			"conditionInflictSpell": [
				"blinded",
				"deafened",
				"frightened",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Derro",
			"source": "MPMM",
			"page": 91,
			"otherSources": [
				{
					"source": "MTF",
					"page": 158
				}
			],
			"size": [
				"S"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 14,
			"con": 12,
			"int": 11,
			"wis": 5,
			"cha": 9,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 7,
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The derro has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Hooked Spear",
					"entries": [
						"{1d20+2} to hit, reach 5 ft., one target. 3 (1d6}) piercing damage. If the target is Medium or smaller, the derro can choose to deal no damage and knock it {prone}."
					]
				},
				{
					"name": "Light Crossbow",
					"entries": [
						"1d20+4} to hit, range 80/320 ft., one target. 6 (1d8 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/derro.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Derro Savant",
			"source": "MPMM",
			"page": 92,
			"otherSources": [
				{
					"source": "MTF",
					"page": 159
				}
			],
			"size": [
				"S"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"sorcerer"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 36,
				"formula": "8d6 + 8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 12,
			"int": 11,
			"wis": 5,
			"cha": 14,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 7,
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The derro casts one of the following spells, using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ mage hand}",
						"{ message}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ invisibility}",
							"{ sleep}",
							"{ spider climb}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The derro has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{1d20+1} to hit, reach 5 ft., one target. 2 (1d6 - 1}) bludgeoning damage."
					]
				},
				{
					"name": "Chromatic Beam",
					"entries": [
						"The derro launches a brilliant beam of magical energy in a 5-foot-wide line that is 60 feet long. Each creature in the line must make a {12} Dexterity saving throw, taking 21 (6d6}) radiant damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/derro-savant.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"B",
				"R"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"invisible",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Devourer",
			"source": "MPMM",
			"page": 93,
			"otherSources": [
				{
					"source": "VGM",
					"page": 138
				}
			],
			"size": [
				"L"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 12,
			"con": 20,
			"int": 13,
			"wis": 10,
			"cha": 16,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "13",
			"trait": [
				{
					"name": "Unusual Nature",
					"entries": [
						"A devourer doesn't require air, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The devourer makes two Claw attacks and can use either Imprison Soul or Soul Rend, if available."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 12 (2d6 + 5}) slashing damage plus 21 (6d6}) necrotic damage."
					]
				},
				{
					"name": "Imprison Soul",
					"entries": [
						"The devourer chooses a living Humanoid with 0 hit points that it can see within 30 feet of it. That creature is teleported inside the devourer's ribcage and imprisoned there. While imprisoned in this way, the creature is {restrained} and has disadvantage on death saving throws. If the creature dies while imprisoned, the devourer regains 25 hit points and immediately recharges Soul Rend. Additionally, at the start of its next turn, the devourer regurgitates the slain creature as a bonus action, and the creature becomes an undead. If the victim had 2 or fewer Hit Dice, it becomes a {@creature zombie}. If it had 3 to 5 Hit Dice, it becomes a {@creature ghoul}. Otherwise, it becomes a {@creature wight}. A devourer can imprison only one creature at a time."
					]
				},
				{
					"name": "Soul Rend {Recharge -}",
					"entries": [
						"The devourer creates a vortex of life-draining energy in a 20-foot radius centered on itself. Each creature in that area must make a {18} Constitution saving throw, taking 44 (8d10}) necrotic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/devourer.mp3"
			},
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"N",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dhergoloth",
			"source": "MPMM",
			"page": 94,
			"otherSources": [
				{
					"source": "MTF",
					"page": 248
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 119,
				"formula": "14d8 + 56"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 10,
			"con": 19,
			"int": 7,
			"wis": 10,
			"cha": 9,
			"save": {
				"str": "+6"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The dhergoloth casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {10}):"
					],
					"will": [
						"{ darkness}",
						"{ fear}"
					],
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The dhergoloth has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The dhergoloth makes two Claw attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 12 (2d8 + 3}) force damage."
					]
				},
				{
					"name": "Flailing Claws {Recharge - 5}",
					"entries": [
						"The dhergoloth moves up to its speed in a straight line and targets each creature within 5 feet of it during its movement. Each target must succeed on a {14} Dexterity saving throw or take 22 (3d12 + 3}) force damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The dhergoloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dhergoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflictSpell": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dimetrodon",
			"source": "MPMM",
			"page": 95,
			"otherSources": [
				{
					"source": "VGM",
					"page": 139
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 12,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 19,
				"formula": "3d8 + 6"
			},
			"speed": {
				"walk": 30,
				"swim": 20
			},
			"str": 14,
			"dex": 10,
			"con": 15,
			"int": 2,
			"wis": 10,
			"cha": 5,
			"skill": {
				"perception": "+2"
			},
			"passive": 12,
			"cr": "1/4",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 9 (2d6 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"coastal",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dimetrodon.mp3"
			},
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Dire Troll",
			"source": "MPMM",
			"page": 246,
			"otherSources": [
				{
					"source": "MTF",
					"page": 243
				}
			],
			"size": [
				"H"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 172,
				"formula": "15d12 + 75"
			},
			"speed": {
				"walk": 40
			},
			"str": 22,
			"dex": 15,
			"con": 21,
			"int": 9,
			"wis": 11,
			"cha": 5,
			"save": {
				"wis": "+5",
				"cha": "+2"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"frightened",
				"poisoned"
			],
			"languages": [
				"Giant"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Regeneration",
					"entries": [
						"The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, it regains only 5 hit points at the start of its next turn. The troll dies only if it is hit by an attack that deals 10 or more acid or fire damage while the troll has 0 hit points."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						" The troll makes one Bite attack and four Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+11} to hit, reach 10 ft., one target. 10 (1d8 + 6}) piercing damage plus 5 (1d10}) poison damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{1d20+11} to hit, reach 10 ft., one target. 16 (3d6 + 6}) slashing damage."
					]
				},
				{
					"name": "Whirlwind of Claws {Recharge - 5}",
					"entries": [
						"Each creature within 10 feet of the troll must make a {19} Dexterity saving throw, taking 44 (8d10}) slashing damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dire-troll.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Diviner Wizard",
			"source": "MPMM",
			"page": 261,
			"otherSources": [
				{
					"source": "VGM",
					"page": 213
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 90,
				"formula": "20d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 18,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+7",
				"history": "+7"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The diviner casts one of the following spells, using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ mage hand}",
						"{ message}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ arcane eye}",
							"{ detect magic}",
							"{ detect thoughts}",
							"{ fly}",
							"{ lightning bolt}",
							"{ locate object}",
							"{ mage armor}",
							"{ Rary's telepathic bond}"
						],
						"1e": [
							"{ true seeing}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The diviner makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +7} to hit, reach 5 ft. or range 120 ft., one target. 20 (3d10 + 4}) radiant damage."
					]
				},
				{
					"name": "Overwhelming Revelation {Recharge - 5}",
					"entries": [
						"The diviner magically creates a burst of illumination in a 10-foot-radius sphere centered on a point within 120 feet of it. Each creature in that area must make a {15} Wisdom saving throw. On a failed save, a creature takes 45 (10d8}) psychic damage and is {stunned} until the end of the diviner's next turn. On a successful save, the creature takes half as much damage and isn't {stunned}."
					]
				}
			],
			"reaction": [
				{
					"name": "Portent (3/Day)",
					"entries": [
						"When the diviner or a creature it can see makes an attack roll, a saving throw, or an ability check, the diviner rolls a {@dice d20} and chooses whether to use that roll in place of the {@dice d20} rolled for the attack roll, saving throw, or ability check. "
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/diviner.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"R",
				"Y"
			],
			"damageTagsSpell": [
				"L"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dolphin",
			"source": "MPMM",
			"page": 97,
			"otherSources": [
				{
					"source": "VGM",
					"page": 208
				}
			],
			"size": [
				"M"
			],
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 12,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 11,
				"formula": "2d8 + 2"
			},
			"speed": {
				"walk": 0,
				"swim": 60
			},
			"str": 14,
			"dex": 13,
			"con": 13,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"blindsight 60 ft."
			],
			"passive": 13,
			"cr": "1/8",
			"trait": [
				{
					"name": "Hold Breath",
					"entries": [
						"The dolphin can hold its breath for 20 minutes."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) bludgeoning damage. If the dolphin moved at least 30 feet straight toward the target immediately before the hit, the target takes an extra 3 (1d6}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dolphin.mp3"
			},
			"traitTags": [
				"Hold Breath"
			],
			"senseTags": [
				"B"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dolphin Delighter",
			"source": "MPMM",
			"page": 97,
			"size": [
				"M"
			],
			"type": "fey",
			"alignment": [
				"C",
				"G"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d8 + 5"
			},
			"speed": {
				"walk": 0,
				"swim": 60
			},
			"str": 14,
			"dex": 13,
			"con": 13,
			"int": 11,
			"wis": 12,
			"cha": 16,
			"save": {
				"wis": "+3",
				"cha": "+5"
			},
			"skill": {
				"perception": "+3",
				"performance": "+5"
			},
			"senses": [
				"blindsight 60 ft."
			],
			"passive": 13,
			"languages": [
				"Aquan",
				"telepathy 120 ft."
			],
			"cr": "3",
			"trait": [
				{
					"name": "Hold Breath",
					"entries": [
						"The dolphin can hold its breath for 20 minutes."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The dolphin makes two Dazzling Slam attacks."
					]
				},
				{
					"name": "Dazzling Slam",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) bludgeoning damage plus 7 (2d6}) psychic damage, and the target is {blinded} until the start of the dolphin's next turn."
					]
				}
			],
			"bonus": [
				{
					"name": "Delightful Light {Recharge - 5}",
					"entries": [
						"The dolphin magically emanates light in a 10-foot radius for a moment. The dolphin and each creature of its choice in that light gain 11 ({@dice 2d10}) temporary hit points."
					]
				},
				{
					"name": "Fey Leap",
					"entries": [
						"The dolphin teleports up to 30 feet to an unoccupied space it can see. Immediately before teleporting, the dolphin can choose one creature within 5 feet of it. That creature can teleport with the dolphin, appearing in an unoccupied space within 5 feet of the dolphin's destination space."
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"traitTags": [
				"Hold Breath"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ",
				"TP"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"blinded"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Draegloth",
			"source": "MPMM",
			"page": 98,
			"otherSources": [
				{
					"source": "VGM",
					"page": 141
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 123,
				"formula": "13d10 + 52"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 15,
			"con": 18,
			"int": 13,
			"wis": 11,
			"cha": 11,
			"skill": {
				"perception": "+3",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 13,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Elvish",
				"Undercommon"
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The draegloth casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {11}):"
					],
					"will": [
						"{ dancing lights}",
						"{ darkness}"
					],
					"daily": {
						"1e": [
							"{ confusion}",
							"{ faerie fire}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The draegloth has advantage on saving throws against being {charmed}, and magic can't put it to sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The draegloth makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one creature. 16 (2d10 + 5}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 16 (2d10 + 5}) slashing damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/draegloth.mp3"
			},
			"traitTags": [
				"Fey Ancestry"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"E",
				"U"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Arachnomancer",
			"source": "MPMM",
			"page": 99,
			"otherSources": [
				{
					"source": "MTF",
					"page": 182
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 162,
				"formula": "25d8 + 50"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 11,
			"dex": 17,
			"con": 14,
			"int": 19,
			"wis": 14,
			"cha": 16,
			"save": {
				"con": "+7",
				"int": "+9",
				"cha": "+8"
			},
			"skill": {
				"arcana": "+9",
				"nature": "+9",
				"perception": "+7",
				"stealth": "+8"
			},
			"senses": [
				"blindsight 10 ft.",
				"darkvision 120 ft."
			],
			"passive": 17,
			"resist": [
				"poison"
			],
			"languages": [
				"Elvish",
				"Undercommon",
				"can speak with spiders"
			],
			"cr": "13",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage hand}"
					],
					"daily": {
						"1e": [
							"{ darkness}",
							"{ dispel magic}",
							"{ etherealness}",
							"{ faerie fire}",
							"{ fly}",
							"{ insect plague}",
							"{ invisibility}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The drow can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Web Walker",
					"entries": [
						"The drow ignores movement restrictions caused by webbing."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three attacks, using Bite, Poisonous Touch, Web, or a combination of them. One attack can be replaced by a use of Spellcasting."
					]
				},
				{
					"name": "Bite (Spider Form Only)",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 12 (2d8 + 3}) piercing damage, and the target must make a {15} Constitution saving throw, taking 31 (7d8}) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but {poisoned} for 1 hour, even after regaining hit points, and is {paralyzed} while {poisoned} in this way."
					]
				},
				{
					"name": "Poisonous Touch (Humanoid Form Only)",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 35 (10d6}) poison damage."
					]
				},
				{
					"name": "Web (Spider Form Only; {Recharge - 5})",
					"entries": [
						"1d20+8} to hit, range 30/60 ft., one target. The target is {restrained} by webbing. As an action, the {restrained} target can make a {15} Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape (Recharges after a Short or Long Rest)",
					"entries": [
						"The drow magically transforms into a Large spider, remaining in that form for up to 1 hour, or back into its true form. Its statistics, other than its size, are the same in each form. It can speak and cast spells while in spider form. Any equipment it is wearing or carrying in Humanoid form melds into the spider form. It can't activate, use, wield, or otherwise benefit from any of its equipment. It reverts to its Humanoid form if it dies."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-arachnomancer.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Spider Climb",
				"Sunlight Sensitivity",
				"Web Walker"
			],
			"senseTags": [
				"B",
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"P"
			],
			"damageTagsSpell": [
				"O",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"paralyzed",
				"poisoned",
				"restrained"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Favored Consort",
			"source": "MPMM",
			"page": 100,
			"otherSources": [
				{
					"source": "MTF",
					"page": 183
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf",
					"wizard"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				15
			],
			"hp": {
				"average": 240,
				"formula": "32d8 + 96"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 20,
			"con": 16,
			"int": 18,
			"wis": 15,
			"cha": 18,
			"save": {
				"dex": "+11",
				"con": "+9",
				"cha": "+10"
			},
			"skill": {
				"acrobatics": "+11",
				"athletics": "+8",
				"perception": "+8",
				"stealth": "+11"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "18",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {18}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage armor}",
						"{ mage hand}",
						"{ message}"
					],
					"daily": {
						"3e": [
							"{ dimension door}",
							"{ fireball}",
							"{ invisibility}"
						],
						"1e": [
							"{ darkness}",
							"{ faerie fire}",
							"{ levitate} (self only)"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three Scimitar or Arcane Eruption attacks. The drow can replace one of the attacks with a use of Spellcasting."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+11} to hit, reach 5 ft., one target. 8 (1d6 + 5}) slashing damage plus 27 (6d8}) poison damage."
					]
				},
				{
					"name": "Arcane Eruption",
					"entries": [
						"{@atk rs} +10} to hit, range 120 ft., one target. 36 (8d8}) force damage, and the drow can push the target up to 10 feet away if it is a Large or smaller creature."
					]
				}
			],
			"reaction": [
				{
					"name": "Protective Shield (3/Day)",
					"entries": [
						"When the drow or a creature within 10 feet of it is hit by an attack roll, the drow gives the target a +5 bonus to its AC until the start of the drow's next turn, which can cause the triggering attack roll to miss."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-favored-consort.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"O",
				"S"
			],
			"damageTagsSpell": [
				"F",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow House Captain",
			"source": "MPMM",
			"page": 101,
			"otherSources": [
				{
					"source": "MTF",
					"page": 184
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item chain mail|PHB}"
					]
				}
			],
			"hp": {
				"average": 162,
				"formula": "25d8 + 50"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 19,
			"con": 15,
			"int": 12,
			"wis": 14,
			"cha": 13,
			"save": {
				"dex": "+8",
				"con": "+6",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ dancing lights}"
					],
					"daily": {
						"1e": [
							"{ darkness}",
							"{ faerie fire}",
							"{ levitate} (self only)"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes two Scimitar attacks and one Whip or Hand Crossbow attack."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 7 (1d6 + 4}) slashing damage plus 14 (4d6}) poison damage."
					]
				},
				{
					"name": "Whip",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 6 (1d4 + 4}) slashing damage."
					]
				},
				{
					"name": "Hand Crossbow",
					"entries": [
						"1d20+8} to hit, range 30/120 ft., one target. 7 (1d6 + 4}) piercing damage, and the target must succeed on a {13} Constitution saving throw or be {poisoned} for 1 hour. If the saving throw fails by 5 or more, the target is also {unconscious} while {poisoned} in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
					]
				}
			],
			"bonus": [
				{
					"name": "Battle Command",
					"entries": [
						"Choose one creature within 30 feet of the drow that the drow can see. If the chosen creature can see or hear the drow, that creature can use its reaction to make one melee attack or to take the {@action Dodge} or {@action Hide} action."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The drow adds 3 to its AC against one melee attack roll that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-house-captain.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"poisoned",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Inquisitor",
			"source": "MPMM",
			"page": 102,
			"otherSources": [
				{
					"source": "MTF",
					"page": 184
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"cleric",
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|PHB}"
					]
				}
			],
			"hp": {
				"average": 149,
				"formula": "23d8 + 46"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 15,
			"con": 14,
			"int": 16,
			"wis": 21,
			"cha": 20,
			"save": {
				"con": "+7",
				"wis": "+10",
				"cha": "+10"
			},
			"skill": {
				"insight": "+10",
				"perception": "+10",
				"religion": "+8",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 20,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow's casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {18}):"
					],
					"will": [
						"{ dancing lights}",
						"{ detect magic}",
						"{ message}",
						"{ thaumaturgy}"
					],
					"daily": {
						"1e": [
							"{ clairvoyance}",
							"{ darkness}",
							"{ detect thoughts}",
							"{ dispel magic}",
							"{ faerie fire}",
							"{ levitate} (self only)",
							"{ silence}",
							"{ suggestion}",
							"{ true seeing}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Discern Lie",
					"entries": [
						"The drow discerns when a creature in earshot speaks a lie in a language the drow knows."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three Death Lance attacks."
					]
				},
				{
					"name": "Death Lance",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 8 (1d6 + 5}) piercing damage plus 18 (4d8}) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
				}
			],
			"bonus": [
				{
					"name": "Spectral Dagger (Recharges after a Short or Long Rest)",
					"entries": [
						"The drow conjures a floating, spectral dagger within 60 feet of itself. The drow can make a melee spell attack (+10} to hit) against one creature within 5 feet of the dagger. On a hit, the target takes 9 (1d8 + 5}) force damage.",
						"The dagger lasts for 1 minute. As a bonus action on later turns, the drow can move the dagger up to 20 feet and repeat the attack against one creature within 5 feet of the dagger."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Summon Demon (1/Day)",
					"entries": [
						"The drow attempts to magically summon a {@creature yochlol}, with a {@chance 50|50 percent} chance of success. If the attempt fails, the drow takes 5 (1d10}) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
					],
					"_version": {
						"name": "Drow Inquisitor (Summoner)",
						"addAs": "action"
					}
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-inquisitor.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"N",
				"O",
				"P",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW"
			],
			"conditionInflictSpell": [
				"deafened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Matron Mother",
			"source": "MPMM",
			"page": 104,
			"otherSources": [
				{
					"source": "MTF",
					"page": 186
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"cleric",
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|PHB|half plate}"
					]
				}
			],
			"hp": {
				"average": 247,
				"formula": "33d8 + 99"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 18,
			"con": 16,
			"int": 17,
			"wis": 21,
			"cha": 22,
			"save": {
				"con": "+9",
				"wis": "+11",
				"cha": "+12"
			},
			"skill": {
				"insight": "+11",
				"perception": "+11",
				"religion": "+9",
				"stealth": "+10"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 21,
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "20",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {20}):"
					],
					"will": [
						"{ command}",
						"{ dancing lights}",
						"{ detect magic}",
						"{ thaumaturgy}"
					],
					"daily": {
						"2e": [
							"{ banishment}",
							"{ blade barrier}",
							"{ cure wounds}",
							"{ hold person}",
							"{ plane shift}",
							"{ silence}"
						],
						"1e": [
							"{ clairvoyance}",
							"{ darkness}",
							"{ detect thoughts}",
							"{ dispel magic}",
							"{ faerie fire}",
							"{ gate}",
							"{ levitate} (self only)",
							"{ suggestion}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Special Equipment",
					"entries": [
						"The drow wields a {@item tentacle rod}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes two Demon Staff attacks or one Demon Staff attack and three Tentacle Rod attacks."
					]
				},
				{
					"name": "Demon Staff",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 7 (1d6 + 4}) bludgeoning damage, or 8 (1d8 + 4}) bludgeoning damage if used with two hands, plus 14 (4d6}) psychic damage. The target must succeed on a {19} Wisdom saving throw or become {frightened} of the drow for 1 minute. The {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Tentacle Rod",
					"entries": [
						"{1d20+9} to hit, reach 15 ft., one creature. 3 (1d6}) bludgeoning damage. If the target is hit three times by the {@item tentacle rod|DMG|rod} on one turn, the target must succeed on a {15} Constitution saving throw or suffer the following effects for 1 minute: the target's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Divine Flame (2/Day)",
					"entries": [
						"A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area up to 120 feet away from the drow. Each creature in the column must make a {20} Dexterity saving throw, taking 14 (4d6}) fire damage and 14 (4d6}) radiant damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"bonus": [
				{
					"name": "Lolth's Fickle Favor",
					"entries": [
						"The drow bestows the Spider Queen's blessing on one ally she can see within 30 feet of her. The ally takes 7 (2d6}) psychic damage but has advantage on the next attack roll it makes before the end of its next turn."
					]
				},
				{
					"name": "Summon Servant (1/Day)",
					"entries": [
						"The drow magically summons a {@creature glabrezu} or a {@creature yochlol}. The summoned creature appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
					]
				}
			],
			"legendary": [
				{
					"name": "Compel Demon",
					"entries": [
						"An allied demon within 30 feet of the drow uses its reaction to make one attack against a target of the drow's choice that she can see."
					]
				},
				{
					"name": "Demon Staff",
					"entries": [
						"The drow makes one Demon Staff attack."
					]
				},
				{
					"name": "Cast a Spell (Costs 2 Actions)",
					"entries": [
						"The drow uses Spellcasting."
					]
				}
			],
			"legendaryGroup": {
				"name": "Drow Matron Mother",
				"source": "MPMM"
			},
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-matron-mother.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"B",
				"F",
				"R",
				"Y"
			],
			"damageTagsSpell": [
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictLegendary": [
				"restrained"
			],
			"conditionInflictSpell": [
				"deafened",
				"incapacitated",
				"paralyzed",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Shadowblade",
			"source": "MPMM",
			"page": 105,
			"otherSources": [
				{
					"source": "MTF",
					"page": 187
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "20d8 + 60"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 21,
			"con": 16,
			"int": 12,
			"wis": 14,
			"cha": 13,
			"save": {
				"dex": "+9",
				"con": "+7",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ dancing lights}",
						"{ darkness}"
					],
					"daily": {
						"1e": [
							"{ faerie fire}",
							"{ levitate} (self only)"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the drow's {@sense darkvision}."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three Shadow Sword attacks. One of the attacks can be replaced by a Hand Crossbow attack. The drow can also use Spellcasting to cast darkness."
					]
				},
				{
					"name": "Shadow Sword",
					"entries": [
						"{@atk mw,rw} +9} to hit, reach 5 ft. or range 30/60 ft., one target. 27 (7d6 + 5}) necrotic damage."
					]
				},
				{
					"name": "Hand Crossbow",
					"entries": [
						"1d20+9} to hit, range 30/120 ft., one target. 8 (1d6 + 5}) piercing damage, and the target must succeed on a {13} Constitution saving throw or be {poisoned} for 1 hour. If the saving throw fails by 5 or more, the target is also {unconscious} while {poisoned} in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Step",
					"entries": [
						"While in dim light or darkness, the drow teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see that is also in dim light or darkness. It then has advantage on the first melee attack it makes before the end of the turn."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Summon Shadow Demon (1/Day)",
					"entries": [
						"The drow attempts to magically summon a {@creature shadow demon} with a {@chance 50|50 percent} chance of success. If the attempt fails, the drow takes 5 (1d10}) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
					],
					"_version": {
						"name": "Drow Shadowblade (Summoner)",
						"addAs": "action"
					}
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-shadowblade.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"N",
				"P",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"poisoned",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Despot",
			"source": "MPMM",
			"page": 107,
			"otherSources": [
				{
					"source": "MTF",
					"page": 188
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 119,
				"formula": "14d8 + 56"
			},
			"speed": {
				"walk": 25
			},
			"str": 20,
			"dex": 5,
			"con": 19,
			"int": 15,
			"wis": 14,
			"cha": 13,
			"save": {
				"con": "+8",
				"wis": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The duergar casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ mage hand}",
						"{ minor illusion}"
					],
					"daily": {
						"1": [
							"{ stinking cloud}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The duergar has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Psychic Engine",
					"entries": [
						"When the duergar suffers a critical hit or is reduced to 0 hit points, psychic energy erupts from its frame to deal 14 (4d6}) psychic damage to each creature within 5 feet of it."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes two Iron Fist attacks and two Stomping Foot attacks. After one of the attacks, the duergar can move up to its speed without provoking {@action opportunity attack||opportunity attacks}. It can replace one of the attacks with a use of Flame Jet."
					]
				},
				{
					"name": "Iron Fist",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 23 (4d8 + 5}) bludgeoning damage. If the target is a Large or smaller creature, it must succeed on a {17} Strength saving throw or be pushed up to 30 feet away in a straight line and be knocked {prone}."
					]
				},
				{
					"name": "Stomping Foot",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 10 (1d10 + 5}) bludgeoning damage, or 21 ({@dice 3d10 + 5}) to a {prone} target."
					]
				},
				{
					"name": "Flame Jet",
					"entries": [
						"The duergar spews flames in a line 100 feet long and 5 feet wide. Each creature in the line must make a {16} Dexterity saving throw, taking 18 (4d8}) fire damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-despot.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"B",
				"F",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Duergar Hammerer",
			"source": "MPMM",
			"page": 112,
			"otherSources": [
				{
					"source": "MTF",
					"page": 188
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "construct",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
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
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 20
			},
			"str": 17,
			"dex": 7,
			"con": 12,
			"int": 5,
			"wis": 5,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 7,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands Dwarvish but can't speak"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Siege Monster",
					"entries": [
						"The hammerer deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hammerer makes one Claw attack and one Hammer attack."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage."
					]
				},
				{
					"name": "Hammer",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 10 (2d6 + 3}) bludgeoning damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Engine of Pain",
					"entries": [
						"Immediately after a creature within 5 feet of the hammerer hits it with an attack roll, the hammerer makes a Hammer attack against that creature."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-hammerer.mp3"
			},
			"traitTags": [
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"D"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Kavalrachni",
			"source": "MPMM",
			"page": 107,
			"otherSources": [
				{
					"source": "MTF",
					"page": 189
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item scale mail|PHB}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 25
			},
			"str": 14,
			"dex": 11,
			"con": 14,
			"int": 11,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Cavalry Training",
					"entries": [
						"When the duergar hits a target with a melee attack while mounted, the mount can use its reaction to make one melee attack against the same target."
					]
				},
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against spells and the {charmed}, {paralyzed}, and {poisoned} conditions."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes two War Pick attacks."
					]
				},
				{
					"name": "War Pick",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 6 (1d8 + 2}) piercing damage plus 5 (2d4}) poison damage."
					]
				},
				{
					"name": "Heavy Crossbow",
					"entries": [
						"1d20+2} to hit, range 100/400 ft., one target. 5 (1d10}) piercing damage."
					]
				},
				{
					"name": "Shared Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {invisible} for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {invisible} with it. While the {invisible} duergar is mounted, the mount is {invisible} as well. The invisibility ends early on the mount immediately after it attacks."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-kavalrachni.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Duergar Mind Master",
			"source": "MPMM",
			"page": 108,
			"otherSources": [
				{
					"source": "MTF",
					"page": 189
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 25
			},
			"str": 11,
			"dex": 17,
			"con": 14,
			"int": 15,
			"wis": 10,
			"cha": 12,
			"save": {
				"wis": "+2"
			},
			"skill": {
				"perception": "+2",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft.",
				"truesight 30 ft."
			],
			"passive": 12,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against spells and the {charmed}, {paralyzed}, and {poisoned} conditions."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes two Mind-Poison Dagger attacks. It can replace one attack with a use of Mind Mastery."
					]
				},
				{
					"name": "Mind-Poison Dagger",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) piercing damage plus 10 (3d6}) psychic damage, or 1 piercing damage plus 10 (3d6}) psychic damage while under the effect of Reduce."
					]
				},
				{
					"name": "Invisibility {Recharge - 4}",
					"entries": [
						"The duergar magically turns {invisible} for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {invisible} with it."
					]
				},
				{
					"name": "Mind Mastery",
					"entries": [
						"The duergar targets one creature it can see within 60 feet of it. The target must succeed on a {12} Intelligence saving throw, or the duergar causes it to use its reaction, if available, either to make one weapon attack against another creature the duergar can see or to move up to 10 feet in a direction of the duergar's choice. Creatures that can't be {charmed} are immune to this effect."
					]
				}
			],
			"bonus": [
				{
					"name": "Reduce (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically decreases in size, along with anything it is wearing or carrying. While reduced, the duergar is Tiny, reduces its weapon damage to 1, and makes attack rolls, ability checks, and saving throws with disadvantage if they use Strength. It gains a +5 bonus to all Dexterity ({@skill Stealth}) checks and a +5 bonus to its AC. It can also take a bonus action on each of its turns to take the {@action Hide} action."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-mind-master.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD",
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Screamer",
			"source": "MPMM",
			"page": 111,
			"otherSources": [
				{
					"source": "MTF",
					"page": 190
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "construct",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 38,
				"formula": "7d8 + 7"
			},
			"speed": {
				"walk": 20
			},
			"str": 18,
			"dex": 7,
			"con": 12,
			"int": 5,
			"wis": 5,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 7,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands Dwarvish but can't speak"
			],
			"cr": "3",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The screamer makes one Drill attack, and it uses Sonic Scream."
					]
				},
				{
					"name": "Drill",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 10 (1d12 + 4}) piercing damage."
					]
				},
				{
					"name": "Sonic Scream",
					"entries": [
						"The screamer emits destructive energy in a 15-foot cube. Each creature in that area must succeed on a {11} Strength saving throw or take 7 (2d6}) thunder damage and be knocked {prone}."
					]
				}
			],
			"reaction": [
				{
					"name": "Engine of Pain",
					"entries": [
						"Immediately after a creature within 5 feet of the screamer hits it with an attack roll, the screamer makes a Drill attack against that creature."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-screamer.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"D"
			],
			"damageTags": [
				"P",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Duergar Soulblade",
			"source": "MPMM",
			"page": 109,
			"otherSources": [
				{
					"source": "MTF",
					"page": 190
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "6d8"
			},
			"speed": {
				"walk": 25
			},
			"str": 16,
			"dex": 16,
			"con": 10,
			"int": 11,
			"wis": 10,
			"cha": 12,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against spells and the {charmed}, {paralyzed}, and {poisoned} conditions."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Soulblade",
					"entries": [
						"{1d20 +5} to hit, reach 5 ft., one target. 10 (2d6 + 3}) force damage, or 13 (3d6 + 3}) force damage while under the effect of Enlarge."
					]
				},
				{
					"name": "Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {invisible} for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {invisible} with it."
					]
				}
			],
			"bonus": [
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-soulblade.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"O"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Stone Guard",
			"source": "MPMM",
			"page": 110,
			"otherSources": [
				{
					"source": "MTF",
					"page": 191
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item chain mail|PHB}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 25
			},
			"str": 18,
			"dex": 11,
			"con": 14,
			"int": 11,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against spells and the {charmed}, {paralyzed}, and {poisoned} conditions."
					]
				},
				{
					"name": "Phalanx Formation",
					"entries": [
						"The duergar has advantage on attack rolls and Dexterity saving throws while standing within 5 feet of an ally wielding a {@item shield|PHB}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes two Shortsword or Javelin attacks."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage, or 11 (2d6 + 4}) piercing damage while under the effect of Enlarge."
					]
				},
				{
					"name": "Javelin",
					"entries": [
						"{@atk mw,rw} +6} to hit, reach 5 ft. or range 30/120 ft., one target. 7 (1d6 + 4}) piercing damage, or 11 (2d6 + 4}) piercing damage while under the effect of Enlarge."
					]
				},
				{
					"name": "Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {invisible} for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {invisible} with it."
					]
				}
			],
			"bonus": [
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-stone-guard.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Warlord",
			"source": "MPMM",
			"page": 111,
			"otherSources": [
				{
					"source": "MTF",
					"page": 192
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"{@item plate armor|PHB}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 25
			},
			"str": 18,
			"dex": 11,
			"con": 17,
			"int": 12,
			"wis": 12,
			"cha": 14,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against spells and the {charmed}, {paralyzed}, and {poisoned} conditions."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes three Psychic-Attuned Hammer or Javelin attacks and uses Call to Attack."
					]
				},
				{
					"name": "Psychic-Attuned Hammer",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 9 (1d10 + 4}) bludgeoning damage, or 15 (2d10 + 4}) bludgeoning damage while under the effect of Enlarge, plus 5 (1d10}) psychic damage."
					]
				},
				{
					"name": "Javelin",
					"entries": [
						"{@atk mw,rw} +7} to hit, reach 5 ft. or range 30/120 ft., one target. 7 (1d6 + 4}) piercing damage, or 11 (2d6 + 4}) piercing damage while under the effect of Enlarge."
					]
				},
				{
					"name": "Call to Attack",
					"entries": [
						"Up to three allies within 120 feet of this duergar that can hear it can each use their reaction to make one weapon attack."
					]
				},
				{
					"name": "Invisibility {Recharge - 4}",
					"entries": [
						"The duergar magically turns {invisible} for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {invisible} with it."
					]
				}
			],
			"bonus": [
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				}
			],
			"reaction": [
				{
					"name": "Scouring Instruction",
					"entries": [
						"When an ally that the duergar can see makes a {@dice d20} roll, the duergar can roll a {@dice d6}, and the ally can add the number rolled to the {@dice d20} by taking 3 (1d6}) psychic damage."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-warlord.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"B",
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Xarrorn",
			"source": "MPMM",
			"page": 111,
			"otherSources": [
				{
					"source": "MTF",
					"page": 193
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 25
			},
			"str": 16,
			"dex": 11,
			"con": 14,
			"int": 11,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against spells and the {charmed}, {paralyzed}, and {poisoned} conditions."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Fire Lance",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one target. 9 (1d12 + 3}) piercing damage, or 16 (2d12 + 3}) piercing damage while under the effect of Enlarge, plus 3 (1d6}) fire damage."
					]
				},
				{
					"name": "Fire Spray {Recharge - 5}",
					"entries": [
						"From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 feet long and 5 feet wide. Each creature in that area must make a {12} Dexterity saving throw, taking 10 (3d6}) fire damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {invisible} for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {invisible} with it."
					]
				}
			],
			"bonus": [
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-xarrorn.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dybbuk",
			"source": "MPMM",
			"page": 113,
			"otherSources": [
				{
					"source": "MTF",
					"page": 132
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 37,
				"formula": "5d8 + 15"
			},
			"speed": {
				"walk": {
					"number": 40,
					"condition": "(hover)"
				}
			},
			"str": 6,
			"dex": 19,
			"con": 16,
			"int": 16,
			"wis": 15,
			"cha": 14,
			"skill": {
				"deception": "+6",
				"intimidation": "+4",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"resist": [
				"acid",
				"cold",
				"fire",
				"lightning",
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"Abyssal",
				"Common",
				"telepathy 120 ft."
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The dybbuk casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ dimension door}"
					],
					"daily": {
						"3": [
							"{ phantasmal force}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The dybbuk can move through other creatures and objects as if they were {@quickref difficult terrain||3}. It takes 5 (1d10}) force damage if it ends its turn inside an object."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The dybbuk has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 13 (2d8 + 4}) necrotic damage. If the target is a creature, its hit point maximum is also reduced by 3 ({@dice 1d6}). This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Possess Corpse {Recharge -}",
					"entries": [
						"The dybbuk disappears into an intact corpse within 5 feet of it that belonged to a Large or smaller Beast or Humanoid. The dybbuk gains 20 temporary hit points. While possessing the corpse, the dybbuk adopts the corpse's size and can't use Incorporeal Movement. Its game statistics otherwise remain the same. The possession lasts until the temporary hit points are lost or the dybbuk ends it as a bonus action. When the possession ends, the dybbuk appears in an unoccupied space within 5 feet of the corpse."
					]
				}
			],
			"bonus": [
				{
					"name": "Control Corpse",
					"entries": [
						"While Possess Corpse is active, the dybbuk makes the corpse do something unnatural, such as vomit blood, twist its head all the way around, or cause a quadruped to move as a biped. Any Beast or Humanoid that sees this behavior must succeed on a {12} Wisdom saving throw or become {frightened} of the dybbuk for 1 minute. The {frightened} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this ability is immune to Control Corpse for 24 hours."
					]
				}
			],
			"environment": [
				"desert",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dybbuk.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"AB",
				"C",
				"TP"
			],
			"damageTags": [
				"N",
				"O"
			],
			"damageTagsSpell": [
				"O",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Earth Elemental Myrmidon",
			"source": "MPMM",
			"page": 122,
			"otherSources": [
				{
					"source": "MTF",
					"page": 202
				}
			],
			"size": [
				"M"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 17,
			"int": 8,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Terran",
				"one language of its creator's choice"
			],
			"cr": "7",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes two Maul attacks."
					]
				},
				{
					"name": "Maul",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 11 (2d6 + 4}) force damage."
					]
				},
				{
					"name": "Thunderous Strike {Recharge -}",
					"entries": [
						"The myrmidon makes one Maul attack. On a hit, the target takes an extra 22 (4d10}) thunder damage, and the target must succeed on a {14} Strength saving throw or be knocked {prone}."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/earth-elemental-myrmidon.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"T"
			],
			"damageTags": [
				"O",
				"T"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Eidolon",
			"source": "MPMM",
			"page": 114,
			"otherSources": [
				{
					"source": "MTF",
					"page": 194
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"A"
			],
			"ac": [
				9
			],
			"hp": {
				"average": 63,
				"formula": "18d8 - 18"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 7,
			"dex": 8,
			"con": 9,
			"int": 14,
			"wis": 19,
			"cha": 16,
			"save": {
				"wis": "+8"
			},
			"skill": {
				"perception": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 18,
			"resist": [
				"acid",
				"fire",
				"lightning",
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The eidolon can move through other creatures and objects as if they were {@quickref difficult terrain||3}. It takes 5 (1d10}) force damage if it ends its turn inside an object other than a {@creature sacred statue|MPMM}."
					]
				},
				{
					"name": "Sacred Animation {Recharge - 5}",
					"entries": [
						"When the eidolon moves into a space occupied by a {@creature sacred statue|MPMM}, the eidolon can disappear, causing the statue to become a creature under the eidolon's control. The eidolon uses the {@creature sacred statue|MPMM|sacred statue's stat block} in place of its own."
					]
				},
				{
					"name": "Turn Resistance",
					"entries": [
						"The eidolon has advantage on saving throws against any effect that turns Undead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The eidolon doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Divine Dread",
					"entries": [
						"Each creature within 60 feet of the eidolon that can see it must succeed on a {15} Wisdom saving throw or be {frightened} of it for 1 minute. While {frightened} in this way, the creature must take the {@action Dash} action and move away from the eidolon by the safest available route at the start of each of its turns, unless there is nowhere for it to move, in which case the creature also becomes {stunned} until it can move again. A {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to any eidolon's Divine Dread for the next 24 hours."
					]
				}
			],
			"environment": [
				"coastal",
				"desert",
				"forest",
				"grassland",
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/eidolon.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Turn Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"O"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflict": [
				"frightened",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Elder Brain",
			"source": "MPMM",
			"page": 120,
			"otherSources": [
				{
					"source": "VGM",
					"page": 173
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"mind flayer"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				10
			],
			"hp": {
				"average": 210,
				"formula": "20d10 + 100"
			},
			"speed": {
				"walk": 5,
				"swim": 10
			},
			"str": 15,
			"dex": 10,
			"con": 20,
			"int": 21,
			"wis": 19,
			"cha": 24,
			"save": {
				"int": "+10",
				"wis": "+9",
				"cha": "+12"
			},
			"skill": {
				"arcana": "+10",
				"deception": "+12",
				"insight": "+14",
				"intimidation": "+12",
				"persuasion": "+12"
			},
			"senses": [
				"blindsight 120 ft."
			],
			"passive": 14,
			"languages": [
				"understands Common",
				"Deep Speech",
				"and Undercommon but can't speak",
				"telepathy 5 miles"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The elder brain casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {18}):"
					],
					"will": [
						"{ detect thoughts}",
						"{ levitate}"
					],
					"daily": {
						"3": [
							"{ modify memory}"
						],
						"1e": [
							"{ dominate monster}",
							"{ plane shift} (self only)"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Creature Sense",
					"entries": [
						"The elder brain is aware of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each one's Intelligence score, but can't sense anything else about it. A creature protected by a { mind blank} spell, a { nondetection} spell, or similar magic can't be perceived in this manner."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the elder brain fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The elder brain has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Telepathic Hub",
					"entries": [
						"The elder brain can use its telepathy to initiate and maintain telepathic conversations with up to ten creatures at a time. The elder brain can let those creatures telepathically hear each other while connected in this way."
					]
				}
			],
			"action": [
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+7} to hit, reach 30 ft., one target. 20 (4d8 + 2}) bludgeoning damage. If the target is a Huge or smaller creature, it is {grappled} (escape {15}) and takes 9 (1d8 + 5}) psychic damage at the start of each of its turns until the grapple ends. The elder brain can have up to four targets {grappled} at a time."
					]
				},
				{
					"name": "Mind Blast {Recharge - 5}",
					"entries": [
						"Creatures of the elder brain's choice within 60 feet of it must succeed on a {18} Intelligence saving throw or take 32 (5d10 + 5}) psychic damage and be {stunned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"bonus": [
				{
					"name": "Psychic Link",
					"entries": [
						"The elder brain targets one {incapacitated} creature it senses with its Creature Sense trait and establishes a psychic link with the target. Until the link ends, the elder brain can perceive everything the target senses. The target becomes aware that something is linked to its mind once it is no longer {incapacitated}, and the elder brain can terminate the link at any time (no action required). The target can use an action on its turn to attempt to break the link, doing so with a successful {18} Charisma saving throw. On a successful save, the target takes 10 (3d6}) psychic damage. The link also ends if the target and the elder brain are more than 5 miles apart. The elder brain can form psychic links with up to ten creatures at a time."
					]
				},
				{
					"name": "Sense Thoughts",
					"entries": [
						"The elder brain targets a creature with which it has a psychic link. The elder brain gains insight into the target's emotional state and foremost thoughts (including worries, loves, and hates)."
					]
				}
			],
			"legendary": [
				{
					"name": "Break Concentration",
					"entries": [
						"The elder brain targets one creature within 120 feet of it with which it has a psychic link. The elder brain breaks the creature's concentration on a spell it has cast. The creature also takes 2 (1d4}) psychic damage per level of the spell."
					]
				},
				{
					"name": "Psychic Pulse",
					"entries": [
						"The elder brain targets one creature within 120 feet of it with which it has a psychic link. The target and enemies of the elder brain within 30 feet of target take 10 (3d6}) psychic damage."
					]
				},
				{
					"name": "Sever Psychic Link",
					"entries": [
						"The elder brain targets one creature within 120 feet of it with which it has a psychic link. The elder brain ends the link, causing the creature to have disadvantage on all ability checks, attack rolls, and saving throws until the end of the creature's next turn."
					]
				},
				{
					"name": "Tentacle (Costs 2 Actions)",
					"entries": [
						"The elder brain makes one Tentacle attack."
					]
				}
			],
			"legendaryGroup": {
				"name": "Elder Brain",
				"source": "MPMM"
			},
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/elder-brain.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"C",
				"CS",
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Elder Oblex",
			"source": "MPMM",
			"page": 199,
			"otherSources": [
				{
					"source": "MTF",
					"page": 219
				}
			],
			"size": [
				"H"
			],
			"type": "ooze",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				16
			],
			"hp": {
				"average": 115,
				"formula": "10d12 + 50"
			},
			"speed": {
				"walk": 20
			},
			"str": 15,
			"dex": 16,
			"con": 21,
			"int": 22,
			"wis": 13,
			"cha": 18,
			"save": {
				"int": "+10",
				"cha": "+8"
			},
			"skill": {
				"arcana": "+10",
				"deception": "+8",
				"history": "+10",
				"nature": "+10",
				"perception": "+5",
				"religion": "+10"
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this distance)"
			],
			"passive": 15,
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"prone"
			],
			"languages": [
				"Common plus six more languages"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The oblex casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {18}):"
					],
					"will": [
						"{ charm person} (as 5th-level spell)",
						"{ detect thoughts}"
					],
					"daily": {
						"3e": [
							"{ dimension door}",
							"{ dominate person}",
							"{ hypnotic pattern}",
							"{ telekinesis}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The oblex can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Aversion to Fire",
					"entries": [
						"If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The oblex doesn't require sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The elder oblex makes two Pseudopod attacks, and it uses Eat Memories."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{1d20+7} to hit, reach 10 ft., one target. 17 (4d6 + 3}) bludgeoning damage plus 14 (4d6}) psychic damage."
					]
				},
				{
					"name": "Eat Memories",
					"entries": [
						"The oblex targets one creature it can see within 5 feet of it. The target must succeed on a {18} Wisdom saving throw or take 44 (8d10}) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the { greater restoration} or { heal} spell. Constructs, Oozes, Plants, and Undead succeed on the save automatically.",
						"While memory drained, the target must roll a {@dice d4} and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the {@dice d4} becomes a {@dice d6}, the {@dice d6} becomes a {@dice d8}, and so on until the die becomes a {@dice d20}, at which point the target becomes {unconscious} for 1 hour. The effect then ends.",
						"The oblex learns all the languages a memory-drained target knows and gains all its skill proficiencies."
					]
				}
			],
			"bonus": [
				{
					"name": "Sulfurous Impersonation",
					"entries": [
						"The oblex extrudes a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate {@dice 2d6 + 1} different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. The simulacrum is an extension of the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex and the simulacrum. The simulacrum disappears if the tether is severed."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/elder-oblex.mp3"
			},
			"traitTags": [
				"Amorphous",
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"unconscious"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"incapacitated",
				"paralyzed",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Elder Tempest",
			"source": "MPMM",
			"page": 121,
			"otherSources": [
				{
					"source": "MTF",
					"page": 200
				}
			],
			"size": [
				"G"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				19
			],
			"hp": {
				"average": 264,
				"formula": "16d20 + 96"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 120,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 23,
			"dex": 28,
			"con": 23,
			"int": 2,
			"wis": 21,
			"cha": 18,
			"save": {
				"wis": "+12",
				"cha": "+11"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"lightning",
				"poison",
				"thunder"
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned"
			],
			"cr": "23",
			"trait": [
				{
					"name": "Air Form",
					"entries": [
						"The tempest can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Flyby",
					"entries": [
						"The tempest doesn't provoke {@action opportunity attack||opportunity attacks} when it flies out of an enemy's reach."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the tempest fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Living Storm",
					"entries": [
						"The tempest is always at the center of a storm {@dice 1d6 + 4} miles in diameter. Heavy precipitation in the form of either rain or snow falls there, causing the area to be lightly obscured. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom ({@skill Perception}) checks that rely on hearing. In addition, strong winds swirl in the area covered by the storm. The winds impose disadvantage on ranged attack rolls. They also extinguish open flames and disperse fog."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The tempest deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tempest makes two Thunderous Slam attacks."
					]
				},
				{
					"name": "Thunderous Slam",
					"entries": [
						"{1d20+16} to hit, reach 20 ft., one target. 23 (4d6 + 9}) thunder damage."
					]
				},
				{
					"name": "Lightning Storm {Recharge -}",
					"entries": [
						"Each creature within 120 feet of the tempest must make a {21} Dexterity saving throw, taking 27 (6d8}) lightning damage on a failed save, or half as much damage on a successful one. If a target's saving throw fails by 5 or more, the creature is also {stunned} until the end of its next turn."
					]
				}
			],
			"legendary": [
				{
					"name": "Move",
					"entries": [
						"The tempest moves up to its speed."
					]
				},
				{
					"name": "Lightning Strike (Costs 2 Actions)",
					"entries": [
						"The tempest can cause a bolt of lightning to strike a point on the ground anywhere under its storm. Each creature within 5 feet of that point must make a {21} Dexterity saving throw, taking 16 (3d10}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Screaming Gale (Costs 3 Actions)",
					"entries": [
						"The tempest releases a blast of thunder and wind in a line that is 300 feet long and 20 feet wide. Objects in that area take 22 (4d10}) thunder damage. Each creature there must succeed on a {21} Dexterity saving throw or take 22 (4d10}) thunder damage and be flung up to 60 feet in a direction away from the line. If a thrown target collides with an immovable object (such as a wall or floor) or another creature, the target takes 3 (1d6}) bludgeoning damage for every 10 feet it was thrown before impact. If the target collides with another creature, that other creature must succeed on a {19} Dexterity saving throw or take the same impact damage and be knocked {prone}."
					]
				}
			],
			"environment": [
				"arctic",
				"coastal",
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/elder-tempest.mp3"
			},
			"traitTags": [
				"Flyby",
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"L",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Enchanter Wizard",
			"source": "MPMM",
			"page": 261,
			"otherSources": [
				{
					"source": "VGM",
					"page": 213
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 49,
				"formula": "11d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+6",
				"history": "+6"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The enchanter casts one of the following spells, using Intelligence as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ friends}",
						"{ mage hand}",
						"{ message}"
					],
					"daily": {
						"2e": [
							"{ charm person}",
							"{ mage armor}",
							"{ hold person}",
							"{ invisibility}",
							"{ suggestion}",
							"{ tongues}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The enchanter makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +6} to hit, reach 5 ft. or range 120 ft., one target. 19 (3d10 + 3}) psychic damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Instinctive Charm {Recharge - 4}",
					"entries": [
						"When a visible creature within 30 feet of the enchanter makes an attack roll against it, the enchanter forces the attacker to make a {14} Wisdom saving throw. On a failed save, the attacker redirects the attack roll to the creature closest to it, other than the enchanter or itself. If multiple eligible creatures are closest, the attacker chooses which one to target."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/enchanter.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Evoker Wizard",
			"source": "MPMM",
			"page": 262,
			"otherSources": [
				{
					"source": "VGM",
					"page": 214
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 121,
				"formula": "22d8 + 22"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 12,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+5"
			},
			"skill": {
				"arcana": "+7",
				"history": "+7"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The evoker casts one of the following spells, using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ light}",
						"{ mage hand}",
						"{ message}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ ice storm}",
							"{ lightning bolt}",
							"{ mage armor}"
						],
						"1e": [
							"{ wall of ice}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The evoker makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +7} to hit, reach 5 ft. or range 120 ft., one target. 25 (4d10 + 3}) force damage."
					]
				},
				{
					"name": "Sculpted Explosion {Recharge - 4}",
					"entries": [
						"The evoker unleashes a magical explosion of a particular damage type: cold, fire, lightning, or thunder. The magic erupts in a 20-foot-radius sphere centered on a point within 150 feet of the evoker. Each creature in that area must make a {15} Dexterity saving throw. The evoker can select up to three creatures it can see in the area to ignore the spell, as the evoker sculpts the spell's energy around them. On a failed save, a creature takes 40 (9d8}) damage of the chosen type and is knocked {prone}. On a successful save, a creature takes half as much damage and isn't knocked {prone}."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/evoker.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"O"
			],
			"damageTagsSpell": [
				"B",
				"C",
				"L"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Female Steeder",
			"source": "MPMM",
			"page": 231,
			"otherSources": [
				{
					"source": "MTF",
					"page": 238
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 30,
				"formula": "4d10 + 8"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 15,
			"dex": 16,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 3,
			"skill": {
				"stealth": "+7",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"cr": "1",
			"trait": [
				{
					"name": "Extraordinary Leap",
					"entries": [
						"The distance of the steeder's long jumps is tripled; every foot of its walking speed that it spends on the jump allows it to move 3 feet."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 7 (1d8 + 3}) piercing damage plus 9 (2d8}) poison damage."
					]
				},
				{
					"name": "Sticky Leg",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one Medium or smaller creature. The target is stuck to the steeder's leg and {grappled} (escape {12}). The steeder can have only one creature {grappled} at a time."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/female-steeder.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"SD"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Fire Elemental Myrmidon",
			"source": "MPMM",
			"page": 123,
			"otherSources": [
				{
					"source": "MTF",
					"page": 203
				}
			],
			"size": [
				"M"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 123,
				"formula": "19d8 + 38"
			},
			"speed": {
				"walk": 40
			},
			"str": 13,
			"dex": 18,
			"con": 15,
			"int": 9,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Ignan",
				"one language of its creator's choice"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Illumination",
					"entries": [
						"The myrmidon sheds bright light in a 20-foot radius and dim light in a 40-foot radius."
					]
				},
				{
					"name": "Water Susceptibility",
					"entries": [
						"For every 5 feet the myrmidon moves in 1 foot or more of water, it takes 2 (1d4}) cold damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes three Scimitar attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (1d6 + 4}) force damage."
					]
				},
				{
					"name": "Fiery Strikes {Recharge -}",
					"entries": [
						"The myrmidon uses Multiattack. Each attack that hits deals an extra 7 (2d6}) fire damage."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/fire-elemental-myrmidon.mp3"
			},
			"traitTags": [
				"Illumination"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"IG"
			],
			"damageTags": [
				"C",
				"F",
				"O"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Fire Giant Dreadnought",
			"source": "MPMM",
			"page": 124,
			"otherSources": [
				{
					"source": "VGM",
					"page": 147
				}
			],
			"size": [
				"H"
			],
			"type": "giant",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 21,
					"from": [
						"{@item plate armor|PHB|plate}",
						"{@item shield|phb|Dual Shields}"
					]
				}
			],
			"hp": {
				"average": 187,
				"formula": "15d12 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 27,
			"dex": 9,
			"con": 23,
			"int": 8,
			"wis": 10,
			"cha": 11,
			"save": {
				"dex": "+4",
				"con": "+11",
				"cha": "+5"
			},
			"skill": {
				"athletics": "+13",
				"perception": "+5"
			},
			"passive": 15,
			"immune": [
				"fire"
			],
			"languages": [
				"Giant"
			],
			"cr": "14",
			"trait": [
				{
					"name": "Dual Shields",
					"entries": [
						"The giant carries two shields, which together give the giant +3 to its AC (accounted for above)."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two Fireshield or Rock attacks."
					]
				},
				{
					"name": "Fireshield",
					"entries": [
						"{1d20+13} to hit, reach 5 ft., one target. 22 (4d6 + 8}) bludgeoning damage plus 7 (2d6}) fire damage plus 7 (2d6}) piercing damage."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"1d20+13} to hit, range 60/240 ft., one target. 30 (4d10 + 8}) bludgeoning damage."
					]
				},
				{
					"name": "Shield Charge {Recharge - 5}",
					"entries": [
						"The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, that creature must succeed on a {21} Strength saving throw or take 36 (8d6 + 8}) bludgeoning damage plus 14 (4d6}) fire damage and be pushed up to 30 feet and knocked {prone}."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/fire-giant-dreadnought.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"B",
				"F",
				"P"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Firenewt Warlock of Imix",
			"source": "MPMM",
			"page": 125,
			"otherSources": [
				{
					"source": "VGM",
					"page": 143
				}
			],
			"size": [
				"M"
			],
			"type": "elemental",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				10
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 11,
			"con": 12,
			"int": 9,
			"wis": 11,
			"cha": 14,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"immune": [
				"fire"
			],
			"languages": [
				"Draconic",
				"Ignan"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The firenewt casts one of the following spells, using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ guidance}",
						"{ light}",
						"{ mage armor}",
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The firenewt can breathe air and water."
					]
				},
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the firenewt's {@sense darkvision}."
					]
				},
				{
					"name": "Imix's Blessing",
					"entries": [
						"When the firenewt reduces an enemy to 0 hit points, the firenewt gains 5 temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The firenewt makes three Morningstar or Fire Ray attacks."
					]
				},
				{
					"name": "Morningstar",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 5 (1d8 + 1}) piercing damage."
					]
				},
				{
					"name": "Fire Ray",
					"entries": [
						"{@atk rs} +4} to hit, range 120 ft., one target. 5 (1d6 + 2}) fire damage."
					]
				}
			],
			"environment": [
				"hill",
				"mountain",
				"underdark"
			],
			"traitTags": [
				"Amphibious",
				"Devil's Sight"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"IG"
			],
			"damageTags": [
				"F",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Firenewt Warrior",
			"source": "MPMM",
			"page": 125,
			"otherSources": [
				{
					"source": "VGM",
					"page": 142
				}
			],
			"size": [
				"M"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d8 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 13,
			"con": 12,
			"int": 7,
			"wis": 11,
			"cha": 8,
			"passive": 10,
			"immune": [
				"fire"
			],
			"languages": [
				"Draconic",
				"Ignan"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The firenewt can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The firenewt makes two Scimitar attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 4 (1d6 + 1}) slashing damage."
					]
				},
				{
					"name": "Spit Fire (Recharges after a Short or Long Rest)",
					"entries": [
						"The firenewt spits fire at a creature within 10 feet of it. The creature must make a {11} Dexterity saving throw, taking 9 (2d8}) fire damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"desert",
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/firenewt-warrior.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"IG"
			],
			"damageTags": [
				"F",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Flail Snail",
			"source": "MPMM",
			"page": 126,
			"otherSources": [
				{
					"source": "VGM",
					"page": 144
				}
			],
			"size": [
				"L"
			],
			"type": "elemental",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 52,
				"formula": "5d10 + 25"
			},
			"speed": {
				"walk": 10
			},
			"str": 17,
			"dex": 5,
			"con": 20,
			"int": 3,
			"wis": 10,
			"cha": 5,
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 10,
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Antimagic Shell",
					"entries": [
						"The snail has advantage on saving throws against spells, and any creature making a spell attack against the snail has disadvantage on the attack roll.",
						"If the snail succeeds on its saving throw against a spell or a spell's attack roll misses it, the snail's shell converts some of the spell's energy into a burst of destructive force if the spell is of 1st level or higher; each creature within 30 feet of the snail must make a {15} Constitution saving throw, taking 3 (1d6}) force damage per level of the spell on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The snail makes five Flail Tentacle attacks."
					]
				},
				{
					"name": "Flail Tentacle",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one target. 5 (1d4 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Scintillating Shell (Recharges after a Short or Long Rest)",
					"entries": [
						"The snail's shell emits dazzling, colored light until the end of the snail's next turn. During this time, the shell sheds bright light in a 30-foot radius and dim light for an additional 30 feet, and creatures that can see the snail have disadvantage on attack rolls against it. In addition, any creature within the bright light and able to see the snail when this power is activated must succeed on a {15} Wisdom saving throw or be {stunned} until the light ends."
					]
				},
				{
					"name": "Shell Defense",
					"entries": [
						"The flail snail withdraws into its shell. Until it emerges, it gains a +4 bonus to its AC and is {restrained}. It can emerge from its shell as a bonus action on its turn."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/flail-snail.mp3"
			},
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Flind",
			"source": "MPMM",
			"page": 127,
			"otherSources": [
				{
					"source": "VGM",
					"page": 153
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"gnoll"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|PHB}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "15d8 + 60"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 14,
			"con": 19,
			"int": 11,
			"wis": 13,
			"cha": 12,
			"save": {
				"con": "+8",
				"wis": "+5"
			},
			"skill": {
				"intimidation": "+5",
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"languages": [
				"Gnoll",
				"Abyssal"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Aura of Blood Thirst",
					"entries": [
						"If the flind isn't {incapacitated}, any creature with the Rampage trait can make a Bite attack as a bonus action while within 10 feet of the flind."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The flind makes one Flail of Chaos attack, one Flail of Pain attack, and one Flail of Paralysis attack, or it makes three Longbow attacks."
					]
				},
				{
					"name": "Flail of Chaos",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 10 (1d10 + 5}) bludgeoning damage, and the target must make a {16} Wisdom saving throw. On a failed save, the target must use its reaction, if available, to make one melee attack against a random creature, other than the flind, within its reach. If there's no creature within reach, the target instead moves half its speed in a random direction."
					]
				},
				{
					"name": "Flail of Pain",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 10 (1d10 + 5}) bludgeoning damage plus 16 (3d10}) psychic damage."
					]
				},
				{
					"name": "Flail of Paralysis",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 10 (1d10 + 5}) bludgeoning damage, and the target must succeed on a {16} Constitution saving throw or be {paralyzed} until the end of its next turn."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+6} to hit, range 150/600 ft., one target. 6 (1d8 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"coastal",
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/flind.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"OTH"
			],
			"damageTags": [
				"B",
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Fraz-Urb'luu",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 129,
			"otherSources": [
				{
					"source": "MTF",
					"page": 146
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 337,
				"formula": "27d10 + 189"
			},
			"speed": {
				"walk": 40,
				"fly": 40
			},
			"str": 29,
			"dex": 12,
			"con": 25,
			"int": 26,
			"wis": 24,
			"cha": 26,
			"save": {
				"dex": "+8",
				"con": "+14",
				"int": "+15",
				"wis": "+14"
			},
			"skill": {
				"deception": "+15",
				"perception": "+14",
				"stealth": "+8"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 24,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "23",
				"lair": "24"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Fraz-Urb'luu casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {23}):"
					],
					"will": [
						"{ alter self} (can become Medium when changing his appearance)",
						"{ detect magic}",
						"{ dispel magic}",
						"{ phantasmal force}"
					],
					"daily": {
						"3e": [
							"{ mislead}",
							"{ programmed illusion}",
							"{ seeming}"
						],
						"1e": [
							"{ modify memory}",
							"{ project image}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Fraz-Urb'luu has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Undetectable",
					"entries": [
						"Fraz-Urb'luu can't be targeted by divination magic, perceived through magical scrying sensors, or detected by abilities that sense demons or Fiends."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Fraz-Urb'luu makes one Bite attack and two Fist attacks, and he uses Phantasmal Terror."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 19 (3d6 + 9}) force damage."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 22 (3d8 + 9}) force damage."
					]
				},
				{
					"name": "Phantasmal Terror",
					"entries": [
						"Fraz-Urb'luu targets one creature he can see within 120 feet of him. The target must succeed on a {23} Wisdom saving throw, or it takes 16 (3d10}) psychic damage and is {frightened} of Fraz-Urb'luu until the end of its next turn."
					]
				}
			],
			"legendary": [
				{
					"name": "Tail",
					"entries": [
						"{1d20+16} to hit, reach 15 ft., one target. 20 (2d10 + 9}) force damage. If the target is a Large or smaller creature, it is also {grappled} (escape {24}), and it is {restrained} until the grapple ends. Fraz-Urb'luu can grapple only one creature with his tail at a time."
					]
				},
				{
					"name": "Terror (Costs 2 Actions)",
					"entries": [
						"Fraz-Urb'luu uses Phantasmal Terror."
					]
				}
			],
			"legendaryGroup": {
				"name": "Fraz-Urb'luu",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"damageTagsLegendary": [
				"Y"
			],
			"damageTagsSpell": [
				"B",
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"incapacitated",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Froghemoth",
			"source": "MPMM",
			"page": 130,
			"otherSources": [
				{
					"source": "VGM",
					"page": 145
				}
			],
			"size": [
				"H"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 161,
				"formula": "14d12 + 70"
			},
			"speed": {
				"walk": 30,
				"swim": 30
			},
			"str": 23,
			"dex": 13,
			"con": 20,
			"int": 2,
			"wis": 12,
			"cha": 5,
			"save": {
				"con": "+9",
				"wis": "+5"
			},
			"skill": {
				"perception": "+9",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 19,
			"resist": [
				"fire",
				"lightning"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The froghemoth can breathe air and water."
					]
				},
				{
					"name": "Shock Susceptibility",
					"entries": [
						"If the froghemoth takes lightning damage, it suffers two effects until the end of its next turn: its speed is halved, and it has disadvantage on Dexterity saving throws."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The froghemoth makes one Bite attack and two Tentacle attacks, and it can use Tongue."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 22 (3d10 + 6}) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is {blinded} and {restrained}, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6}) acid damage at the start of each of the froghemoth's turns.",
						"The froghemoth's gullet can hold up to two creatures at a time. If the froghemoth takes 20 damage or more on a single turn from a creature inside it, the froghemoth must succeed on a {20} Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls {prone} in a space within 10 feet of the froghemoth. If the froghemoth dies, any swallowed creature is no longer {restrained} by it and can escape from the corpse using 10 feet of movement, exiting {prone}."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+10} to hit, reach 20 ft., one target. 19 (3d8 + 6}) bludgeoning damage, and the target is {grappled} (escape {16}) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles."
					]
				},
				{
					"name": "Tongue",
					"entries": [
						"The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a {18} Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/froghemoth.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Swallow",
				"Tentacles"
			],
			"damageTags": [
				"A",
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Frost Giant Everlasting One",
			"source": "MPMM",
			"page": 131,
			"otherSources": [
				{
					"source": "VGM",
					"page": 148
				}
			],
			"size": [
				"H"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"patchwork armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "14d12 + 98"
			},
			"speed": {
				"walk": 40
			},
			"str": 25,
			"dex": 9,
			"con": 24,
			"int": 9,
			"wis": 10,
			"cha": 12,
			"save": {
				"str": "+11",
				"con": "+11",
				"wis": "+4"
			},
			"skill": {
				"athletics": "+11",
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"immune": [
				"cold"
			],
			"languages": [
				"Giant"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Extra Heads",
					"entries": [
						"The giant has a {@chance 25} chance of having more than one head. If it has more than one, it has advantage on Wisdom ({@skill Perception}) checks and on saving throws against being {blinded}, {charmed}, {deafened}, {frightened}, {stunned}, or knocked {unconscious}."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of its next turn. The giant dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two Greataxe or Rock attacks."
					]
				},
				{
					"name": "Greataxe",
					"entries": [
						"{1d20+11} to hit, reach 10 ft., one target. 26 (3d12 + 7}) slashing damage, or 30 (3d12 + 11}) slashing damage while raging."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"1d20+11} to hit, range 60/240 ft., one target. 29 (4d10 + 7}) bludgeoning damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Vaprak's Rage (Recharges after a Short or Long Rest)",
					"entries": [
						"The giant enters a rage. The rage lasts for 1 minute or until the giant is {incapacitated}. While raging, the giant gains the following benefits:",
						{
							"type": "list",
							"items": [
								"The giant has advantage on Strength checks and Strength saving throws.",
								"When it makes a melee weapon attack, the giant gains a +4 bonus to the damage roll.",
								"The giant has resistance to bludgeoning, piercing, and slashing damage."
							]
						}
					]
				}
			],
			"environment": [
				"coastal"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/frost-giant-everlasting-one.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"B",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Frost Salamander",
			"source": "MPMM",
			"page": 132,
			"otherSources": [
				{
					"source": "MTF",
					"page": 223
				}
			],
			"size": [
				"H"
			],
			"type": "elemental",
			"alignment": [
				"U"
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
				"average": 168,
				"formula": "16d12 + 64"
			},
			"speed": {
				"walk": 60,
				"burrow": 40,
				"climb": 40
			},
			"str": 20,
			"dex": 12,
			"con": 18,
			"int": 7,
			"wis": 11,
			"cha": 7,
			"save": {
				"con": "+8",
				"wis": "+4"
			},
			"skill": {
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 14,
			"immune": [
				"cold"
			],
			"vulnerable": [
				"fire"
			],
			"languages": [
				"Primordial"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Burning Fury",
					"entries": [
						"When the salamander takes fire damage, its",
						"Freezing Breath automatically recharges."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The salamander makes one Bite attack and four Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+9} to hit, reach 15 ft., one target. 9 (1d8 + 5}) piercing damage plus 5 (1d10}) cold damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 8 (1d6 + 5}) piercing damage."
					]
				},
				{
					"name": "Freezing Breath {Recharge -}",
					"entries": [
						"The salamander exhales chill wind in a 60-foot cone. Each creature in that area must make a {17} Constitution saving throw, taking 44 (8d10}) cold damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"arctic"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/frost-salamander.mp3"
			},
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Breath Weapon",
				"Multiattack"
			],
			"languageTags": [
				"P"
			],
			"damageTags": [
				"C",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gauth",
			"source": "MPMM",
			"page": 133,
			"otherSources": [
				{
					"source": "VGM",
					"page": 125
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"beholder"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 20,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 10,
			"dex": 14,
			"con": 16,
			"int": 15,
			"wis": 15,
			"cha": 13,
			"save": {
				"int": "+5",
				"wis": "+5",
				"cha": "+4"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"conditionImmune": [
				"prone"
			],
			"languages": [
				"Deep Speech",
				"Undercommon"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Stunning Gaze",
					"entries": [
						"When a creature that can see the gauth's central eye starts its turn within 30 feet of the gauth, the gauth can force it to make a {14} Wisdom saving throw if the gauth isn't {incapacitated} and can see the creature. A creature that fails the save is {stunned} until the start of its next turn.",
						"Unless {@quickref Surprise|PHB|3|0|surprised}, a creature can avert its eyes at the start of its turn to avoid the saving throw. If the creature does so, it can't see the gauth until the start of its next turn, when it can avert its eyes again. If the creature looks at the gauth in the meantime, it must immediately make the save."
					]
				},
				{
					"name": "Death Throes",
					"entries": [
						"When the gauth dies, the magical energy within it explodes, and each creature within 10 feet of it must make a {14} Dexterity saving throw, taking 13 (3d8}) force damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 9 (2d8}) piercing damage."
					]
				},
				{
					"name": "Eye Rays",
					"entries": [
						"The gauth shoots three of the following magical eye rays at random (roll three {@dice d6}s, and reroll duplicates), targeting one to three creatures it can see within 120 feet of it:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1: Devour Magic Ray",
									"entries": [
										"The target must succeed on a {14} Dexterity saving throw or have one of its magic items lose all magical properties until the start of the gauth's next turn. If the object is a charged item, it also loses {@dice 1d4} charges. Determine the affected item randomly, ignoring single-use items such as potions and scrolls."
									],
									"type": "item"
								},
								{
									"name": "2: Enervation Ray",
									"entries": [
										"The target must make a {14} Constitution saving throw, taking 18 (4d8}) necrotic damage on a failed save, or half as much damage on a successful one."
									],
									"type": "item"
								},
								{
									"name": "3: Fire Ray",
									"entries": [
										"The target must succeed on a {14} Dexterity saving throw or take 22 (4d10}) fire damage."
									],
									"type": "item"
								},
								{
									"name": "4: Paralyzing Ray",
									"entries": [
										"The target must succeed on a {14} Constitution saving throw or be {paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									],
									"type": "item"
								},
								{
									"name": "5: Pushing Ray",
									"entries": [
										"The target must succeed on a {14} Strength saving throw or be pushed up to 15 feet away from the gauth and have its speed halved until the start of the gauth's next turn."
									],
									"type": "item"
								},
								{
									"name": "6: Sleep Ray",
									"entries": [
										"The target must succeed on a {14} Wisdom saving throw or fall asleep and remain {unconscious} for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on Constructs and Undead."
									],
									"type": "item"
								}
							]
						}
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gauth.mp3"
			},
			"traitTags": [
				"Death Burst"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"DS",
				"U"
			],
			"damageTags": [
				"F",
				"N",
				"O",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"paralyzed",
				"stunned",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gazer",
			"source": "MPMM",
			"page": 134,
			"otherSources": [
				{
					"source": "VGM",
					"page": 126
				},
				{
					"source": "SjA"
				}
			],
			"size": [
				"T"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"beholder"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 13,
				"formula": "3d4 + 6"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 3,
			"dex": 17,
			"con": 14,
			"int": 3,
			"wis": 10,
			"cha": 7,
			"save": {
				"wis": "+2"
			},
			"skill": {
				"perception": "+4",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"conditionImmune": [
				"prone"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Mimicry",
					"entries": [
						"The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful {10} Wisdom ({@skill Insight}) check."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 1 piercing damage."
					]
				},
				{
					"name": "Eye Rays",
					"entries": [
						"The gazer shoots two of the following magical eye rays at random (roll two {@dice d4}s, and reroll duplicates), choosing one or two targets it can see within 60 feet of it:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1: Dazing Ray",
									"entries": [
										"The targeted creature must succeed on a {12} Wisdom saving throw or be {charmed} until the start of the gazer's next turn. While the target is {charmed} in this way, its speed is halved, and it has disadvantage on attack rolls."
									],
									"type": "item"
								},
								{
									"name": "2: Fear Ray",
									"entries": [
										"The targeted creature must succeed on a {12} Wisdom saving throw or be {frightened} until the start of the gazer's next turn."
									],
									"type": "item"
								},
								{
									"name": "3: Frost Ray",
									"entries": [
										"The target must succeed on a {12} Dexterity saving throw or take 10 (3d6}) cold damage."
									],
									"type": "item"
								},
								{
									"name": "4: Telekinetic Ray",
									"entries": [
										"If the target is a creature that is Medium or smaller, it must succeed on a {12} Strength saving throw or be moved up to 30 feet directly away from the gazer. If the target is a Tiny object that isn't being worn or carried, the gazer moves it up to 30 feet in any direction. The gazer can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a container."
									],
									"type": "item"
								}
							]
						}
					]
				}
			],
			"bonus": [
				{
					"name": "Aggressive",
					"entries": [
						"The gazer moves up to its speed toward a hostile creature that it can see."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Gazer Familiar",
					"entries": [
						"Spellcasters who are interested in unusual familiars find that gazers are eager to serve someone who has magical power. Unless its master is strict, a gazer familiar can be unruly, behaving aggressively toward other Tiny creatures. A gazer serving as a familiar has the following trait:",
						{
							"type": "entries",
							"name": "Familiar",
							"entries": [
								"The gazer can serve another creature as a familiar, forming a telepathic bond with its willing master, provided that the master is at least a 3rd-level spellcaster. While the two are bonded, the master can sense what the gazer senses as long as they are within 1 mile of each other. If its master causes it physical harm, the gazer will end its service as a familiar, breaking the telepathic bond."
							]
						}
					],
					"_version": {
						"addHeadersAs": "trait"
					}
				}
			],
			"environment": [
				"underdark"
			],
			"familiar": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gazer.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"C",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Geryon",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 136,
			"otherSources": [
				{
					"source": "MTF",
					"page": 173
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 300,
				"formula": "24d12 + 144"
			},
			"speed": {
				"walk": 30,
				"fly": 50
			},
			"str": 29,
			"dex": 17,
			"con": 22,
			"int": 19,
			"wis": 16,
			"cha": 23,
			"save": {
				"dex": "+10",
				"con": "+13",
				"wis": "+10",
				"cha": "+13"
			},
			"skill": {
				"deception": "+13",
				"intimidation": "+13",
				"perception": "+10"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 20,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"cold",
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "22",
				"lair": "23"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Geryon casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {21}):"
					],
					"will": [
						"{ alter self} (can become Medium when changing his appearance)",
						"{ detect magic}",
						"{ ice storm}",
						"{ invisibility} (self only)",
						"{ locate object}",
						"{ suggestion}",
						"{ wall of ice}"
					],
					"daily": {
						"1": [
							"{ banishment}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Geryon fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Geryon has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Geryon regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Geryon dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Geryon makes one Claw attack and one Stinger attack."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+16} to hit, reach 15 ft., one target. 23 (4d6 + 9}) cold damage. If the target is Large or smaller, it is {grappled} ({24}), and it is {restrained} until the grapple ends. Geryon can grapple one creature at a time. If the target is already {grappled} by Geryon, the target takes an extra 27 (6d8}) cold damage."
					]
				},
				{
					"name": "Stinger",
					"entries": [
						"{1d20+16} to hit, reach 20 ft., one creature. 14 (2d4 + 9}) force damage, and the target must succeed on a {21} Constitution saving throw or take 13 (2d12}) poison damage and become {poisoned} until it finishes a short or long rest. The target's hit point maximum is reduced by an amount equal to half the poison damage taken. This reduction lasts until the {poisoned} condition is removed. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Geryon teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Infernal Glare",
					"entries": [
						"Geryon targets one creature he can see within 60 feet of him. The target must succeed on a {23} Wisdom saving throw or become {frightened} of Geryon until the end of its next turn."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Geryon uses Teleport."
					]
				},
				{
					"name": "Swift Sting (Costs 2 Actions)",
					"entries": [
						"Geryon makes one Stinger attack."
					]
				}
			],
			"legendaryGroup": {
				"name": "Geryon",
				"source": "MPMM"
			},
			"variant": [
				{
					"type": "variant",
					"name": "Sound the Horn",
					"entries": [
						"Geryon can have an action that allows him to summon {@creature minotaur||minotaurs}.",
						{
							"name": "Sound the Horn (1/Day)",
							"type": "entries",
							"entries": [
								"Geryon blows his horn, which causes {@dice 5d4} {@creature minotaur||minotaurs} to appear in unoccupied spaces of his choice within 600 feet of him. The minotaurs roll initiative when they appear, and they obey his commands. They remain until they die or Geryon uses an action to dismiss any or all of them."
							]
						}
					],
					"_version": {
						"name": "Geryon (Summoner)",
						"addHeadersAs": "action"
					}
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/geryon.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"C",
				"I",
				"O"
			],
			"damageTagsLegendary": [
				"C"
			],
			"damageTagsSpell": [
				"B",
				"C",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"poisoned"
			],
			"conditionInflictLegendary": [
				"restrained"
			],
			"conditionInflictSpell": [
				"incapacitated",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Giant Strider",
			"source": "MPMM",
			"page": 137,
			"otherSources": [
				{
					"source": "VGM",
					"page": 143
				}
			],
			"size": [
				"L"
			],
			"type": "elemental",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 22,
				"formula": "3d10 + 6"
			},
			"speed": {
				"walk": 50
			},
			"str": 18,
			"dex": 13,
			"con": 14,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"passive": 11,
			"immune": [
				"fire"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Fire Absorption",
					"entries": [
						"Whenever the giant strider is subjected to fire damage, it takes no damage and regains a number of hit points equal to half the fire damage dealt."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d8 + 4}) piercing damage."
					]
				},
				{
					"name": "Fire Burst {Recharge - 5}",
					"entries": [
						"The giant strider hurls a gout of flame at a point it can see within 60 feet of it. Each creature in a 10-foot-radius sphere centered on that point must make a {12} Dexterity saving throw, taking 14 (4d6}) fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners, and it ignites flammable objects in that area that aren't being worn or carried"
					]
				}
			],
			"environment": [
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/giant-strider.mp3"
			},
			"traitTags": [
				"Damage Absorption"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Giff",
			"source": "MPMM",
			"page": 138,
			"otherSources": [
				{
					"source": "MTF",
					"page": 204
				},
				{
					"source": "SjA"
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|PHB}"
					]
				}
			],
			"hp": {
				"average": 60,
				"formula": "8d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 17,
			"int": 11,
			"wis": 12,
			"cha": 12,
			"passive": 11,
			"languages": [
				"Common"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Firearms Knowledge",
					"entries": [
						"The giff's mastery of its weapons enables it to ignore the loading property of muskets and pistols."
					]
				},
				{
					"name": "Headfirst Charge",
					"entries": [
						"The giff can try to knock a creature over; if the giff moves at least 20 feet in a straight line and ends within 5 feet of a Large or smaller creature, that creature must succeed on a {14} Strength saving throw or take 7 (2d6}) bludgeoning damage and be knocked {prone}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giff makes two Longsword, Musket, or Pistol attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 (1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Musket",
					"entries": [
						"1d20+4} to hit, range 40/120 ft., one target. 8 (1d12 + 2}) piercing damage."
					]
				},
				{
					"name": "Pistol",
					"entries": [
						"1d20+4} to hit, range 30/90 ft., one target. 7 (1d10 + 2}) piercing damage."
					]
				},
				{
					"name": "Fragmentation Grenade (1/Day)",
					"entries": [
						"The giff throws a grenade up to 60 feet, and the grenade explodes in a 20-foot-radius sphere. Each creature in that area must make a {15} Dexterity saving throw, taking 17 (5d6}) piercing damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/giff.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Girallon",
			"source": "MPMM",
			"page": 139,
			"otherSources": [
				{
					"source": "VGM",
					"page": 152
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 18,
			"dex": 16,
			"con": 16,
			"int": 5,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+5",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"cr": "4",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The girallon makes one Bite attack and four Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one creature. 7 (1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 10 ft., one target. 7 (1d6 + 4}) slashing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Aggressive",
					"entries": [
						"The girallon moves up to its speed toward a hostile creature that it can see."
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/girallon.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githyanki Gish",
			"source": "MPMM",
			"page": 140,
			"otherSources": [
				{
					"source": "MTF",
					"page": 205
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"gith",
					"wizard"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|PHB|half plate}"
					]
				}
			],
			"hp": {
				"average": 130,
				"formula": "20d8 + 40"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 15,
			"con": 14,
			"int": 16,
			"wis": 15,
			"cha": 16,
			"save": {
				"con": "+6",
				"int": "+7",
				"wis": "+6"
			},
			"skill": {
				"insight": "+6",
				"perception": "+6",
				"stealth": "+6"
			},
			"passive": 16,
			"languages": [
				"Gith"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The githyanki casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ light}",
						"{ mage hand} (the hand is invisible)",
						"{ message}"
					],
					"daily": {
						"3e": [
							"{ fireball}",
							"{ invisibility}",
							"{ nondetection} (self only)"
						],
						"1e": [
							"{ dimension door}",
							"{ plane shift}",
							"{ telekinesis}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githyanki makes three Longsword or Telekinetic Bolt attacks, or it makes one of those attacks and uses Spellcasting."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (1d8 + 3}) slashing damage, or 8 (1d10 + 3}) slashing damage if used with two hands, plus 22 (5d8}) psychic damage."
					]
				},
				{
					"name": "Telekinetic Bolt",
					"entries": [
						"{@atk rs} +7} to hit, range 120 ft., one target. 28 (8d6}) force damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Astral Step {Recharge - 4}",
					"entries": [
						"The githyanki teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githyanki-gish.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"O",
				"S",
				"Y"
			],
			"damageTagsSpell": [
				"F",
				"O"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"invisible",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githyanki Kith'rak",
			"source": "MPMM",
			"page": 140,
			"otherSources": [
				{
					"source": "MTF",
					"page": 205
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 180,
				"formula": "24d8 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 16,
			"con": 17,
			"int": 16,
			"wis": 15,
			"cha": 17,
			"save": {
				"con": "+7",
				"int": "+7",
				"wis": "+6"
			},
			"skill": {
				"intimidation": "+7",
				"perception": "+6"
			},
			"passive": 16,
			"languages": [
				"Gith"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The githyanki casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{ blur}",
							"{ nondetection} (self only)"
						],
						"1e": [
							"{ plane shift}",
							"{ telekinesis}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githyanki makes three Greatsword attacks."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 11 (2d6 + 4}) slashing damage plus 17 (5d6}) psychic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Astral Step {Recharge - 4}",
					"entries": [
						"The githyanki teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Rally the Troops",
					"entries": [
						"The githyanki magically ends the {charmed} and {frightened} conditions on itself and each creature of its choice that it can see within 30 feet of it."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The githyanki adds 4 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githyanki-kith_rak.mp3"
			},
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"S",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githyanki Supreme Commander",
			"source": "MPMM",
			"page": 141,
			"otherSources": [
				{
					"source": "MTF",
					"page": 206
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 187,
				"formula": "22d8 + 88"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 17,
			"con": 18,
			"int": 16,
			"wis": 16,
			"cha": 18,
			"save": {
				"con": "+9",
				"int": "+8",
				"wis": "+8"
			},
			"skill": {
				"intimidation": "+9",
				"perception": "+8"
			},
			"passive": 18,
			"languages": [
				"Gith"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The githyanki casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{ levitate} (self only)",
							"{ nondetection} (self only)"
						],
						"1e": [
							"{ Bigby's hand}",
							"{ mass suggestion}",
							"{ plane shift}",
							"{ telekinesis}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the githyanki fails a saving throw, it can choose to succeed instead."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githyanki makes two Silver Greatsword attacks."
					]
				},
				{
					"name": "Silver Greatsword",
					"entries": [
						"{1d20+12} to hit, reach 5 ft., one target. 14 (2d6 + 7}) slashing damage plus 17 (5d6}) psychic damage. On a critical hit against a target in an astral body (as with the { astral projection} spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Astral Step",
					"entries": [
						"The githyanki teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The githyanki adds 5 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"legendary": [
				{
					"name": "Command Ally",
					"entries": [
						"The githyanki targets one ally it can see within 30 feet of it. If the target can see or hear the githyanki, the target can make one melee weapon attack using its reaction, if available, and has advantage on the attack roll."
					]
				},
				{
					"name": "Attack (2 Actions)",
					"entries": [
						"The githyanki makes one Silver Greatsword attack."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githyanki-supreme-commander.mp3"
			},
			"traitTags": [
				"Legendary Resistances"
			],
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"S",
				"Y"
			],
			"damageTagsSpell": [
				"B",
				"O"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githzerai Anarch",
			"source": "MPMM",
			"page": 142,
			"otherSources": [
				{
					"source": "MTF",
					"page": 207
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"psychic defense"
					]
				}
			],
			"hp": {
				"average": 144,
				"formula": "17d8 + 68"
			},
			"speed": {
				"walk": 30,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 16,
			"dex": 21,
			"con": 18,
			"int": 18,
			"wis": 20,
			"cha": 14,
			"save": {
				"str": "+8",
				"dex": "+10",
				"int": "+9",
				"wis": "+10"
			},
			"skill": {
				"arcana": "+9",
				"insight": "+10",
				"perception": "+10"
			},
			"passive": 20,
			"languages": [
				"Gith"
			],
			"cr": {
				"cr": "16",
				"lair": "17"
			},
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The githzerai casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save {18}):"
					],
					"will": [
						"{ mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{ see invisibility}",
							"{ telekinesis}"
						],
						"1e": [
							"{ globe of invulnerability}",
							"{ plane shift}",
							"{ wall of force}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the githzerai fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Psychic Defense",
					"entries": [
						"While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githzerai makes three Unarmed Strike attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 9 (1d8 + 5}) bludgeoning damage plus 18 (4d8}) psychic damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Strike",
					"entries": [
						"The githzerai makes one Unarmed Strike attack."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The githzerai teleports, along with any equipment it is wearing or carrying, to an unoccupied space it can see within 30 feet of it."
					]
				},
				{
					"name": "Change Gravity (Costs 3 Actions)",
					"entries": [
						"The githzerai casts the { reverse gravity} spell, using Wisdom as the spellcasting ability. The spell has the normal effect, except that the githzerai can orient the area in any direction and creatures and objects fall toward the end of the area."
					]
				}
			],
			"legendaryGroup": {
				"name": "Githzerai Anarch",
				"source": "MPMM"
			},
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githzerai-anarch.mp3"
			},
			"traitTags": [
				"Legendary Resistances"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githzerai Enlightened",
			"source": "MPMM",
			"page": 143,
			"otherSources": [
				{
					"source": "MTF",
					"page": 208
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"psychic defense"
					]
				}
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 40
			},
			"str": 14,
			"dex": 19,
			"con": 16,
			"int": 17,
			"wis": 19,
			"cha": 13,
			"save": {
				"str": "+6",
				"dex": "+8",
				"int": "+7",
				"wis": "+8"
			},
			"skill": {
				"arcana": "+7",
				"insight": "+8",
				"perception": "+8"
			},
			"passive": 18,
			"languages": [
				"Gith"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The githzerai casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ mage hand} (the hand is invisible)"
					],
					"daily": {
						"3": [
							"{ see invisibility}"
						],
						"1e": [
							"{ plane shift}",
							"{ teleport}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Psychic Defense",
					"entries": [
						"While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githzerai makes three Unarmed Strike attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 13 (2d8 + 4}) bludgeoning damage plus 18 (4d8}) psychic damage."
					]
				},
				{
					"name": "Temporal Strike {Recharge -}",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one creature. 13 (2d8 + 4}) bludgeoning damage plus 52 (8d12}) psychic damage. The target must succeed on a {16} Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied."
					]
				}
			],
			"reaction": [
				{
					"name": "Slow Fall",
					"entries": [
						"When the githzerai falls, it reduces any falling damage it takes by 50."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githzerai-enlightened.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gnoll Flesh Gnawer",
			"source": "MPMM",
			"page": 144,
			"otherSources": [
				{
					"source": "VGM",
					"page": 154
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 22,
				"formula": "4d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 14,
			"con": 12,
			"int": 8,
			"wis": 10,
			"cha": 8,
			"save": {
				"dex": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Gnoll"
			],
			"cr": "1",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gnoll makes one Bite attack and two Shortsword attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Sudden Rush",
					"entries": [
						"Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn't provoke {@action opportunity attack||opportunity attacks}."
					]
				}
			],
			"bonus": [
				{
					"name": "Rampage",
					"entries": [
						"After the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll moves up to half its speed and makes a Bite attack."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gnoll-flesh-gnawer.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gnoll Hunter",
			"source": "MPMM",
			"page": 144,
			"otherSources": [
				{
					"source": "VGM",
					"page": 154
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 22,
				"formula": "4d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 14,
			"con": 12,
			"int": 8,
			"wis": 12,
			"cha": 8,
			"skill": {
				"perception": "+3",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Gnoll"
			],
			"cr": "1/2",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gnoll makes two Bite, Spear, or Longbow attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d6 + 2}) piercing damage, or 6 (1d8 + 2}) piercing damage when used with two hands to make a melee attack."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+4} to hit, range 150/600 ft., one target. 6 (1d8 + 2}) piercing damage, and the target's speed is reduced by 10 feet until the end of its next turn."
					]
				}
			],
			"bonus": [
				{
					"name": "Rampage",
					"entries": [
						"After the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll moves up to half its speed and makes a Bite attack."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gnoll-hunter.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Gnoll Witherling",
			"source": "MPMM",
			"page": 145,
			"otherSources": [
				{
					"source": "VGM",
					"page": 155
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 12,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 11,
				"formula": "2d8 + 2"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 8,
			"con": 12,
			"int": 5,
			"wis": 5,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 7,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"understands Gnoll but can't speak"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Unusual Nature",
					"entries": [
						"The witherling doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The witherling makes two Bite or Spiked Club attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) necrotic damage."
					]
				},
				{
					"name": "Spiked Club",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) piercing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Rampage",
					"entries": [
						"After the witherling reduces a creature to 0 hit points with a melee attack on its turn, the gnoll moves up to half its speed and makes one Bite attack."
					]
				}
			],
			"reaction": [
				{
					"name": "Vengeful Strike",
					"entries": [
						"In response to a gnoll being reduced to 0 hit points within 30 feet of the witherling, the witherling makes one Bite or Spiked Club attack."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gnoll-witherling.mp3"
			},
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"OTH"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gray Render",
			"source": "MPMM",
			"page": 146,
			"otherSources": [
				{
					"source": "MTF",
					"page": 209
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 13,
			"con": 20,
			"int": 3,
			"wis": 6,
			"cha": 8,
			"save": {
				"str": "+8",
				"con": "+9"
			},
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"cr": "12",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gray render makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 17 (2d12 + 4}) piercing damage. If the target is Medium or smaller, the target must succeed on a {16} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 13 (2d8 + 4}) slashing damage, plus 10 (3d6}) bludgeoning damage if the target is {prone}."
					]
				}
			],
			"reaction": [
				{
					"name": "Bloody Rampage",
					"entries": [
						"When the gray render takes damage, it makes one Claw attack against a random creature within its reach, other than its master."
					]
				}
			],
			"environment": [
				"forest",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gray-render.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Graz'zt",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 148,
			"otherSources": [
				{
					"source": "MTF",
					"page": 149
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 346,
				"formula": "33d10 + 165"
			},
			"speed": {
				"walk": 40
			},
			"str": 22,
			"dex": 15,
			"con": 21,
			"int": 23,
			"wis": 21,
			"cha": 26,
			"save": {
				"dex": "+9",
				"con": "+12",
				"wis": "+12"
			},
			"skill": {
				"deception": "+15",
				"perception": "+12",
				"persuasion": "+15"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "24",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Graz'zt casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {23}):"
					],
					"will": [
						"{ charm person}",
						"{ detect magic}",
						"{ dispel magic}"
					],
					"daily": {
						"3e": [
							"{ darkness}",
							"{ dominate person}",
							"{ telekinesis}",
							"{ teleport}"
						],
						"1e": [
							"{ dominate monster}",
							"{ greater invisibility}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Graz'zt fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Graz'zt has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Graz'zt makes two Wave of Sorrow attacks. He can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Wave of Sorrow (Greatsword)",
					"entries": [
						"{1d20+13} to hit, reach 10 ft., one target. 20 (4d6 + 6}) force damage plus 14 (4d6}) acid damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Graz'zt teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"Graz'zt transforms into a form that resembles a Medium Humanoid or back into his true form. Aside from his size, his statistics are the same in each form. Any equipment he is wearing or carrying isn't transformed."
					]
				}
			],
			"reaction": [
				{
					"name": "Negate Spell {Recharge - 5}",
					"entries": [
						"Graz'zt tries to interrupt a spell he sees a creature casting within 60 feet of him. If the spell is 3rd level or lower, the spell fails and has no effect. If the spell is 4th level or higher, Graz'zt makes a Charisma check against a DC of 10 + the spell's level. On a success, the spell fails and has no effect."
					]
				}
			],
			"legendary": [
				{
					"name": "Abyssal Magic",
					"entries": [
						"Graz'zt uses Spellcasting or Teleport."
					]
				},
				{
					"name": "Attack",
					"entries": [
						"Graz'zt makes one Wave of Sorrow attack."
					]
				},
				{
					"name": "Dance, My Puppet!",
					"entries": [
						"One creature {charmed} by Graz'zt that Graz'zt can see must use its reaction to move up to its speed as Graz'zt directs."
					]
				}
			],
			"legendaryGroup": {
				"name": "Graz'zt",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Green Abishai",
			"source": "MPMM",
			"page": 40,
			"otherSources": [
				{
					"source": "MTF",
					"page": 162
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 195,
				"formula": "26d8 + 78"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 12,
			"dex": 17,
			"con": 16,
			"int": 17,
			"wis": 12,
			"cha": 19,
			"save": {
				"int": "+8",
				"cha": "+9"
			},
			"skill": {
				"deception": "+9",
				"insight": "+6",
				"perception": "+6",
				"persuasion": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "15",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The abishai casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ alter self}",
						"{ major image}"
					],
					"daily": {
						"3e": [
							"{ charm person}",
							"{ detect thoughts}",
							"{ fear}"
						],
						"1e": [
							"{ confusion}",
							"{ dominate person}",
							"{ mass suggestion}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes two Fiendish Claw attacks, or it makes one Fiendish Claw attack and uses Spellcasting."
					]
				},
				{
					"name": "Fiendish Claw",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 12 (2d8 + 3}) force damage. If the target is a creature, it must succeed on a {16} Constitution saving throw or take 16 (3d10}) poison damage and become {poisoned} for 1 minute. The {poisoned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/green-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"I",
				"O"
			],
			"damageTagsSpell": [
				"B",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Grung",
			"source": "MPMM",
			"page": 149,
			"otherSources": [
				{
					"source": "VGM",
					"page": 156
				}
			],
			"size": [
				"S"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 11,
				"formula": "2d6 + 4"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 7,
			"dex": 14,
			"con": 15,
			"int": 10,
			"wis": 11,
			"cha": 10,
			"save": {
				"dex": "+4"
			},
			"skill": {
				"athletics": "+2",
				"perception": "+2",
				"stealth": "+4",
				"survival": "+2"
			},
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Grung"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The grung can breathe air and water."
					]
				},
				{
					"name": "Poisonous Skin",
					"entries": [
						"Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a {12} Constitution saving throw or become {poisoned} for 1 minute. A {poisoned} creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
					]
				},
				{
					"name": "Water Dependency",
					"entries": [
						"If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of {exhaustion} at the end of that day. The grung can recover from this {exhaustion} only through magic or by immersing itself in water for at least 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2}) piercing damage plus 5 (2d4}) poison damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Grung Poison",
					"entries": [
						"A creature {poisoned} by a grung can suffer an additional effect that depends on the grung's color, as described below. This effect lasts until the creature is no longer {poisoned} by the grung.",
						{
							"name": "Blue Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature must make a loud noise at the start and end of its turn."
							]
						},
						{
							"name": "Gold Grung",
							"type": "entries",
							"entries": [
								"The creature is {charmed} by the grung and can speak Grung."
							]
						},
						{
							"name": "Green Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
							]
						},
						{
							"name": "Orange Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature is {frightened} of its allies."
							]
						},
						{
							"name": "Purple Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
							]
						},
						{
							"name": "Red Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature must use its action to eat if food is within reach."
							]
						}
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/grung.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"_versions": [
				{
					"name": "Grung (Blue)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature must make a loud noise at the start and end of its turn."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung (Gold)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The creature is {charmed} by the grung and can speak Grung."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung (Green)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung (Orange)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature is {frightened} of its allies."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung (Purple)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung (Red)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature must use its action to eat if food is within reach."
								]
							}
						}
					},
					"variant": null
				}
			]
		},
		{
			"name": "Grung Elite Warrior",
			"source": "MPMM",
			"page": 150,
			"otherSources": [
				{
					"source": "VGM",
					"page": 157
				}
			],
			"size": [
				"S"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 49,
				"formula": "9d6 + 18"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 7,
			"dex": 16,
			"con": 15,
			"int": 10,
			"wis": 11,
			"cha": 12,
			"save": {
				"dex": "+5"
			},
			"skill": {
				"athletics": "+2",
				"perception": "+2",
				"stealth": "+5",
				"survival": "+2"
			},
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Grung"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The grung can breathe air and water."
					]
				},
				{
					"name": "Poisonous Skin",
					"entries": [
						"Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a {12} Constitution saving throw or become {poisoned} for 1 minute. A {poisoned} creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
					]
				},
				{
					"name": "Water Dependency",
					"entries": [
						"If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of {exhaustion} at the end of that day. The grung can recover from this {exhaustion} only through magic or by immersing itself in water for at least 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +5} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage plus 5 (2d4}) poison damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+5} to hit, range 80/320 ft., one target. 6 (1d6 + 3}) piercing damage plus 5 (2d4}) poison damage."
					]
				},
				{
					"name": "Mesmerizing Chirr {Recharge -}",
					"entries": [
						"The grung makes a chirring noise to which grungs are immune. Each Humanoid or Beast that is within 15 feet of the grung and able to hear it must succeed on a {12} Wisdom saving throw or be {stunned} until the end of the grung's next turn."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Grung Poison",
					"entries": [
						"A creature {poisoned} by a grung can suffer an additional effect that depends on the grung's color, as described below. This effect lasts until the creature is no longer {poisoned} by the grung.",
						{
							"name": "Blue Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature must make a loud noise at the start and end of its turn."
							]
						},
						{
							"name": "Gold Grung",
							"type": "entries",
							"entries": [
								"The creature is {charmed} by the grung and can speak Grung."
							]
						},
						{
							"name": "Green Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
							]
						},
						{
							"name": "Orange Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature is {frightened} of its allies."
							]
						},
						{
							"name": "Purple Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
							]
						},
						{
							"name": "Red Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature must use its action to eat if food is within reach."
							]
						}
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/grung-elite-warrior.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"charmed",
				"frightened",
				"poisoned",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"_versions": [
				{
					"name": "Grung Elite Warrior (Blue)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature must make a loud noise at the start and end of its turn."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Elite Warrior (Gold)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The creature is {charmed} by the grung and can speak Grung."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Elite Warrior (Green)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Elite Warrior (Orange)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature is {frightened} of its allies."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Elite Warrior (Purple)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Elite Warrior (Red)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature must use its action to eat if food is within reach."
								]
							}
						}
					},
					"variant": null
				}
			]
		},
		{
			"name": "Grung Wildling",
			"source": "MPMM",
			"page": 150,
			"otherSources": [
				{
					"source": "VGM",
					"page": 157
				}
			],
			"size": [
				"S"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d6 + 10"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 7,
			"dex": 16,
			"con": 15,
			"int": 10,
			"wis": 15,
			"cha": 11,
			"save": {
				"dex": "+5"
			},
			"skill": {
				"athletics": "+2",
				"perception": "+4",
				"stealth": "+5",
				"survival": "+4"
			},
			"passive": 14,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Grung"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The grung casts one of the following spells, using Wisdom as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ druidcraft}"
					],
					"daily": {
						"2": [
							"{ plant growth}"
						],
						"3e": [
							"{ cure wounds}",
							"{ spike growth}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The grung can breathe air and water."
					]
				},
				{
					"name": "Poisonous Skin",
					"entries": [
						"Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a {12} Constitution saving throw or become {poisoned} for 1 minute. A {poisoned} creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
					]
				},
				{
					"name": "Water Dependency",
					"entries": [
						"If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of {exhaustion} at the end of that day. The grung can recover from this {exhaustion} only through magic or by immersing itself in water for at least 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +5} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage plus 5 (2d4}) poison damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+5} to hit, range 80/320 ft., one target. 6 (1d6 + 3}) piercing damage plus 5 (2d4}) poison damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Grung Poison",
					"entries": [
						"A creature {poisoned} by a grung can suffer an additional effect that depends on the grung's color, as described below. This effect lasts until the creature is no longer {poisoned} by the grung.",
						{
							"name": "Blue Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature must make a loud noise at the start and end of its turn."
							]
						},
						{
							"name": "Gold Grung",
							"type": "entries",
							"entries": [
								"The creature is {charmed} by the grung and can speak Grung."
							]
						},
						{
							"name": "Green Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
							]
						},
						{
							"name": "Orange Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature is {frightened} of its allies."
							]
						},
						{
							"name": "Purple Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
							]
						},
						{
							"name": "Red Grung",
							"type": "entries",
							"entries": [
								"The {poisoned} creature must use its action to eat if food is within reach."
							]
						}
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/grung-wildling.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P"
			],
			"damageTagsSpell": [
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"_versions": [
				{
					"name": "Grung Wildling (Blue)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature must make a loud noise at the start and end of its turn."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Wildling (Gold)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The creature is {charmed} by the grung and can speak Grung."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Wildling (Green)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Wildling (Orange)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature is {frightened} of its allies."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Wildling (Purple)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
								]
							}
						}
					},
					"variant": null
				},
				{
					"name": "Grung Wildling (Red)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "replaceArr",
							"replace": "Poisonous Skin",
							"items": {
								"name": "Poisonous Skin",
								"entries": [
									"A creature {poisoned} by a grung suffers an additional effect that depends on the grung's color. This effect lasts until the creature is no longer {poisoned} by the grung. The {poisoned} creature must use its action to eat if food is within reach."
								]
							}
						}
					},
					"variant": null
				}
			]
		},
		{
			"name": "Guard Drake",
			"source": "MPMM",
			"page": 151,
			"otherSources": [
				{
					"source": "HotDQ",
					"page": 91
				}
			],
			"size": [
				"M"
			],
			"type": "dragon",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 4,
			"wis": 10,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"understands Draconic but can't speak"
			],
			"cr": "2",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The guard drake makes one Bite attack and one Tail attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 7 (1d8 + 3}) piercing damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) bludgeoning damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Chromatic Drakes",
					"entries": [
						"Each type of chromatic dragon's scales creates a guard drake that resembles a wingless, stunted version of that type of dragon, with unique abilities related to that type. Each has the special features described below.",
						{
							"name": "Black Guard Drake",
							"type": "entries",
							"entries": [
								"The drake can breathe air and water, has a swimming speed of 30 feet, and has resistance to acid damage."
							]
						},
						{
							"name": "Blue Guard Drake",
							"type": "entries",
							"entries": [
								"The drake has a burrowing speed of 20 feet and resistance to lightning damage."
							]
						},
						{
							"name": "Green Guard Drake",
							"type": "entries",
							"entries": [
								"The drake can breathe air and water, has a swimming speed of 30 feet, and has resistance to poison damage."
							]
						},
						{
							"name": "Red Guard Drake",
							"type": "entries",
							"entries": [
								"The drake has climbing speed of 30 feet and resistance to fire damage."
							]
						},
						{
							"name": "White Guard Drake",
							"type": "entries",
							"entries": [
								"The drake has a burrowing speed of 20 feet, a climbing speed of 30 feet, and resistance to cold damage."
							]
						}
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"forest",
				"mountain",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/guard-drake.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"DR"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true,
			"_versions": [
				{
					"name": "Guard Drake (Black)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Amphibious",
								"entries": [
									"The drake can breathe air and water."
								]
							}
						}
					},
					"speed": {
						"walk": 30,
						"swim": 30
					},
					"resist": [
						"acid"
					],
					"variant": null
				},
				{
					"name": "Guard Drake (Blue)",
					"source": "MPMM",
					"speed": {
						"walk": 30,
						"burrow": 20
					},
					"resist": [
						"lightning"
					],
					"variant": null
				},
				{
					"name": "Guard Drake (Green)",
					"source": "MPMM",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Amphibious",
								"entries": [
									"The drake can breathe air and water."
								]
							}
						}
					},
					"speed": {
						"walk": 30,
						"swim": 30
					},
					"resist": [
						"poison"
					],
					"variant": null
				},
				{
					"name": "Guard Drake (Red)",
					"source": "MPMM",
					"speed": {
						"walk": 30,
						"climb": 30
					},
					"resist": [
						"fire"
					],
					"variant": null
				},
				{
					"name": "Guard Drake (White)",
					"source": "MPMM",
					"speed": {
						"walk": 30,
						"climb": 30,
						"burrow": 20
					},
					"resist": [
						"cold"
					],
					"variant": null
				}
			]
		},
		{
			"name": "Hadrosaurus",
			"source": "MPMM",
			"page": 96,
			"otherSources": [
				{
					"source": "VGM",
					"page": 140
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 11,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 19,
				"formula": "3d10 + 3"
			},
			"speed": {
				"walk": 40
			},
			"str": 15,
			"dex": 10,
			"con": 13,
			"int": 2,
			"wis": 10,
			"cha": 5,
			"skill": {
				"perception": "+2"
			},
			"passive": 12,
			"cr": "1/4",
			"action": [
				{
					"name": "Tail",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 7 (1d10 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"grassland",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hadrosaurus.mp3"
			},
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Hellfire Engine",
			"source": "MPMM",
			"page": 152,
			"otherSources": [
				{
					"source": "MTF",
					"page": 165
				}
			],
			"size": [
				"H"
			],
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 216,
				"formula": "16d12 + 112"
			},
			"speed": {
				"walk": 40
			},
			"str": 20,
			"dex": 16,
			"con": 24,
			"int": 2,
			"wis": 10,
			"cha": 1,
			"save": {
				"dex": "+8",
				"wis": "+5",
				"cha": "+0"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"cold",
				"psychic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"understands Infernal but can't speak"
			],
			"cr": "16",
			"trait": [
				{
					"name": "Immutable Form",
					"entries": [
						"The hellfire engine is immune to any spell or effect that would alter its form."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The hellfire engine has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The hellfire engine doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Flesh-Crushing Stride",
					"entries": [
						"The hellfire engine moves up to its speed in a straight line. During this move, it can enter Large or smaller creatures' spaces. A creature whose space the hellfire engine enters must make a {18} Dexterity saving throw. On a successful save, the creature is pushed to the nearest space out of the hellfire engine's path. On a failed save, the creature falls {prone} and takes 28 (8d6}) bludgeoning damage.",
						"If the hellfire engine remains in the {prone} creature's space, the creature is also {restrained} until it's no longer in the same space as the hellfire engine. While {restrained} in this way, the creature, or another creature within 5 feet of it, can make a {18} Strength check. On a success, the creature is shunted to an unoccupied space of its choice within 5 feet of the hellfire engine and is no longer {restrained}."
					]
				},
				{
					"name": "Hellfire Weapons",
					"entries": [
						"The hellfire engine uses one of the following options (choose one or roll a {@dice d6}):",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1\u20132: Bonemelt Sprayer",
									"type": "item",
									"entries": [
										"The hellfire engine spews acidic flame in a 60-foot cone. Each creature in the cone must make a {20} Dexterity saving throw, taking 11 (2d10}) fire damage plus 18 (4d8}) acid damage on a failed save, or half as much damage on a successful one. Creatures that fail the saving throw are drenched in burning acid and take 5 (1d10}) fire damage plus 9 (2d8}) acid damage at the end of their turns. An affected creature or another creature within 5 feet of it can take an action to scrape off the burning fuel."
									]
								},
								{
									"name": "3\u20134: Lightning Flail",
									"type": "item",
									"entries": [
										"{1d20+10} to hit, reach 15 ft., one creature. 18 (3d8 + 5}) bludgeoning damage plus 22 (5d8}) lightning damage. Up to three other creatures of the hellfire engine's choice that it can see within 30 feet of the target must each make a {20} Dexterity saving throw, taking 22 (5d8}) lightning damage on a failed save, or half as much damage on a successful one."
									]
								},
								{
									"name": "5\u20136: Thunder Cannon",
									"type": "item",
									"entries": [
										"The hellfire engine targets a point within 120 feet of it that it can see. Each creature within 30 feet of that point must make a {20} Dexterity saving throw, taking 27 (5d10}) bludgeoning damage plus 19 (3d12}) thunder damage on a failed save, or half as much damage on a successful one.",
										"If the chosen option kills a creature, the creature's soul rises from the River Styx as a {@creature lemure} in Avernus in {@dice 1d4} hours. If the creature isn't revived before then, only a { wish} spell or killing the {@creature lemure} and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect."
									]
								}
							]
						}
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hellfire-engine.mp3"
			},
			"traitTags": [
				"Immutable Form",
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"CS",
				"I"
			],
			"damageTags": [
				"A",
				"B",
				"F",
				"L",
				"T"
			],
			"miscTags": [
				"AOE",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hobgoblin Devastator",
			"source": "MPMM",
			"page": 153,
			"otherSources": [
				{
					"source": "VGM",
					"page": 161
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fey",
				"tags": [
					"goblinoid"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "7d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 12,
			"con": 14,
			"int": 16,
			"wis": 13,
			"cha": 11,
			"skill": {
				"arcana": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"languages": [
				"Common",
				"Goblin"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The hobgoblin casts one of the following spells, using Intelligence as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ fireball}",
							"{ fly}",
							"{ fog cloud}",
							"{ gust of wind}",
							"{ lightning bolt}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Army Arcana",
					"entries": [
						"When the hobgoblin casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hobgoblin makes two Quarterstaff or Devastating Bolt attacks."
					]
				},
				{
					"name": "Quarterstaff",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 4 (1d6 + 1}) bludgeoning damage, or 5 (1d8 + 1}) bludgeoning damage if used with two hands, plus 13 (3d8}) force damage."
					]
				},
				{
					"name": "Devastating Bolt",
					"entries": [
						"{@atk rs} +5} to hit, range 60 ft., one target. 21 (4d8 + 3}) force damage, and the target is knocked {prone}."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hobgoblin-devastator.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GO"
			],
			"damageTags": [
				"B",
				"O"
			],
			"damageTagsSpell": [
				"F",
				"L"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hobgoblin Iron Shadow",
			"source": "MPMM",
			"page": 154,
			"otherSources": [
				{
					"source": "VGM",
					"page": 162
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fey",
				"tags": [
					"goblinoid"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"Unarmored Defense"
					]
				}
			],
			"hp": {
				"average": 32,
				"formula": "5d8 + 10"
			},
			"speed": {
				"walk": 40
			},
			"str": 14,
			"dex": 16,
			"con": 15,
			"int": 14,
			"wis": 15,
			"cha": 11,
			"skill": {
				"acrobatics": "+5",
				"athletics": "+4",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Common",
				"Goblin"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The hobgoblin casts one of the following spells, using Intelligence as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ minor illusion}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ charm person}",
							"{ disguise self}",
							"{ silent image}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Unarmored Defense",
					"entries": [
						"While the hobgoblin is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hobgoblin makes four attacks, each of which can be an Unarmed Strike or a Dart attack. It can also use",
						"Shadow Jaunt once, either before or after one of the attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Dart",
					"entries": [
						"1d20+5} to hit, range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage."
					]
				},
				{
					"name": "Shadow Jaunt",
					"entries": [
						"The hobgoblin teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it leaves and its destination must be in dim light or darkness."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hobgoblin-iron-shadow.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GO"
			],
			"damageTags": [
				"B",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Howler",
			"source": "MPMM",
			"page": 155,
			"otherSources": [
				{
					"source": "MTF",
					"page": 210
				}
			],
			"size": [
				"L"
			],
			"type": "fiend",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 90,
				"formula": "12d10 + 24"
			},
			"speed": {
				"walk": 40
			},
			"str": 17,
			"dex": 16,
			"con": 15,
			"int": 5,
			"wis": 14,
			"cha": 6,
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"A howler has advantage on attack rolls against a creature if at least one of the howler's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The howler makes two Rending Bite attacks."
					]
				},
				{
					"name": "Rending Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 10 (2d6 + 3}) piercing damage, plus 22 (4d10}) psychic damage if the target is {frightened}. This attack ignores damage resistance."
					]
				},
				{
					"name": "Mind-Breaking Howl {Recharge - 4}",
					"entries": [
						"The howler emits a keening howl in a 60-foot cone. Each creature in that area must succeed on a {13} Wisdom saving throw or take 16 (3d10}) psychic damage and be {frightened} until the end of the howler's next turn. While a creature is {frightened} in this way, its speed is halved, and it is {incapacitated}. A target that successfully saves is immune to the Mind-Breaking Howl of all howlers for the next 24 hours."
					]
				}
			],
			"environment": [
				"desert",
				"grassland",
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/howler.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hungry Sorrowsworn",
			"source": "MPMM",
			"page": 223,
			"otherSources": [
				{
					"source": "MTF",
					"page": 232
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 225,
				"formula": "30d8 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 10,
			"con": 17,
			"int": 6,
			"wis": 11,
			"cha": 6,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "while in dim light or darkness",
					"cond": true
				}
			],
			"languages": [
				"Common"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Life Hunger",
					"entries": [
						"If a creature within 60 feet of the sorrowsworn regains hit points, the sorrowsworn gains two benefits until the end of its next turn: it has advantage on attack rolls, and its Bite deals an extra 22 (4d10}) necrotic damage on a hit."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sorrowsworn makes one Bite attack and one Claw attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 8 (1d8 + 4}) piercing damage plus 13 (3d8}) necrotic damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 18 (4d6 + 4}) slashing damage. If the target is Medium or smaller, it is {grappled} (escape {16}), and it is {restrained} until the grapple ends. While grappling a creature, the sorrowsworn can't make a Claw attack."
					]
				}
			],
			"environment": [
				"forest",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-hungry.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hutijin",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 157,
			"otherSources": [
				{
					"source": "MTF",
					"page": 175
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 200,
				"formula": "16d10 + 112"
			},
			"speed": {
				"walk": 30,
				"fly": 60
			},
			"str": 27,
			"dex": 15,
			"con": 25,
			"int": 23,
			"wis": 19,
			"cha": 25,
			"save": {
				"dex": "+9",
				"con": "+14",
				"wis": "+11"
			},
			"skill": {
				"intimidation": "+14",
				"perception": "+11"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 21,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "21",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Hutijin casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {22}):"
					],
					"will": [
						"{ alter self} (can become Medium when changing his appearance)",
						"{ detect magic}",
						"{ hold monster}",
						"{ invisibility} (self only)",
						"{ lightning bolt}",
						"{ suggestion}",
						"{ wall of fire}"
					],
					"daily": {
						"3": [
							"{ dispel magic}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Infernal Despair",
					"entries": [
						"Each creature within 30 feet of Hutijin that isn't a devil makes saving throws with disadvantage."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Hutijin fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Hutijin has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Hutijin regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Hutijin dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Hutijin makes one Bite attack, one Claw attack, one Mace attack, and one Tail attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+15} to hit, reach 5 ft., one target. 15 (2d6 + 8}) fire damage. The target must succeed on a {22} Constitution saving throw or become {poisoned}. While {poisoned} in this way, the target can't regain hit points, and it takes 10 (3d6}) poison damage at the start of each of its turns. The {poisoned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+15} to hit, reach 10 ft., one target. 17 (2d8 + 8}) cold damage."
					]
				},
				{
					"name": "Mace",
					"entries": [
						"{1d20+15} to hit, reach 5 ft., one target. 15 (2d6 + 8}) force damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{1d20+15} to hit, reach 10 ft., one target. 19 (2d10 + 8}) thunder damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Hutijin teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Fearful Voice {Recharge - 5}",
					"entries": [
						"In response to taking damage, Hutijin utters a dreadful word of power. Each creature within 30 feet of him that isn't a devil must succeed on a {22} Wisdom saving throw or become {frightened} of him for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that saves against this effect is immune to his Fearful Voice for 24 hours."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Hutijin makes one Claw, Mace, or Tail attack."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Hutijin uses Teleport."
					]
				},
				{
					"name": "Lightning Storm (Costs 2 Actions)",
					"entries": [
						"Hutijin releases lightning in a 30-foot radius, blocked only by total cover. All other creatures in that area must each make a {22} Dexterity saving throw, taking 18 (4d8}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hutijin.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"C",
				"F",
				"I",
				"L",
				"O",
				"T"
			],
			"damageTagsSpell": [
				"B",
				"F",
				"L",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"poisoned"
			],
			"conditionInflictSpell": [
				"invisible",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hydroloth",
			"source": "MPMM",
			"page": 158,
			"otherSources": [
				{
					"source": "MTF",
					"page": 249
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				15
			],
			"hp": {
				"average": 135,
				"formula": "18d8 + 54"
			},
			"speed": {
				"walk": 20,
				"swim": 40
			},
			"str": 12,
			"dex": 21,
			"con": 16,
			"int": 19,
			"wis": 10,
			"cha": 14,
			"skill": {
				"insight": "+4",
				"perception": "+4"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"cold",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"vulnerable": [
				"fire"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The hydroloth casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ darkness}",
						"{ detect magic}",
						"{ dispel magic}",
						"{ invisibility} (self only)"
					],
					"daily": {
						"3e": [
							"{ control water}",
							"{ crown of madness}",
							"{ fear}",
							"{ suggestion}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The hydroloth can breathe air and water."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The hydroloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Secure Memory",
					"entries": [
						"The hydroloth is immune to the waters of the River Styx, as well as any effect that would steal or modify its memories or detect or read its thoughts."
					]
				},
				{
					"name": "Watery Advantage",
					"entries": [
						"While submerged in liquid, the hydroloth has advantage on attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hydroloth makes two Bite or Claw attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 16 (2d10 + 5}) force damage plus 9 (2d10}) psychic damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target.  14 (2d8 + 5}) force damage plus 9 (2d10}) psychic damage."
					]
				},
				{
					"name": "Steal Memory (1/Day)",
					"entries": [
						"The hydroloth targets one creature it can see within 60 feet of it. The target takes 14 (4d6}) psychic damage, and it must make a {16} Intelligence saving throw. On a successful save, the target becomes immune to this hydroloth's Steal Memory for 24 hours. On a failed save, the target loses all proficiencies; it can't cast spells; it can't understand language; and if its Intelligence and Charisma scores are higher than 5, they become 5. Each time the target finishes a long rest, it can repeat the saving throw, ending the effect on itself on a success. A { greater restoration} or { remove curse} spell cast on the target ends this effect early."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The hydroloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hydroloth.mp3"
			},
			"traitTags": [
				"Amphibious",
				"Magic Resistance"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"damageTagsSpell": [
				"B"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Illusionist Wizard",
			"source": "MPMM",
			"page": 263,
			"otherSources": [
				{
					"source": "VGM",
					"page": 214
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 44,
				"formula": "8d8 + 8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 13,
			"int": 16,
			"wis": 11,
			"cha": 12,
			"save": {
				"int": "+5",
				"wis": "+2"
			},
			"skill": {
				"arcana": "+5",
				"history": "+5"
			},
			"passive": 10,
			"languages": [
				"any four languages"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The illusionist casts one of the following spells, using Intelligence as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage hand}",
						"{ minor illusion}"
					],
					"daily": {
						"2e": [
							"{ disguise self}",
							"{ invisibility}",
							"{ mage armor}",
							"{ major image}",
							"{ phantasmal force}",
							"{ phantom steed}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The illusionist makes two Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +5} to hit, reach 5 ft. or range 120 ft., one target. 14 (2d10 + 3}) psychic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Displacement {Recharge - 5}",
					"entries": [
						"The illusionist projects an illusion that makes the illusionist appear to be standing in a place a few inches from its actual location, causing any creature to have disadvantage on attack rolls against the illusionist. The effect lasts for 1 minute, and it ends early if the illusionist takes damage, if it is {incapacitated}, or if its speed becomes 0."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/illusionist.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"Y"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Juiblex",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 160,
			"otherSources": [
				{
					"source": "MTF",
					"page": 151
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 350,
				"formula": "28d12 + 168"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 24,
			"dex": 10,
			"con": 23,
			"int": 20,
			"wis": 20,
			"cha": 16,
			"save": {
				"dex": "+7",
				"con": "+13",
				"wis": "+12"
			},
			"skill": {
				"perception": "+12"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"acid",
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned",
				"unconscious"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "23",
				"lair": "24"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Juiblex casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save {20}):"
					],
					"will": [
						"{ detect magic}"
					],
					"daily": {
						"3e": [
							"{ contagion}",
							"{ gaseous form}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Foul",
					"entries": [
						"Any creature other than an Ooze that starts its turn within 10 feet of Juiblex must succeed on a {21} Constitution saving throw or be {poisoned} until the start of the creature's next turn."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Juiblex fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Juiblex has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Juiblex regains 20 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of its next turn. Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"Juiblex can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Juiblex makes three Acid Lash attacks."
					]
				},
				{
					"name": "Acid Lash",
					"entries": [
						"{@atk mw,rw} +14} to hit, reach 10 ft. or range 60/120 ft., one target. 21 (4d6 + 7}) acid damage. Any creature killed by this attack is drawn into Juiblex's body, where the corpse is dissolved after 1 minute."
					]
				},
				{
					"name": "Eject Slime {Recharge - 5}",
					"entries": [
						"Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 feet of it. The target must succeed on a {21} Dexterity saving throw or take 55 (10d10}) acid damage. Unless the target avoids taking all of this damage, any metal armor worn by the target takes a permanent \u22121 penalty to the AC it offers, and any metal weapon the target is carrying or wearing takes a permanent \u22121 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to \u22125, the object is destroyed. The penalty on an object can be removed by the { mending} spell."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Juiblex makes one Acid Lash attack."
					]
				},
				{
					"name": "Corrupting Touch (Costs 2 Actions)",
					"entries": [
						"{1d20+14} to hit, reach 10 ft., one creature. 21 (4d6 + 7}) poison damage, and the target is slimed. Until the slime is scraped off with an action, the target is {poisoned}, and any creature, other than an Ooze, is {poisoned} while within 10 feet of the target."
					]
				}
			],
			"legendaryGroup": {
				"name": "Juiblex",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration",
				"Spider Climb"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"I"
			],
			"damageTagsLegendary": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"conditionInflictLegendary": [
				"prone",
				"restrained"
			],
			"conditionInflictSpell": [
				"blinded",
				"poisoned",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ki-rin",
			"source": "MPMM",
			"page": 162,
			"otherSources": [
				{
					"source": "VGM",
					"page": 163
				}
			],
			"size": [
				"L"
			],
			"type": "celestial",
			"alignment": [
				"L",
				"G"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 153,
				"formula": "18d10 + 54"
			},
			"speed": {
				"walk": 60,
				"fly": {
					"number": 120,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 21,
			"dex": 16,
			"con": 16,
			"int": 19,
			"wis": 20,
			"cha": 20,
			"skill": {
				"perception": "+9",
				"insight": "+9",
				"religion": "+8"
			},
			"senses": [
				"darkvision 120 ft.",
				"truesight 30 ft."
			],
			"passive": 19,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The ki-rin casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ light}",
						"{ major image} (6th-level version)",
						"{ thaumaturgy}"
					],
					"daily": {
						"3e": [
							"{ cure wounds}",
							"{ dispel magic}",
							"{ lesser restoration}",
							"{ sending}"
						],
						"1e": [
							"{ banishment}",
							"{ calm emotions}",
							"{ create food and water}",
							"{ greater restoration}",
							"{ plane shift}",
							"{ protection from evil and good}",
							"{ revivify}",
							"{ wind walk}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the ki-rin fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The ki-rin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The ki-rin makes two Hoof attacks and one Horn attack, or it makes two Sacred Fire attacks."
					]
				},
				{
					"name": "Hoof",
					"entries": [
						"{1d20+9} to hit, reach 15 ft., one target. 10 (2d4 + 5}) force damage."
					]
				},
				{
					"name": "Horn",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 14 (2d8 + 5}) radiant damage."
					]
				},
				{
					"name": "Sacred Fire",
					"entries": [
						"{@atk rs} +9} to hit, range 120 ft., one target. 18 (3d8 + 5}) radiant damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Move",
					"entries": [
						"The ki-rin moves up to half its speed without provoking {@action opportunity attack||opportunity attacks}."
					]
				},
				{
					"name": "Smite",
					"entries": [
						"The ki-rin makes one Hoof, Horn, or Sacred Fire attack."
					]
				}
			],
			"legendaryGroup": {
				"name": "Ki-rin",
				"source": "MPMM"
			},
			"environment": [
				"coastal",
				"desert",
				"grassland",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ki-rin.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"SD",
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"O",
				"R"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kobold Dragonshield",
			"source": "MPMM",
			"page": 163,
			"otherSources": [
				{
					"source": "VGM",
					"page": 165
				}
			],
			"size": [
				"S"
			],
			"type": "dragon",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item leather armor|PHB|leather}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 44,
				"formula": "8d6 + 16"
			},
			"speed": {
				"walk": 20
			},
			"str": 12,
			"dex": 15,
			"con": 14,
			"int": 8,
			"wis": 9,
			"cha": 10,
			"skill": {
				"perception": "+1"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				{
					"special": "see Dragon's Resistance below"
				}
			],
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Dragon's Resistance",
					"entries": [
						"The kobold has resistance to a type of damage based on the color of dragon that invested it with power (choose or roll a {@dice d10}): 1\u20132, acid (black or copper); 3\u20134, cold (silver or white); 5\u20136, fire (brass, gold, or red); 7\u20138, lightning (blue or bronze); 9\u201310, poison (green)."
					]
				},
				{
					"name": "Heart of the Dragon",
					"entries": [
						"If the kobold is {frightened} or {paralyzed} by an effect that allows a saving throw, it can repeat the save at the start of its turn to end the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits from this trait (including the dragonshield) has advantage on its next attack roll."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kobold makes two Spear attacks."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} +3} to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d6 + 1}) piercing damage, or 5 (1d8 + 1}) piercing damage if used with two hands to make a melee attack."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kobold-dragonshield.mp3"
			},
			"traitTags": [
				"Pack Tactics",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DR"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kobold Inventor",
			"source": "MPMM",
			"page": 164,
			"otherSources": [
				{
					"source": "VGM",
					"page": 166
				}
			],
			"size": [
				"S"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 15,
			"con": 12,
			"int": 14,
			"wis": 10,
			"cha": 8,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"1d20+4} to hit, range 30/120 ft., one target. 4 (1d4 + 2}) bludgeoning damage."
					]
				},
				{
					"name": "Weapon Invention",
					"entries": [
						"The kobold uses one of the following options (choose one or roll a {@dice d8}); the kobold can use each one no more than once per day:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1: Acid",
									"entries": [
										"The kobold hurls a {@item acid (vial)|PHB|flask of acid}. 1d20+4} to hit, range 5/20 ft., one target. 7 (2d6}) acid damage."
									],
									"type": "item"
								},
								{
									"name": "2: Alchemist's Fire",
									"entries": [
										"The kobold throws a {@item Alchemist's Fire (flask)|PHB|flask of alchemist's fire}. 1d20+4} to hit, range 5/20 ft., one target. 2 (1d4}) fire damage at the start of each of the target's turns. The target can end this damage by using its action to make a {10} Dexterity check to extinguish the flames."
									],
									"type": "item"
								},
								{
									"name": "3: Basket of Centipedes",
									"entries": [
										"The kobold throws a small basket into a 5-foot-square space within 20 feet of it. A {@creature Swarm of Centipedes||swarm of insects (centipedes)} with 11 hit points emerges from the basket and rolls initiative. At the end of each of the swarm's turns, there's a {@chance 50|50 percent} chance that the swarm disperses."
									],
									"type": "item"
								},
								{
									"name": "4: Green Slime Pot",
									"entries": [
										"The kobold throws a clay pot full of green slime at the target, and it breaks open on impact. 1d20+4} to hit, range 5/20 ft., one target. 5 (1d10}) acid damage, and the target is covered in slime until a creature uses its action to scrape or wash the slime off. A target covered in the slime takes 5 (1d10}) acid damage at the start of each of its turns."
									],
									"type": "item"
								},
								{
									"name": "5: Rot Grub Pot",
									"entries": [
										"The kobold throws a clay pot into a 5-foot-square space within 20 feet of it, and it breaks open on impact. A {@creature swarm of rot grubs|MPMM} (in this book) emerges from the shattered pot and remains a hazard in that square."
									],
									"type": "item"
								},
								{
									"name": "6: Scorpion on a Stick",
									"entries": [
										"The kobold makes a melee attack with a {@creature scorpion} tied to the end of a 5-foot-long pole. {1d20+4} to hit, reach 5 ft., one target. 1 piercing damage, and the target must make a {9} Constitution saving throw, taking 4 (1d8}) poison damage on a failed save, or half as much damage on a successful one."
									],
									"type": "item"
								},
								{
									"name": "7: Skunk in a Cage",
									"entries": [
										"The kobold releases a skunk into an unoccupied space within 5 feet of it. The skunk has a walking speed of 20 feet, AC 10, 1 hit point, and no effective attacks. It rolls initiative and, on its turn, uses its action to spray musk at a random creature within 5 feet of it. The target must succeed on a {9} Constitution saving throw, or it retches and is {incapacitated} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that doesn't need to breathe or is immune to poison automatically succeeds on the saving throw. Once the skunk has sprayed its musk, it can't do so again until it finishes a short or long rest."
									],
									"type": "item"
								},
								{
									"name": "8: Wasp Nest in a Bag",
									"entries": [
										"The kobold throws a small bag into a 5-foot-square space within 20 feet of it. A {@creature Swarm of Wasps||swarm of insects (wasps)} with 11 hit points emerges from the bag and rolls initiative. At the end of each of the swarm's turns, there's a {@chance 50|50 percent} chance that the swarm disperses."
									],
									"type": "item"
								}
							]
						}
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"mountain",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kobold-inventor.mp3"
			},
			"traitTags": [
				"Pack Tactics",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"DR"
			],
			"damageTags": [
				"A",
				"B",
				"F",
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kobold Scale Sorcerer",
			"source": "MPMM",
			"page": 165,
			"otherSources": [
				{
					"source": "VGM",
					"page": 167
				}
			],
			"size": [
				"S"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d6 + 10"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 15,
			"con": 14,
			"int": 10,
			"wis": 9,
			"cha": 14,
			"skill": {
				"arcana": "+2",
				"medicine": "+1"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The kobold casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ charm person}",
							"{ fog cloud}",
							"{ levitate}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kobold makes two Dagger or Chromatic Bolt attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Chromatic Bolt",
					"entries": [
						"{@atk rs} +4} to hit, range 60 feet, one target. 9 (2d6 + 2}) of a type of the kobold's choice: acid, cold, fire, lightning, poison, or thunder."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"mountain",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kobold-scale-sorcerer.mp3"
			},
			"traitTags": [
				"Pack Tactics",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DR"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Korred",
			"source": "MPMM",
			"page": 166,
			"otherSources": [
				{
					"source": "VGM",
					"page": 168
				}
			],
			"size": [
				"S"
			],
			"type": "fey",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 93,
				"formula": "11d6 + 55"
			},
			"speed": {
				"walk": 30,
				"burrow": 30
			},
			"str": 23,
			"dex": 14,
			"con": 20,
			"int": 10,
			"wis": 15,
			"cha": 9,
			"skill": {
				"athletics": "+9",
				"perception": "+5",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft.",
				"tremorsense 120 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"languages": [
				"Dwarvish",
				"Gnomish",
				"Sylvan",
				"Terran",
				"Undercommon"
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The korred casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ commune with nature} (as an action)",
						"{ meld into stone}",
						"{ stone shape}"
					],
					"daily": {
						"1": [
							"{ Otto's irresistible dance}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Stone Camouflage",
					"entries": [
						"The korred has advantage on Dexterity ({@skill Stealth}) checks made to hide in rocky terrain."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The korred makes two Greatclub or Rock attacks."
					]
				},
				{
					"name": "Greatclub",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 10 (1d8 + 6}) bludgeoning damage, or 19 (3d8 + 6}) bludgeoning damage if the korred is on the ground."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"1d20+9} to hit, range 60/120 ft., one target. 10 (1d8 + 6}) bludgeoning damage, or 19 (3d8 + 6}) bludgeoning damage if the korred is on the ground."
					]
				}
			],
			"bonus": [
				{
					"name": "Command Hair",
					"entries": [
						"The korred has at least one 50-foot-long rope woven out of its hair. The korred commands one such rope within 30 feet of it to move up to 20 feet and entangle a Large or smaller creature that the korred can see. The target must succeed on a {13} Dexterity saving throw or become {grappled} by the rope (escape {13}). Until this grapple ends, the target is {restrained}. The korred can use a bonus action to release the target, which is also freed if the korred dies or becomes {incapacitated}.",
						"A rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at the start of each of the korred's turns while the rope has at least 1 hit point and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/korred.mp3"
			},
			"senseTags": [
				"SD",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"G",
				"S",
				"T",
				"U"
			],
			"damageTags": [
				"B"
			],
			"damageTagsSpell": [
				"B"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kraken Priest",
			"source": "MPMM",
			"page": 167,
			"otherSources": [
				{
					"source": "VGM",
					"page": 215
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 30,
				"swim": 30
			},
			"str": 12,
			"dex": 10,
			"con": 16,
			"int": 10,
			"wis": 15,
			"cha": 14,
			"skill": {
				"perception": "+5"
			},
			"passive": 15,
			"languages": [
				"any two languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The priest casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ command}",
						"{ create or destroy water}"
					],
					"daily": {
						"1": [
							"{ Evard's black tentacles}"
						],
						"3e": [
							"{ control water}",
							"{ darkness}",
							"{ water breathing}",
							"{ water walk}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The priest can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The priest makes two Thunderous Touch or Thunderbolt attacks."
					]
				},
				{
					"name": "Thunderous Touch",
					"entries": [
						"{1d20 +5} to hit, reach 5 ft., one target. 27 (5d10}) thunder damage."
					]
				},
				{
					"name": "Thunderbolt",
					"entries": [
						"{@atk rs} +5} to hit, range 60 ft., one target. 11 (2d10}) lightning damage plus 11 ({@dice 2d10}) thunder damage, and the target is knocked {prone}."
					]
				},
				{
					"name": "Voice of the Kraken (Recharges after a Short or Long Rest)",
					"entries": [
						"A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a {14} Wisdom saving throw or be {frightened} of the priest for 1 minute. A {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kraken-priest.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"L",
				"T"
			],
			"damageTagsSpell": [
				"B"
			],
			"spellcastingTags": [
				"O"
			],
			"conditionInflict": [
				"frightened",
				"prone"
			],
			"conditionInflictSpell": [
				"prone",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kruthik Hive Lord",
			"source": "MPMM",
			"page": 169,
			"otherSources": [
				{
					"source": "MTF",
					"page": 212
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 102,
				"formula": "12d10 + 36"
			},
			"speed": {
				"walk": 40,
				"burrow": 20,
				"climb": 40
			},
			"str": 19,
			"dex": 16,
			"con": 17,
			"int": 10,
			"wis": 14,
			"cha": 10,
			"skill": {
				"perception": "+8"
			},
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 18,
			"languages": [
				"Kruthik"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				},
				{
					"name": "Tunneler",
					"entries": [
						"The kruthik can burrow through solid rock at half its burrowing speed and leaves a 10-foot-diameter tunnel in its wake."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kruthik makes two Stab or Spike attacks."
					]
				},
				{
					"name": "Stab",
					"entries": [
						"{1d20+7} to hit, reach 10 ft., one target. 9 (1d10 + 4}) piercing damage."
					]
				},
				{
					"name": "Spike",
					"entries": [
						"1d20+6} to hit, range 30/120 ft., one target. 7 (1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Acid Spray {Recharge - 5}",
					"entries": [
						"The kruthik sprays acid in a 15-foot cone. Each creature in that area must make a {14} Dexterity saving throw, taking 22 (4d10}) acid damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kruthik-hive-lord.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"A",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Leucrotta",
			"source": "MPMM",
			"page": 170,
			"otherSources": [
				{
					"source": "VGM",
					"page": 169
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 67,
				"formula": "9d10 + 18"
			},
			"speed": {
				"walk": 50
			},
			"str": 18,
			"dex": 14,
			"con": 15,
			"int": 9,
			"wis": 12,
			"cha": 6,
			"skill": {
				"deception": "+2",
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"languages": [
				"Abyssal",
				"Gnoll"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Mimicry",
					"entries": [
						"The leucrotta can mimic Beast sounds and Humanoid voices. A creature that hears the sounds can tell they are imitations only with a successful {14} Wisdom ({@skill Insight}) check."
					]
				},
				{
					"name": "Stench",
					"entries": [
						"Any creature other than a leucrotta or gnoll that starts its turn within 5 feet of the leucrotta must succeed on a {12} Constitution saving throw or be {poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the Stench of all leucrottas for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The leucrotta makes one Bite attack and one Hooves attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d8 + 4}) piercing damage. If the leucrotta scores a critical hit, it rolls the damage dice three times, instead of twice."
					]
				},
				{
					"name": "Hooves",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 11 (2d6 + 4}) bludgeoning damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Kicking Retreat",
					"entries": [
						"Immediately after the leucrotta makes a Hooves attack, it takes the {@action Disengage} action."
					]
				}
			],
			"environment": [
				"desert",
				"grassland"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/leucrotta.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"OTH"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Leviathan",
			"source": "MPMM",
			"page": 171,
			"otherSources": [
				{
					"source": "MTF",
					"page": 198
				}
			],
			"size": [
				"G"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				17
			],
			"hp": {
				"average": 328,
				"formula": "16d20 + 160"
			},
			"speed": {
				"walk": 40,
				"swim": 120
			},
			"str": 27,
			"dex": 24,
			"con": 30,
			"int": 2,
			"wis": 18,
			"cha": 17,
			"save": {
				"wis": "+10",
				"cha": "+9"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned"
			],
			"cr": "20",
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the leviathan fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Partial Freeze",
					"entries": [
						"If the leviathan takes 50 cold damage or more during a single turn, the leviathan partially freezes; until the end of its next turn, its speeds are reduced to 20 feet, and it makes attack rolls with disadvantage."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The leviathan deals double damage to objects and structures."
					]
				},
				{
					"name": "Water Form",
					"entries": [
						"The leviathan can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The leviathan makes one Slam attack and one Tail attack."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+14} to hit, reach 20 ft., one target. 21 (2d12 + 8}) bludgeoning damage plus 13 (2d12}) acid damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{1d20+14} to hit, reach 20 ft., one target. 19 (2d10 + 8}) bludgeoning damage plus 10 (3d6}) acid damage."
					]
				},
				{
					"name": "Tidal Wave {Recharge -}",
					"entries": [
						"The leviathan magically creates a wave of water that extends from a point it can see within 120 feet of itself. The wave is up to 250 feet long, up to 250 feet tall, and up to 50 feet wide. Each creature in the wave must make a {24} Strength saving throw. On a failed save, a creature takes 45 (7d12}) bludgeoning damage and is knocked {prone}. On a successful save, a creature takes half as much damage and isn't knocked {prone}. The water spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 250 feet of it, and then it vanishes."
					]
				}
			],
			"legendary": [
				{
					"name": "Move",
					"entries": [
						"The leviathan moves up to its speed."
					]
				},
				{
					"name": "Slam (Costs 2 Actions)",
					"entries": [
						"The leviathan makes one Slam attack."
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/leviathan.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"A",
				"B",
				"C"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Lonely Sorrowsworn",
			"source": "MPMM",
			"page": 223,
			"otherSources": [
				{
					"source": "MTF",
					"page": 232
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 12,
			"con": 17,
			"int": 6,
			"wis": 11,
			"cha": 6,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "while in dim light or darkness",
					"cond": true
				}
			],
			"languages": [
				"Common"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Psychic Leech",
					"entries": [
						"At the start of each of the sorrowsworn's turns, each creature within 5 feet of it must succeed on a {15} Wisdom saving throw or take 10 (3d6}) psychic damage."
					]
				},
				{
					"name": "Thrives on Company",
					"entries": [
						"The sorrowsworn has advantage on attack rolls while it is within 30 feet of at least two other creatures. It otherwise has disadvantage on attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sorrowsworn makes one Harpoon Arm attack, and it uses Sorrowful Embrace."
					]
				},
				{
					"name": "Harpoon Arm",
					"entries": [
						"{1d20+7} to hit, reach 60 ft., one target. 21 (4d8 + 3}) piercing damage, and the target is {grappled} (escape {15}) if it is a Large or smaller creature. The sorrowsworn has two harpoon arms and can grapple up to two creatures at once."
					]
				},
				{
					"name": "Sorrowful Embrace",
					"entries": [
						"Each creature {grappled} by the sorrowsworn must make a {15} Wisdom saving throw, taking 18 (4d8}) psychic damage on a failed save, or half as much damage on a successful one. In either case, the sorrowsworn pulls each of those creatures up to 30 feet straight toward it."
					]
				}
			],
			"environment": [
				"coastal",
				"desert",
				"mountain",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-lonely.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Lost Sorrowsworn",
			"source": "MPMM",
			"page": 224,
			"otherSources": [
				{
					"source": "MTF",
					"page": 233
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 78,
				"formula": "12d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 12,
			"con": 15,
			"int": 6,
			"wis": 7,
			"cha": 5,
			"skill": {
				"athletics": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "while in dim light or darkness",
					"cond": true
				}
			],
			"languages": [
				"Common"
			],
			"cr": "7",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sorrowsworn makes two Arm Spike attacks."
					]
				},
				{
					"name": "Arm Spike",
					"entries": [
						"{1d20+6} to hit, reach 10 ft., one target. 14 (2d10 + 3}) piercing damage."
					]
				},
				{
					"name": "Embrace {Recharge - 4}",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 25 (4d10 + 3}) piercing damage, and the target is {grappled} (escape {14}) if it is a Medium or smaller creature. Until the grapple ends, the target is {frightened}, and it takes 27 (6d8}) psychic damage at the end of each of its turns. The sorrowsworn can grapple only one creature at a time."
					]
				}
			],
			"reaction": [
				{
					"name": "Tightening Embrace",
					"entries": [
						"If the sorrowsworn takes damage, the creature {grappled} by Embrace takes 18 (4d8}) psychic damage."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"forest",
				"mountain",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-lost.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Male Steeder",
			"source": "MPMM",
			"page": 231,
			"otherSources": [
				{
					"source": "MTF",
					"page": 238
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 12,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "2d8 + 4"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 15,
			"dex": 12,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 3,
			"skill": {
				"stealth": "+5",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"cr": "1/4",
			"trait": [
				{
					"name": "Extraordinary Leap",
					"entries": [
						"The distance of the steeder's long jumps is tripled; every foot of its walking speed that it spends on the jump allows it to jump 3 feet."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 6 (1d8 + 2}) piercing damage plus 4 (1d8}) poison damage."
					]
				},
				{
					"name": "Sticky Leg",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one Small or Tiny creature. The target is stuck to the steeder's leg and {grappled} (escape {12}). The steeder can have only one creature {grappled} at a time."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/male-steeder.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"SD"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Martial Arts Adept",
			"source": "MPMM",
			"page": 172,
			"otherSources": [
				{
					"source": "VGM",
					"page": 216
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"Unarmored Defense"
					]
				}
			],
			"hp": {
				"average": 60,
				"formula": "11d8 + 11"
			},
			"speed": {
				"walk": 40
			},
			"str": 11,
			"dex": 17,
			"con": 13,
			"int": 11,
			"wis": 16,
			"cha": 10,
			"skill": {
				"acrobatics": "+5",
				"insight": "+5",
				"stealth": "+5"
			},
			"passive": 13,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Unarmored Defense",
					"entries": [
						"While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The adept makes three Unarmed Strike attacks or five Dart attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 7 (1d8 + 3}) bludgeoning damage. Once per turn, the adept can cause one of the following additional effects (choose one or roll a {@dice d4}):",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1\u20132: Knock Down.",
									"entry": "The target must succeed on a {13} Dexterity saving throw or be knocked {prone}."
								},
								{
									"type": "item",
									"name": "3\u20134: Push.",
									"entry": "The target must succeed on a {13} Strength saving throw or be pushed up to 10 feet directly away from the adept."
								}
							]
						}
					]
				},
				{
					"name": "Dart",
					"entries": [
						"1d20+5} to hit, range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Deflect Missile",
					"entries": [
						"In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by {@dice 1d10 + 3}. If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/martial-arts-adept.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Marut",
			"source": "MPMM",
			"page": 173,
			"otherSources": [
				{
					"source": "MTF",
					"page": 213
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "construct",
				"tags": [
					"inevitable"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 432,
				"formula": "32d10 + 256"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 28,
			"dex": 12,
			"con": 26,
			"int": 19,
			"wis": 15,
			"cha": 18,
			"save": {
				"int": "+12",
				"wis": "+10",
				"cha": "+12"
			},
			"skill": {
				"insight": "+10",
				"intimidation": "+12",
				"perception": "+10"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 20,
			"resist": [
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"paralyzed",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"all but rarely speaks"
			],
			"cr": "25",
			"trait": [
				{
					"name": "Immutable Form",
					"entries": [
						"The marut is immune to any spell or effect that would alter its form."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the marut fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The marut has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The marut doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The marut makes two Unerring Slam attacks."
					]
				},
				{
					"name": "Unerring Slam",
					"entries": [
						"{@atk mw} automatic hit, reach 5 ft., one target. 60 force damage, and the target is pushed up to 5 feet away from the marut if it is Huge or smaller."
					]
				},
				{
					"name": "Blazing Edict {Recharge - 5}",
					"entries": [
						"Arcane energy emanates from the marut's chest in a 60-foot cube. Every creature in that area takes 45 radiant damage. Each creature that takes any of this damage must succeed on a {20} Wisdom saving throw or be {stunned} until the end of the marut's next turn."
					]
				},
				{
					"name": "Plane Shift (3/Day)",
					"entries": [
						"The marut casts { plane shift}, requiring no material components and using Intelligence as the spellcasting ability. The marut can cast the spell normally, or it can cast the spell on an unwilling creature it can see within 60 feet of it. If it uses the latter option, the targeted creature must succeed on a {20} Charisma saving throw or be banished to a teleportation circle in the Hall of Concordance in Sigil."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/marut.mp3"
			},
			"traitTags": [
				"Immutable Form",
				"Legendary Resistances",
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"XX"
			],
			"damageTags": [
				"O",
				"R"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Master Thief",
			"source": "MPMM",
			"page": 174,
			"otherSources": [
				{
					"source": "VGM",
					"page": 216
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 84,
				"formula": "13d8 + 26"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 18,
			"con": 14,
			"int": 11,
			"wis": 11,
			"cha": 12,
			"save": {
				"dex": "+7",
				"int": "+3"
			},
			"skill": {
				"acrobatics": "+7",
				"athletics": "+3",
				"perception": "+3",
				"sleight of hand": "+7",
				"stealth": "+7"
			},
			"passive": 13,
			"languages": [
				"any one language (usually Common) plus thieves' cant"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Evasion",
					"entries": [
						"If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw and only half damage if it fails, provided the thief isn't {incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The thief makes three Shortsword or Shortbow attacks."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage plus 3 (1d6}) poison damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+7} to hit, range 80/320 ft., one target. 7 (1d6 + 4}) piercing damage plus 3 (1d6}) poison damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Cunning Action",
					"entries": [
						"The thief takes the {@action Dash}, {@action Disengage}, or {@action Hide} action."
					]
				}
			],
			"reaction": [
				{
					"name": "Uncanny Dodge",
					"entries": [
						"The thief halves the damage that it takes from an attack that hits it. The thief must be able to see the attacker."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/master-thief.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"TC",
				"X"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Maurezhi",
			"source": "MPMM",
			"page": 175,
			"otherSources": [
				{
					"source": "MTF",
					"page": 133
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 88,
				"formula": "16d8 + 16"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 17,
			"con": 12,
			"int": 11,
			"wis": 12,
			"cha": 15,
			"skill": {
				"deception": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				"fire",
				"lightning",
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Elvish",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Assume Form",
					"entries": [
						"The maurezhi can assume the appearance of any Medium Humanoid it eats. It remains in this form for {@dice 1d6} days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The maurezhi has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The maurezhi makes one Bite attack and one Claw attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 14 (2d10 + 3}) piercing damage. If the target is a Humanoid, its Charisma score is reduced by {@dice 1d4}. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a {@creature ghoul}  unless it has been revived or its corpse has been destroyed."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 12 (2d8 + 3}) slashing damage. If the target is a creature other than an Undead, it must succeed on a {12} Constitution saving throw or be {paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Raise Ghoul {Recharge - 5}",
					"entries": [
						"The maurezhi targets one dead ghoul or {@creature ghast} it can see within 30 feet of it. The target is revived with all its hit points."
					]
				}
			],
			"environment": [
				"swamp",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/maurezhi.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"E",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Maw Demon",
			"source": "MPMM",
			"page": 176,
			"otherSources": [
				{
					"source": "VGM",
					"page": 137
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 8,
			"con": 13,
			"int": 5,
			"wis": 8,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "1",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 11 (2d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Disgorge {Recharge -}",
					"entries": [
						"The demon vomits in a 15-foot cube. Each creature in that area must succeed on a {11} Dexterity saving throw or take 11 (2d10}) acid damage and fall {prone} in the spew."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/maw-demon.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"A",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Meazel",
			"source": "MPMM",
			"page": 177,
			"otherSources": [
				{
					"source": "MTF",
					"page": 214
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 35,
				"formula": "10d8 - 10"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 17,
			"con": 9,
			"int": 14,
			"wis": 13,
			"cha": 10,
			"skill": {
				"perception": "+3",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 13,
			"languages": [
				"Common"
			],
			"cr": "1",
			"action": [
				{
					"name": "Garrote",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target of the meazel's size or smaller. 6 (1d6 + 3}) bludgeoning damage, and the target is {grappled} (escape {13} with disadvantage). Until the grapple ends, the target takes 10 (2d6 + 3}) bludgeoning damage at the start of each of the meazel's turns. The meazel can't make weapon attacks while grappling a creature in this way."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage plus 3 (1d6}) necrotic damage"
					]
				},
				{
					"name": "Shadow Teleport {Recharge - 5}",
					"entries": [
						"The meazel, any equipment it is wearing or carrying, and any creature it is grappling teleport to an unoccupied space within 500 feet of it, provided that the starting space and the destination are in dim light or darkness. The destination must be a place the meazel has seen before, but it need not be within line of sight. If the destination space is occupied, the teleportation leads to the nearest unoccupied space.",
						"Any other creature the meazel teleports becomes cursed for 1 hour or until the curse is ended by { remove curse} or { greater restoration}. Until this curse ends, every Undead and every creature native to the Shadowfell within 300 feet of the cursed creature can sense it, which prevents that creature from hiding from them."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the meazel takes the {@action Hide} action."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"grassland",
				"hill",
				"mountain",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/meazel.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"B",
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Meenlock",
			"source": "MPMM",
			"page": 178,
			"otherSources": [
				{
					"source": "VGM",
					"page": 170
				}
			],
			"size": [
				"S"
			],
			"type": "fey",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 31,
				"formula": "7d6 + 7"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 15,
			"con": 12,
			"int": 11,
			"wis": 10,
			"cha": 8,
			"skill": {
				"perception": "+4",
				"stealth": "+6",
				"survival": "+2"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"telepathy 120 ft."
			],
			"cr": "2",
			"trait": [
				{
					"name": "Fear Aura",
					"entries": [
						"Any Beast or Humanoid that starts its turn within 10 feet of the meenlock must succeed on a {11} Wisdom saving throw or be {frightened} until the start of the creature's next turn."
					]
				},
				{
					"name": "Light Sensitivity",
					"entries": [
						"While in bright light, the meenlock has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 7 (2d4 + 2}) slashing damage, and the target must succeed on a {11} Constitution saving throw or be {paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Teleport {Recharge - 5}",
					"entries": [
						"The meenlock teleports to an unoccupied space within 30 feet of it, provided that both the space it's teleporting from and its destination are in dim light or darkness. The destination need not be within line of sight."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/meenlock.mp3"
			},
			"traitTags": [
				"Light Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Merregon",
			"source": "MPMM",
			"page": 179,
			"otherSources": [
				{
					"source": "MTF",
					"page": 166
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "6d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 17,
			"int": 6,
			"wis": 12,
			"cha": 8,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Infernal but can't speak",
				"telepathy 120 ft."
			],
			"cr": "4",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the merregon's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The merregon has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The merregon makes three Halberd attacks."
					]
				},
				{
					"name": "Halberd",
					"entries": [
						"{1d20+6} to hit, reach 10 ft., one target. 9 (1d10 + 4}) slashing damage."
					]
				},
				{
					"name": "Heavy Crossbow",
					"entries": [
						"1d20+4} to hit, range 100/400 ft., one target. 7 (1d10 + 2}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Loyal Bodyguard",
					"entries": [
						"When another Fiend within 5 feet of the merregon is hit by an attack roll, the merregon causes itself to be hit instead."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/merregon.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"I",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Merrenoloth",
			"source": "MPMM",
			"page": 180,
			"otherSources": [
				{
					"source": "MTF",
					"page": 250
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 30,
				"swim": 40
			},
			"str": 8,
			"dex": 17,
			"con": 10,
			"int": 17,
			"wis": 14,
			"cha": 11,
			"save": {
				"dex": "+5",
				"int": "+5"
			},
			"skill": {
				"history": "+5",
				"nature": "+5",
				"perception": "+4",
				"survival": "+4"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The merrenoloth casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ charm person}",
						"{ darkness}",
						"{ detect magic}",
						"{ dispel magic}",
						"{ gust of wind}"
					],
					"daily": {
						"3": [
							"{ control water}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The merrenoloth has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The merrenoloth makes one Oar attack and uses Fear Gaze."
					]
				},
				{
					"name": "Oar",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 8 (2d4 + 3}) fire damage."
					]
				},
				{
					"name": "Fear Gaze",
					"entries": [
						"The merrenoloth targets one creature it can see within 60 feet of it. The target must succeed on a {13} Wisdom saving throw or become {frightened} of the merrenoloth for 1 minute. The {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"bonus": [
				{
					"name": "Teleport",
					"entries": [
						"The merrenoloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"legendaryGroup": {
				"name": "Merrenoloth",
				"source": "MPMM"
			},
			"environment": [
				"coastal"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/merrenoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"F"
			],
			"damageTagsSpell": [
				"B"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictLegendary": [
				"prone"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Mindwitness",
			"source": "MPMM",
			"page": 181,
			"otherSources": [
				{
					"source": "VGM",
					"page": 176
				}
			],
			"size": [
				"L"
			],
			"type": "aberration",
			"alignment": [
				"L",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d10 + 20"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 20,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 10,
			"dex": 14,
			"con": 14,
			"int": 15,
			"wis": 15,
			"cha": 10,
			"save": {
				"int": "+5",
				"wis": "+5"
			},
			"skill": {
				"perception": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"conditionImmune": [
				"prone"
			],
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 600 ft."
			],
			"cr": "5",
			"trait": [
				{
					"name": "Telepathic Hub",
					"entries": [
						"When the mindwitness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mindwitness makes one Bite attack and one Tentacles attack, or it uses Eye Ray three times."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 16 (4d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Tentacles",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one creature. 20 (4d8 + 2}) psychic damage. If the target is Large or smaller, it is {grappled} (escape {13}), and it must succeed on a {13} Intelligence saving throw or be {restrained} until this grapple ends."
					]
				},
				{
					"name": "Eye Ray",
					"entries": [
						"The mindwitness shoots one magical eye ray at random (roll a {@dice d6}, and reroll if the ray has already been used this turn), choosing one target it can see within 120 feet of it:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1: Aversion Ray",
									"entries": [
										"The targeted creature must make a {13} Charisma saving throw. On a failed save, the target has disadvantage on attack rolls for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									],
									"type": "item"
								},
								{
									"name": "2: Fear Ray",
									"entries": [
										"The targeted creature must succeed on a {13} Wisdom saving throw or be {frightened} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									],
									"type": "item"
								},
								{
									"name": "3: Psychic Ray",
									"entries": [
										"The target must succeed on a {13} Intelligence saving throw or take 27 (6d8}) psychic damage."
									],
									"type": "item"
								},
								{
									"name": "4: Slowing Ray",
									"entries": [
										"The targeted creature must make a {13} Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn but not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									],
									"type": "item"
								},
								{
									"name": "5: Stunning Ray",
									"entries": [
										"The targeted creature must succeed on a {13} Constitution saving throw or be {stunned} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									],
									"type": "item"
								},
								{
									"name": "6: Telekinetic Ray",
									"entries": [
										"If the target is a creature, it must make a {13} Strength saving throw. On a failed save, the mindwitness moves it up to 30 feet in any direction, and it is {restrained} by the ray's telekinetic grip until the start of the mindwitness's next turn or until the mindwitness is {incapacitated}.",
										"If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is telekinetically moved up to 30 feet in any direction. The mindwitness can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container."
									],
									"type": "item"
								}
							]
						}
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/mindwitness.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"restrained",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Moloch",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 183,
			"otherSources": [
				{
					"source": "MTF",
					"page": 177
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 253,
				"formula": "22d10 + 132"
			},
			"speed": {
				"walk": 30
			},
			"str": 26,
			"dex": 19,
			"con": 22,
			"int": 21,
			"wis": 18,
			"cha": 23,
			"save": {
				"dex": "+11",
				"con": "+13",
				"wis": "+11",
				"cha": "+13"
			},
			"skill": {
				"deception": "+13",
				"intimidation": "+13",
				"perception": "+11"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 21,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "21",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Moloch casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {21}):"
					],
					"will": [
						"{ alter self} (can become Medium when changing his appearance)",
						"{ confusion}",
						"{ detect magic}",
						"{ fly}",
						"{ major image}",
						"{ stinking cloud}",
						"{ suggestion}",
						"{ wall of fire}"
					],
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Moloch fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Moloch has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Moloch regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Moloch dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Moloch makes one Bite attack, one Claw attack, and one Many-Tailed Whip attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+15} to hit, reach 5 ft., one target. 26 (4d8 + 8}) fire damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+15} to hit, reach 10 ft., one target. 17 (2d8 + 8}) force damage."
					]
				},
				{
					"name": "Many-Tailed Whip",
					"entries": [
						"{1d20+15} to hit, reach 30 ft., one target. 13 (2d4 + 8}) lightning damage plus 11 (2d10}) thunder damage. If the target is a creature, it must succeed on a {24} Strength saving throw or be pulled up to 30 feet in a straight line toward Moloch."
					]
				},
				{
					"name": "Breath of Despair {Recharge - 5}",
					"entries": [
						"Moloch exhales in a 30-foot cube. Each creature in that area must succeed on a {21} Wisdom saving throw or take 27 (5d10}) psychic damage, drop whatever it is holding, and become {frightened} of Moloch for 1 minute. While {frightened} in this way, a creature must take the {@action Dash} action and move away from Moloch by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the {@action Dash} action. If the creature ends its turn in a location where it doesn't have line of sight to Moloch, the creature can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Moloch teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Moloch makes one Bite, Claw, or Many-Tailed Whip attack."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Moloch uses Teleport."
					]
				},
				{
					"name": "Cast a Spell (Costs 2 Actions)",
					"entries": [
						"Moloch uses Spellcasting."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/moloch.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Breath Weapon",
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"F",
				"L",
				"O",
				"T",
				"Y"
			],
			"damageTagsSpell": [
				"B",
				"F",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Molydeus",
			"source": "MPMM",
			"page": 184,
			"otherSources": [
				{
					"source": "MTF",
					"page": 134
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 216,
				"formula": "16d12 + 112"
			},
			"speed": {
				"walk": 40
			},
			"str": 28,
			"dex": 22,
			"con": 25,
			"int": 21,
			"wis": 24,
			"cha": 24,
			"save": {
				"str": "+16",
				"con": "+14",
				"wis": "+14",
				"cha": "+14"
			},
			"skill": {
				"perception": "+21"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 31,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"poisoned",
				"stunned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "21",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The molydeus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {22}):"
					],
					"will": [
						"{ dispel magic}",
						"{ polymorph}",
						"{ telekinesis}",
						"{ teleport}"
					],
					"daily": {
						"3": [
							"{ lightning bolt}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the molydeus fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The molydeus has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The molydeus makes one Demonic Weapon attack, one Snakebite attack, and one Wolf Bite attack."
					]
				},
				{
					"name": "Demonic Weapon",
					"entries": [
						"{1d20+16} to hit, reach 15 ft., one target. 35 (4d12 + 9}) force damage. If the target has at least one head and the molydeus rolled a 20 on the attack roll, the target is decapitated and dies if it can't survive without that head. A target is immune to this effect if it takes none of the damage, has legendary actions, or is Huge or larger. Such a creature takes an extra 27 (6d8}) force damage from the hit."
					]
				},
				{
					"name": "Snakebite",
					"entries": [
						"{1d20+16} to hit, reach 15 ft., one creature. 16 (2d6 + 9}) poison damage. The target must succeed on a {22} Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target transforms into a {@creature manes} if this reduces its hit point maximum to 0. This transformation can be ended only by a { wish} spell."
					]
				},
				{
					"name": "Wolf Bite",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 25 (3d10 + 9}) necrotic damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"The molydeus makes one Demonic Weapon or Snakebite attack."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The molydeus moves without provoking {@action opportunity attack||opportunity attacks}."
					]
				},
				{
					"name": "Cast a Spell (Costs 2 Actions)",
					"entries": [
						"The molydeus uses Spellcasting."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Demon Summoning",
					"entries": [
						"You can give a molydeus the ability to summon other demons.",
						{
							"name": "Summon Demon (1/Day)",
							"type": "entries",
							"entries": [
								"As an action, the molydeus has a {@chance 50|50 percent} chance of summoning its choice of {@dice 1d6} {@creature babau|MPMM|babaus}, {@dice 1d4} {@creature chasme||chasmes}, or one {@creature marilith}. A summoned demon appears in an unoccupied space within 60 feet of the molydeus, acts as an ally of the molydeus, and can't summon other demons. It remains for 1 minute, until it or the molydeus dies, or until the molydeus dismisses it as an action."
							]
						}
					],
					"_version": {
						"name": "Molydeus (Summoner)",
						"addHeadersAs": "action"
					}
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/molydeus.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"I",
				"N",
				"O"
			],
			"damageTagsSpell": [
				"L"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Morkoth",
			"source": "MPMM",
			"page": 186,
			"otherSources": [
				{
					"source": "VGM",
					"page": 177
				}
			],
			"size": [
				"L"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 165,
				"formula": "22d10 + 44"
			},
			"speed": {
				"walk": 25,
				"swim": 50
			},
			"str": 14,
			"dex": 14,
			"con": 14,
			"int": 20,
			"wis": 15,
			"cha": 13,
			"save": {
				"dex": "+6",
				"int": "+9",
				"wis": "+6"
			},
			"skill": {
				"arcana": "+9",
				"history": "+9",
				"perception": "+10",
				"stealth": "+6"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
			"passive": 20,
			"languages": [
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "11",
				"lair": "12"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The morkoth casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ detect magic}",
						"{ mage hand}"
					],
					"daily": {
						"3e": [
							"{ darkness}",
							"{ dimension door}",
							"{ dispel magic}",
							"{ lightning bolt}",
							"{ sending}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The morkoth can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The morkoth makes either two Bite attacks and one Tentacles attack or three Bite attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 9 (2d6 + 2}) slashing damage plus 10 (3d6}) psychic damage."
					]
				},
				{
					"name": "Tentacles",
					"entries": [
						"{1d20+6} to hit, reach 15 ft., one target. 15 (3d8 + 2}) bludgeoning damage, and the target is {grappled} (escape {14}) if it is a Large or smaller creature. Until this grapple ends, the target is {restrained} and takes 15 ({@dice 3d8 + 2}) bludgeoning damage at the start of each of its turns, and the morkoth can't use its tentacles on another target."
					]
				},
				{
					"name": "Hypnosis",
					"entries": [
						"The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a {17} Wisdom saving throw. On a failed save, the creature is {charmed} by the morkoth for 1 minute. While {charmed} in this way, the target tries to get as close to the morkoth as possible, using its actions to {@action Dash} until it is within 5 feet of the morkoth. A {charmed} target can repeat the saving throw at the end of each of its turns and whenever it takes damage, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature has advantage on saving throws against the morkoth's Hypnosis for 24 hours."
					]
				}
			],
			"reaction": [
				{
					"name": "Spell Reflection",
					"entries": [
						"If the morkoth makes a successful saving throw against a spell or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
					]
				}
			],
			"legendaryGroup": {
				"name": "Morkoth",
				"source": "MPMM"
			},
			"environment": [
				"coastal",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/morkoth.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"B",
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"B",
				"S",
				"Y"
			],
			"damageTagsSpell": [
				"L",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"charmed",
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Mouth of Grolantor",
			"source": "MPMM",
			"page": 187,
			"otherSources": [
				{
					"source": "VGM",
					"page": 149
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "giant",
				"tags": [
					"hill giant"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 105,
				"formula": "10d12 + 40"
			},
			"speed": {
				"walk": 50
			},
			"str": 21,
			"dex": 10,
			"con": 18,
			"int": 5,
			"wis": 7,
			"cha": 5,
			"skill": {
				"perception": "+1"
			},
			"passive": 11,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"Giant"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Mouth of Chaos",
					"entries": [
						"The giant is immune to the { confusion} spell.",
						"On each of its turns, the giant uses all its movement to move toward the nearest creature or whatever else it might perceive as food. Roll a {@dice d10} at the start of each of the giant's turns to determine its action for that turn:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1\u20133:",
									"entry": "The giant makes three Fist attacks against one random creature within reach. If no creatures are within reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn."
								},
								{
									"type": "item",
									"name": "4\u20135:",
									"entry": "The giant makes one Fist attack against each creature within reach. If no creatures are within reach, the giant makes one Fist attack against itself."
								},
								{
									"type": "item",
									"name": "6\u20137:",
									"entry": "The giant makes one Bite attack against one random creature within reach. If no other creatures are within reach, its eyes glaze over and it is {stunned} until the start of its next turn."
								},
								{
									"type": "item",
									"name": "8\u201310:",
									"entry": "The giant makes one Bite attack and two Fist attacks against one random creature within reach. If no creatures are within reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn."
								}
							]
						}
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one creature. 15 (3d6 + 5}) piercing damage, and the giant magically regains hit points equal to the damage dealt."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 18 (3d8 + 5}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/mouth-of-grolantor.mp3"
			},
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nabassu",
			"source": "MPMM",
			"page": 188,
			"otherSources": [
				{
					"source": "MTF",
					"page": 135
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 190,
				"formula": "20d8 + 100"
			},
			"speed": {
				"walk": 40,
				"fly": 60
			},
			"str": 22,
			"dex": 14,
			"con": 21,
			"int": 14,
			"wis": 15,
			"cha": 17,
			"save": {
				"str": "+11",
				"dex": "+7"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "15",
			"trait": [
				{
					"name": "Demonic Shadows",
					"entries": [
						"The nabassu darkens the area around its body in a 10-foot radius. Nonmagical light can't illuminate this area of dim light."
					]
				},
				{
					"name": "Devour Soul",
					"entries": [
						"A nabassu can eat the soul of a creature it has killed within the last hour, provided that creature is neither a Construct nor an Undead. The devouring requires the nabassu to be within 5 feet of the corpse for at least 10 minutes, after which it gains a number of Hit Dice (d8s) equal to half the creature's number of Hit Dice. Roll those dice, and increase the nabassu's hit points by the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its attacks deal an extra 3 (1d6}) damage on a hit. The nabassu retains these benefits for 6 days. A creature devoured by a nabassu can be restored to life only by a { wish} spell."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The nabassu has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The nabassu makes one Bite attack and one Claw attack, and it uses Soul-Stealing Gaze."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+11} to hit, reach 5 ft., one target. 38 (5d12 + 6}) necrotic damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+11} to hit, reach 5 ft., one target. 28 (4d10 + 6}) force damage."
					]
				},
				{
					"name": "Soul-Stealing Gaze",
					"entries": [
						"The nabassu targets one creature it can see within 30 feet of it. If the target isn't a Construct or an Undead, it must succeed on a {16} Charisma saving throw or take 13 (2d12}) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage dealt, and the nabassu regains hit points equal to half that amount. This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0, and if the target is a Humanoid, it immediately rises as a {@creature ghoul} under the nabassu's control."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nabassu.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"N",
				"O"
			],
			"miscTags": [
				"AOE",
				"HPR",
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nagpa",
			"source": "MPMM",
			"page": 189,
			"otherSources": [
				{
					"source": "MTF",
					"page": 215
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"wizard"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 203,
				"formula": "37d8 + 37"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 15,
			"con": 12,
			"int": 23,
			"wis": 18,
			"cha": 21,
			"save": {
				"int": "+12",
				"wis": "+10",
				"cha": "+11"
			},
			"skill": {
				"arcana": "+12",
				"deception": "+11",
				"history": "+12",
				"insight": "+10",
				"perception": "+10"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 20,
			"languages": [
				"Common plus up to five other languages"
			],
			"cr": "17",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The nagpa casts one of the following spells, using Intelligence as the spellcasting ability (spell save {20}):"
					],
					"will": [
						"{ detect magic}",
						"{ mage hand}",
						"{ message}",
						"{ minor illusion}"
					],
					"daily": {
						"2e": [
							"{ fireball}",
							"{ fly}",
							"{ hold person}",
							"{ suggestion}",
							"{ wall of fire}"
						],
						"1e": [
							"{ dominate person}",
							"{ etherealness}",
							"{ feeblemind}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The nagpa makes three Staff or Deathly Ray attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Staff",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 9 (2d6 + 2}) bludgeoning damage plus 24 (7d6}) necrotic damage."
					]
				},
				{
					"name": "Deathly Ray",
					"entries": [
						"{@atk rs} +12} to hit, range 120 ft., one target. 30 (7d6 + 6}) necrotic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Corruption",
					"entries": [
						"The nagpa targets one creature it can see within 90 feet of it. The target must make a {20} Charisma saving throw. An evil creature makes the save with disadvantage. On a failed save, the target is {charmed} by the nagpa until the start of the nagpa's next turn. On a successful save, the target becomes immune to the nagpa's Corruption for the next 24 hours."
					]
				},
				{
					"name": "Paralysis {Recharge - 6}",
					"entries": [
						"The nagpa forces each creature within 30 feet of it to make a {20} Wisdom saving throw, excluding Undead and Constructs. On a failed save, a target is {paralyzed} for 1 minute. A {paralyzed} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"coastal",
				"desert",
				"forest",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nagpa.mp3"
			},
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B",
				"N"
			],
			"damageTagsSpell": [
				"F",
				"O",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"paralyzed"
			],
			"conditionInflictSpell": [
				"charmed",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Narzugon",
			"source": "MPMM",
			"page": 190,
			"otherSources": [
				{
					"source": "MTF",
					"page": 167
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 20,
					"from": [
						"{@item plate armor|PHB}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 10,
			"con": 17,
			"int": 16,
			"wis": 14,
			"cha": 19,
			"save": {
				"dex": "+5",
				"con": "+8",
				"cha": "+9"
			},
			"skill": {
				"perception": "+12"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 22,
			"resist": [
				"acid",
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Common",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "13",
			"trait": [
				{
					"name": "Infernal Tack",
					"entries": [
						"The narzugon wears spurs that are part of {@item infernal tack|MTF}, which allow it to summon its {@creature nightmare} companion as an action."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The narzugon has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The narzugon makes three Hellfire Lance attacks. It also uses Infernal Command or Terrifying Command."
					]
				},
				{
					"name": "Hellfire Lance",
					"entries": [
						"{1d20+10} to hit, reach 10 ft., one target. 11 (1d12 + 5}) piercing damage plus 16 (3d10}) fire damage. If this damage kills a creature with a soul, the soul rises from the River Styx as a {@creature lemure} in Avernus in {@dice 1d4} hours. If the creature isn't revived before then, only a { wish} spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect."
					]
				},
				{
					"name": "Infernal Command",
					"entries": [
						"Each ally of the narzugon within 60 feet of it can't be {charmed} or {frightened} until the end of the narzugon's next turn."
					]
				},
				{
					"name": "Terrifying Command",
					"entries": [
						"Each creature within 60 feet of the narzugon that isn't a Fiend must succeed on a {17} Charisma saving throw or become {frightened} of the narzugon for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that makes a successful saving throw is immune to this narzugon's Terrifying Command for 24 hours."
					]
				},
				{
					"name": "Healing (1/Day)",
					"entries": [
						"The narzugon, or one creature it touches, regains 100 hit points."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/narzugon.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"I",
				"TP"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Necromancer Wizard",
			"source": "MPMM",
			"page": 264,
			"otherSources": [
				{
					"source": "VGM",
					"page": 217
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 110,
				"formula": "20d8 + 20"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 12,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+5"
			},
			"skill": {
				"arcana": "+7",
				"history": "+7"
			},
			"passive": 11,
			"resist": [
				"necrotic"
			],
			"languages": [
				"any four languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The necromancer casts one of the following spells, using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ dancing lights}",
						"{ mage hand}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ bestow curse}",
							"{ dimension door}",
							"{ mage armor}",
							"{ web}"
						],
						"1e": [
							"{ circle of death}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The necromancer makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +7} to hit, reach 5 ft. or range 120 ft., one target. 25 (4d10 + 3}) necrotic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Summon Undead (1/Day)",
					"entries": [
						"The necromancer magically summons five {@creature skeleton||skeletons} or {@creature zombie||zombies}. The summoned creatures appear in unoccupied spaces within 60 feet of the necromancer, whom they obey. They take their turns immediately after the necromancer. Each lasts for 1 hour, until it or the necromancer dies, or until the necromancer dismisses it as a bonus action."
					]
				}
			],
			"reaction": [
				{
					"name": "Grim Harvest (1/Turn)",
					"entries": [
						"When the necromancer kills a creature with necrotic damage, the necromancer regains 9 (2d8}) hit points. "
					]
				}
			],
			"environment": [
				"desert",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/necromancer.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"N"
			],
			"damageTagsSpell": [
				"F",
				"N",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Neogi",
			"source": "MPMM",
			"page": 192,
			"otherSources": [
				{
					"source": "VGM",
					"page": 180
				}
			],
			"size": [
				"S"
			],
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 33,
				"formula": "6d6 + 12"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 6,
			"dex": 16,
			"con": 14,
			"int": 13,
			"wis": 12,
			"cha": 15,
			"skill": {
				"intimidation": "+4",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Common",
				"Deep Speech",
				"Undercommon"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Mental Fortitude",
					"entries": [
						"The neogi has advantage on saving throws against being {charmed} or {frightened}, and magic can't put the neogi to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The neogi makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage plus 14 (4d6}) poison damage, and the target must succeed on a {12} Constitution saving throw or become {poisoned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 8 (2d4 + 3}) slashing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Enslave (Recharges after a Short or Long Rest)",
					"entries": [
						"The neogi targets one creature it can see within 30 feet of it. The target must succeed on a {14} Wisdom saving throw or be magically {charmed} by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The {charmed} target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the {charmed} target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neogi.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DS",
				"U"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Neogi Hatchling",
			"source": "MPMM",
			"page": 191,
			"otherSources": [
				{
					"source": "VGM",
					"page": 179
				},
				{
					"source": "SjA"
				}
			],
			"size": [
				"T"
			],
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				11
			],
			"hp": {
				"average": 7,
				"formula": "3d4"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 3,
			"dex": 13,
			"con": 10,
			"int": 6,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"cr": "1/8",
			"trait": [
				{
					"name": "Mental Fortitude",
					"entries": [
						"The neogi has advantage on saving throws against being {charmed} or {frightened}, and magic can't put the neogi to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 3 (1d4 + 1}) piercing damage plus 3 (1d6}) poison damage, and the target must succeed on a {10} Constitution saving throw or become {poisoned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neogi-hatchling.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Neogi Master",
			"source": "MPMM",
			"page": 192,
			"otherSources": [
				{
					"source": "VGM",
					"page": 180
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 71,
				"formula": "11d8 + 22"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 6,
			"dex": 16,
			"con": 14,
			"int": 16,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+3"
			},
			"skill": {
				"arcana": "+5",
				"deception": "+6",
				"intimidation": "+6",
				"perception": "+3",
				"persuasion": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 13,
			"languages": [
				"Common",
				"Deep Speech",
				"Undercommon",
				"telepathy 30 ft."
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The neogi casts one of the following spells, using Charisma as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ guidance}",
						"{ mage hand}",
						"{ minor illusion}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ dimension door}",
							"{ hold person}",
							"{ hunger of Hadar}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the neogi's {@sense darkvision}."
					]
				},
				{
					"name": "Mental Fortitude",
					"entries": [
						"The neogi has advantage on saving throws against being {charmed} or {frightened}, and magic can't put the neogi to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The neogi makes one Bite attack and one Claw attack, or it makes two Tentacle of Hadar attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage plus 14 (4d6}) poison damage, and the target must succeed on a {12} Constitution saving throw or become {poisoned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 8 (2d4 + 3}) piercing damage."
					]
				},
				{
					"name": "Tentacle of Hadar",
					"entries": [
						"{@atk rs} +6} to hit, range 120 ft., one target. 14 (3d6 + 4}) necrotic damage, and the target can't take reactions until the end of the neogi's next turn, as a spectral tentacle clings to the target."
					]
				}
			],
			"bonus": [
				{
					"name": "Enslave (Recharges after a Short or Long Rest)",
					"entries": [
						"The neogi targets one creature it can see within 30 feet of it. The target must succeed on a {14} Wisdom saving throw or be magically {charmed} by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The {charmed} target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the {charmed} target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neogi-master.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Spider Climb"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"I",
				"N",
				"P"
			],
			"damageTagsSpell": [
				"A",
				"C",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"poisoned"
			],
			"conditionInflictSpell": [
				"blinded",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Neothelid",
			"source": "MPMM",
			"page": 193,
			"otherSources": [
				{
					"source": "VGM",
					"page": 181
				}
			],
			"size": [
				"G"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 232,
				"formula": "15d20 + 75"
			},
			"speed": {
				"walk": 30
			},
			"str": 27,
			"dex": 7,
			"con": 21,
			"int": 3,
			"wis": 16,
			"cha": 12,
			"save": {
				"int": "+1",
				"wis": "+8",
				"cha": "+6"
			},
			"senses": [
				"blindsight 120 ft. (blind beyond this radius)"
			],
			"passive": 13,
			"cr": "13",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The neothelid casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ levitate}"
					],
					"daily": {
						"1e": [
							"{ confusion}",
							"{ feeblemind}",
							"{ telekinesis}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Creature Sense",
					"entries": [
						"The neothelid is aware of the presence of creatures within 1 mile of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it. A creature protected by a { mind blank} spell, a { nondetection} spell, or similar magic can't be perceived in this manner."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The neothelid has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Tentacles",
					"entries": [
						"{1d20+13} to hit, reach 15 ft., one target. 21 (3d8 + 8}) bludgeoning damage plus 11 (2d10}) psychic damage. If the target is a Large or smaller creature, it must succeed on a {18} Strength saving throw or be swallowed by the neothelid. A swallowed creature is {blinded} and {restrained}, it has total cover against attacks and other effects outside the neothelid, and it takes 21 (6d6}) acid damage at the start of each of the neothelid's turns.",
						"If the neothelid takes 30 damage or more on a single turn from a creature inside it, the neothelid must succeed on a {18} Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall {prone} in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed creature is no longer {restrained} by it and can escape from the corpse by using 20 feet of movement, exiting {prone}."
					]
				},
				{
					"name": "Acid Breath {Recharge - 5}",
					"entries": [
						"The neothelid exhales acid in a 60- foot cone. Each creature in that area must make a {18} Dexterity saving throw, taking 35 (10d6}) acid damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neothelid.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Breath Weapon",
				"Swallow",
				"Tentacles"
			],
			"damageTags": [
				"A",
				"B",
				"Y"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"restrained"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nightwalker",
			"source": "MPMM",
			"page": 194,
			"otherSources": [
				{
					"source": "MTF",
					"page": 216
				}
			],
			"size": [
				"H"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 337,
				"formula": "25d12 + 175"
			},
			"speed": {
				"walk": 40,
				"fly": 40
			},
			"str": 22,
			"dex": 19,
			"con": 24,
			"int": 6,
			"wis": 9,
			"cha": 8,
			"save": {
				"con": "+13"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 9,
			"resist": [
				"acid",
				"cold",
				"fire",
				"lightning",
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"cr": "20",
			"trait": [
				{
					"name": "Annihilating Aura",
					"entries": [
						"Any creature that starts its turn within 30 feet of the nightwalker must succeed on a {21} Constitution saving throw or take 21 (6d6}) necrotic damage. Undead are immune to this aura."
					]
				},
				{
					"name": "Life Eater",
					"entries": [
						"A creature dies if reduced to 0 hit points by the nightwalker and can't be revived except by a { wish} spell."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The nightwalker doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The nightwalker makes two Enervating Focus attacks, one of which can be replaced by Finger of Doom, if available."
					]
				},
				{
					"name": "Enervating Focus",
					"entries": [
						"{1d20+12} to hit, reach 15 ft., one target. 28 (5d8 + 6}) necrotic damage. The target must succeed on a {21} Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Finger of Doom {Recharge -}",
					"entries": [
						"The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a {21} Wisdom saving throw or take 39 (6d12}) necrotic damage and become {frightened} until the end of the nightwalker's next turn. While {frightened} in this way, the creature is also {paralyzed}. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nightwalker.mp3"
			},
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"N"
			],
			"miscTags": [
				"HPR",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nilbog",
			"source": "MPMM",
			"page": 195,
			"otherSources": [
				{
					"source": "VGM",
					"page": 182
				}
			],
			"size": [
				"S"
			],
			"type": {
				"type": "fey",
				"tags": [
					"goblinoid"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 7,
				"formula": "2d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 10,
			"int": 10,
			"wis": 8,
			"cha": 15,
			"skill": {
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"languages": [
				"Common",
				"Goblin"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The nilbog casts one of the following spells, using Charisma as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ mage hand}",
						"{ Tasha's hideous laughter}"
					],
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Nilbogism",
					"entries": [
						"Any creature that attempts to damage the nilbog must first succeed on a {12} Charisma saving throw or be {charmed} until the end of the creature's next turn. A creature {charmed} in this way must use its action praising the nilbog.",
						"The nilbog can't regain hit points, including through magical healing, except through its Reversal of Fortune reaction."
					]
				}
			],
			"action": [
				{
					"name": "Fool's Scepter",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) bludgeoning damage."
					]
				},
				{
					"name": "Mocking Word",
					"entries": [
						"The nilbog targets one creature it can see within 60 feet of it. The target must succeed on a {12} Wisdom saving throw or take 5 (2d4}) psychic damage and have disadvantage on its next attack roll before the end of its next turn."
					]
				}
			],
			"bonus": [
				{
					"name": "Nimble Escape",
					"entries": [
						"The nilbog takes the {@action Disengage} or {@action Hide} action."
					]
				}
			],
			"reaction": [
				{
					"name": "Reversal of Fortune",
					"entries": [
						"In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains 3 ({@dice 1d6}) hit points."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nilbog.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GO"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"incapacitated",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nupperibo",
			"source": "MPMM",
			"page": 196,
			"otherSources": [
				{
					"source": "MTF",
					"page": 168
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 11,
				"formula": "2d8 + 2"
			},
			"speed": {
				"walk": 20
			},
			"str": 16,
			"dex": 11,
			"con": 13,
			"int": 3,
			"wis": 8,
			"cha": 1,
			"skill": {
				"perception": "+1"
			},
			"senses": [
				"blindsight 20 ft. (blind beyond this radius)"
			],
			"passive": 11,
			"resist": [
				"acid",
				"cold"
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Infernal but can't speak"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Cloud of Vermin",
					"entries": [
						"Any creature, other than a devil, that starts its turn within 20 feet of one or more nupperibos must succeed on a {11} Constitution saving throw or take 5 (2d4}) acid damage. A creature within the areas of two or more nupperibos makes the saving throw with disadvantage."
					]
				},
				{
					"name": "Driven Tracker",
					"entries": [
						"In the Nine Hells, the nupperibo can flawlessly track any creature that has taken damage from any nupperibo's Cloud of Vermin within the previous 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) piercing damage."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nupperibo.mp3"
			},
			"senseTags": [
				"B"
			],
			"languageTags": [
				"CS",
				"I"
			],
			"damageTags": [
				"A",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Oblex Spawn",
			"source": "MPMM",
			"page": 197,
			"otherSources": [
				{
					"source": "MTF",
					"page": 217
				}
			],
			"size": [
				"T"
			],
			"type": "ooze",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 18,
				"formula": "4d4 + 8"
			},
			"speed": {
				"walk": 20
			},
			"str": 8,
			"dex": 16,
			"con": 15,
			"int": 14,
			"wis": 11,
			"cha": 10,
			"save": {
				"int": "+4",
				"cha": "+2"
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this radius)"
			],
			"passive": 12,
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"prone"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The oblex can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Aversion to Fire",
					"entries": [
						"If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The oblex doesn't require sleep."
					]
				}
			],
			"action": [
				{
					"name": "Pseudopod",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) bludgeoning damage plus 2 (1d4}) psychic damage."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oblex-spawn.mp3"
			},
			"traitTags": [
				"Amorphous",
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ogre Battering Ram",
			"source": "MPMM",
			"page": 200,
			"otherSources": [
				{
					"source": "MTF",
					"page": 220
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 11,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 76,
				"formula": "9d10 + 27"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 8,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Siege Monster",
					"entries": [
						"The ogre deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The ogre makes two Bash attacks."
					]
				},
				{
					"name": "Bash",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 15 (2d10 + 4}) bludgeoning damage, and the ogre can push the target 5 feet away if the target is Huge or smaller."
					]
				}
			],
			"reaction": [
				{
					"name": "Block the Path",
					"entries": [
						"When a creature enters a space within 5 feet of the ogre, the ogre makes a Bash attack against that creature. If the attack hits, the target's speed is reduced to 0 until the start of the ogre's next turn."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-battering-ram.mp3"
			},
			"traitTags": [
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ogre Bolt Launcher",
			"source": "MPMM",
			"page": 200,
			"otherSources": [
				{
					"source": "MTF",
					"page": 220
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 12,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "2",
			"action": [
				{
					"name": "Fist",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 9 (2d4 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Bolt Launcher",
					"entries": [
						"1d20+3} to hit, range 120/480 ft., one target. 17 (3d10 + 1}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-bolt-launcher.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Ogre Chain Brute",
			"source": "MPMM",
			"page": 201,
			"otherSources": [
				{
					"source": "MTF",
					"page": 221
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 11,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 8,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "3",
			"action": [
				{
					"name": "Fist",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 9 (2d4 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Chain Smash {Recharge -}",
					"entries": [
						"{1d20+6} to hit, reach 10 ft., one target. 13 (2d8 + 4}) bludgeoning damage, and the target must make a {14} Constitution saving throw or be {stunned} for 1 minute. The target repeats the saving throw if it takes damage and at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Chain Sweep",
					"entries": [
						"The ogre swings its chain, and every creature within 10 feet of it must make a {14} Dexterity saving throw. On a failed saving throw, a creature takes 8 (1d8 + 4}) bludgeoning damage and is knocked {prone}. On a successful save, the creature takes half as much damage and isn't knocked {prone}."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-chain-brute.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Ogre Howdah",
			"source": "MPMM",
			"page": 201,
			"otherSources": [
				{
					"source": "MTF",
					"page": 221
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item breastplate|phb}, {@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 8,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Howdah",
					"entries": [
						"The ogre carries a compact fort on its back. Up to four Small creatures can ride in the fort without squeezing. To make a melee attack against a target within 5 feet of the ogre, they must use spears or weapons with reach. Creatures in the fort have three-quarters cover against attacks and effects from outside it. If the ogre dies, creatures in the fort are placed in unoccupied spaces within 5 feet of the ogre."
					]
				}
			],
			"action": [
				{
					"name": "Mace",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 11 (2d6 + 4}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-howdah.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Oinoloth",
			"source": "MPMM",
			"page": 202,
			"otherSources": [
				{
					"source": "MTF",
					"page": 251
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 119,
				"formula": "14d8 + 56"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 17,
			"con": 18,
			"int": 17,
			"wis": 16,
			"cha": 19,
			"save": {
				"con": "+8",
				"wis": "+7"
			},
			"skill": {
				"deception": "+8",
				"intimidation": "+8",
				"perception": "+7"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The oinoloth casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ darkness}",
						"{ detect magic}",
						"{ dispel magic}",
						"{ hold monster}",
						"{ invisibility} (self only)"
					],
					"daily": {
						"1e": [
							"{ feeblemind}",
							"{ globe of invulnerability}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The oinoloth has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The oinoloth makes two Claw attacks, and it uses Spellcasting or Teleport."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 14 (3d6 + 4}) slashing damage plus 22 (4d10}) necrotic damage."
					]
				},
				{
					"name": "Corrupted Healing {Recharge -}",
					"entries": [
						"The oinoloth touches one willing creature within 5 feet of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: {blinded}, {deafened}, {paralyzed}, or {poisoned}. The target then gains 1 level of {exhaustion}, and its hit point maximum is reduced by 7 ({@dice 2d6}). This reduction can be removed only by a { wish} spell or by casting { greater restoration} on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The oinoloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"bonus": [
				{
					"name": "Bringer of Plagues {Recharge - 5}",
					"entries": [
						"The oinoloth blights the area in a 30-foot-radius sphere centered on itself. The blight lasts for 24 hours. While the area is blighted, all normal plants there wither and die.",
						"Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a {16} Constitution saving throw. On a failed save, the creature takes 14 (4d6}) poison damage and is {poisoned}. On a successful save, the creature is immune to the oinoloth's Bringer of Plagues for the next 24 hours.",
						"The {poisoned} creature can't regain hit points. After every 24 hours that elapse, the {poisoned} creature can repeat the saving throw. On a failed save, the creature's hit point maximum is reduced by 5 (1d10}). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times."
					]
				}
			],
			"environment": [
				"desert",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oinoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"I",
				"N",
				"S"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"HPR",
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"conditionInflictSpell": [
				"invisible",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Orcus",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 204,
			"otherSources": [
				{
					"source": "MTF",
					"page": 153
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				},
				{
					"ac": 20,
					"from": [
						"with the {@item Wand of Orcus}"
					]
				}
			],
			"hp": {
				"average": 405,
				"formula": "30d12 + 210"
			},
			"speed": {
				"walk": 40,
				"fly": 40
			},
			"str": 27,
			"dex": 14,
			"con": 25,
			"int": 20,
			"wis": 20,
			"cha": 25,
			"save": {
				"dex": "+10",
				"con": "+15",
				"wis": "+13"
			},
			"skill": {
				"arcana": "+13",
				"perception": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"necrotic",
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "26",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Orcus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {23}):"
					],
					"will": [
						"{ detect magic}"
					],
					"daily": {
						"1": [
							"{ time stop}"
						],
						"3": [
							"{ dispel magic}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				},
				{
					"name": "Wand Spellcasting",
					"headerEntries": [
						"While holding the {@item Wand of Orcus}, Orcus casts one of the following spells (spell save {18}), some of which require charges; the wand has 7 charges to fuel these spells, and it regains {@dice 1d4 + 3} charges daily at dawn:"
					],
					"will": [
						"{ animate dead} (as an action)",
						"{ blight}",
						"{ speak with dead}"
					],
					"charges": {
						"1e": [
							"{ circle of death}",
							"{ finger of death}"
						],
						"2e": [
							"{ power word kill}"
						]
					},
					"chargesItem": "wand of orcus|dmg",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Orcus fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Orcus has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Master of Undeath",
					"entries": [
						"Orcus can cast { animate dead} (at will) and { create undead} (3/day). He chooses the level at which the spells are cast, and the creatures created by them remain under his control indefinitely. Additionally, he can cast { create undead} even when it isn't night."
					]
				},
				{
					"name": "Special Equipment",
					"entries": [
						"Orcus wields the {@item Wand of Orcus}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks."
					]
				},
				{
					"name": "Wand of Orcus",
					"entries": [
						"{1d20+19} to hit, reach 10 ft., one target. 24 (3d8 + 11}) bludgeoning damage plus 13 (2d12}) necrotic damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 21 (3d8 + 8}) force damage plus 9 (2d8}) poison damage."
					]
				},
				{
					"name": "Necrotic Bolt",
					"entries": [
						"{@atk rs} +15} to hit, range 120 ft., one target. 29 (5d8 + 7}) necrotic damage."
					]
				},
				{
					"name": "Conjure Undead (1/Day)",
					"entries": [
						"While holding the {@item Wand of Orcus}, Orcus conjures {@filter Undead creatures|bestiary|type=undead} whose combined average hit points don't exceed 500. These creatures magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action."
					]
				}
			],
			"legendaryHeader": [
				"Orcus can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Orcus regains spent legendary actions at the start of his turn."
			],
			"legendaryActions": 3,
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Orcus makes one Tail or Necrotic Bolt attack."
					]
				},
				{
					"name": "Creeping Death (Costs 2 Actions)",
					"entries": [
						"Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage."
					]
				}
			],
			"legendaryGroup": {
				"name": "Orcus",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"I",
				"N",
				"O"
			],
			"damageTagsSpell": [
				"N"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Orthon",
			"source": "MPMM",
			"page": 205,
			"otherSources": [
				{
					"source": "MTF",
					"page": 169
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|phb|half plate}"
					]
				}
			],
			"hp": {
				"average": 105,
				"formula": "10d10 + 50"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 22,
			"dex": 16,
			"con": 21,
			"int": 15,
			"wis": 15,
			"cha": 16,
			"save": {
				"dex": "+7",
				"con": "+9",
				"wis": "+6"
			},
			"skill": {
				"perception": "+10",
				"stealth": "+11",
				"survival": "+10"
			},
			"senses": [
				"darkvision 120 ft.",
				"truesight 30 ft."
			],
			"passive": 20,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"Common",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "10",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The orthon has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Infernal Dagger",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 11 (2d4 + 6}) force damage, and the target must make a {17} Constitution saving throw, taking 22 (4d10}) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is {poisoned} for 1 minute. The {poisoned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Brass Crossbow",
					"entries": [
						"1d20+7} to hit, range 100/400 ft., one target. 14 (2d10 + 3}) force damage. The target also suffers one of the following effects of the orthon's choice; the orthon can't use the same effect two rounds in a row:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Acid",
									"entry": "The target must make a {17} Constitution saving throw, taking an additional 17 (5d6}) acid damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "Blindness",
									"entry": "The target takes 5 (1d10}) radiant damage. In addition, the target and all other creatures within 20 feet of it must each make a successful {17} Dexterity saving throw or be {blinded} until the end of the orthon's next turn."
								},
								{
									"type": "item",
									"name": "Concussion",
									"entry": "The target and each creature within 20 feet of it must make a {17} Constitution saving throw, taking 13 (2d12}) thunder damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "Entanglement",
									"entry": "The target must make a successful {17} Dexterity saving throw or be {restrained} for 1 hour by strands of sticky webbing. The target can escape by taking an action to make a {17} Strength or Dexterity check and succeeding."
								},
								{
									"type": "item",
									"name": "Paralysis",
									"entry": "The target takes 22 (4d10}) lightning damage and must make a successful {17} Constitution saving throw or be {paralyzed} for 1 minute. The {paralyzed} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "Tracking",
									"entry": "For the next 24 hours, the orthon knows the direction and distance to the target, as long as it's on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there."
								}
							]
						}
					]
				}
			],
			"bonus": [
				{
					"name": "Invisibility Field {Recharge - 4}",
					"entries": [
						"The orthon becomes {invisible}. Any equipment it wears or carries is also {invisible} as long as the equipment is on its person. This invisibility ends immediately after it makes an attack roll or is hit by an attack roll."
					]
				}
			],
			"reaction": [
				{
					"name": "Explosive Retribution",
					"entries": [
						"In response to dropping to 15 hit points or fewer, the orthon explodes. All other creatures within 30 feet of it must each make a {17} Dexterity saving throw, taking 9 (2d8}) fire damage plus 9 (2d8}) thunder damage on a failed save, or half as much damage on a successful one. The orthon, its infernal dagger, and its brass crossbow are destroyed."
					]
				}
			],
			"environment": [
				"desert",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orthon.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD",
				"U"
			],
			"languageTags": [
				"C",
				"I",
				"TP"
			],
			"damageTags": [
				"A",
				"F",
				"I",
				"L",
				"O",
				"R",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW"
			],
			"conditionInflict": [
				"blinded",
				"paralyzed",
				"poisoned",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ox",
			"source": "MPMM",
			"page": 72,
			"otherSources": [
				{
					"source": "VGM",
					"page": 208
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "beast",
				"tags": [
					"cattle"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 15,
				"formula": "2d10 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 4,
			"passive": 10,
			"cr": "1/4",
			"trait": [
				{
					"name": "Beast of Burden",
					"entries": [
						"The ox is considered to be one size larger for the purpose of determining its carrying capacity."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage. If the ox moved at least 20 feet straight toward the target immediately before the hit, the target takes an extra 7 (2d6}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ox.mp3"
			},
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Phoenix",
			"source": "MPMM",
			"page": 206,
			"otherSources": [
				{
					"source": "MTF",
					"page": 199
				}
			],
			"size": [
				"G"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				18
			],
			"hp": {
				"average": 175,
				"formula": "10d20 + 70"
			},
			"speed": {
				"walk": 20,
				"fly": 120
			},
			"str": 19,
			"dex": 26,
			"con": 25,
			"int": 2,
			"wis": 21,
			"cha": 18,
			"save": {
				"wis": "+10",
				"cha": "+9"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned"
			],
			"cr": "16",
			"trait": [
				{
					"name": "Fiery Death and Rebirth",
					"entries": [
						"If the phoenix dies, it explodes. Each creature in 60-foot-radius sphere centered on the phoenix must make a {20} Dexterity saving throw, taking 22 (4d10}) fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried.",
						"The explosion destroys the phoenix's body and leaves behind an egg-shaped cinder, which weighs 5 pounds. The cinder deals 21 (6d6}) fire damage to any creature that touches it, though no more than once per round. The cinder is immune to all damage, and after {@dice 1d6} days, it hatches a new phoenix."
					]
				},
				{
					"name": "Fire Form",
					"entries": [
						"The phoenix can move through a space as narrow as 1 inch wide without squeezing.",
						"Any creature that touches the phoenix or hits it with a melee attack while within 5 feet of it takes 5 (1d10}) fire damage. In addition, the phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10}) fire damage.",
						"With a touch, the phoenix can also ignite flammable objects that aren't worn or carried (no action required)."
					]
				},
				{
					"name": "Flyby",
					"entries": [
						"The phoenix doesn't provoke {@action opportunity attack||opportunity attacks} when it flies out of an enemy's reach."
					]
				},
				{
					"name": "Illumination",
					"entries": [
						"The phoenix sheds bright light in a 60-foot radius and dim light for an additional 30 feet."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the phoenix fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The phoenix deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The phoenix makes two attacks: one Beak attack and one Fiery Talons attack."
					]
				},
				{
					"name": "Beak",
					"entries": [
						"{1d20+13} to hit, reach 15 ft., one target. 15 (2d6 + 8}) fire damage."
					]
				},
				{
					"name": "Fiery Talons",
					"entries": [
						"{1d20+13} to hit, reach 15 ft., one target. 17 (2d8 + 8}) fire damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Move",
					"entries": [
						"The phoenix moves up to its speed."
					]
				},
				{
					"name": "Peck",
					"entries": [
						"The phoenix makes one beak attack."
					]
				},
				{
					"name": "Swoop (Costs 2 Actions)",
					"entries": [
						"The phoenix moves up to its speed and makes one Fiery Talons attack."
					]
				}
			],
			"environment": [
				"desert",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/phoenix.mp3"
			},
			"traitTags": [
				"Flyby",
				"Illumination",
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"F"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Quetzalcoatlus",
			"source": "MPMM",
			"page": 96,
			"otherSources": [
				{
					"source": "VGM",
					"page": 140
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 30,
				"formula": "4d12 + 4"
			},
			"speed": {
				"walk": 10,
				"fly": 80
			},
			"str": 15,
			"dex": 13,
			"con": 13,
			"int": 2,
			"wis": 10,
			"cha": 5,
			"skill": {
				"perception": "+2"
			},
			"passive": 12,
			"cr": "2",
			"trait": [
				{
					"name": "Flyby",
					"entries": [
						"The quetzalcoatlus doesn't provoke an {@action opportunity attack} when it flies out of an enemy's reach."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 10 ft., one creature. 12 (3d6 + 2}) piercing damage. If the quetzalcoatlus flew least 30 feet toward the target immediately before the hit, the target takes an extra 10 (3d6}) piercing damage."
					]
				}
			],
			"environment": [
				"coastal",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/quetzalcoatlus.mp3"
			},
			"traitTags": [
				"Flyby"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Quickling",
			"source": "MPMM",
			"page": 207,
			"otherSources": [
				{
					"source": "VGM",
					"page": 187
				}
			],
			"size": [
				"T"
			],
			"type": "fey",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				16
			],
			"hp": {
				"average": 10,
				"formula": "3d4 + 3"
			},
			"speed": {
				"walk": 120
			},
			"str": 4,
			"dex": 23,
			"con": 13,
			"int": 10,
			"wis": 12,
			"cha": 7,
			"skill": {
				"acrobatics": "+8",
				"sleight of hand": "+8",
				"stealth": "+8",
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"languages": [
				"Common",
				"Sylvan"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Blurred Movement",
					"entries": [
						"Attack rolls against the quickling have disadvantage unless it is {incapacitated} or its speed is 0."
					]
				},
				{
					"name": "Evasion",
					"entries": [
						"If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw and only half damage if it fails, provided it isn't {incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The quickling makes three Dagger attacks."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +8} to hit, reach 5 ft. or range 20/60 ft., one target. 8 (1d4 + 6}) piercing damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/quickling.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"S"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Red Abishai",
			"source": "MPMM",
			"page": 40,
			"otherSources": [
				{
					"source": "MTF",
					"page": 160
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 289,
				"formula": "34d8 + 136"
			},
			"speed": {
				"walk": 30,
				"fly": 50
			},
			"str": 23,
			"dex": 16,
			"con": 19,
			"int": 14,
			"wis": 15,
			"cha": 19,
			"save": {
				"str": "+12",
				"con": "+10",
				"wis": "+8"
			},
			"skill": {
				"intimidation": "+10",
				"perception": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"frightened",
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "19",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes one Bite attack and one Claw attack, and it can use Frightful Presence or Incite Fanaticism."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+12} to hit, reach 5 ft., one target. 22 (3d10 + 6}) piercing damage plus 38 (7d10}) fire damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+12} to hit, reach 5 ft., one target. 17 (2d10 + 6}) force damage plus 11 (2d10}) fire damage."
					]
				},
				{
					"name": "Frightful Presence",
					"entries": [
						"Each creature of the abishai's choice that is within 120 feet and aware of the abishai must succeed on a {18} Wisdom saving throw or become {frightened} of it for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the abishai's Frightful Presence for the next 24 hours."
					]
				},
				{
					"name": "Incite Fanaticism",
					"entries": [
						"The abishai chooses up to four other creatures within 60 feet of it that can see it. Until the start of the abishai's next turn, each of those creatures makes attack rolls with advantage and can't be {frightened}."
					]
				},
				{
					"name": "Power of the Dragon Queen",
					"entries": [
						"The abishai targets one Dragon it can see within 120 feet of it. The Dragon must make a {18} Charisma saving throw. A chromatic dragon makes this save with disadvantage. On a successful save, the target is immune to the abishai's Power of the Dragon Queen for 1 hour. On a failed save, the target is {charmed} by the abishai for 1 hour. While {charmed} in this way, the target regards the abishai as a trusted friend to be heeded and protected. This effect ends if the abishai or its companions deal damage to the target."
					]
				}
			],
			"environment": [
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/red-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Frightful Presence",
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"F",
				"O",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Redcap",
			"source": "MPMM",
			"page": 208,
			"otherSources": [
				{
					"source": "VGM",
					"page": 188
				}
			],
			"size": [
				"S"
			],
			"type": "fey",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "6d6 + 24"
			},
			"speed": {
				"walk": 25
			},
			"str": 18,
			"dex": 13,
			"con": 18,
			"int": 10,
			"wis": 12,
			"cha": 9,
			"skill": {
				"athletics": "+6",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Common",
				"Sylvan"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Iron Boots",
					"entries": [
						"The redcap has disadvantage on Dexterity ({@skill Stealth}) checks."
					]
				},
				{
					"name": "Outsize Strength",
					"entries": [
						"While grappling, the redcap is considered to be Medium. Also, wielding a heavy weapon doesn't impose disadvantage on its attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The redcap makes three Wicked Sickle attacks."
					]
				},
				{
					"name": "Wicked Sickle",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 9 (2d4 + 4}) slashing damage."
					]
				},
				{
					"name": "Ironbound Pursuit",
					"entries": [
						"The redcap moves up to its speed to a creature it can see and kicks with its iron boots. The target must succeed on a {14} Dexterity saving throw or take 20 (3d10 + 4}) bludgeoning damage and be knocked {prone}."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/redcap.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"S"
			],
			"damageTags": [
				"B",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Retriever",
			"source": "MPMM",
			"page": 209,
			"otherSources": [
				{
					"source": "MTF",
					"page": 222
				}
			],
			"size": [
				"L"
			],
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 210,
				"formula": "20d10 + 100"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 22,
			"dex": 16,
			"con": 20,
			"int": 3,
			"wis": 11,
			"cha": 4,
			"save": {
				"dex": "+8",
				"con": "+10",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5",
				"stealth": "+8"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 15,
			"immune": [
				"necrotic",
				"poison",
				"psychic",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
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
				"understands Abyssal",
				"Elvish",
				"and Undercommon but can't speak"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The retriever casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save {13}):"
					],
					"daily": {
						"3e": [
							"{ plane shift} (only self and up to one incapacitated creature, which is considered willing for the spell)",
							"{ web}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Faultless Tracker",
					"entries": [
						"The retriever is given a quarry by its master. The quarry can be a specific creature or object the master is personally acquainted with, or it can be a general type of creature or object the master has seen before. The retriever knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The retriever can have only one such quarry at a time. The retriever also always knows the location of its master."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The retriever makes two Foreleg attacks, and it uses Force Beam or Paralyzing Beam, if available."
					]
				},
				{
					"name": "Foreleg",
					"entries": [
						"{1d20+11} to hit, reach 10 ft., one target. 15 (2d8 + 6}) slashing damage."
					]
				},
				{
					"name": "Force Beam",
					"entries": [
						"The retriever targets one creature it can see within 60 feet of it. The target must make a {16} Dexterity saving throw, taking 27 (5d10}) force damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Paralyzing Beam {Recharge - 5}",
					"entries": [
						"The retriever targets one creature it can see within 60 feet of it. The target must succeed on a {18} Constitution saving throw or be {paralyzed} for 1 minute. The {paralyzed} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
						"If the {paralyzed} creature is Medium or smaller, the retriever can pick it up as part of the retriever's move and walk or climb with it at full speed."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/retriever.mp3"
			},
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"CS",
				"E",
				"U"
			],
			"damageTags": [
				"O",
				"S"
			],
			"damageTagsSpell": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Rot Troll",
			"source": "MPMM",
			"page": 247,
			"otherSources": [
				{
					"source": "MTF",
					"page": 244
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 138,
				"formula": "12d10 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 13,
			"con": 22,
			"int": 5,
			"wis": 8,
			"cha": 4,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"immune": [
				"necrotic"
			],
			"languages": [
				"Giant"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Rancid Degeneration",
					"entries": [
						"At the end of each of the troll's turns, each creature within 5 feet of it takes 11 (2d10}) necrotic damage, unless the troll has taken acid or fire damage since the end of its last turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 9 (1d10 + 4}) piercing damage plus 16 (3d10}) necrotic damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 11 (2d6 + 4}) slashing damage plus 7 (2d6}) necrotic damage."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rot-troll.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Rutterkin",
			"source": "MPMM",
			"page": 210,
			"otherSources": [
				{
					"source": "MTF",
					"page": 136
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 37,
				"formula": "5d8 + 15"
			},
			"speed": {
				"walk": 20
			},
			"str": 14,
			"dex": 15,
			"con": 17,
			"int": 5,
			"wis": 12,
			"cha": 6,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Immobilizing Fear",
					"entries": [
						"When a creature that isn't a demon starts its turn within 30 feet of one or more rutterkins, that creature must make a {11} Wisdom saving throw. The creature has disadvantage on the save if it's within 30 feet of six or more rutterkins. On a failed save, the creature becomes {frightened} of the rutterkins for 1 minute. While {frightened} in this way, the creature is {restrained}. At the end of each of the {frightened} creature's turns, it can repeat the saving throw, ending the effect on itself on a success. On a successful save, the creature is immune to the Crippling Fear of all rutterkins for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 12 (3d6 + 2}) piercing damage. If the target is a creature, it must succeed on a {13} Constitution saving throw against disease or become {poisoned}. At the end of each long rest, the {poisoned} target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while {poisoned} in this way, it dies and instantly transforms into a living {@creature manes}. The transformation can be undone only by a { wish} spell."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rutterkin.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"poisoned",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sacred Statue",
			"source": "MPMM",
			"page": 114,
			"otherSources": [
				{
					"source": "MTF",
					"page": 194
				}
			],
			"size": [
				"L"
			],
			"type": "construct",
			"alignment": [
				{
					"special": "as the eidolon's alignment"
				}
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 95,
				"formula": "10d10 + 40"
			},
			"speed": {
				"walk": 25
			},
			"str": 19,
			"dex": 8,
			"con": 19,
			"int": 14,
			"wis": 19,
			"cha": 16,
			"save": {
				"wis": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"acid",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"the languages the {@creature eidolon|MPMM} knew in life"
			],
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"If the statue is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the statue move or act, that creature must succeed on a {18} Intelligence ({@skill Investigation}) check to discern that the statue isn't an object."
					]
				},
				{
					"name": "Ghostly Inhabitant",
					"entries": [
						"The {@creature eidolon|MPMM} that enters the statue remains inside it until the statue drops to 0 hit points, the eidolon uses a bonus action to move out of the statue, or the eidolon is turned or forced out by an effect such as the { dispel evil and good} spell. When the eidolon leaves the statue, it appears in an unoccupied space within 5 feet of the statue."
					]
				},
				{
					"name": "Inert",
					"entries": [
						"Without an {@creature eidolon|MPMM} inside, the statue is an object."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The statue doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The statue makes two Slam or Rock attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 43 (6d12 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"1d20+8} to hit, range 60 ft./240 ft., one target. 37 (6d10 + 4}) bludgeoning damage."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sacred-statue.mp3"
			},
			"traitTags": [
				"False Appearance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sea Spawn",
			"source": "MPMM",
			"page": 211,
			"otherSources": [
				{
					"source": "VGM",
					"page": 189
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 11,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 32,
				"formula": "5d8 + 10"
			},
			"speed": {
				"walk": 20,
				"swim": 30
			},
			"str": 15,
			"dex": 8,
			"con": 15,
			"int": 6,
			"wis": 10,
			"cha": 8,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"languages": [
				"understands Aquan and Common but can't speak"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Limited Amphibiousness",
					"entries": [
						"The sea spawn can breathe air and water, but it needs to be submerged in the sea at least once a day for 1 minute to avoid suffocating."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sea spawn makes two Unarmed Strike attacks and one Piscine Anatomy attack."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) bludgeoning damage."
					]
				},
				{
					"name": "Piscine Anatomy",
					"entries": [
						"The sea spawn uses one of the following options (choose one or roll a {@dice d6}):",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1\u20132: Bite",
									"type": "item",
									"entries": [
										"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) piercing damage."
									]
								},
								{
									"name": "3\u20134: Poison Quills",
									"type": "item",
									"entries": [
										"{1d20+4} to hit, reach 5 ft., one creature. 3 (1d6}) poison damage, and the target must succeed on a {12} Constitution saving throw or be {poisoned} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									]
								},
								{
									"name": "5\u20136: Tentacle",
									"type": "item",
									"entries": [
										"{1d20+4} to hit, reach 10 ft., one target. 5 (1d6 + 2}) bludgeoning damage, and the target is {grappled} (escape {12}) if it is a Medium or smaller creature. Until this grapple ends, the sea spawn can't use this tentacle on another target."
									]
								}
							]
						}
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sea-spawn.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ",
				"C",
				"CS"
			],
			"damageTags": [
				"B",
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shadar-kai Gloom Weaver",
			"source": "MPMM",
			"page": 213,
			"otherSources": [
				{
					"source": "MTF",
					"page": 224
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 104,
				"formula": "16d8 + 32"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 18,
			"con": 14,
			"int": 15,
			"wis": 12,
			"cha": 18,
			"save": {
				"dex": "+8",
				"con": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"immune": [
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion"
			],
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The shadar-kai casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ arcane eye}",
						"{ mage armor}",
						"{ minor illusion}",
						"{ prestidigitation}",
						"{ speak with dead}"
					],
					"daily": {
						"1e": [
							"{ arcane gate}",
							"{ bane}",
							"{ confusion}",
							"{ darkness}",
							"{ fear}",
							"{ major image}",
							"{ true seeing}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Burden of Time",
					"entries": [
						"Beasts and Humanoids (except elves) have disadvantage on saving throws while within 10 feet of the shadar-kai."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The shadar-kai has advantage on saving throws against being {charmed}, and magic can't put it to sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The shadar-kai makes three Shadow Spear attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Shadow Spear",
					"entries": [
						"{@atk mw,rw} +8} to hit, reach 5 ft. or range 30/120, one target. 7 (1d6 + 4}) piercing damage plus 26 (4d12}) necrotic damage. Hit or Miss: The spear magically returns to the shadar-kai's hand immediately after a ranged attack."
					]
				}
			],
			"reaction": [
				{
					"name": "Misty Escape {Recharge - 6}",
					"entries": [
						"When the shadar-kai takes damage, it turns {invisible} and teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see. It remains {invisible} until the start of its next turn or until it attacks or casts a spell."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gloom-weaver.mp3"
			},
			"traitTags": [
				"Fey Ancestry"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"N",
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflictSpell": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shadar-kai Shadow Dancer",
			"source": "MPMM",
			"page": 213,
			"otherSources": [
				{
					"source": "MTF",
					"page": 225
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 71,
				"formula": "13d8 + 13"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 16,
			"con": 13,
			"int": 11,
			"wis": 12,
			"cha": 12,
			"save": {
				"dex": "+6",
				"cha": "+4"
			},
			"skill": {
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion"
			],
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The shadar-kai has advantage on saving throws against being {charmed}, and magic can't put it to sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The shadar-kai makes three Spiked Chain attacks.",
						"It can use Shadow Jump after one of these attacks."
					]
				},
				{
					"name": "Spiked Chain",
					"entries": [
						"{1d20+6} to hit, reach 10 ft., one target. 10 (2d6 + 3}) piercing damage. The target must succeed on a {14} Dexterity saving throw or suffer one of the following effects (choose one or roll a {@dice d6}):",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"name": "1\u20132: Decay",
									"type": "item",
									"entries": [
										"The target takes 22 (4d10}) necrotic damage."
									]
								},
								{
									"name": "3\u20134: Grapple",
									"type": "item",
									"entries": [
										"The target is {grappled} (escape {14}) if it is a Medium or smaller creature. Until the grapple ends, the target is {restrained}, and the shadar-kai can't grapple another target."
									]
								},
								{
									"name": "5\u20136: Topple",
									"type": "item",
									"entries": [
										"The target is knocked {prone}."
									]
								}
							]
						}
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Jump",
					"entries": [
						"The shadar-kai teleports, along with any equipment is it wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness."
					]
				}
			],
			"environment": [
				"forest",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shadow-dancer.mp3"
			},
			"traitTags": [
				"Fey Ancestry"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"prone",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shadar-kai Soul Monger",
			"source": "MPMM",
			"page": 214,
			"otherSources": [
				{
					"source": "MTF",
					"page": 226
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|PHB|studded leather}"
					]
				}
			],
			"hp": {
				"average": 136,
				"formula": "21d8 + 42"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 17,
			"con": 14,
			"int": 19,
			"wis": 15,
			"cha": 13,
			"save": {
				"dex": "+7",
				"wis": "+7",
				"cha": "+5"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 17,
			"immune": [
				"necrotic",
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The shadar-kai casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {16}):"
					],
					"daily": {
						"1e": [
							"{ bestow curse}",
							"{ finger of death}",
							"{ gaseous form}",
							"{ seeming}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The shadar-kai has advantage on saving throws against being {charmed}, and magic can't put it to sleep."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The shadar-kai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Soul Thirst",
					"entries": [
						"When it reduces a creature to 0 hit points, the shadar-kai can gain temporary hit points equal to half the creature's hit point maximum. While the shadar-kai has temporary hit points from this trait, it has advantage on attack rolls."
					]
				},
				{
					"name": "Weight of Ages",
					"entries": [
						"Any Beast or Humanoid (except an elf) that starts its turn within 5 feet of the shadar-kai has its speed reduced by 20 feet until the start of that creature's next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The shadar-kai makes two Shadow Dagger attacks."
					]
				},
				{
					"name": "Shadow Dagger",
					"entries": [
						"{@atk mw,rw} +7} to hit, reach 5 ft. or range 20/60 ft., one target. 13 (4d4 + 3}) piercing damage plus 19 (3d12}) necrotic damage, and the target has disadvantage on saving throws until the end of the shadar-kai's next turn. Hit or Miss: The dagger magically returns to the shadar-kai's hand immediately after a ranged attack."
					]
				},
				{
					"name": "Wave of Weariness {Recharge - 4}",
					"entries": [
						"The shadar-kai emits weariness in a 60-foot cube. Each creature in that area must make a {16} Constitution saving throw. On a failed save, a creature takes 45 (10d8}) psychic damage and suffers 1 level of {exhaustion}. On a successful save, it takes half as much damage and doesn't gain a level of {exhaustion}."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/soul-monger.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"N",
				"P",
				"Y"
			],
			"damageTagsSpell": [
				"N"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"exhaustion"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shadow Mastiff",
			"source": "MPMM",
			"page": 215,
			"otherSources": [
				{
					"source": "VGM",
					"page": 190
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 40
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 5,
			"wis": 12,
			"cha": 5,
			"skill": {
				"perception": "+5",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks while in dim light or darkness",
					"cond": true
				}
			],
			"cr": "2",
			"trait": [
				{
					"name": "Ethereal Awareness",
					"entries": [
						"The shadow mastiff can see ethereal creatures and objects."
					]
				},
				{
					"name": "Sunlight Weakness",
					"entries": [
						"While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 10 (2d6 + 3}) piercing damage. If the target is a creature, it must succeed on a {13} Strength saving throw or be knocked {prone}."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Blend",
					"entries": [
						"While in dim light or darkness, the shadow mastiff becomes {invisible}, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is {incapacitated}."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shadow-mastiff.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shadow Mastiff Alpha",
			"source": "MPMM",
			"page": 215,
			"otherSources": [
				{
					"source": "VGM",
					"page": 190
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 44,
				"formula": "8d8 + 8"
			},
			"speed": {
				"walk": 40
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 6,
			"wis": 12,
			"cha": 5,
			"skill": {
				"perception": "+5",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks while in dim light or darkness",
					"cond": true
				}
			],
			"cr": "3",
			"trait": [
				{
					"name": "Ethereal Awareness",
					"entries": [
						"The shadow mastiff can see ethereal creatures and objects."
					]
				},
				{
					"name": "Sunlight Weakness",
					"entries": [
						"While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 10 (2d6 + 3}) piercing damage. If the target is a creature, it must succeed on a {13} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Terrifying Howl {Recharge -}",
					"entries": [
						"The shadow mastiff howls. Any Beast or Humanoid within 300 feet of it must succeed on a {11} Wisdom saving throw or be {frightened} of it for 1 minute. A {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's save is successful or the effect ends for it, the target is immune to any shadow mastiff's Terrifying Howl for the next 24 hours."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Blend",
					"entries": [
						"While in dim light or darkness, the shadow mastiff becomes {invisible}, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is {incapacitated}."
					]
				}
			],
			"environment": [
				"forest",
				"hill",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shadow-mastiff.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Shoosuva",
			"source": "MPMM",
			"page": 216,
			"otherSources": [
				{
					"source": "VGM",
					"page": 137
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 136,
				"formula": "16d10 + 48"
			},
			"speed": {
				"walk": 40
			},
			"str": 18,
			"dex": 13,
			"con": 17,
			"int": 7,
			"wis": 14,
			"cha": 9,
			"save": {
				"dex": "+4",
				"con": "+6",
				"wis": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Gnoll",
				"telepathy 120 ft."
			],
			"cr": "8",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The shoosuva makes one Bite attack and one Tail Stinger attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 26 (4d10 + 4}) piercing damage."
					]
				},
				{
					"name": "Tail Stinger",
					"entries": [
						"{1d20+7} to hit, reach 15 ft., one creature. 13 (2d8 + 4}) piercing damage, and the target must succeed on a {14} Constitution saving throw or become {poisoned}. While {poisoned} in this way, the target is also {paralyzed}. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"bonus": [
				{
					"name": "Rampage",
					"entries": [
						"When it reduces a creature to 0 hit points with a melee attack on its turn, the shoosuva can move up to half its speed and make one Bite attack."
					]
				}
			],
			"environment": [
				"coastal",
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shoosuva.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"OTH",
				"TP"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed",
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sibriex",
			"source": "MPMM",
			"page": 217,
			"otherSources": [
				{
					"source": "MTF",
					"page": 137
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "12d12 + 72"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 20,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 10,
			"dex": 3,
			"con": 23,
			"int": 25,
			"wis": 24,
			"cha": 25,
			"save": {
				"int": "+13",
				"cha": "+13"
			},
			"skill": {
				"arcana": "+13",
				"history": "+13",
				"perception": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 23,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "18",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The sibriex casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {21}):"
					],
					"will": [
						"{ command}",
						"{ dispel magic}",
						"{ hold monster}"
					],
					"daily": {
						"1": [
							"{ feeblemind}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Contamination",
					"entries": [
						"The sibriex emits an aura of corruption 30 feet in every direction. Vegetation withers in the aura, and the ground in the aura is {@quickref difficult terrain||3} for other creatures. Any creature that starts its turn in the aura must succeed on a {20} Constitution saving throw or take 14 (4d6}) poison damage. A creature that succeeds on the save is immune to this sibriex's Contamination for 24 hours."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the sibriex fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The sibriex has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sibriex makes three Chain attacks, and it uses Squirt Bile."
					]
				},
				{
					"name": "Chain",
					"entries": [
						"{1d20+13} to hit, reach 15 ft., one target. 20 (2d12 + 7}) force damage."
					]
				},
				{
					"name": "Squirt Bile",
					"entries": [
						"The sibriex targets one creature it can see within 120 feet of it. The target must succeed on a {20} Dexterity saving throw or take 31 (9d6}) acid damage."
					]
				},
				{
					"name": "Warp Creature",
					"entries": [
						"The sibriex targets up to three creatures it can see within 120 feet of it. Each target must make a {20} Constitution saving throw. On a successful save, a creature becomes immune to this sibriex's Warp Creature. On a failed save, the target is {poisoned}, which causes it to also gain 1 level of {exhaustion}. While {poisoned} in this way, the target must repeat the saving throw at the start of each of its turns. Three successful saves against the poison end it, and ending the poison removes any levels of {exhaustion} caused by it. Each failed save causes the target to gain another level of {exhaustion}. Once the target reaches 6 levels of {exhaustion}, it dies and instantly transforms into a living {@creature manes} under the sibriex's control. The transformation of the body can be undone only by a { wish} spell."
					]
				}
			],
			"legendary": [
				{
					"name": "Cast a Spell",
					"entries": [
						"The sibriex uses Spellcasting."
					]
				},
				{
					"name": "Spray Bile",
					"entries": [
						"The sibriex uses Squirt Bile."
					]
				},
				{
					"name": "Warp (Costs 2 Actions)",
					"entries": [
						"The sibriex uses Warp Creature."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Flesh Warping",
					"entries": [
						"Creatures that encounter a sibriex can be twisted beyond recognition. Whenever a creature fails a saving throw against the sibriex's Warp Creature effect, you can roll percentile dice and consult the Flesh Warping table to determine an additional effect, which vanishes when Warp Creature ends on the creature. If the creature transforms into a manes, the effect becomes a permanent feature of that body. A creature can willingly submit to flesh warping, an agonizing process that takes at least 1 hour while the creature stays within 30 feet of the sibriex. At the end of the process, roll once on the table (or choose one effect) to determine how the creature is transformed permanently.",
						{
							"type": "table",
							"caption": "Flesh Warping",
							"colLabels": [
								"d100",
								"Effect"
							],
							"colStyles": [
								"col-1 text-center",
								"col-11"
							],
							"rows": [
								[
									"01\u201305",
									"The color of the target's hair, eyes, and skin becomes blue, red, yellow, or patterned."
								],
								[
									"06\u201310",
									"The target's eyes push out of its head at the end of stalks."
								],
								[
									"11\u201315",
									"The target's hands grow claws, which can be used as daggers."
								],
								[
									"16\u201320",
									"One of the target's legs grows longer than the other, reducing its walking speed by 10 feet."
								],
								[
									"21\u201325",
									"The target's eyes become beacons, filling a 15- foot cone with dim light when they are open."
								],
								[
									"26\u201330",
									"A pair of wings, either feathered or leathery, sprout from the target's back, granting it a flying speed of 30 feet."
								],
								[
									"31\u201335",
									"The target's ears tear free from its head and scurry away; the target is {deafened}."
								],
								[
									"36\u201340",
									"Two of the target's teeth turn into short tusks."
								],
								[
									"41\u201345",
									"The target's skin develops bark-like scales, granting it a +1 bonus to AC but reducing its Charisma score by 2 (to a minimum of 1)."
								],
								[
									"46\u201350",
									"The target's arms and legs switch places, preventing the target from moving unless it crawls."
								],
								[
									"51\u201355",
									"The target's arms become tentacles with fingers on the ends, increasing its reach by 5 feet."
								],
								[
									"56\u201360",
									"The target's legs grow incredibly long and springy, increasing its walking speed by 10 feet."
								],
								[
									"61\u201365",
									"The target grows a long, thin tail, which it can use as a whip."
								],
								[
									"66\u201370",
									"The target's entire eyes turn black, and it gains {@sense darkvision} out to a range of 120 feet."
								],
								[
									"71\u201375",
									"The target swells, tripling its weight."
								],
								[
									"76\u201380",
									"The target becomes thin and skeletal, halving its weight."
								],
								[
									"81\u201385",
									"The target's head triples in size."
								],
								[
									"86\u201390",
									"The target's ears become wings, giving it a flying speed of 5 feet."
								],
								[
									"91\u201395",
									"The target's body becomes unusually brittle, causing the target to have vulnerability to bludgeoning, piercing, and slashing damage."
								],
								[
									"96\u201300",
									"The target grows another head, causing it to have advantage on saving throws against being {charmed}, {frightened}, or {stunned}."
								]
							]
						}
					],
					"_version": {
						"name": "Sibriex (Flesh Warping)",
						"addAs": "trait"
					}
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sibriex.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"I",
				"O"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"deafened",
				"exhaustion",
				"poisoned"
			],
			"conditionInflictSpell": [
				"paralyzed",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Skulk",
			"source": "MPMM",
			"page": 219,
			"otherSources": [
				{
					"source": "MTF",
					"page": 227
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 18,
				"formula": "4d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 19,
			"con": 10,
			"int": 10,
			"wis": 7,
			"cha": 1,
			"save": {
				"con": "+2"
			},
			"skill": {
				"stealth": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 8,
			"conditionImmune": [
				"blinded"
			],
			"languages": [
				"understands Common but can't speak"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Fallible Invisibility",
					"entries": [
						"The skulk is {invisible}. This invisibility can be circumvented by three things:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Charnel Candles",
									"entries": [
										"The skulk appears as a dim, translucent form in the light of a candle made of fat rendered from a corpse whose identity is unknown."
									]
								},
								{
									"type": "item",
									"name": "Children",
									"entries": [
										"Humanoid children, aged 10 and under, can see through this invisibility."
									]
								},
								{
									"type": "item",
									"name": "Reflective Surfaces",
									"entries": [
										"The skulk appears as a drab, smoothskinned biped if its reflection can be seen in a mirror or on another surface."
									]
								}
							]
						}
					]
				},
				{
					"name": "Trackless",
					"entries": [
						"The skulk leaves no tracks to indicate where it has been or where it's headed."
					]
				}
			],
			"action": [
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 6 (1d4 + 4}) slashing damage plus 3 (1d6}) necrotic damage."
					]
				}
			],
			"environment": [
				"coastal",
				"forest",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/skulk.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
				"N",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Skull Lord",
			"source": "MPMM",
			"page": 220,
			"otherSources": [
				{
					"source": "MTF",
					"page": 230
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "undead",
				"tags": [
					"sorcerer"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 16,
			"con": 17,
			"int": 16,
			"wis": 15,
			"cha": 21,
			"skill": {
				"athletics": "+7",
				"history": "+8",
				"perception": "+12",
				"stealth": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"poisoned",
				"stunned",
				"unconscious"
			],
			"languages": [
				"all the languages it knew in life"
			],
			"cr": "15",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The skull, lord casts one of the following spells, using Charisma as the spellcasting ability (spell save {18}):"
					],
					"will": [
						"{ mage hand}",
						"{ message}"
					],
					"daily": {
						"2e": [
							"{ dimension door}",
							"{ fear}"
						],
						"1e": [
							"{ cloudkill}",
							"{ cone of cold}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Evasion",
					"entries": [
						"If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half the damage, the skull lord instead takes no damage if it succeeds on the saving throw and only half damage if it fails, provided it isn't {incapacitated}."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the skull lord fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Master of the Grave",
					"entries": [
						"While within 30 feet of the skull lord, any Undead ally of the skull lord makes saving throws with advantage, and that ally regains {@dice 1d6} hit points whenever it starts its turn there."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The skull lord doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The skull lord makes three Bone Staff or Deathly Ray attacks."
					]
				},
				{
					"name": "Bone Staff",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 7 (1d8 + 3}) bludgeoning damage plus 21 (6d6}) necrotic damage."
					]
				},
				{
					"name": "Deathly Ray",
					"entries": [
						"{@atk rs} +10} to hit, range 60 ft., one target. 27 (5d8 + 5}) necrotic damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"The skull lord makes one Bone Staff or Deathly Ray attack."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The skull lord moves up to its speed without provoking {@action opportunity attack||opportunity attacks}."
					]
				},
				{
					"name": "Summon Undead (Costs 2 Actions)",
					"entries": [
						"The skull lord summons up to five {@creature skeleton||skeletons} or {@creature zombie||zombies} in unoccupied spaces within 30 feet of it. They remain until destroyed. Undead summoned in this way roll initiative, act in the next available turn, and obey the skull lord. The skull lord can have no more than five Undead summoned by this ability at a time."
					]
				}
			],
			"environment": [
				"desert",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/skull-lord.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"B",
				"N"
			],
			"damageTagsSpell": [
				"C",
				"I",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Slithering Tracker",
			"source": "MPMM",
			"page": 221,
			"otherSources": [
				{
					"source": "VGM",
					"page": 191
				}
			],
			"size": [
				"M"
			],
			"type": "ooze",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 30,
				"climb": 30,
				"swim": 30
			},
			"str": 16,
			"dex": 19,
			"con": 15,
			"int": 10,
			"wis": 14,
			"cha": 11,
			"skill": {
				"stealth": "+8",
				"survival": "+6"
			},
			"senses": [
				"blindsight 120 ft."
			],
			"passive": 12,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"vulnerable": [
				"cold",
				"fire"
			],
			"conditionImmune": [
				"blinded",
				"deafened",
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained",
				"unconscious"
			],
			"languages": [
				"understands languages it knew in its previous form but can't speak"
			],
			"cr": "3",
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"If the slithering tracker is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the slithering tracker move or act, that creature must succeed on a {18} Intelligence ({@skill Investigation}) check to discern that the slithering tracker isn't a puddle."
					]
				},
				{
					"name": "Liquid Form",
					"entries": [
						"The slithering tracker can enter an enemy's space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The slithering tracker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 8 (1d10 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Life Leech",
					"entries": [
						"One Large or smaller creature that the slithering tracker can see within 5 feet of it must succeed on a {13} Dexterity saving throw or be {grappled} (escape {13}). Until this grapple ends, the target is {restrained} and unable to breathe unless it can breathe water. In addition, the {grappled} target takes 16 (3d10}) necrotic damage at the start of each of its turns. The slithering tracker can grapple only one target at a time.",
						"While grappling the target, the slithering tracker takes only half any damage dealt to it (rounded down), and the target takes the other half."
					]
				}
			],
			"bonus": [
				{
					"name": "Watery Stealth",
					"entries": [
						"If underwater, the slithering tracker takes the {@action Hide} action, and it makes the Dexterity ({@skill Stealth}) check with advantage."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/slithering-tracker.mp3"
			},
			"traitTags": [
				"False Appearance",
				"Spider Climb"
			],
			"senseTags": [
				"B"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Spawn of Kyuss",
			"source": "MPMM",
			"page": 225,
			"otherSources": [
				{
					"source": "VGM",
					"page": 192
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				10
			],
			"hp": {
				"average": 76,
				"formula": "9d8 + 36"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 11,
			"con": 18,
			"int": 5,
			"wis": 7,
			"cha": 3,
			"save": {
				"wis": "+1"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"understands the languages it knew in life but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Regeneration",
					"entries": [
						"The spawn of Kyuss regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or a body of running water. If the spawn takes acid, fire, or radiant damage, this trait doesn't function at the start of the spawn's next turn. The spawn is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Worms",
					"entries": [
						"If the spawn of Kyuss is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away, and it loses its Burrowing Worm action."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The spawn of Kyuss requires no air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The spawn of Kyuss makes two Claw attacks, and it uses Burrowing Worm."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 6 (1d6 + 3}) slashing damage plus 7 (2d6}) necrotic damage."
					]
				},
				{
					"name": "Burrowing Worm",
					"entries": [
						"A worm launches from the spawn of Kyuss at one Humanoid that the spawn can see within 10 feet of it. The worm latches onto the target's skin unless the target succeeds on a {11} Dexterity saving throw. The worm is a Tiny Undead with AC 6, 1 hit point, a 2 (-4) in every ability score, and a speed of 1 foot. While on the target's skin, the worm can be killed by normal means or scraped off using an action (the spawn can use Burrowing Worm to launch a scraped-off worm at a Humanoid it can see within 10 feet of the worm). Otherwise, the worm burrows under the target's skin at the end of the target's next turn, dealing 1 piercing damage to it. At the end of each of its turns thereafter, the target takes 7 (2d6}) necrotic damage per worm infesting it (maximum of 10d6}), and if it drops to 0 hit points, it dies and then rises 10 minutes later as a spawn of Kyuss. If a worm-infested target is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away."
					]
				}
			],
			"environment": [
				"desert",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/spawn-of-kyuss.mp3"
			},
			"traitTags": [
				"Regeneration",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"LF"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Spirit Troll",
			"source": "MPMM",
			"page": 247,
			"otherSources": [
				{
					"source": "MTF",
					"page": 244
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 130,
				"formula": "20d10 + 20"
			},
			"speed": {
				"walk": 30
			},
			"str": 1,
			"dex": 17,
			"con": 13,
			"int": 8,
			"wis": 9,
			"cha": 16,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"acid",
				"cold",
				"fire"
			],
			"immune": [
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
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained",
				"unconscious"
			],
			"languages": [
				"Giant"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The troll can move through other creatures and objects as if they were {@quickref difficult terrain||3}. It takes 5 (1d10}) force damage if it ends its turn inside an object."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The troll regains 10 hit points at the start of each of its turns. If the troll takes psychic or force damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one creature. 19 (3d10 + 3}) psychic damage, and the target must succeed on a {15} Wisdom saving throw or be {stunned} for 1 minute. The {stunned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one creature. 19 (3d10 + 3}) psychic damage."
					]
				}
			],
			"environment": [
				"coastal",
				"forest",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/spirit-troll.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Spring Eladrin",
			"source": "MPMM",
			"page": 116,
			"otherSources": [
				{
					"source": "MTF",
					"page": 196
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 165,
				"formula": "22d8 + 66"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 16,
			"con": 16,
			"int": 18,
			"wis": 11,
			"cha": 18,
			"skill": {
				"deception": "+8",
				"persuasion": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"psychic"
			],
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The eladrin casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ Tasha's hideous laughter}"
					],
					"daily": {
						"1e": [
							"{ major image}",
							"{ suggestion}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Joyful Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {16} Wisdom saving throw. On a failed save, the creature becomes {charmed} by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Joyful Presence for 24 hours.",
						"Whenever the eladrin deals damage to the {charmed} creature, the {charmed} creature can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The eladrin makes two Longsword or Longbow attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 6 (1d8 + 2}) slashing damage, or 7 (1d10 + 2}) slashing damage if used with two hands, plus 22 (5d8}) psychic damage."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+7} to hit, range 150/600 ft., one target. 7 (1d8 + 3}) piercing damage plus 22 (5d8}) psychic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Fey Step {Recharge - 4}",
					"entries": [
						"The eladrin teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"forest",
				"grassland"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/spring-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"incapacitated",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Grue",
			"source": "MPMM",
			"page": 227,
			"otherSources": [
				{
					"source": "MTF",
					"page": 234
				}
			],
			"size": [
				"S"
			],
			"type": "aberration",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				11
			],
			"hp": {
				"average": 17,
				"formula": "5d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 13,
			"con": 10,
			"int": 9,
			"wis": 11,
			"cha": 6,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"psychic"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Aura of Shrieks",
					"entries": [
						"Creatures within 20 feet of the grue that aren't Aberrations have disadvantage on saving throws, as well as on attack rolls against creatures other than a star spawn grue."
					]
				}
			],
			"action": [
				{
					"name": "Confounding Bite",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 6 (2d4 + 1}) piercing damage, and the target must succeed on a {10} Wisdom saving throw or attack rolls against it have advantage until the start of the grue's next turn."
					]
				}
			],
			"environment": [
				"mountain",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-grue.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Hulk",
			"source": "MPMM",
			"page": 227,
			"otherSources": [
				{
					"source": "MTF",
					"page": 234
				}
			],
			"size": [
				"L"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 136,
				"formula": "13d10 + 65"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 8,
			"con": 21,
			"int": 7,
			"wis": 12,
			"cha": 9,
			"save": {
				"dex": "+3",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"resist": [
				{
					"resist": [
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
				"frightened"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Psychic Mirror",
					"entries": [
						"If the hulk takes psychic damage, each creature within 10 feet of the hulk takes that damage instead; the hulk takes none of the damage. In addition, the hulk's thoughts and location can't be discerned by magic."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hulk makes two Slam attacks. If both attacks hit the same target, the target also takes 9 (2d8}) psychic damage and must succeed on a {17} Constitution saving throw or be {stunned} until the end of the target's next turn."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 14 (2d8 + 5}) bludgeoning damage."
					]
				},
				{
					"name": "Reaping Arms {Recharge - 5}",
					"entries": [
						"The hulk makes a separate Slam attack against each creature within 10 feet of it. Each creature that is hit must also succeed on a {17} Dexterity saving throw or be knocked {prone}."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-hulk.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Larva Mage",
			"source": "MPMM",
			"page": 228,
			"otherSources": [
				{
					"source": "MTF",
					"page": 235
				}
			],
			"size": [
				"M"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 168,
				"formula": "16d8 + 96"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 12,
			"con": 23,
			"int": 18,
			"wis": 12,
			"cha": 16,
			"save": {
				"dex": "+6",
				"wis": "+6",
				"cha": "+8"
			},
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned",
				"restrained"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The mage casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ mage hand}",
						"{ message}",
						"{ minor illusion}"
					],
					"daily": {
						"1": [
							"{ dominate monster}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Return to Worms",
					"entries": [
						"When the mage is reduced to 0 hit points, it breaks apart into a {@creature swarm of insects} in the same space. Unless the swarm is destroyed, the mage reforms from it 24 hours later."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mage makes three Slam or Eldritch Bolt attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 7 (1d8 + 3}) bludgeoning damage, and the target must succeed on a {19} Constitution saving throw or be {poisoned} until the end of its next turn."
					]
				},
				{
					"name": "Eldritch Bolt",
					"entries": [
						"{@atk rs} +8} to hit, range 60 ft., one target. 19 (3d10 + 3}) force damage."
					]
				},
				{
					"name": "Plague of Worms {Recharge -}",
					"entries": [
						"Each creature other than a star spawn within 10 feet of the mage must succeed on a {19} Dexterity saving throw or take 22 (5d8}) necrotic damage and be {blinded} and {restrained} by masses of swarming worms. The affected creature takes 22 (5d8}) necrotic damage at the start of each of the mage's turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"reaction": [
				{
					"name": "Feed on Weakness",
					"entries": [
						"When a creature within 20 feet of the mage fails a saving throw, the mage gains 10 temporary hit points."
					]
				}
			],
			"legendary": [
				{
					"name": "Slam",
					"entries": [
						"The mage makes one Slam attack."
					]
				},
				{
					"name": "Eldritch Bolt (Costs 2 Actions)",
					"entries": [
						"The mage makes one Eldritch Bolt attack."
					]
				},
				{
					"name": "Feed (Costs 3 Actions)",
					"entries": [
						"Each creature {restrained} by the mage's Plague of Worms takes 13 (3d8}) necrotic damage, and the mage gains 6 temporary hit points."
					]
				}
			],
			"environment": [
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-larva-mage.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"B",
				"N",
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"poisoned",
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Mangler",
			"source": "MPMM",
			"page": 229,
			"otherSources": [
				{
					"source": "MTF",
					"page": 236
				}
			],
			"size": [
				"M"
			],
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				14
			],
			"hp": {
				"average": 71,
				"formula": "13d8 + 13"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 8,
			"dex": 18,
			"con": 12,
			"int": 11,
			"wis": 12,
			"cha": 7,
			"save": {
				"dex": "+7",
				"con": "+4"
			},
			"skill": {
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"cold"
			],
			"immune": [
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"prone"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "5",
			"pbNote": "+3",
			"trait": [
				{
					"name": "Ambusher",
					"entries": [
						"The mangler has advantage on initiative rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mangler makes two Claw attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage. If the attack roll has advantage, the target also takes 7 (2d6}) psychic damage."
					]
				},
				{
					"name": "Flurry of Claws {Recharge - 5}",
					"entries": [
						"The mangler makes six Claw attacks. Either before or after these attacks, it can move up to its speed without provoking {@action opportunity attack||opportunity attacks}."
					]
				}
			],
			"bonus": [
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the mangler takes the {@action Hide} action."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-mangler.mp3"
			},
			"traitTags": [
				"Ambusher"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"S",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Seer",
			"source": "MPMM",
			"page": 230,
			"otherSources": [
				{
					"source": "MTF",
					"page": 236
				}
			],
			"size": [
				"M"
			],
			"type": "aberration",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 153,
				"formula": "18d8 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 12,
			"con": 18,
			"int": 22,
			"wis": 19,
			"cha": 16,
			"save": {
				"dex": "+6",
				"int": "+11",
				"wis": "+9",
				"cha": "+8"
			},
			"skill": {
				"perception": "+9"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 19,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common",
				"Deep Speech",
				"Undercommon"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Out-Of-Phase Movement",
					"entries": [
						"The seer can move through other creatures and objects as if they were {@quickref difficult terrain||3}, and its movement doesn't provoke {@action opportunity attack||opportunity attacks}.",
						"Each creature it moves through takes 5 (1d10}) psychic damage; no creature can take this damage more than once per turn.",
						"The seer takes 5 (1d10}) force damage if it ends its turn inside an object."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The seer makes two Comet Staff or Psychic Orb attacks."
					]
				},
				{
					"name": "Comet Staff",
					"entries": [
						"{1d20+11} to hit, reach 5 ft., one target. 10 (1d8 + 6}) bludgeoning damage plus 18 (4d8}) psychic damage, and if the target is a creature, it must succeed on a {19} Constitution saving throw or be {incapacitated} until the end of its next turn."
					]
				},
				{
					"name": "Psychic Orb",
					"entries": [
						"{@atk rs} +11} to hit, range 120 feet, one creature. 27 (5d10}) psychic damage."
					]
				},
				{
					"name": "Collapse Distance {Recharge -}",
					"entries": [
						"The seer warps space around one creature it can see within 30 feet of it. That creature must make a {19} Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is teleported up to 60 feet to an unoccupied space the seer can see, and then each creature within 10 feet of the target's original space takes 39 (6d12}) psychic damage. On a successful save, the target takes 19 (3d12}) psychic damage and isn't teleported."
					]
				}
			],
			"reaction": [
				{
					"name": "Bend Space",
					"entries": [
						"When the seer would be hit by an attack roll, it teleports, along with any equipment it is wearing or carrying, exchanging positions with another star spawn it can see within 60 feet of it. The other star spawn is hit by the attack instead."
					]
				}
			],
			"environment": [
				"mountain",
				"swamp",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-seer.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DS",
				"U"
			],
			"damageTags": [
				"B",
				"O",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Steel Predator",
			"source": "MPMM",
			"page": 232,
			"otherSources": [
				{
					"source": "MTF",
					"page": 239
				}
			],
			"size": [
				"L"
			],
			"type": "construct",
			"alignment": [
				"L",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 207,
				"formula": "18d10 + 108"
			},
			"speed": {
				"walk": 40
			},
			"str": 24,
			"dex": 17,
			"con": 22,
			"int": 4,
			"wis": 14,
			"cha": 6,
			"skill": {
				"perception": "+7",
				"stealth": "+8",
				"survival": "+7"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				"lightning",
				"necrotic",
				"thunder"
			],
			"immune": [
				"poison",
				"psychic",
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
				"petrified",
				"poisoned",
				"stunned"
			],
			"languages": [
				"understands Modron and the language of its owner but can't speak"
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The steel predator casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability:"
					],
					"daily": {
						"3e": [
							"{ dimension door} (self only)",
							"{ plane shift} (self only)"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The steel predator has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The steel predator doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The steel predator makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+12} to hit, reach 5 ft., one target. 18 (2d10 + 7}) lightning damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+12} to hit, reach 5 ft., one target. 16 (2d8 + 7}) force damage."
					]
				},
				{
					"name": "Stunning Roar {Recharge - 5}",
					"entries": [
						"The steel predator emits a roar in a 60-foot cone. Each creature in that area must make a {19} Constitution saving throw. On a failed save, a creature takes 33 (6d10}) thunder damage, drops everything it's holding, and is {stunned} for 1 minute. The {stunned} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. On a successful save, a creature takes half as much damage and isn't {stunned}."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/steel-predator.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"OTH"
			],
			"damageTags": [
				"L",
				"O",
				"T"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Stegosaurus",
			"source": "MPMM",
			"page": 96,
			"otherSources": [
				{
					"source": "VGM",
					"page": 140
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 76,
				"formula": "8d12 + 24"
			},
			"speed": {
				"walk": 40
			},
			"str": 20,
			"dex": 9,
			"con": 17,
			"int": 2,
			"wis": 11,
			"cha": 5,
			"passive": 10,
			"cr": "4",
			"action": [
				{
					"name": "Tail",
					"entries": [
						"{1d20+7} to hit, reach 10 ft., one target. 26 (6d6 + 5}) piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"grassland"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stegosaurus.mp3"
			},
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Stench Kow",
			"source": "MPMM",
			"page": 72,
			"otherSources": [
				{
					"source": "VGM",
					"page": 208
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"cattle"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 15,
				"formula": "2d10 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 4,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"cold",
				"fire",
				"poison"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Stench",
					"entries": [
						"Any creature other than a stench kow that starts its turn within 5 feet of the stench kow must succeed on a {12} Constitution saving throw or be {poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the Stench of all stench kows for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage. If the stench kow moved at least 20 feet straight toward the target immediately before the hit, the target takes an extra 7 (2d6}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stench-cow.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Stone Cursed",
			"source": "MPMM",
			"page": 233,
			"otherSources": [
				{
					"source": "MTF",
					"page": 240
				}
			],
			"size": [
				"M"
			],
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 19,
				"formula": "3d8 + 6"
			},
			"speed": {
				"walk": 10
			},
			"str": 16,
			"dex": 5,
			"con": 14,
			"int": 5,
			"wis": 8,
			"cha": 7,
			"passive": 9,
			"immune": [
				"poison"
			],
			"vulnerable": [
				"bludgeoning"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"petrified",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Cunning Opportunist",
					"entries": [
						"The stone cursed has advantage on the attack rolls of {@action opportunity attack||opportunity attacks}."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"If the stone cursed is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the stone cursed move or act, that creature must succeed on a {18} Intelligence ({@skill Investigation}) check to discern that the stone cursed isn't a statue."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The stone cursed doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Petrifying Claws",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 12 (2d8 + 3}) slashing damage. If the target is a creature, it must succeed on a {12} Constitution saving throw, or it begins to turn to stone and is {restrained} until the end of its next turn, when it must repeat the saving throw. The effect ends if the second save is successful; otherwise the target is {petrified} for 24 hours."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stone-cursed.mp3"
			},
			"traitTags": [
				"False Appearance",
				"Unusual Nature"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"petrified",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Stone Giant Dreamwalker",
			"source": "MPMM",
			"page": 234,
			"otherSources": [
				{
					"source": "VGM",
					"page": 150
				}
			],
			"size": [
				"H"
			],
			"type": "giant",
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 161,
				"formula": "14d12 + 70"
			},
			"speed": {
				"walk": 40
			},
			"str": 23,
			"dex": 14,
			"con": 21,
			"int": 10,
			"wis": 8,
			"cha": 12,
			"save": {
				"dex": "+6",
				"con": "+9",
				"wis": "+3"
			},
			"skill": {
				"athletics": "+14",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Dreamwalker's Charm",
					"entries": [
						"An enemy that starts its turn within 30 feet of the giant must make a {13} Charisma saving throw, provided that the giant isn't {incapacitated}. On a failed save, the creature is {charmed} by the giant. A creature {charmed} in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the creature is immune to this giant's Dreamwalker's Charm for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two Greatclub or Rock attacks."
					]
				},
				{
					"name": "Greatclub",
					"entries": [
						"{1d20+10} to hit, reach 15 ft., one target. 24 (4d8 + 6}) bludgeoning damage."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"1d20+10} to hit, range 60/240 ft., one target. 22 (3d10 + 6}) bludgeoning damage. If the target is a creature, it must succeed on a {17} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Petrifying Touch",
					"entries": [
						"The giant touches one Medium or smaller creature within 10 feet of it that is {charmed} by it. The target must make a {17} Constitution saving throw. On a failed save, the target becomes {petrified}, and the giant can adhere the target to its stony body. { greater restoration} spells and other magic that can undo petrification have no effect on a {petrified} creature adhered to the giant unless the giant is dead, in which case the magic works normally, freeing the {petrified} creature as well as ending the {petrified} condition on it."
					]
				}
			],
			"environment": [
				"coastal",
				"hill",
				"mountain"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stone-giant-dreamwalker.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"conditionInflict": [
				"charmed",
				"petrified",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Storm Giant Quintessent",
			"source": "MPMM",
			"page": 235,
			"otherSources": [
				{
					"source": "VGM",
					"page": 151
				}
			],
			"size": [
				"H"
			],
			"type": "giant",
			"alignment": [
				"C",
				"G"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 230,
				"formula": "20d12 + 100"
			},
			"speed": {
				"walk": 50,
				"fly": {
					"number": 50,
					"condition": "(hover)"
				},
				"swim": 50,
				"canHover": true
			},
			"str": 29,
			"dex": 14,
			"con": 20,
			"int": 17,
			"wis": 20,
			"cha": 19,
			"save": {
				"str": "+14",
				"con": "+10",
				"wis": "+10",
				"cha": "+9"
			},
			"skill": {
				"arcana": "+8",
				"history": "+8",
				"perception": "+10"
			},
			"senses": [
				"truesight 60 ft."
			],
			"passive": 20,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"lightning",
				"thunder"
			],
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "16",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The giant can breathe air and water."
					]
				},
				{
					"name": "Legendary Resistance (1/Day)",
					"entries": [
						"If the giant fails a saving throw, it can choose to succeed instead."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two Lightning Sword attacks, or it uses Wind Javelin twice."
					]
				},
				{
					"name": "Lightning Sword",
					"entries": [
						"{1d20+14} to hit, reach 15 ft., one target. 40 (9d6 + 9}) lightning damage."
					]
				},
				{
					"name": "Wind Javelin",
					"entries": [
						"The giant coalesces wind into a javelin-like form and hurls it at a creature it can see within 600 feet of it. The javelin deals 19 (3d6 + 9}) force damage to the target, striking unerringly. The javelin disappears after it hits."
					]
				}
			],
			"legendary": [
				{
					"name": "Gust",
					"entries": [
						"The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around the target, who must succeed on a {18} Strength saving throw or be moved up to 20 feet in any horizontal direction the giant chooses."
					]
				},
				{
					"name": "Thunderbolt (Costs 2 Actions)",
					"entries": [
						"The giant hurls a thunderbolt at a creature it can see within 600 feet of it. The target must make a {18} Dexterity saving throw, taking 22 (4d10}) thunder damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "One with the Storm (Costs 3 Actions)",
					"entries": [
						"The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair. While dispersed, the giant can't take any actions other than lair actions, and it can't be targeted by attacks, spells, or other effects. The giant can't use this ability outside its lair, nor can it use this ability if another creature is using a { control weather} spell or similar magic to quell the storm."
					]
				}
			],
			"legendaryGroup": {
				"name": "Storm Giant Quintessent",
				"source": "MPMM"
			},
			"environment": [
				"coastal",
				"desert",
				"mountain",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/storm-giant-quintessent.mp3"
			},
			"traitTags": [
				"Amphibious",
				"Legendary Resistances"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"L",
				"O",
				"T"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Summer Eladrin",
			"source": "MPMM",
			"page": 116,
			"otherSources": [
				{
					"source": "MTF",
					"page": 196
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 165,
				"formula": "22d8 + 66"
			},
			"speed": {
				"walk": 50
			},
			"str": 19,
			"dex": 21,
			"con": 16,
			"int": 14,
			"wis": 12,
			"cha": 18,
			"skill": {
				"athletics": "+8",
				"intimidation": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"resist": [
				"fire"
			],
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Fearsome Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {16} Wisdom saving throw. On a failed save, the creature becomes {frightened} of the eladrin for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Fearsome Presence for the next 24 hours."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The eladrin makes two Longsword or Longbow attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 13 (2d8 + 4}) slashing damage, or 15 (2d10 + 4}) slashing damage if used with two hands, plus 9 (2d8}) fire damage."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+9} to hit, range 150/600 ft., one target. 14 (2d8 + 5}) piercing damage plus 9 (2d8}) fire damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Fey Step {Recharge - 4}",
					"entries": [
						"The eladrin teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The eladrin adds 3 to its AC against one melee attack that would hit it. To do so, the eladrin must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"environment": [
				"desert",
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/summer-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"F",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Swarm of Cranium Rats",
			"source": "MPMM",
			"page": 83,
			"otherSources": [
				{
					"source": "VGM",
					"page": 133
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "aberration",
				"swarmSize": "T"
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 76,
				"formula": "17d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 10,
			"int": 15,
			"wis": 11,
			"cha": 14,
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"resist": [
				"bludgeoning",
				"piercing",
				"slashing"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained",
				"stunned"
			],
			"languages": [
				"telepathy 30 ft."
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"As long as it has more than half of its hit points remaining, the swarm casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ command}",
						"{ comprehend languages}",
						"{ detect thoughts}"
					],
					"daily": {
						"1e": [
							"{ confusion}",
							"{ dominate monster}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
					]
				},
				{
					"name": "Telepathic Shroud",
					"entries": [
						"The swarm is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
					]
				}
			],
			"action": [
				{
					"name": "Bites",
					"entries": [
						"{1d20+5} to hit, reach 0 ft., one target in the swarm's space. 14 (4d6}) piercing damage, or 7 (2d6}) piercing damage if the swarm has half of its hit points or fewer, plus 22 (5d8}) psychic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Illumination",
					"entries": [
						"The swarm sheds dim light from its brains in a 5-foot radius, increases the illumination to bright light in a 5- to 20-foot radius (and dim light for an additional number of feet equal to the chosen radius), or extinguishes the light."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/swarm-of-cranium-rats.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Swarm of Rot Grubs",
			"source": "MPMM",
			"page": 237,
			"otherSources": [
				{
					"source": "VGM",
					"page": 208
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "beast",
				"swarmSize": "T"
			},
			"alignment": [
				"U"
			],
			"ac": [
				8
			],
			"hp": {
				"average": 22,
				"formula": "5d8"
			},
			"speed": {
				"walk": 5,
				"climb": 5
			},
			"str": 2,
			"dex": 7,
			"con": 10,
			"int": 1,
			"wis": 2,
			"cha": 1,
			"senses": [
				"blindsight 10 ft."
			],
			"passive": 6,
			"resist": [
				"piercing",
				"slashing"
			],
			"vulnerable": [
				"fire"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can't regain hit points or gain temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Bites",
					"entries": [
						"{1d20+0} to hit, reach 0 ft., one creature in the swarm's space. 7 (2d6}) piercing damage, and the target must succeed on a {10} Constitution saving throw or be {poisoned}. At the end of each of the {poisoned} target's turns, the target takes 3 (1d6}) poison damage. Whenever the {poisoned} target takes fire damage, the target can repeat the saving throw, ending the effect on itself on a success. If the {poisoned} target ends its turn with 0 hit points, it dies."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/swarm-of-rot-grubs.mp3"
			},
			"senseTags": [
				"B"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Swashbuckler",
			"source": "MPMM",
			"page": 238,
			"otherSources": [
				{
					"source": "VGM",
					"page": 217
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item leather armor|PHB}",
						"suave defense"
					]
				}
			],
			"hp": {
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 18,
			"con": 12,
			"int": 14,
			"wis": 11,
			"cha": 15,
			"skill": {
				"acrobatics": "+8",
				"athletics": "+5",
				"persuasion": "+6"
			},
			"passive": 10,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Suave Defense",
					"entries": [
						"While the swashbuckler is wearing light or no armor and wielding no {@item shield|PHB}, its AC includes its Charisma modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The swashbuckler makes one Dagger attack and two Rapier attacks."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +6} to hit, reach 5 ft. or range 20/60 ft., one target. 6 (1d4 + 4}) piercing damage."
					]
				},
				{
					"name": "Rapier",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d8 + 4}) piercing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Lightfooted",
					"entries": [
						"The swashbuckler takes the {@action Dash} or {@action Disengage} action."
					]
				}
			],
			"environment": [
				"coastal",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/swashbuckler.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sword Wraith Commander",
			"source": "MPMM",
			"page": 239,
			"otherSources": [
				{
					"source": "MTF",
					"page": 241
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item breastplate|PHB}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "15d8 + 60"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 18,
			"int": 11,
			"wis": 12,
			"cha": 14,
			"skill": {
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"frightened",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Turning Defiance",
					"entries": [
						"The commander and any other sword wraiths within 30 feet of it have advantage on saving throws against effects that turn Undead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The commander doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The commander makes two Longsword or Longbow attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 (1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+5} to hit, range 150/600 ft., one target. 6 (1d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Call to Honor (1/Day)",
					"entries": [
						"If the commander has taken damage during this combat, it gives itself advantage on attack rolls until the end of its next turn, and {@dice 1d4 + 1} {@creature sword wraith warrior|MPMM|sword wraith warriors} appear in unoccupied spaces within 30 feet of it. The warriors last until they drop to 0 hit points, and they take their turns immediately after the commander's turn on the same initiative count."
					]
				}
			],
			"bonus": [
				{
					"name": "Martial Fury",
					"entries": [
						"The commander makes one Longsword or Longbow attack, which deals an extra 9 (2d8}) necrotic damage on a hit, and attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"environment": [
				"grassland",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sword-wraith-commander.mp3"
			},
			"traitTags": [
				"Turn Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Sword Wraith Warrior",
			"source": "MPMM",
			"page": 239,
			"otherSources": [
				{
					"source": "MTF",
					"page": 241
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item chain shirt|PHB}",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "6d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 12,
			"con": 17,
			"int": 6,
			"wis": 9,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"resist": [
				"necrotic",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"frightened",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Unusual Nature",
					"entries": [
						"The warrior doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Battleaxe",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 (1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+3} to hit, range 150/600 ft., one target. 5 (1d8 + 1}) piercing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Martial Fury",
					"entries": [
						"The warrior makes one Battleaxe or Longbow attack, and attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"environment": [
				"grassland",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sword-wraith-warrior.mp3"
			},
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Tanarukk",
			"source": "MPMM",
			"page": 240,
			"otherSources": [
				{
					"source": "VGM",
					"page": 186
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 95,
				"formula": "10d8 + 50"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 13,
			"con": 20,
			"int": 9,
			"wis": 9,
			"cha": 9,
			"skill": {
				"intimidation": "+2",
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"fire",
				"poison"
			],
			"languages": [
				"Abyssal",
				"Common",
				"plus any one language"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The tanarukk has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tanarukk makes one Bite attack and one Greatsword attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) piercing damage."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 11 (2d6 + 4}) slashing damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Aggressive",
					"entries": [
						"The tanarukk moves up to its speed toward an enemy that it can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Unbridled Fury",
					"entries": [
						"In response to being hit by a melee attack, the tanarukk can make one Bite or Greatsword attack with advantage against the attacker."
					]
				}
			],
			"environment": [
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tanarukk.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"X"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Thorny Vegepygmy",
			"source": "MPMM",
			"page": 253,
			"otherSources": [
				{
					"source": "VGM",
					"page": 197
				}
			],
			"size": [
				"M"
			],
			"type": "plant",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d8 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 12,
			"con": 13,
			"int": 2,
			"wis": 10,
			"cha": 6,
			"skill": {
				"perception": "+4",
				"stealth": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"lightning",
				"piercing"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The thorny has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring vegetation."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the thorny's next turn. The thorny dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Thorny Body",
					"entries": [
						"At the start of its turn, the thorny deals 2 (1d4}) piercing damage to any creature grappling it."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 10 (2d8 + 1}) piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/thorny.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Titivilus",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 242,
			"otherSources": [
				{
					"source": "MTF",
					"page": 179
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "20d8 + 60"
			},
			"speed": {
				"walk": 40,
				"fly": 60
			},
			"str": 19,
			"dex": 22,
			"con": 17,
			"int": 24,
			"wis": 22,
			"cha": 26,
			"save": {
				"dex": "+11",
				"con": "+8",
				"wis": "+11",
				"cha": "+13"
			},
			"skill": {
				"deception": "+13",
				"insight": "+11",
				"intimidation": "+13",
				"persuasion": "+13"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Titivilus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {21}):"
					],
					"will": [
						"{ alter self}",
						"{ major image}",
						"{ nondetection}",
						"{ sending}",
						"{ suggestion}"
					],
					"daily": {
						"3e": [
							"{ mislead}",
							"{ modify memory}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Titivilus fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Titivilus has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Titivilus regains 10 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Titivilus dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Ventriloquism",
					"entries": [
						"Whenever Titivilus speaks, he can choose a point within 60 feet of him; his voice emanates from that point."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Titivilus makes one Silver Sword attack, and he uses Frightful Word."
					]
				},
				{
					"name": "Silver Sword",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 8 (1d8 + 4}) force damage, or 9 (1d10 + 4}) force damage if used with two hands, plus 16 (3d10}) necrotic damage. If the target is a creature, its hit point maximum is reduced by an amount equal to half the necrotic damage taken."
					]
				},
				{
					"name": "Frightful Word",
					"entries": [
						"Titivilus targets one creature he can see within 10 feet of him. The target must succeed on a {21} Wisdom saving throw or become {frightened} of him for 1 minute. While {frightened} in this way, the target must take the {@action Dash} action and move away from Titivilus by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the {@action Dash} action. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Titivilus teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
					]
				},
				{
					"name": "Twisting Words",
					"entries": [
						"Titivilus targets one creature he can see within 60 feet of him. The target must succeed on a {21} Charisma saving throw or become {charmed} by Titivilus for 1 minute. The {charmed} target can repeat the saving throw if Titivilus deals any damage to it. A creature that succeeds on the saving throw is immune to Titivilus's Twisting Words for 24 hours."
					]
				}
			],
			"legendary": [
				{
					"name": "Corrupting Guidance",
					"entries": [
						"Titivilus uses Twisting Words. Alternatively, he targets one creature {charmed} by him that is within 60 feet of him; that {charmed} target must succeed on a {21} Charisma saving throw, or Titivilus decides how the target acts during its next turn."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Titivilus uses Teleport."
					]
				},
				{
					"name": "Assault (Costs 2 Actions)",
					"entries": [
						"Titivilus makes one Silver Sword attack, or he uses Frightful Word."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/titivilus.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"N",
				"O"
			],
			"damageTagsSpell": [
				"B",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"frightened"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"incapacitated",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Tlincalli",
			"source": "MPMM",
			"page": 242,
			"otherSources": [
				{
					"source": "VGM",
					"page": 193
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 85,
				"formula": "10d10 + 30"
			},
			"speed": {
				"walk": 40
			},
			"str": 16,
			"dex": 13,
			"con": 16,
			"int": 8,
			"wis": 12,
			"cha": 8,
			"skill": {
				"perception": "+4",
				"stealth": "+4",
				"survival": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"languages": [
				"Tlincalli"
			],
			"cr": "5",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tlincalli makes one Longsword or Spiked Chain attack and one Sting attack."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d8 + 3}) slashing damage, or 8 (1d10 + 3}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Spiked Chain",
					"entries": [
						"{1d20+6} to hit, reach 10 ft., one target. 6 (1d6 + 3}) piercing damage, and the target is {grappled} (escape {11}) if it is a Large or smaller creature. Until this grapple ends, the target is {restrained}, and the tlincalli can't use the spiked chain against another target."
					]
				},
				{
					"name": "Sting",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one creature. 6 (1d6 + 3}) piercing damage plus 14 (4d6}) poison damage, and the target must succeed on a {14} Constitution saving throw or be {poisoned} for 1 minute. If it fails the saving throw by 5 or more, the target is also {paralyzed} while {poisoned}. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"desert"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tlincalli.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"paralyzed",
				"poisoned",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Tortle",
			"source": "MPMM",
			"page": 244,
			"otherSources": [
				{
					"source": "MTF",
					"page": 242
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
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
				"average": 22,
				"formula": "4d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 10,
			"con": 12,
			"int": 11,
			"wis": 13,
			"cha": 12,
			"skill": {
				"athletics": "+4",
				"survival": "+3"
			},
			"passive": 11,
			"languages": [
				"Aquan",
				"Common"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Hold Breath",
					"entries": [
						"The tortle can hold its breath for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) slashing damage."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d6 + 2}) piercing damage, or 6 (1d8 + 2}) piercing damage if used with two hands in melee."
					]
				},
				{
					"name": "Light Crossbow",
					"entries": [
						"1d20+2} to hit, range 80/320 ft., one target. 4 (1d8}) piercing damage."
					]
				},
				{
					"name": "Shell Defense",
					"entries": [
						"The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is {prone}, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge."
					]
				}
			],
			"environment": [
				"coastal"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tortle.mp3"
			},
			"traitTags": [
				"Hold Breath"
			],
			"languageTags": [
				"AQ",
				"C"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Tortle Druid",
			"source": "MPMM",
			"page": 244,
			"otherSources": [
				{
					"source": "MTF",
					"page": 242
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
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
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 10,
			"con": 12,
			"int": 11,
			"wis": 15,
			"cha": 12,
			"skill": {
				"animal handling": "+4",
				"nature": "+2",
				"survival": "+4"
			},
			"passive": 12,
			"languages": [
				"Aquan",
				"Common"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The tortle casts one of the following spells, using Wisdom as the spellcasting ability (spell save {12}):"
					],
					"will": [
						"{ druidcraft}",
						"{ guidance}"
					],
					"daily": {
						"2e": [
							"{ cure wounds}",
							"{ hold person}",
							"{ speak with animals}",
							"{ thunderwave}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Hold Breath",
					"entries": [
						"The tortle can hold its breath for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tortle makes four Claw attacks or two Nature's Wrath attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) slashing damage."
					]
				},
				{
					"name": "Nature's Wrath",
					"entries": [
						"{@atk rs} +4} to hit, range 90 ft., one target. 9 (2d6 + 2}) damage of a type chosen by the tortle: cold, fire, lightning, or thunder."
					]
				},
				{
					"name": "Shell Defense",
					"entries": [
						"The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is {prone}, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge."
					]
				}
			],
			"environment": [
				"coastal"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tortle-druid.mp3"
			},
			"traitTags": [
				"Hold Breath"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ",
				"C"
			],
			"damageTags": [
				"S"
			],
			"damageTagsSpell": [
				"T"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Transmuter Wizard",
			"source": "MPMM",
			"page": 265,
			"otherSources": [
				{
					"source": "VGM",
					"page": 218
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 49,
				"formula": "11d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+6",
				"history": "+6"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The transmuter casts one of the following spells, using Intelligence as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ light}",
						"{ message}",
						"{ prestidigitation}"
					],
					"daily": {
						"2e": [
							"{ fireball}",
							"{ hold person}",
							"{ knock}",
							"{ mage armor}",
							"{ polymorph}",
							"{ slow}"
						],
						"1e": [
							"{ telekinesis}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Transmuter's Stone",
					"entries": [
						"The transmuter carries a magic stone it crafted. The stone grants it one of the following benefits while bearing the stone; the transmuter chooses the benefit at the end of each long rest:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Darkvision",
									"entry": "The transmuter has {@sense darkvision} out to a range of 60 feet."
								},
								{
									"type": "item",
									"name": "Resilience",
									"entry": "The transmuter has proficiency in Constitution saving throws. "
								},
								{
									"type": "item",
									"name": "Resistance",
									"entry": "Resistance. The transmuter has resistance to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever choosing this benefit)."
								},
								{
									"type": "item",
									"name": "Speed",
									"entry": "The transmuter's walking speed is increased by 10 feet."
								}
							]
						}
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The transmuter makes three Arcane Burst attacks."
					]
				},
				{
					"name": "Arcane Burst",
					"entries": [
						"{1d20 +6} to hit, reach 5 ft. or range 120 ft., one target. 19 (3d10 + 3}) acid damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Transmute {Recharge - 4}",
					"entries": [
						"The transmuter casts { alter self} or changes the benefit of Transmuter's Stone if bearing the stone."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/transmuter.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"A"
			],
			"damageTagsSpell": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Trapper",
			"source": "MPMM",
			"page": 245,
			"otherSources": [
				{
					"source": "VGM",
					"page": 194
				}
			],
			"size": [
				"L"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 68,
				"formula": "8d10 + 24"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 17,
			"dex": 10,
			"con": 17,
			"int": 2,
			"wis": 13,
			"cha": 4,
			"skill": {
				"stealth": "+2"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 11,
			"cr": "3",
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"If the trapper is motionless on a floor, wall, or ceiling at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the trapper move or act, that creature must succeed on a {18} Intelligence ({@skill Investigation}) check to discern that the trapper isn't part of the floor, wall, or ceiling."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The trapper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Smother",
					"entries": [
						"One Large or smaller creature within 10 feet of the trapper must succeed on a {13} Dexterity saving throw or be {grappled} (escape {14}). Until the grapple ends, the target takes 13 (3d6 + 3}) bludgeoning damage plus 3 (1d6}) acid damage at the start of each of its turns. While {grappled} in this way, the target is {restrained}, {blinded}, and deprived of air. The trapper can smother only one creature at a time."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/trapper.mp3"
			},
			"traitTags": [
				"False Appearance",
				"Spider Climb"
			],
			"senseTags": [
				"B",
				"D"
			],
			"damageTags": [
				"A",
				"B"
			],
			"conditionInflict": [
				"blinded",
				"grappled",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ulitharid",
			"source": "MPMM",
			"page": 249,
			"otherSources": [
				{
					"source": "VGM",
					"page": 175
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "aberration",
				"tags": [
					"mind flayer"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item breastplate|phb}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d10 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 12,
			"con": 15,
			"int": 21,
			"wis": 19,
			"cha": 21,
			"save": {
				"int": "+9",
				"wis": "+8",
				"cha": "+9"
			},
			"skill": {
				"arcana": "+9",
				"insight": "+8",
				"perception": "+8",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 2 miles"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting (Psionics)",
					"headerEntries": [
						"The ulitharid casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ detect thoughts}",
						"{ levitate}"
					],
					"daily": {
						"1e": [
							"{ dominate monster}",
							"{ feeblemind}",
							"{ mass suggestion}",
							"{ plane shift} (self only)",
							"{ project image}",
							"{ scrying}",
							"{ telekinesis}"
						]
					},
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Creature Sense",
					"entries": [
						"The ulitharid is aware of the presence of creatures within 2 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's intelligence score, but can't sense anything else about it. A creature protected by a { mind blank} spell, a { nondetection} spell, or similar magic can't be perceived in this manner."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The ulitharid has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Psionic Hub",
					"entries": [
						"If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a psychic link with any other creature the ulitharid can detect using its Creature Sense. Any such link ends if the creature falls outside the telepathy ranges of both the ulitharid and the elder brain. The ulitharid can maintain its psychic link with the elder brain regardless of the distance between them, so long as they are both on the same plane of existence. If the ulitharid is more than 5 miles away from the elder brain, it can end the psychic link at any time (no action required)."
					]
				}
			],
			"action": [
				{
					"name": "Tentacles",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one creature. 27 (4d10 + 5}) psychic damage. If the target is Large or smaller, it is {grappled} (escape {14}) and must succeed on a {17} Intelligence saving throw or be {stunned} until this grapple ends."
					]
				},
				{
					"name": "Extract Brain",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one {incapacitated} Humanoid {grappled} by the ulitharid. 55 (10d10}) piercing damage. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain."
					]
				},
				{
					"name": "Mind Blast {Recharge - 5}",
					"entries": [
						"The ulitharid magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {17} Intelligence saving throw or take 31 (4d12 + 5}) psychic damage and be {stunned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ulitharid.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"damageTagsSpell": [
				"Y"
			],
			"spellcastingTags": [
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"stunned"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"restrained",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vampiric Mist",
			"source": "MPMM",
			"page": 250,
			"otherSources": [
				{
					"source": "MTF",
					"page": 246
				}
			],
			"size": [
				"M"
			],
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				13
			],
			"hp": {
				"average": 30,
				"formula": "4d8 + 12"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 6,
			"dex": 16,
			"con": 16,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"save": {
				"wis": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"acid",
				"cold",
				"lightning",
				"necrotic",
				"thunder",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Life Sense",
					"entries": [
						"The mist can sense the location of any creature within 60 feet of it, unless that creature's type is Construct or Undead."
					]
				},
				{
					"name": "Forbiddance",
					"entries": [
						"The mist can't enter a residence without an invitation from one of the occupants."
					]
				},
				{
					"name": "Misty Form",
					"entries": [
						"The mist can occupy another creature's space and vice versa. In addition, if air can pass through a space, the mist can pass through it without squeezing. Each foot of movement in water costs it 2 extra feet, rather than 1 extra foot. The mist can't manipulate objects in any way that requires fingers or manual dexterity."
					]
				},
				{
					"name": "Sunlight Hypersensitivity",
					"entries": [
						"The mist takes 10 radiant damage whenever it starts its turn in sunlight. While in sunlight, the mist has disadvantage on attack rolls and ability checks."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The mist doesn't require air or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Life Drain",
					"entries": [
						"The mist touches one creature in its space. The target must succeed on a {13} Constitution saving throw (Undead and Constructs automatically succeed), or it takes 10 (2d6 + 3}) necrotic damage, the mist regains 10 hit points, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
				}
			],
			"environment": [
				"arctic",
				"coastal",
				"forest",
				"grassland",
				"mountain",
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vampiric-mist.mp3"
			},
			"altArt": [
				{
					"name": "Vampiric Mist (Alt)",
					"source": "TftYP"
				}
			],
			"traitTags": [
				"Sunlight Sensitivity",
				"Unusual Nature"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"N",
				"R"
			],
			"miscTags": [
				"HPR"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vargouille",
			"source": "MPMM",
			"page": 251,
			"otherSources": [
				{
					"source": "VGM",
					"page": 195
				}
			],
			"size": [
				"T"
			],
			"type": "fiend",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 18,
				"formula": "4d4 + 8"
			},
			"speed": {
				"walk": 5,
				"fly": 40
			},
			"str": 6,
			"dex": 14,
			"con": 14,
			"int": 4,
			"wis": 7,
			"cha": 2,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"understands Abyssal",
				"Infernal",
				"and any languages it knew before becoming a vargouille but can't speak"
			],
			"cr": "1",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) piercing damage plus 10 (3d6}) poison damage."
					]
				},
				{
					"name": "Abyssal Curse",
					"entries": [
						"The vargouille targets one {incapacitated} Humanoid within 5 feet of it. The target must succeed on a {12} Charisma saving throw or become cursed. The cursed target loses 1 point of Charisma after each hour, as its head takes on fiendish aspects. The curse doesn't advance while the target is in sunlight or the area of a { daylight} spell; don't count that time. When the cursed target's Charisma becomes 2, it dies, and its head tears from its body and becomes a new vargouille. Casting { remove curse}, { greater restoration}, or a similar spell on the target before the transformation is complete can end the curse. Doing so undoes the changes made to the target by the curse."
					]
				},
				{
					"name": "Stunning Shriek {Recharge - 5}",
					"entries": [
						"The vargouille shrieks. Each Humanoid and Beast within 30 feet of the vargouille and able to hear it must succeed on a {12} Wisdom saving throw or be {frightened} of the vargouille until the end of the vargouille's next turn. While {frightened} in this way, a target is {stunned}. If a target's saving throw is successful or the effect ends for it, the target is immune to the Stunning Shriek of all vargouilles for 1 hour."
					]
				}
			],
			"environment": [
				"desert",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vargouille.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB",
				"CS",
				"I"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vegepygmy",
			"source": "MPMM",
			"page": 252,
			"otherSources": [
				{
					"source": "VGM",
					"page": 196
				}
			],
			"size": [
				"S"
			],
			"type": "plant",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 14,
			"con": 13,
			"int": 6,
			"wis": 11,
			"cha": 7,
			"skill": {
				"perception": "+2",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"lightning",
				"piercing"
			],
			"languages": [
				"Vegepygmy"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The vegepygmy has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring vegetation."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"1d20+4} to hit, range 30/120 ft., one target. 4 (1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vegepygmy.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"B",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Vegepygmy Chief",
			"source": "MPMM",
			"page": 253,
			"otherSources": [
				{
					"source": "VGM",
					"page": 197
				}
			],
			"size": [
				"S"
			],
			"type": "plant",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 33,
				"formula": "6d6 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 14,
			"con": 14,
			"int": 7,
			"wis": 12,
			"cha": 9,
			"skill": {
				"perception": "+3",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"lightning",
				"piercing"
			],
			"languages": [
				"Vegepygmy"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The vegepygmy has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring vegetation."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The vegepygmy regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The vegepygmy makes two Claw attacks or two melee Spear attacks."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} +4} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d6 + 2}) piercing damage, or 6 (1d8 + 2}) piercing damage if used with two hands to make a melee attack."
					]
				},
				{
					"name": "Spores (1/Day)",
					"entries": [
						"A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn't a Plant must succeed on a {12} Constitution saving throw or be {poisoned}. While {poisoned} in this way, a target takes 9 (2d8}) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"forest",
				"swamp"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vegepygmy-chief.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Velociraptor",
			"source": "MPMM",
			"page": 96,
			"otherSources": [
				{
					"source": "VGM",
					"page": 140
				}
			],
			"size": [
				"T"
			],
			"type": {
				"type": "beast",
				"tags": [
					"dinosaur"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 10,
				"formula": "3d4 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 14,
			"con": 13,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"skill": {
				"perception": "+3"
			},
			"passive": 13,
			"cr": "1/4",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The velociraptor makes one Bite attack and one Claw attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one creature. 5 (1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d4 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"forest",
				"grassland"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/velociraptor.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Venom Troll",
			"source": "MPMM",
			"page": 248,
			"otherSources": [
				{
					"source": "MTF",
					"page": 245
				}
			],
			"size": [
				"L"
			],
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 94,
				"formula": "9d10 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 13,
			"con": 20,
			"int": 7,
			"wis": 9,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Giant"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Poison Splash",
					"entries": [
						"When the troll takes damage of any type but psychic, each creature within 5 feet of the troll takes 9 (2d8}) poison damage."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The troll regains 10 hit points at the start of each of its turns. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 7 (1d6 + 4}) piercing damage plus 4 (1d8}) poison damage, and the creature is {poisoned} until the start of the troll's next turn."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 11 (2d6 + 4}) slashing damage plus 4 (1d8}) poison damage."
					]
				},
				{
					"name": "Venom Spray {Recharge -}",
					"entries": [
						"The troll slices itself with a claw, releasing a spray of poison in a 15-foot cube. The troll takes 7 (2d6}) slashing damage (this damage can't be reduced in any way). Each creature in the area must make a {16} Constitution saving throw. On a failed save, a creature takes 18 (4d8}) poison damage and is {poisoned} for 1 minute. On a successful save, the creature takes half as much damage and isn't {poisoned}. A {poisoned} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/venom-troll.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "War Priest",
			"source": "MPMM",
			"page": 254,
			"otherSources": [
				{
					"source": "VGM",
					"page": 218
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"cleric"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb|plate}"
					]
				}
			],
			"hp": {
				"average": 117,
				"formula": "18d8 + 36"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 10,
			"con": 14,
			"int": 11,
			"wis": 17,
			"cha": 13,
			"save": {
				"con": "+6",
				"wis": "+7"
			},
			"skill": {
				"intimidation": "+5",
				"religion": "+4"
			},
			"passive": 13,
			"languages": [
				"any two languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The war priest casts one of the following spells, using Wisdom as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ light}",
						"{ spare the dying}",
						"{ thaumaturgy}"
					],
					"daily": {
						"1e": [
							"{ banishment}",
							"{ command}",
							"{ dispel magic}",
							"{ flame strike}",
							"{ guardian of faith}",
							"{ hold person}",
							"{ lesser restoration}",
							"{ revivify}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The war priest makes two Maul attacks, and it uses Holy Fire."
					]
				},
				{
					"name": "Maul",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 10 (2d6 + 3}) bludgeoning damage  plus 10 (3d6}) radiant damage."
					]
				},
				{
					"name": "Holy Fire",
					"entries": [
						"The war priest targets one creature it can see within 60 feet of it. The target must make a {15} Wisdom saving throw. On a failed save, the target takes 12 (2d8 + 3}) radiant damage, and it is {blinded} until the start of the war priest's next turn. On a successful save, the target takes half as much damage and isn't {blinded}."
					]
				}
			],
			"bonus": [
				{
					"name": "Healing Light {Recharge - 4}",
					"entries": [
						"The war priest or one creature of its choice within 60 feet of it regains 12 ({@dice 2d8 + 3}) hit points."
					]
				}
			],
			"environment": [
				"desert",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/war-priest.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"B",
				"R"
			],
			"damageTagsSpell": [
				"F",
				"R"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"blinded"
			],
			"conditionInflictSpell": [
				"incapacitated",
				"paralyzed",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Warlock of the Archfey",
			"source": "MPMM",
			"page": 255,
			"otherSources": [
				{
					"source": "VGM",
					"page": 219
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				13,
				{
					"ac": 16,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 67,
				"formula": "15d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 16,
			"con": 11,
			"int": 11,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+3",
				"cha": "+6"
			},
			"skill": {
				"arcana": "+2",
				"deception": "+6",
				"nature": "+2",
				"persuasion": "+6"
			},
			"passive": 11,
			"conditionImmune": [
				"charmed"
			],
			"languages": [
				"any two languages (usually Sylvan)"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The warlock casts one of the following spells, using Charisma as the spellcasting ability (spell save {14}): "
					],
					"will": [
						"{ dancing lights}",
						"{ disguise self}",
						"{ mage armor} (self only)",
						"{ mage hand}",
						"{ minor illusion}",
						"{ prestidigitation}",
						"{ speak with animals}"
					],
					"daily": {
						"1e": [
							"{ charm person}",
							"{ dimension door}",
							"{ hold monster}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The warlock makes two Rapier attacks, or it uses Bewildering Word twice."
					]
				},
				{
					"name": "Rapier",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 7 (1d8 + 3}) piercing damage plus 7 (2d6}) piercing damage."
					]
				},
				{
					"name": "Bewildering Word",
					"entries": [
						"The warlock utters a magical bewilderment, targeting one creature it can see within 60 feet of it. The target must succeed on a {14} Wisdom saving throw or take 9 (2d8}) psychic damage and have disadvantage on attack rolls until the end of the warlock's next turn."
					]
				}
			],
			"reaction": [
				{
					"name": "Misty Escape (Recharges after a Short or Long Rest)",
					"entries": [
						"In response to taking damage, the warlock turns {invisible} and teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see. It remains {invisible} until the start of its next turn or until it attacks, makes a damage roll, or casts a spell."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"mountain",
				"swamp",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlock-of-the-archfey.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"S",
				"X"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"CL"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"paralyzed",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Warlock of the Fiend",
			"source": "MPMM",
			"page": 255,
			"otherSources": [
				{
					"source": "VGM",
					"page": 219
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				13,
				{
					"ac": 16,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 78,
				"formula": "12d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 16,
			"con": 15,
			"int": 12,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+4",
				"cha": "+7"
			},
			"skill": {
				"arcana": "+4",
				"deception": "+7",
				"persuasion": "+7",
				"religion": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				{
					"resist": [
						"fire"
					],
					"cond": true
				}
			],
			"languages": [
				"any two languages (usually Abyssal or Infernal)"
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The warlock casts one of the following spells, using Charisma as the spellcasting ability (spell save {15}): "
					],
					"will": [
						"{ alter self}",
						"{ mage armor} (self only)",
						"{ mage hand}",
						"{ minor illusion}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ banishment}",
							"{ plane shift}",
							"{ suggestion}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Dark One's Own Luck (Recharges after a Short or Long Rest)",
					"entries": [
						"When the warlock makes an ability check or saving throw, it can add a {@dice d10} to the roll. It can do this after the roll is made but before any of the roll's effects occur."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The warlock makes three Scimitar attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 6 (1d6 + 3}) slashing damage plus 14 (4d6}) fire damage."
					]
				},
				{
					"name": "Hellfire",
					"entries": [
						"Green flame explodes in a 10-foot-radius sphere centered on a point within 120 feet of the warlock. Each creature in that area must make a {15} Dexterity saving throw, taking 16 (3d10}) fire damage and 11 (2d10}) necrotic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"reaction": [
				{
					"name": "Fiendish Rebuke (3/Day)",
					"entries": [
						"In response to being damaged by a visible creature within 60 feet of it, the warlock forces that creature to make a {15} Constitution saving throw, taking 22 (4d10}) necrotic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlock-of-the-fiend.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"I",
				"X"
			],
			"damageTags": [
				"B",
				"F",
				"N"
			],
			"damageTagsSpell": [
				"B",
				"P",
				"S"
			],
			"spellcastingTags": [
				"CL"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Warlock of the Great Old One",
			"source": "MPMM",
			"page": 256,
			"otherSources": [
				{
					"source": "VGM",
					"page": 220
				}
			],
			"size": [
				"M"
			],
			"type": "humanoid",
			"alignment": [
				"A"
			],
			"ac": [
				13,
				{
					"ac": 16,
					"condition": "with { mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 91,
				"formula": "14d8 + 28"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 16,
			"con": 15,
			"int": 12,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+4",
				"cha": "+7"
			},
			"skill": {
				"arcana": "+4",
				"history": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"psychic"
			],
			"languages": [
				"any two languages",
				"telepathy 30 ft."
			],
			"cr": "6",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The warlock casts one of the following spells, using Charisma as the spellcasting ability (spell save {15}): "
					],
					"will": [
						"{ detect magic}",
						"{ guidance}",
						"{ levitate}",
						"{ mage armor} (self only)",
						"{ mage hand}",
						"{ minor illusion}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ arcane gate}",
							"{ detect thoughts}",
							"{ true seeing}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Whispering Aura",
					"entries": [
						"At the start of each of the warlock's turns, each creature of its choice within 5 feet of it must succeed on a {15} Wisdom saving throw or take 10 (3d6}) psychic damage, provided that the warlock isn't {incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The warlock makes two Dagger attacks."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} +6} to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3}) piercing damage plus 10 (3d6}) psychic damage."
					]
				},
				{
					"name": "Howling Void",
					"entries": [
						"The warlock opens a momentary extraplanar rift within 60 feet of it. The rift is a scream-filled, 20-foot cube. Each creature in that area must make a {15} Wisdom saving throw. On a failed save, a creature takes 9 (2d8}) psychic damage and is {frightened} of the warlock until the start of the war lock's next turn. On a successful save, a creature takes half as much damage and isn't {frightened}."
					]
				}
			],
			"environment": [
				"arctic",
				"hill",
				"mountain",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlock-of-the-great-old-one.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"X"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"spellcastingTags": [
				"CL"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictSpell": [
				"charmed",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Warlord",
			"source": "MPMM",
			"page": 257,
			"otherSources": [
				{
					"source": "VGM",
					"page": 220
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid"
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb|plate}"
					]
				}
			],
			"hp": {
				"average": 229,
				"formula": "27d8 + 108"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 16,
			"con": 18,
			"int": 12,
			"wis": 12,
			"cha": 18,
			"save": {
				"str": "+9",
				"dex": "+7",
				"con": "+8"
			},
			"skill": {
				"athletics": "+9",
				"intimidation": "+8",
				"perception": "+5",
				"persuasion": "+8"
			},
			"passive": 15,
			"languages": [
				"any two languages"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Indomitable (3/Day)",
					"entries": [
						"The warlord can reroll a saving throw it fails. It must use the new roll."
					]
				},
				{
					"name": "Survivor",
					"entries": [
						"The warlord regains 10 hit points at the start of its turn if it has fewer than half its hit points but at least 1 hit point."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The warlord makes two Greatsword or Short bow attacks."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 12 (2d6 + 5}) slashing damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"1d20+7} to hit, range 80/320 ft., one target. 6 (1d6 + 3}) piercing damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Command Ally",
					"entries": [
						"The warlord targets one ally it can see within 30 feet of it. if the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll."
					]
				},
				{
					"name": "Weapon Attack",
					"entries": [
						"The warlord makes one Greatsword or Shortbow attack."
					]
				},
				{
					"name": "Frighten Foe (Costs 2 Actions)",
					"entries": [
						"The warlord targets one creature it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a {16} Wisdom saving throw or be {frightened} until the end of warlord's next turn."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlord.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Wastrilith",
			"source": "MPMM",
			"page": 258,
			"otherSources": [
				{
					"source": "MTF",
					"page": 139
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 157,
				"formula": "15d10 + 75"
			},
			"speed": {
				"walk": 30,
				"swim": 80
			},
			"str": 19,
			"dex": 18,
			"con": 21,
			"int": 19,
			"wis": 12,
			"cha": 14,
			"save": {
				"str": "+9",
				"con": "+10"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "13",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The wastrilith can breathe air and water."
					]
				},
				{
					"name": "Corrupt Water",
					"entries": [
						"At the start of each of the wastrilith's turns, exposed water within 30 feet of it is befouled. Underwater, this effect lightly obscures the area until a current clears it away. Water in containers remains corrupted until it evaporates.",
						"A creature that consumes this foul water or swims in it must make a {18} Constitution saving throw. On a successful save, the creature is immune to the foul water for 24 hours. On a failed save, the creature takes 14 (4d6}) poison damage and is {poisoned} for 1 minute. At the end of this time, the {poisoned} creature must repeat the saving throw. On a failure, the creature takes 18 (4d8}) poison damage and is {poisoned} until it finishes a long rest.",
						"If another demon drinks the foul water as an action, it gains 11 ({@dice 2d10}) temporary hit points."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The wastrilith has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The wastrilith makes one Bite attack and two Claw attacks, and it uses Grasping Spout."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 30 (4d12 + 4}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{1d20+9} to hit, reach 10 ft., one target. 18 (4d6 + 4}) slashing damage."
					]
				},
				{
					"name": "Grasping Spout",
					"entries": [
						"The wastrilith magically launches a spout of water at one creature it can see within 60 feet of it. The target must make a {17} Strength saving throw, and it has disadvantage if it's underwater. On a failed save, it takes 22 (4d8 + 4}) acid damage and is pulled up to 60 feet toward the wastrilith. On a successful save, it takes half as much damage and isn't pulled."
					]
				}
			],
			"bonus": [
				{
					"name": "Undertow",
					"entries": [
						"If the wastrilith is underwater, it causes all water within 60 feet of it to be {@quickref difficult terrain||3} for other creatures until the start of its next turn."
					]
				}
			],
			"environment": [
				"coastal",
				"swamp",
				"underdark",
				"underwater"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/wastrilith.mp3"
			},
			"traitTags": [
				"Amphibious",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"A",
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Water Elemental Myrmidon",
			"source": "MPMM",
			"page": 123,
			"otherSources": [
				{
					"source": "MTF",
					"page": 203
				}
			],
			"size": [
				"M"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|PHB|plate}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 40,
				"swim": 40
			},
			"str": 18,
			"dex": 14,
			"con": 15,
			"int": 8,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"acid",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Aquan",
				"one language of its creator's choice"
			],
			"cr": "7",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes three Trident attacks."
					]
				},
				{
					"name": "Trident",
					"entries": [
						"{@atk mw,rw} +7} to hit, reach 5 ft. or range 20/60 ft., one target. 7 (1d6 + 4}) force damage, or 8 (1d8 + 4}) force damage if used with two hands to make a melee attack."
					]
				},
				{
					"name": "Freezing Strikes {Recharge -}",
					"entries": [
						"The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10}) cold damage. A target that is hit by one or more of these attacks has its speed reduced by 10 feet until the end of the myrmidon's next turn."
					]
				}
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/water-elemental-myrmidon.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ"
			],
			"damageTags": [
				"C",
				"O"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "White Abishai",
			"source": "MPMM",
			"page": 41,
			"otherSources": [
				{
					"source": "MTF",
					"page": 163
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 68,
				"formula": "8d8 + 32"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 16,
			"dex": 11,
			"con": 18,
			"int": 11,
			"wis": 12,
			"cha": 13,
			"save": {
				"str": "+6",
				"con": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"cold",
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "6",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Reckless",
					"entries": [
						"At the start of its turn, the abishai can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes one Bite attack, one Claw attack, and one Longsword attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 5 (1d4 + 3}) piercing damage plus 3 (1d6}) cold damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 8 (1d10 + 3}) slashing damage."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 7 (1d8 + 3}) force damage, or 8 (1d10 + 3}) force damage if used with two hands."
					]
				}
			],
			"reaction": [
				{
					"name": "Vicious Reprisal",
					"entries": [
						"In response to taking damage, the abishai makes one Bite attack against a random creature within 5 feet of it. If no creature is within reach, the abishai moves up to half its speed toward an enemy it can see, without provoking {@action opportunity attack||opportunity attacks}."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/white-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance",
				"Reckless"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"C",
				"O",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Winter Eladrin",
			"source": "MPMM",
			"page": 117,
			"otherSources": [
				{
					"source": "MTF",
					"page": 197
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 165,
				"formula": "22d8 + 66"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 16,
			"con": 16,
			"int": 18,
			"wis": 17,
			"cha": 13,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"cold"
			],
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The eladrin casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ fog cloud}",
						"{ gust of wind}",
						"{ sleet storm}"
					],
					"ability": "int",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sorrowful Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {13} Wisdom saving throw. On a failed save, the creature becomes {charmed} by the eladrin for 1 minute. While {charmed} in this way, the creature has disadvantage on ability checks and saving throws. The {charmed} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Sorrowful Presence for the next 24 hours.",
						"Whenever the eladrin deals damage to the {charmed} creature, the {charmed} creature can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The eladrin makes two Longsword or Longbow attacks. It can replace one attack with a use of Spellcasting."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 4 (1d8}) slashing damage, or 5 (1d10}) slashing damage if used with two hands, plus 13 (3d8}) cold damage."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"1d20+7} to hit, range 150/600 ft., one target. 7 (1d8 + 3}) piercing damage plus 13 (3d8}) cold damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Fey Step {Recharge - 4}",
					"entries": [
						"The eladrin teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Frigid Rebuke",
					"entries": [
						"When the eladrin takes damage from a creature the eladrin can see within 60 feet of it, the eladrin can force that creature to make a {16} Constitution saving throw. On a failed save, the creature takes 11 (2d10}) cold damage."
					]
				}
			],
			"environment": [
				"arctic",
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/winter-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"C",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Wood Woad",
			"source": "MPMM",
			"page": 266,
			"otherSources": [
				{
					"source": "VGM",
					"page": 198
				}
			],
			"size": [
				"M"
			],
			"type": "plant",
			"alignment": [
				"L",
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor",
						"{@item shield|PHB}"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 18,
			"dex": 12,
			"con": 16,
			"int": 10,
			"wis": 13,
			"cha": 8,
			"skill": {
				"athletics": "+7",
				"perception": "+4",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"bludgeoning",
				"piercing"
			],
			"vulnerable": [
				"fire"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Sylvan"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The wood woad has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring vegetation."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The wood woad regains 10 hit points at the start of its turn if it is in contact with the ground. If the wood woad takes fire damage, this trait doesn't function at the start of the wood woad's next turn. The wood woad dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Tree Stride",
					"entries": [
						"Once on each of its turns, the wood woad can use 10 feet of its movement to step magically into one living tree within 5 feet of it and emerge from a second living tree within 60 feet of it that it can see, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The wood woad makes two Club attacks."
					]
				},
				{
					"name": "Club",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. +14} (4d4 + 4}) force damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/wood-woad.mp3"
			},
			"traitTags": [
				"Regeneration",
				"Tree Stride"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"S"
			],
			"damageTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Wretched Sorrowsworn",
			"source": "MPMM",
			"page": 224,
			"otherSources": [
				{
					"source": "MTF",
					"page": 233
				}
			],
			"size": [
				"S"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 10,
				"formula": "4d6 - 4"
			},
			"speed": {
				"walk": 40
			},
			"str": 7,
			"dex": 12,
			"con": 9,
			"int": 5,
			"wis": 6,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"resist": [
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "while in dim light or darkness",
					"cond": true
				}
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Wretched Pack Tactics",
					"entries": [
						"The sorrowsworn has advantage on an attack roll against a creature if at least one of the sorrowsworn's allies is within 5 feet of the creature and the ally isn't {incapacitated}. The sorrowsworn otherwise has disadvantage on attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 6 (1d10 + 1}) piercing damage, and the sorrowsworn attaches to the target. While attached, the sorrowsworn can't attack, and at the start of each of the sorrowsworn's turns, the target takes 6 (1d10 + 1}) necrotic damage.",
						"The attached sorrowsworn moves with the target whenever the target moves, requiring none of the sorrowsworn's movement. The sorrowsworn can detach itself by spending 5 feet of its movement on its turn. A creature, including the target, can use its action to detach the sorrowsworn."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-wretched.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Xvart",
			"source": "MPMM",
			"page": 267,
			"otherSources": [
				{
					"source": "VGM",
					"page": 200
				}
			],
			"size": [
				"S"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|PHB}"
					]
				}
			],
			"hp": {
				"average": 7,
				"formula": "2d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 10,
			"int": 8,
			"wis": 7,
			"cha": 7,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 8,
			"languages": [
				"Abyssal"
			],
			"cr": "1/8",
			"trait": [
				{
					"name": "Raxivort's Tongue",
					"entries": [
						"The xvart can communicate with ordinary {@creature bat|mm|bats} and {@creature rat|mm|rats}, as well as {@creature giant bat|mm|giant bats} and {@creature giant rat|mm|giant rats}."
					]
				}
			],
			"action": [
				{
					"name": "Shortsword",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 ({@dice 1d6 + 2}) piercing damage. If at least one of the xvart's allies is within 5 feet of the target, the xvart can push the target 5 feet if the target is a Medium or smaller creature."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"1d20+4} to hit, range 30/120 ft., one target. 4 (1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Low Cunning",
					"entries": [
						"The xvart takes the {@action Disengage} action."
					]
				}
			],
			"environment": [
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/xvart.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Xvart Warlock of Raxivort",
			"source": "MPMM",
			"page": 267,
			"otherSources": [
				{
					"source": "VGM",
					"page": 200
				}
			],
			"size": [
				"S"
			],
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				12
			],
			"hp": {
				"average": 22,
				"formula": "5d6 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 12,
			"int": 8,
			"wis": 11,
			"cha": 12,
			"skill": {
				"stealth": "+3"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"languages": [
				"Abyssal"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The xvart casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {11}):"
					],
					"will": [
						"{ detect magic}",
						"{ mage armor} (self only)",
						"{ mage hand}",
						"{ minor illusion}",
						"{ prestidigitation}"
					],
					"daily": {
						"1e": [
							"{ burning hands}",
							"{ invisibility}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Raxivort's Blessing",
					"entries": [
						"When the xvart reduces an enemy to 0 hit points, the xvart gains 4 temporary hit points."
					]
				},
				{
					"name": "Raxivort's Tongue",
					"entries": [
						"The xvart can communicate with ordinary {@creature bat|mm|bats} and {@creature rat|mm|rats}, as well as {@creature giant bat|mm|giant bats} and {@creature giant rat|mm|giant rats}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The xvart makes two Scimitar or Raxivort's Bite attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 ({@dice 1d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Raxivort's Bite",
					"entries": [
						"{@atk rs} +3} to hit, range 30 ft., one creature. 7 (1d10 + 2}) poison damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Low Cunning",
					"entries": [
						"The xvart takes the {@action Disengage} action."
					]
				}
			],
			"environment": [
				"hill",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/xvart-warlock-of-raxivort.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB"
			],
			"damageTags": [
				"I",
				"S"
			],
			"damageTagsSpell": [
				"F"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Yagnoloth",
			"source": "MPMM",
			"page": 268,
			"otherSources": [
				{
					"source": "MTF",
					"page": 252
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 147,
				"formula": "14d10 + 70"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 14,
			"con": 21,
			"int": 16,
			"wis": 15,
			"cha": 18,
			"save": {
				"dex": "+6",
				"int": "+7",
				"wis": "+6",
				"cha": "+8"
			},
			"skill": {
				"deception": "+8",
				"insight": "+6",
				"perception": "+6",
				"persuasion": "+8"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The yagnoloth casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {16}):"
					],
					"will": [
						"{ darkness}",
						"{ detect magic}",
						"{ dispel magic}",
						"{ invisibility} (self only)",
						"{ suggestion}"
					],
					"daily": {
						"3": [
							"{ lightning bolt}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The yagnoloth has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The yagnoloth makes one Electrified Touch attack and one Massive Arm attack, or it makes one Massive Arm attack and uses Battlefield Cunning, if available, or Teleport."
					]
				},
				{
					"name": "Electrified Touch",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 27 (6d8}) lightning damage."
					]
				},
				{
					"name": "Massive Arm",
					"entries": [
						"{1d20+8} to hit, reach 15 ft., one target. 23 (3d12 + 4}) force damage. If the target is a creature, it must succeed on a {16} Constitution saving throw or become {stunned} until the end of the yagnoloth's next turn."
					]
				},
				{
					"name": "Battlefield Cunning {Recharge - 4}",
					"entries": [
						"Up to two allied yugoloths within 60 feet of the yagnoloth that can hear it can use their reactions to make one melee attack each."
					]
				},
				{
					"name": "Life Leech",
					"entries": [
						"The yagnoloth touches one {incapacitated} creature within 15 feet of it. The target takes 36 (7d8 + 4}) necrotic damage, and the yagnoloth gains temporary hit points equal to half the damage dealt. The target must succeed on a {16} Constitution saving throw, or its hit point maximum is reduced by an amount equal to half the necrotic damage taken. This reduction lasts until the target finishes a long rest, and the target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The yagnoloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"urban"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yagnoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"L",
				"N",
				"O"
			],
			"damageTagsSpell": [
				"L"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"HPR",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"stunned"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yeenoghu",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 270,
			"otherSources": [
				{
					"source": "MTF",
					"page": 155
				}
			],
			"size": [
				"H"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 333,
				"formula": "23d12 + 184"
			},
			"speed": {
				"walk": 50
			},
			"str": 29,
			"dex": 16,
			"con": 23,
			"int": 15,
			"wis": 24,
			"cha": 15,
			"save": {
				"dex": "+10",
				"con": "+15",
				"wis": "+14"
			},
			"skill": {
				"intimidation": "+9",
				"perception": "+14"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 24,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "24",
				"lair": "25"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Yeenoghu casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ detect magic}"
					],
					"daily": {
						"1": [
							"{ teleport}"
						],
						"3e": [
							"{ dispel magic}",
							"{ fear}",
							"{ invisibility}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Yeenoghu fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Yeenoghu has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Yeenoghu makes three Flail attacks."
					]
				},
				{
					"name": "Flail",
					"entries": [
						"{1d20+16} to hit, reach 15 ft., one target. 22 (2d12 + 9}) force damage. If it's his turn, Yeenoghu can cause the target to suffer one of the following additional effects, each of which he can apply only once per turn",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Confusion",
									"entries": [
										"The target must succeed on a {17} Wisdom saving throw or be affected by the confusion spell until the start of Yeenoghu's next turn."
									]
								},
								{
									"type": "item",
									"name": "Force",
									"entries": [
										"The target takes an extra 13 (2d12}) force damage."
									]
								},
								{
									"type": "item",
									"name": "Paralysis",
									"entries": [
										"The target must succeed on a {17} Constitution saving throw or be {paralyzed} until the start of Yeenoghu's next turn."
									]
								}
							]
						}
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 20 (2d10 + 9}) acid damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Rampage",
					"entries": [
						"When Yeenoghu reduces a creature to 0 hit points with a melee attack, he moves up to half his speed and makes one Bite attack."
					]
				}
			],
			"legendary": [
				{
					"name": "Charge",
					"entries": [
						"Yeenoghu moves up to his speed."
					]
				},
				{
					"name": "Swat Away",
					"entries": [
						"Yeenoghu makes one Flail attack. If the attack hits, the target must succeed on a {24} Strength saving throw or be pushed up to 15 feet in a straight line away from Yeenoghu. If the saving throw fails by 5 or more, the target is also knocked {prone}."
					]
				},
				{
					"name": "Savage (Costs 2 Actions)",
					"entries": [
						"Yeenoghu makes a separate Bite attack against each creature within 10 feet of him."
					]
				}
			],
			"legendaryGroup": {
				"name": "Yeenoghu",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"O"
			],
			"damageTagsLegendary": [
				"P"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed",
				"prone"
			],
			"conditionInflictLegendary": [
				"restrained"
			],
			"conditionInflictSpell": [
				"frightened",
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yeth Hound",
			"source": "MPMM",
			"page": 271,
			"otherSources": [
				{
					"source": "VGM",
					"page": 201
				}
			],
			"size": [
				"L"
			],
			"type": "fey",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 51,
				"formula": "6d10 + 18"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 18,
			"dex": 17,
			"con": 16,
			"int": 5,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"immune": [
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks not made with silvered weapons",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"understands Common, Elvish and Sylvan but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Sunlight Banishment",
					"entries": [
						"If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can't affect or be affected by anything on the other plane. Once it is adjacent to its master or a pack mate that is on the Material Plane, a yeth hound in the Border Ethereal can return to the Material Plane as an action."
					]
				},
				{
					"name": "Telepathic Bond",
					"entries": [
						"While the yeth hound is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically with each other."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 11 (2d6 + 4}) piercing damage, plus 14 (4d6}) psychic damage if the target is {frightened}."
					]
				},
				{
					"name": "Baleful Baying",
					"entries": [
						"The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a {13} Wisdom saving throw or be {frightened} of the hound until the end of the hound's next turn or until the hound is {incapacitated}. A {frightened} target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible, must finish the move before taking an action, and must take the most direct route, even if hazards lie that way. A target that successfully saves is immune to the baying of all yeth hounds for the next 24 hours."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yeth-hound.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"CS",
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Young Kruthik",
			"source": "MPMM",
			"page": 168,
			"otherSources": [
				{
					"source": "MTF",
					"page": 211
				}
			],
			"size": [
				"S"
			],
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 9,
				"formula": "2d6 + 2"
			},
			"speed": {
				"walk": 30,
				"burrow": 10,
				"climb": 30
			},
			"str": 13,
			"dex": 16,
			"con": 13,
			"int": 4,
			"wis": 10,
			"cha": 6,
			"skill": {
				"perception": "+4"
			},
			"senses": [
				"darkvision 30 ft.",
				"tremorsense 60 ft."
			],
			"passive": 14,
			"languages": [
				"Kruthik"
			],
			"cr": "1/8",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't {incapacitated}."
					]
				},
				{
					"name": "Tunneler",
					"entries": [
						"The kruthik can burrow through solid rock at half its burrowing speed and leaves a 2½-foot-diameter tunnel in its wake."
					]
				}
			],
			"action": [
				{
					"name": "Stab",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) piercing damage."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/young-kruthik.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"senseTags": [
				"D",
				"T"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Anathema",
			"source": "MPMM",
			"page": 272,
			"otherSources": [
				{
					"source": "VGM",
					"page": 202
				}
			],
			"size": [
				"H"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d12 + 72"
			},
			"speed": {
				"walk": 40,
				"climb": 40,
				"swim": 40
			},
			"str": 23,
			"dex": 13,
			"con": 19,
			"int": 19,
			"wis": 17,
			"cha": 20,
			"skill": {
				"perception": "+11",
				"stealth": "+5"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 21,
			"resist": [
				"acid",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting (Anathema Form Only)",
					"headerEntries": [
						"The anathema casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {17}):"
					],
					"will": [
						"{ animal friendship} (snakes only)"
					],
					"daily": {
						"3e": [
							"{ darkness}",
							"{ entangle}",
							"{ fear}",
							"{ polymorph}",
							"{ suggestion}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The anathema has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Ophidiophobia Aura",
					"entries": [
						"Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema must succeed on a {17} Wisdom saving throw or become {frightened} of snakes and yuan-ti. A {frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this anathama's aura for the next 24 hours."
					]
				},
				{
					"name": "Six Heads",
					"entries": [
						"The anathema has advantage on saves against being {blinded}, {charmed}, {deafened}, {frightened}, {stunned}, or knocked {unconscious}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Anathema Form Only)",
					"entries": [
						"The anathema makes two Claw attacks and one Flurry of Bites attack."
					]
				},
				{
					"name": "Claw (Anathema Form Only)",
					"entries": [
						"{1d20+10} to hit, reach 10 ft., one target. 13 (2d6 + 6}) slashing damage."
					]
				},
				{
					"name": "Flurry of Bites (Anathema Form Only)",
					"entries": [
						"{1d20+10} to hit, reach 10 ft., one creature. 27 (6d6 + 6}) piercing damage plus 14 (4d6}) poison damage."
					]
				},
				{
					"name": "Constrict (Snake Form Only)",
					"entries": [
						"{1d20+10} to hit, reach 15 ft., one Large or smaller creature. 16 (3d6 + 6}) bludgeoning damage plus 7 (2d6}) acid damage, and the target is {grappled} (escape {16}). Until this grapple ends, the target is {restrained}, and it takes 16 (3d6 + 6}) bludgeoning damage plus 7 (2d6}) acid damage at the start of each of its turns. The anathema can constrict only one creature at a time."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The anathema transforms into a Huge constrictor snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-anathema.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"A",
				"B",
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"F"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Broodguard",
			"source": "MPMM",
			"page": 273,
			"otherSources": [
				{
					"source": "VGM",
					"page": 203
				}
			],
			"size": [
				"M"
			],
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "7d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 14,
			"con": 14,
			"int": 6,
			"wis": 11,
			"cha": 4,
			"save": {
				"str": "+4",
				"dex": "+4",
				"wis": "+2"
			},
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Reckless",
					"entries": [
						"At the start of its turn, the broodguard can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The broodguard makes one Bite attack and two Claw attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 6 (1d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-broodguard.mp3"
			},
			"traitTags": [
				"Reckless"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Mind Whisperer",
			"source": "MPMM",
			"page": 274,
			"otherSources": [
				{
					"source": "VGM",
					"page": 204
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 71,
				"formula": "13d8 + 13"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 14,
			"cha": 16,
			"save": {
				"wis": "+4",
				"cha": "+5"
			},
			"skill": {
				"deception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ animal friendship} (snakes only)",
						"{ message}",
						"{ minor illusion}",
						"{ prestidigitation}"
					],
					"daily": {
						"3": [
							"{ suggestion}"
						],
						"2e": [
							"{ detect thoughts}",
							"{ hypnotic pattern}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the yuan-ti's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sseth's Blessing",
					"entries": [
						"When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9 temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The yuan-ti makes two Bite attacks and one Scimitar attack, or it makes two Spectral Fangs attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) piercing damage plus 7 (2d6}) poison damage."
					]
				},
				{
					"name": "Scimitar (Yuan-ti Form Only)",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Spectral Fangs",
					"entries": [
						"{@atk rs} +5} to hit, range 120 ft., one target. 16 (3d8 + 3}) psychic damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The yuan-ti transforms into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. If it dies, it stays in its current form."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-mind-whisperer.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"I",
				"Y"
			],
			"spellcastingTags": [
				"F"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Nightmare Speaker",
			"source": "MPMM",
			"page": 275,
			"otherSources": [
				{
					"source": "VGM",
					"page": 205
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 71,
				"formula": "13d8 + 13"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"wis": "+3",
				"cha": "+5"
			},
			"skill": {
				"deception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {13}):"
					],
					"will": [
						"{ animal friendship} (snakes only)",
						"{ mage hand}",
						"{ message}",
						"{ prestidigitation}"
					],
					"daily": {
						"3": [
							"{ suggestion}"
						],
						"2e": [
							"{ darkness}",
							"{ fear}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the yuan-ti's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The yuan-ti makes one Constrict attack and one Scimitar attack, or it makes two Spectral Fangs attacks."
					]
				},
				{
					"name": "Constrict",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one target. 10 (2d6 + 3}) bludgeoning damage, and the target is {grappled} (escape {14}) if it is a Large or smaller creature. Until this grapple ends, the target is {restrained}. The yuan-ti can constrict only one creature at a time."
					]
				},
				{
					"name": "Scimitar (Yuan-ti Form Only)",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Spectral Fangs",
					"entries": [
						"{@atk rs} +5} to hit, range 120 ft., one target. 16 (3d8 + 3}) necrotic damage."
					]
				},
				{
					"name": "Invoke Nightmare (Recharges after a Short or Long Rest)",
					"entries": [
						"The yuan-ti taps into the nightmares of one creature it can see within 60 feet of it and creates an illusory, immobile manifestation of the creature's deepest fears, visible only to that creature.",
						"The target must make a {13} Intelligence saving throw. On a failed save, the target takes 22 (4d10}) psychic damage and is {frightened} of the manifestation, believing it to be real. The yuan-ti must concentrate to maintain the illusion (as if concentrating on a spell), which lasts for up to 1 minute and can't be harmed. The target can repeat the saving throw at the end of each of its turns, ending the illusion on a success or taking 11 (2d10}) psychic damage on a failure."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The yuan-ti transforms into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. If it dies, it stays in its current form."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-nightmare-speaker.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"B",
				"N",
				"Y"
			],
			"spellcastingTags": [
				"F"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Pit Master",
			"source": "MPMM",
			"page": 276,
			"otherSources": [
				{
					"source": "VGM",
					"page": 206
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"warlock"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 88,
				"formula": "16d8 + 16"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"wis": "+4",
				"cha": "+6"
			},
			"skill": {
				"deception": "+6",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {14}):"
					],
					"will": [
						"{ animal friendship} (snakes only)",
						"{ guidance}",
						"{ mage hand}",
						"{ message}"
					],
					"daily": {
						"3": [
							"{ suggestion}"
						],
						"2e": [
							"{ hold person}",
							"{ invisibility}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the yuan-ti's {@sense darkvision}."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The yuan-ti makes three Bite attacks or two Spectral Fangs attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+6} to hit, reach 5 ft., one target. 5 (1d4 + 3}) piercing damage plus 7 (2d6}) poison damage."
					]
				},
				{
					"name": "Spectral Fangs",
					"entries": [
						"{@atk rs} +6} to hit, range 120 ft., one target. 16 (3d8 + 3}) poison damage."
					]
				},
				{
					"name": "Merrshaulk's Slumber (1/Day)",
					"entries": [
						"The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a {13} Constitution saving throw or fall into a magical sleep and be {unconscious} for 10 minutes. A sleeping target awakens if it takes damage or if someone uses an action to shake or slap it awake. This magical sleep has no effect on a creature immune to being {charmed}."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The yuan-ti transforms into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-pit-master.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"I",
				"P"
			],
			"spellcastingTags": [
				"F"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"unconscious"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Zaratan",
			"source": "MPMM",
			"page": 278,
			"otherSources": [
				{
					"source": "MTF",
					"page": 201
				}
			],
			"size": [
				"G"
			],
			"type": "elemental",
			"alignment": [
				"N"
			],
			"alignmentPrefix": "Typically ",
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 307,
				"formula": "15d20 + 150"
			},
			"speed": {
				"walk": 40,
				"swim": 40
			},
			"str": 30,
			"dex": 10,
			"con": 30,
			"int": 2,
			"wis": 21,
			"cha": 18,
			"save": {
				"wis": "+12",
				"cha": "+11"
			},
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 15,
			"resist": [
				"cold",
				"fire",
				"lightning",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"paralyzed",
				"petrified",
				"poisoned",
				"stunned"
			],
			"cr": "22",
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the zaratan fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The elemental deals double damage to objects and structures (included in Earth-Shaking Movement)."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The zaratan makes one Bite attack and one Stomp attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+17} to hit, reach 20 ft., one target. 28 (4d8 + 10}) force damage."
					]
				},
				{
					"name": "Stomp",
					"entries": [
						"{1d20+17} to hit, reach 20 ft., one target. 26 (3d10 + 10}) thunder damage."
					]
				},
				{
					"name": "Spit Rock",
					"entries": [
						"1d20+17} to hit, range 120 ft./240 ft., one target. 31 (6d8 + 10}) force damage."
					]
				},
				{
					"name": "Spew Debris {Recharge - 5}",
					"entries": [
						"The zaratan exhales rocky debris in a 90-foot cube. Each creature in that area must make a {25} Dexterity saving throw. A creature takes 33 (6d10}) bludgeoning damage on a failed save, or half as much damage on a successful one. A creature that fails the save by 5 or more is knocked {prone}."
					]
				}
			],
			"bonus": [
				{
					"name": "Earth-Shaking Movement",
					"entries": [
						"After moving at least 10 feet on the ground, the zaratan sends a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes {@quickref difficult terrain||3} for 1 minute. Each creature on the ground that is concentrating must succeed on a {25} Constitution saving throw or the creature's concentration is broken. The shock wave deals 100 thunder damage to all structures in contact with the ground in the area. If a creature is near a structure that collapses, the creature might be buried; a creature within half the distance of the structure's height must make a {25} Dexterity saving throw. On a failed save, the creature takes 17 (5d6}) bludgeoning damage, is knocked {prone}, and is trapped in the rubble. A trapped creature is {restrained}, requiring a successful {20} Strength ({@skill Athletics}) check as an action to escape. Another creature within 5 feet of the buried creature can use its action to clear rubble and grant advantage on the check. If three creatures use their actions in this way, the check is an automatic success. On a successful save, the creature takes half as much damage and doesn't fall {prone} or become trapped."
					]
				}
			],
			"legendary": [
				{
					"name": "Stomp",
					"entries": [
						"The zaratan makes one Stomp attack."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The zaratan moves up to its speed."
					]
				},
				{
					"name": "Spit (Costs 2 Actions)",
					"entries": [
						"The zaratan makes one Spit Rock attack."
					]
				},
				{
					"name": "Retract (Costs 2 Actions)",
					"entries": [
						"The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is {restrained}. The next time it takes a legendary action, it must take its Revitalize or Emerge action."
					]
				},
				{
					"name": "Revitalize (Costs 2 Actions)",
					"entries": [
						"The zaratan can use this option only if it is retracted in its shell. It regains 52 ({@dice 5d20}) hit points. The next time it takes a legendary action, it must take its Emerge action."
					]
				},
				{
					"name": "Emerge (Costs 2 Actions)",
					"entries": [
						"The zaratan emerges from its shell and makes one Spit Rock attack. It can use this option only if it is retracted in its shell."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"grassland",
				"hill",
				"mountain",
				"underdark"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/zaratan.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"O",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH",
				"RW"
			],
			"conditionInflict": [
				"prone",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Zariel",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 280,
			"otherSources": [
				{
					"source": "MTF",
					"page": 180
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 420,
				"formula": "29d10 + 261"
			},
			"speed": {
				"walk": 50,
				"fly": 150
			},
			"str": 27,
			"dex": 24,
			"con": 28,
			"int": 26,
			"wis": 27,
			"cha": 30,
			"save": {
				"int": "+16",
				"wis": "+16",
				"cha": "+18"
			},
			"skill": {
				"intimidation": "+18",
				"perception": "+16"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 26,
			"resist": [
				"cold",
				"fire",
				"radiant",
				{
					"resist": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't silvered",
					"cond": true
				}
			],
			"immune": [
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "26",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Zariel casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {26}):"
					],
					"will": [
						"{ alter self} (can become Medium when changing her appearance)",
						"{ detect evil and good}",
						"{ fireball}",
						"{ invisibility} (self only)",
						"{ major image}",
						"{ wall of fire}"
					],
					"daily": {
						"3e": [
							"{ blade barrier}",
							"{ dispel evil and good}",
							"{ finger of death}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede Zariel's {@sense darkvision}."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Zariel fails a saving throw, she can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Zariel has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn't function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Zariel makes three Flail or Longsword attacks. She can replace one attack with a use of Horrid Touch, if available."
					]
				},
				{
					"name": "Flail",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 17 (2d8 + 8}) force damage plus 36 (8d8}) fire damage."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{1d20+16} to hit, reach 10 ft., one target. 17 (2d8 + 8}) radiant damage, or 19 (2d10 + 8}) radiant damage when used with two hands, plus 36 (8d8}) fire damage."
					]
				},
				{
					"name": "Horrid Touch {Recharge - 5}",
					"entries": [
						"Zariel touches one creature within 10 feet of her. The target must succeed on a {26} Constitution saving throw or take 44 (8d10}) necrotic damage and be {poisoned} for 1 minute. While {poisoned} in this way, the target is {blinded} and {deafened}. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Zariel teleports, along with any equipment she is wearing or carrying, up to 120 feet to an unoccupied space she can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Teleport",
					"entries": [
						"Zariel uses Teleport."
					]
				},
				{
					"name": "Immolating Gaze (Costs 2 Actions)",
					"entries": [
						"Zariel turns her magical gaze toward one creature she can see within 120 feet of her and commands it to burn. The target must succeed on a {26} Wisdom saving throw or take 22 (4d10}) fire damage."
					]
				}
			],
			"legendaryGroup": {
				"name": "Zariel",
				"source": "MPMM"
			},
			"traitTags": [
				"Devil's Sight",
				"Legendary Resistances",
				"Magic Resistance",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"F",
				"N",
				"O",
				"R"
			],
			"damageTagsLegendary": [
				"F"
			],
			"damageTagsSpell": [
				"B",
				"F",
				"N",
				"P",
				"S"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"deafened",
				"poisoned"
			],
			"conditionInflictLegendary": [
				"frightened"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Zuggtmoy",
			"isNamedCreature": true,
			"source": "MPMM",
			"page": 281,
			"otherSources": [
				{
					"source": "MTF",
					"page": 157
				}
			],
			"size": [
				"L"
			],
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 304,
				"formula": "32d10 + 128"
			},
			"speed": {
				"walk": 30
			},
			"str": 22,
			"dex": 15,
			"con": 18,
			"int": 20,
			"wis": 19,
			"cha": 24,
			"save": {
				"dex": "+9",
				"con": "+11",
				"wis": "+11"
			},
			"skill": {
				"perception": "+11"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 21,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "that is nonmagical",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "23",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Zuggtmoy casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save {22}):"
					],
					"will": [
						"{ detect magic}",
						"{ locate animals or plants}"
					],
					"daily": {
						"3e": [
							"{ dispel magic}",
							"{ entangle}",
							"{ plant growth}"
						],
						"1e": [
							"{ etherealness}",
							"{ teleport}"
						]
					},
					"ability": "cha",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Zuggtmoy fails a saving throw, she can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Zuggtmoy has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Zuggtmoy makes three Pseudopod attacks."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{1d20++13} to hit, reach 10 ft., one target. 15 (2d8 + 6}) force damage plus 9 (2d8}) poison damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Infestation Spores (3/Day)",
					"entries": [
						"Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any creature in the cloud when it appears, or that enters it later, must make a {19} Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy, which lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a {@creature quaggoth spore servant||spore servant} if it's a type of creature that can be."
					]
				},
				{
					"name": "Mind Control Spores {Recharge - 5}",
					"entries": [
						"Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts in the cloud when it appears, or that enter it later, must make a {19} Wisdom saving throw. On a successful save, a creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected in this way, the creature is {charmed} by her and can't be reinfected by these spores."
					]
				}
			],
			"reaction": [
				{
					"name": "Protective Thrall",
					"entries": [
						"When Zuggtmoy is hit by an attack roll, one creature within 10 feet of her that is {charmed} by her is hit by the attack instead."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Zuggtmoy makes one Pseudopod attack."
					]
				},
				{
					"name": "Exert Will",
					"entries": [
						"One creature {charmed} by Zuggtmoy that she can see must use its reaction, if a available, to move up to its speed as she directs or to make one weapon attack against a target that she designates."
					]
				}
			],
			"legendaryGroup": {
				"name": "Zuggtmoy",
				"source": "MPMM"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"I"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"O"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		}
	]
}
