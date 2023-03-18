export const bestiaryVRGR = {
	"monster": [
		{
			"name": "Bodytaker Plant",
			"source": "VRGR",
			"page": 226,
			"size": [
				"H"
			],
			"type": "plant",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 92,
				"formula": "8d12 + 40"
			},
			"speed": {
				"walk": 10,
				"climb": 10,
				"swim": 10
			},
			"str": 18,
			"dex": 8,
			"con": 20,
			"int": 14,
			"wis": 14,
			"cha": 18,
			"senses": [
				"blindsight 120 ft. (blind beyond this radius)"
			],
			"passive": 12,
			"vulnerable": [
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"frightened",
				"prone"
			],
			"languages": [
				"Deep Speech",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Podling Link",
					"entries": [
						"The plant can see through and communicate telepathically with any of its podlings within 10 miles of it."
					]
				},
				{
					"name": "Rejuvenation",
					"entries": [
						"When the plant dies, it returns to life in the place where it died {@dice 1d12} months later, unless the ground where it took root is sown with salt or soaked with poison."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The plant doesn't require sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The plant makes three Vine Lash attacks."
					]
				},
				{
					"name": "Vine Lash",
					"entries": [
						"{1d20+7} to hit, reach 20 ft., one target. 11 (2d6 + 4}) slashing damage. If the target is a creature, it is {grappled} (escape {15}). Until the grapple ends, the target is {restrained}. The plant has four vines, each of which can grapple one target."
					]
				},
				{
					"name": "Entrapping Pod",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one Medium or smaller creature {grappled} by the plant. 22 (4d8 + 4}) acid damage, and the target is pulled into the plant's space and enveloped by the pod, and the grapple ends. While enveloped, the target is {restrained}, and it has total cover against attacks and effects originating outside the pod. The enveloped target must also immediately succeed on a {16} Constitution saving throw or be {stunned} by the plant's sapping enzymes until it is removed from the pod or the plant dies. The enveloped target doesn't require air and gains 1 level of {exhaustion} for each hour it spends in the pod. If the target dies while enveloped, it immediately emerges from the pod as a living podling, wearing or carrying all of the original creature's equipment.",
						"As an action, a creature within 5 feet of the bodytaker plant that is outside the pod can open the pod and pull the target free with a successful {15} Strength check. If the plant dies, the target is no longer {restrained} and can escape from the pod by spending 10 feet of movement, exiting {prone}. The plant has one pod, which can envelop one creature at a time."
					]
				}
			],
			"traitTags": [
				"Rejuvenation",
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS",
				"TP"
			],
			"damageTags": [
				"A",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained",
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Boneless",
			"source": "VRGR",
			"page": 228,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				12
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 15,
			"int": 1,
			"wis": 10,
			"cha": 1,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"bludgeoning",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"understands the languages it knew in life but can't speak"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Compression",
					"entries": [
						"The boneless can move through any opening at least 1 inch wide without squeezing. It can also squeeze to fit into a space that a Tiny creature could fit in."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The boneless doesn't require sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The boneless makes two Slam attacks. If both attacks hit a Large or smaller creature, the creature is {grappled} (escape {13}), and the boneless can use Crushing Embrace."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 5 (1d4 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Crushing Embrace",
					"entries": [
						"The boneless wraps its body around a Large or smaller creature {grappled} by it. While the boneless is attached, the target is {blinded} and is unable to breathe. The target must succeed on a {13} Strength saving throw at the start of each of the boneless' turns or take 5 (1d4 + 3}) bludgeoning damage. If something moves the target, the boneless moves with it. The boneless can detach itself by spending 5 feet of its movement. A creature, including the target, can use its action to try to detach the boneless and force it to move into the nearest unoccupied space, doing so with a successful {13} Strength check. When the boneless dies, it detaches from any creature it is attached to."
					]
				}
			],
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
				"LF"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"blinded",
				"grappled"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Brain in a Jar",
			"source": "VRGR",
			"page": 278,
			"otherSources": [
				{
					"source": "IDRotF",
					"page": 278
				}
			],
			"size": [
				"S"
			],
			"type": "undead",
			"alignment": [
				"A"
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
				"average": 55,
				"formula": "10d6 + 20"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 10,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 1,
			"dex": 3,
			"con": 15,
			"int": 19,
			"wis": 10,
			"cha": 15,
			"save": {
				"int": "+6",
				"cha": "+4"
			},
			"senses": [
				"blindsight 120 ft. (blind beyond this radius); see also \"detect sentience\" below"
			],
			"passive": 10,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"paralyzed",
				"poisoned",
				"prone"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The brain's innate spellcasting ability is Intelligence (spell save {14}, +6} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{ chill touch} (see \"Actions\" below)",
						"{ detect thoughts}",
						"{ mage hand}",
						"{ zone of truth}"
					],
					"daily": {
						"3e": [
							"{ charm person}",
							"{ hold person}"
						],
						"1e": [
							"{ compulsion}",
							"{ hold monster}",
							"{ sleep} (3rd-level version)",
							"{ Tasha's hideous laughter}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Detect Sentience",
					"entries": [
						"The brain can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a { mind blank} spell."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The brain has advantage on saving throws against spells and other magic effects."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The brain doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Chill Touch (Cantrip)",
					"entries": [
						"{@atk rs} +6} to hit, range 120 ft., one creature. 13 (3d8}) necrotic damage, and the target can't regain hit points until the start of the brain's next turn. If the target is undead, it also has disadvantage on attack rolls against the brain until the end of the brain's next turn."
					]
				},
				{
					"name": "Mind Blast {Recharge - 5}",
					"entries": [
						"The brain magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {14} Intelligence saving throw or take 17 (3d8 + 4}) psychic damage and be {stunned} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"traitTags": [
				"Magic Resistance",
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N",
				"Y"
			],
			"damageTagsSpell": [
				"N"
			],
			"spellcastingTags": [
				"I",
				"P"
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
				"paralyzed",
				"prone",
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Carrion Stalker",
			"source": "VRGR",
			"page": 230,
			"size": [
				"T"
			],
			"type": "monstrosity",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 35,
				"formula": "10d4 + 10"
			},
			"speed": {
				"walk": 30,
				"burrow": 30
			},
			"str": 6,
			"dex": 16,
			"con": 12,
			"int": 2,
			"wis": 13,
			"cha": 6,
			"skill": {
				"stealth": "+7"
			},
			"senses": [
				"tremorsense 60 ft."
			],
			"passive": 11,
			"conditionImmune": [
				"blinded"
			],
			"cr": "3",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The carrion stalker makes three Tentacle attacks. If it is attached to a creature, it can replace one Tentacle attack with Larval Burst, if available."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one creature. 5 (1d4 + 3}) piercing damage, and the carrion stalker attaches to the target and pulls itself into the target's space. While attached, the carrion stalker moves with the target and has advantage on attack rolls against it.",
						"A creature can use its action to try to detach the carrion stalker and force it to move into the nearest unoccupied space, doing so with a successful {11} Strength check. On its turn, the carrion stalker can detach itself from the target by using 5 feet of movement. When it dies, the carrion stalker detaches from any creature it is attached to."
					]
				},
				{
					"name": "Larval Burst (1/Day)",
					"entries": [
						"The carrion stalker releases a burst of larvae in a 10-foot-radius sphere centered on itself. Each creature in that area must succeed on a {13} Constitution saving throw or be {poisoned}. A creature {poisoned} in this way takes 7 (2d6}) poison damage at the start of each of its turns as larvae infest its body. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Any effect that cures disease or removes the {poisoned} condition instantly kills the larvae in the creature, ending the effect on it.",
						"If a creature is reduced to 0 hit points by the infestation, it dies. The larvae remain in the corpse, and one survives to become a fully grown carrion stalker in {@dice 1d4} weeks. Any effect that cures diseases or removes the {poisoned} condition that targets the corpse instantly kills the larvae."
					]
				}
			],
			"senseTags": [
				"T"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"damageTags": [
				"I",
				"P"
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
			"name": "Carrionette",
			"source": "VRGR",
			"page": 231,
			"size": [
				"S"
			],
			"type": "construct",
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
				"formula": "6d6 + 6"
			},
			"speed": {
				"walk": 25
			},
			"str": 10,
			"dex": 15,
			"con": 12,
			"int": 8,
			"wis": 14,
			"cha": 14,
			"passive": 12,
			"resist": [
				"poison",
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands the languages of its creator"
			],
			"cr": "1",
			"trait": [
				{
					"name": "False Object",
					"entries": [
						"If the carrionette is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the carrionette move or act, that creature must succeed on a {15} Wisdom (Perception) check to discern that the carrionette is animate."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The carrionette doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Silver Needle",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one creature. 1 piercing damage plus 3 (1d6}) necrotic damage, and the target must succeed on a {12} Charisma saving throw or become cursed for 1 minute. While cursed in this way, the target's speed is reduced by 10 feet, and it must roll a {@dice 1d4} and subtract the number rolled from each ability check or attack roll it makes."
					]
				},
				{
					"name": "Soul Swap",
					"entries": [
						"The carrionette targets a creature it can see within 15 feet of it that is cursed by its Silver Needle. Unless the target is protected by a { protection from evil and good} spell, it must succeed on a {12} Charisma saving throw or have its consciousness swapped with the carrionette. The carrionette gains control of the target's body, and the target is {unconscious} for 1 hour, after which it gains control of the carrionette's body. While controlling the target's body, the carrionette retains its Intelligence, Wisdom, and Charisma scores. It otherwise uses the controlled body's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.",
						"If the carrionette's body is destroyed, both the carrionette and the target die. A { protection from evil and good} spell cast on the controlled body drives the carrionette out and returns the consciousness of both creatures to their original bodies. The swap is also undone if the controlled body takes damage from the carrionette's Silver Needle."
					]
				}
			],
			"traitTags": [
				"Unusual Nature"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"unconscious"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Death's Head",
			"source": "VRGR",
			"page": 232,
			"size": [
				"T"
			],
			"type": "undead",
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 17,
				"formula": "5d4 + 5"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 8,
			"dex": 13,
			"con": 12,
			"int": 5,
			"wis": 14,
			"cha": 3,
			"passive": 12,
			"resist": [
				"necrotic"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Beheaded Form",
					"entries": [
						"When created, a death's head takes one of three forms: Aberrant Head, Gnashing Head, or Petrifying Head. This form determines the creature's attack."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The death's head doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Gnashing Bite (Gnashing Head Only)",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 4 (1d6 + 1}) piercing damage plus 7 (2d6}) necrotic damage."
					]
				},
				{
					"name": "Mind-Bending Bite (Aberrant Head Only)",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 4 (1d6 + 1}) piercing damage plus 5 (1d10}) necrotic damage, and the target must succeed on a {10} Intelligence saving throw or it can't take a reaction until the end of its next turn. Moreover, on its next turn, the target must choose whether it gets a move, an action, or a bonus action; it gets only one of the three."
					]
				},
				{
					"name": "Petrifying Bite (Petrifying Head Only)",
					"entries": [
						"{1d20+3} to hit, reach 5 ft., one target. 3 (1d4 + 1}) piercing damage, and the target must succeed on a {10} Constitution saving throw or be {restrained} as it begins to turn to stone. The target must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the target is {petrified} for 10 minutes."
					]
				}
			],
			"traitTags": [
				"Unusual Nature"
			],
			"damageTags": [
				"N",
				"P"
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
			"name": "Dullahan",
			"source": "VRGR",
			"page": 233,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|PHB}"
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
			"str": 18,
			"dex": 14,
			"con": 16,
			"int": 11,
			"wis": 15,
			"cha": 16,
			"save": {
				"con": "+7"
			},
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 16,
			"resist": [
				"cold",
				"lightning",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands the languages it knew in life but can't speak"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Headless Summoning (Recharges after a Short or Long Rest)",
					"entries": [
						"If the dullahan is reduced to 0 hit points, it doesn't die or fall {unconscious}. Instead, it regains 97 hit points. In addition, it summons three {@creature death's head|VRGR|death's heads}, one of each type, in unoccupied spaces within 5 feet of it. The death's heads are under the dullahan's control and act immediately after the dullahan in the initiative order. Additionally, the dullahan can now use the options in the \"Mythic Actions\" section. Award a party an additional 5,900 XP (11,800 XP total) for defeating the dullahan after it uses Headless Summoning."
					]
				},
				{
					"name": "Legendary Resistance (2/Day)",
					"entries": [
						"If the dullahan fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The dullahan doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The dullahan makes two attacks."
					]
				},
				{
					"name": "Battleaxe",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 (1d10 + 4}) slashing damage if used with two hands, plus 11 (2d10}) necrotic damage. If the dullahan scores a critical hit against a creature, the target must succeed on a {15} Constitution saving throw or the dullahan cuts off the target's head. The target dies if it can't survive without the lost head. A creature that doesn't have or need a head, or has legendary actions, instead takes an extra 27 (6d8}) slashing damage."
					]
				},
				{
					"name": "Fiery Skull",
					"entries": [
						"{@atk rs} +7} to hit, range 120 ft., one target. 14 (2d10 + 3}) fire damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"The dullahan makes one attack."
					]
				},
				{
					"name": "Frightful Presence (Costs 2 Actions)",
					"entries": [
						"Each creature of the dullahan's choice within 30 feet of it must succeed on a {15} Wisdom saving throw or become {frightened} of the dullahan until the end of its next turn."
					]
				},
				{
					"name": "Head Hunt (Costs 3 Actions)",
					"entries": [
						"The dullahan moves up to its speed without provoking opportunity attacks and makes one Battleaxe attack with advantage. If the attack hits, but is not a critical hit, the attack deals an extra 27 (6d8}) necrotic damage."
					]
				}
			],
			"mythic": [
				{
					"name": "",
					"entries": [
						"If the dullahan's Headless Summoning trait is active, it can use the options below as legendary actions."
					]
				},
				{
					"name": "Coordinated Assault",
					"entries": [
						"The dullahan makes a Battleaxe attack, and then one {@creature death's head|VRGR} the dullahan can see within 30 feet of it can use its reaction to make a melee attack."
					]
				},
				{
					"name": "Headless Wail (Costs 2 Actions)",
					"entries": [
						"An echoing shriek issues from the dullahan's headless stump. Each creature of the dullahan's choice within 10 feet of it must make a {15} Wisdom saving throw. Each creature takes 16 (3d10}) psychic damage on a failed save, or half as much damage on a successful one. If one or more creatures fail the saving throw, the dullahan gains 10 temporary hit points."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances",
				"Unusual Nature"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"LF"
			],
			"damageTags": [
				"F",
				"N",
				"S",
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
			"name": "Elise",
			"isNamedCreature": true,
			"source": "VRGR",
			"page": 143,
			"size": [
				"M"
			],
			"type": "construct",
			"alignment": [
				"N"
			],
			"ac": [
				9
			],
			"hp": {
				"average": 93,
				"formula": "11d8 + 44"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 9,
			"con": 18,
			"int": 6,
			"wis": 10,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"cold",
				"lightning",
				"poison",
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
				"understands the languages of its creator but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Immutable Form",
					"entries": [
						"Elise is immune to any spell or effect that would alter her form."
					]
				},
				{
					"name": "Lightning Absorption",
					"entries": [
						"Whenever Elise is subjected to lightning damage, she takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Elise has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Elise's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Elise makes two slam attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 13 (2d8 + 4}) bludgeoning damage."
					]
				}
			],
			"traitTags": [
				"Damage Absorption",
				"Immutable Form",
				"Magic Resistance",
				"Magic Weapons"
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
			"name": "Gallows Speaker",
			"source": "VRGR",
			"page": 234,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				12
			],
			"hp": {
				"average": 85,
				"formula": "19d8"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 8,
			"dex": 14,
			"con": 10,
			"int": 10,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+4"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"truesight 60 ft."
			],
			"passive": 17,
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
				"any languages its component spirits knew in life"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Divination Senses",
					"entries": [
						"The gallows speaker can see 60 feet into the Ethereal Plane when it is on the Material Plane and vice versa."
					]
				},
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The gallows speaker can move through other creatures and objects as if they were {@quickref difficult terrain||3}. It takes 5 (1d10}) force damage if it ends it turn inside an object."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The gallows speaker doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Foretelling Touch",
					"entries": [
						"{1d20 +7} to hit, reach 5 ft., one creature. 15 (2d10 + 4}) psychic damage, and the target must roll a {@dice d4} and subtract the number rolled from the next attack roll or saving throw it makes before the start of the gallows speaker's next turn."
					]
				},
				{
					"name": "Suffering Echoes",
					"entries": [
						"The gallows speaker targets a creature it can see within 30 feet of it. The target must make a {15} Wisdom saving throw. On a failed save, the target takes 19 (3d12}) psychic damage, and waves of painful memories leap from the target to up to three other creatures of the gallows speaker's choice that are within 30 feet of the target, each of which takes 13 (3d8}) psychic damage."
					]
				}
			],
			"traitTags": [
				"Incorporeal Movement",
				"Unusual Nature"
			],
			"senseTags": [
				"U"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Greater Star Spawn Emissary",
			"source": "VRGR",
			"page": 245,
			"size": [
				"H"
			],
			"type": "aberration",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 290,
				"formula": "20d12 + 160"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 24,
			"dex": 13,
			"con": 26,
			"int": 27,
			"wis": 22,
			"cha": 25,
			"save": {
				"con": "+15",
				"int": "+15",
				"wis": "+13",
				"cha": "+14"
			},
			"skill": {
				"arcana": "+22",
				"perception": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 23,
			"resist": [
				"acid",
				"force",
				"necrotic",
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"all",
				"telepathy 1,000 ft."
			],
			"cr": "21",
			"trait": [
				{
					"name": "Legendary Resistance (4/Day)",
					"entries": [
						"If the emissary fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The emissary doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The emissary makes three attacks."
					]
				},
				{
					"name": "Lashing Maw",
					"entries": [
						"{1d20+14} to hit, reach 15 ft., one target. 20 (2d10 + 7}) piercing damage plus 13 (3d8}) acid damage."
					]
				},
				{
					"name": "Psychic Orb",
					"entries": [
						"{@atk rs} +15} to hit, range 120 ft., one creature. 27 (3d12 + 8}) psychic damage."
					]
				},
				{
					"name": "Unearthly Bile {Recharge - 5}",
					"entries": [
						"The emissary expels bile that splashes all creatures in a 30-foot-radius sphere centered on a point within 120 feet of the emissary. Each creature in that area must make a {23} Dexterity saving throw, taking 55 (10d10}) acid damage on a failed save, or half as much damage on a successful one. For each creature that fails the saving throw, a {@creature gibbering mouther} (see its entry in the Monster Manual) appears in an unoccupied space on a surface that can support it within 30 feet of that creature. The gibbering mouthers act right after the emissary on the same initiative count, gaining a +7 bonus to their attack and damage rolls, and fighting until they are destroyed. They disappear when the emissary dies."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"The emissary teleports up to 30 feet to an unoccupied space it can see and makes one attack."
					]
				},
				{
					"name": "Warp Space (Costs 2 Actions)",
					"entries": [
						"The emissary causes the ground in a 20-foot square that it can see within 90 feet of it to turn into teeth and maws until the start of its next turn. The area becomes {@quickref difficult terrain||3} for the duration. Any creature takes 10 (3d6}) piercing damage for each 5 feet it moves on this terrain."
					]
				},
				{
					"name": "Mind Cloud (Costs 3 Actions)",
					"entries": [
						"The emissary unleashes a psychic wave. Each creature within 30 feet of the emissary must succeed on a {23} Wisdom saving throw or take 32 (5d12}) psychic damage. In addition, every spell ends on creatures and objects of the emissary's choice in that area."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances",
				"Unusual Nature"
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
				"P",
				"Y"
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
			"name": "Gremishka",
			"source": "VRGR",
			"page": 235,
			"size": [
				"T"
			],
			"type": "monstrosity",
			"ac": [
				12
			],
			"hp": {
				"average": 10,
				"formula": "4d4"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 14,
			"con": 10,
			"int": 12,
			"wis": 11,
			"cha": 4,
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"languages": [
				"understands Common but can't speak"
			],
			"cr": "1/8",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 2 (1d4 + 2}) piercing damage plus 3 (1d6}) force damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Magic Allergy (1/Day)",
					"entries": [
						"Immediately after a creature within 30 feet of the gremishka casts a spell, the gremishka can spontaneously react to the magic. Roll a {@dice d6} to determine the effect:",
						{
							"type": "item",
							"name": "1-2",
							"entry": "The gremishka emanates magical energy. Each creature within 30 feet of the gremishka must succeed on a {10} Constitution saving throw or take 3 (1d6}) force damage."
						},
						{
							"type": "item",
							"name": "3-4",
							"entry": "The gremishka surges with magical energy and regains 3 ({@dice 1d6}) hit points."
						},
						{
							"type": "item",
							"name": "5-6",
							"entry": "The gremishka explodes and dies, and one swarm of gremishkas instantly appears in the space where this gremishka died. The swarm uses the gremishka's initiative."
						}
					]
				}
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
				"O",
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
			"name": "Inquisitor of the Mind Fire",
			"source": "VRGR",
			"page": 248,
			"size": [
				"M"
			],
			"type": "humanoid",
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|PHB}"
					]
				}
			],
			"hp": {
				"average": 77,
				"formula": "14d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 14,
			"con": 12,
			"int": 17,
			"wis": 16,
			"cha": 19,
			"save": {
				"int": "+6",
				"wis": "+6",
				"cha": "+7"
			},
			"skill": {
				"insight": "+6",
				"perception": "+6"
			},
			"senses": [
				"truesight 30 ft."
			],
			"passive": 16,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"any three languages",
				"telepathy 120 ft."
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The inquisitor casts one of the following spells, requiring no components and using Charisma as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ arcane eye}",
						"{ calm emotions}",
						"{ detect magic}",
						"{ detect thoughts}",
						"{ dispel magic}",
						"{ sending}",
						"{ suggestion}"
					],
					"daily": {
						"1e": [
							"{ mass suggestion}",
							"{ modify memory}"
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
						"The inquisitor attacks twice with its Silver Longsword or uses Mind Fire twice."
					]
				},
				{
					"name": "Silver Longsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 ({@dice 1d10 + 4}) if used with two hands, plus 18 (4d8}) force damage."
					]
				},
				{
					"name": "Mind Fire",
					"entries": [
						"The inquisitor targets one creature it can see within 120 feet of it. The target must succeed on a {15} Intelligence saving throw or take 17 (3d8 + 4}) psychic damage and be {stunned} until the start of the inquisitor's next turn."
					]
				},
				{
					"name": "Inquisitor's Command {Recharge - 5}",
					"entries": [
						"Each creature of the inquisitor's choice that it can see within 60 feet of it must succeed on a {15} Wisdom saving throw or be {charmed} until the start of the inquisitor's next turn. On the {charmed} target's turn, the inquisitor can telepathically control the target's move, action, or both. When controlled in this way, the target can take only the Attack (inquisitor chooses the target) or Dash action."
					]
				}
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"X"
			],
			"damageTags": [
				"O",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
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
			"name": "Inquisitor of the Sword",
			"source": "VRGR",
			"page": 249,
			"size": [
				"M"
			],
			"type": "humanoid",
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|PHB}"
					]
				}
			],
			"hp": {
				"average": 91,
				"formula": "14d8 + 28"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 14,
			"con": 14,
			"int": 15,
			"wis": 18,
			"cha": 16,
			"save": {
				"int": "+5",
				"wis": "+7",
				"cha": "+6"
			},
			"skill": {
				"acrobatics": "+5",
				"athletics": "+4",
				"insight": "+7",
				"perception": "+7"
			},
			"senses": [
				"truesight 30 ft."
			],
			"passive": 17,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"any two languages",
				"telepathy 120 ft."
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The inquisitor casts one of the following spells, requiring no components and using Wisdom as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ detect magic}",
						"{ detect thoughts}",
						"{ dispel magic}",
						"{ sending}"
					],
					"daily": {
						"1e": [
							"{ dimension door}",
							"{ fly}",
							"{ greater invisibility}"
						]
					},
					"ability": "wis",
					"displayAs": "action"
				}
			],
			"trait": [
				{
					"name": "Metabolic Control",
					"entries": [
						"At the start of each of its turns, the inquisitor regains 10 hit points and can end one condition on itself, provided the inquisitor has at least 1 hit point."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The inquisitor attacks twice with its Silver Longsword. After it hits or misses with an attack, the inquisitor can teleport up to 30 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Silver Longsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 ({@dice 1d10 + 4}) if used with two hands, plus 18 (4d8}) force damage."
					]
				}
			],
			"bonus": [
				{
					"name": "Blink Step",
					"entries": [
						"The inquisitor teleports up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"X"
			],
			"damageTags": [
				"O",
				"S"
			],
			"damageTagsSpell": [
				"O"
			],
			"spellcastingTags": [
				"I",
				"P"
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
			"name": "Inquisitor of the Tome",
			"source": "VRGR",
			"page": 249,
			"size": [
				"M"
			],
			"type": "humanoid",
			"ac": [
				11
			],
			"hp": {
				"average": 77,
				"formula": "14d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 12,
			"con": 12,
			"int": 19,
			"wis": 16,
			"cha": 15,
			"save": {
				"int": "+7",
				"wis": "+6",
				"cha": "+5"
			},
			"skill": {
				"arcana": "+10",
				"history": "+7",
				"nature": "+7",
				"religion": "+10"
			},
			"senses": [
				"truesight 30 ft."
			],
			"passive": 13,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"any four languages",
				"telepathy 120 ft."
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The inquisitor casts one of the following spells, requiring no components and using Intelligence as the spellcasting ability (spell save {15}):"
					],
					"will": [
						"{ detect magic}",
						"{ dispel magic}",
						"{ levitate}",
						"{ mage armor}",
						"{ mage hand}",
						"{ sending}"
					],
					"daily": {
						"1e": [
							"{ Otiluke's resilient sphere}",
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
						"The inquisitor attacks twice."
					]
				},
				{
					"name": "Force Bolt",
					"entries": [
						"{@atk rs} +7} to hit, range 120 ft., one target. 22 (4d8 + 4}) force damage, and if the target is a Large or smaller creature, the inquisitor can push it up to 10 feet away."
					]
				},
				{
					"name": "Silver Longsword",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage, or 9 ({@dice 1d10 + 4}) if used with two hands, plus 18 (4d8}) force damage."
					]
				},
				{
					"name": "Implode {Recharge - 4}",
					"entries": [
						"Each creature in a 20-foot-radius sphere centered on a point the inquisitor can see within 120 feet of it must succeed on a {15} Constitution saving throw or take 31 (6d8 + 4}) force damage and be knocked {prone} and moved to the unoccupied space closest to the sphere's center. Large and smaller objects that aren't being worn or carried in the sphere automatically take the damage and are similarly moved."
					]
				}
			],
			"reaction": [
				{
					"name": "Telekinetic Deflection",
					"entries": [
						"In response to being hit by an attack roll, the inquisitor increases its AC by 4 against the attack. If this causes the attack to miss, the attacker is hit by the attack instead."
					]
				}
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"X"
			],
			"damageTags": [
				"O",
				"S"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Isolde",
			"isNamedCreature": true,
			"source": "VRGR",
			"page": 86,
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
				"L",
				"NX",
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"{@item scale mail|PHB}"
					]
				}
			],
			"hp": {
				"average": 82,
				"formula": "11d8 + 33"
			},
			"speed": {
				"walk": 30,
				"fly": 60
			},
			"str": 18,
			"dex": 18,
			"con": 16,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"str": "+7",
				"con": "+6",
				"int": "+5",
				"cha": "+6"
			},
			"skill": {
				"deception": "+6",
				"intimidation": "+6",
				"perception": "+4",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"cold",
				"fire",
				"lightning",
				"poison",
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
				"Abyssal",
				"Common",
				"Infernal"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Isolde's spellcasting ability is Charisma (spell save {14}). Isolde can innately cast the following spells, requiring no material components:"
					],
					"daily": {
						"1": [
							"{ plane shift} (self only)"
						],
						"3e": [
							"{ alter self}",
							"{ command}",
							"{ detect magic}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Fiendish Blessing",
					"entries": [
						"The AC of Isolde includes her Charisma bonus."
					]
				},
				{
					"name": "Magic Resistance Aura",
					"entries": [
						"While holding Nepenthe, Isolde creates an aura in a 10-foot radius around her. While this aura is active, Isolde and all creatures friendly to her in the aura have advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Isolde makes two melee attacks or uses its Fire Ray twice."
					]
				},
				{
					"name": "Nepenthe",
					"entries": [
						"{1d20+10} to hit, reach 5 ft.., one target. 11 (1d8 + 7}) slashing damage, or 12 (1d10 + 7}) slashing damage if used with two hands to make a melee attack. If the target is a fiend or an undead, it takes an extra 11 (2d10}) radiant damage."
					]
				},
				{
					"name": "Fire Ray",
					"entries": [
						"{@atk rs} +7} to hit, range 120 ft., one target. 10 (3d6}) fire damage."
					]
				},
				{
					"name": "Fiendish Charm",
					"entries": [
						"One humanoid Isolde can see within 30 feet of it must succeed on a {14} Wisdom saving throw or be magically {charmed} for 1 day. The {charmed} target obeys Isolde's spoken commands. If the target suffers any harm from Isolde or another creature or receives a suicidal command from Isolde, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to Isolde's Fiendish Charm for the next 24 hours."
					]
				}
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
				"I"
			],
			"damageTags": [
				"F",
				"R",
				"S"
			],
			"damageTagsSpell": [
				"B",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW"
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
			"name": "Jiangshi",
			"source": "VRGR",
			"page": 236,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				{
					"ac": 16,
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
				"walk": 20
			},
			"str": 18,
			"dex": 3,
			"con": 18,
			"int": 17,
			"wis": 14,
			"cha": 12,
			"save": {
				"con": "+8",
				"int": "+7",
				"wis": "+6",
				"cha": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 12,
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"any languages it knew in life"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Jiangshi Weaknesses",
					"entries": [
						"The jiangshi has the following flaws:",
						"{@i Fear of Its Own Reflection.} If the jiangshi sees its own reflection, it immediately uses its reaction, if available, to move as far away from the reflection as possible.",
						"{@i Susceptible to Holy Symbols.} While the jiangshi is wearing or touching a holy symbol, it automatically fails saving throws against effects that turn Undead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The jiangshi doesn't require air."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The jiangshi makes three Slam attacks and uses Consume Energy."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 13 (2d8 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Consume Energy",
					"entries": [
						"The jiangshi draws energy from a creature it can see within 30 feet of it. The target makes a {16} Constitution saving throw, taking 18 (4d8}) necrotic damage on a failed save, or half as much damage on a successful one. The jiangshi regains hit points equal to the amount of necrotic damage dealt. After regaining hit points from this action, the jiangshi gains the following benefits for 7 days: its walking speed increases to 40 feet, and it gains a flying speed equal to its walking speed and can hover.",
						"A Humanoid slain by this necrotic damage rises as a wight (see its entry in the Monster Manual) at the end of the jiangshi's turn. The wight acts immediately after the jiangshi in the initiative order. If this wight slays a Humanoid with its Life Drain, the wight transforms into a jiangshi 5 days later."
					]
				},
				{
					"name": "Change Shape",
					"entries": [
						"The jiangshi polymorphs into a Beast, a Humanoid, or an Undead that is Medium or Small or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying is absorbed or borne by the new form (the jiangshi's choice). It reverts to its true form if it dies."
					]
				}
			],
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"MW"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Lesser Star Spawn Emissary",
			"source": "VRGR",
			"page": 245,
			"size": [
				"M"
			],
			"type": "aberration",
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 241,
				"formula": "21d8 + 147"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 21,
			"dex": 18,
			"con": 24,
			"int": 25,
			"wis": 20,
			"cha": 23,
			"save": {
				"int": "+13",
				"wis": "+11",
				"cha": "+12"
			},
			"skill": {
				"arcana": "+19",
				"deception": "+18",
				"perception": "+11"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 21,
			"resist": [
				"acid",
				"force",
				"necrotic",
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"all",
				"telepathy 1,000 ft."
			],
			"cr": "19",
			"trait": [
				{
					"name": "Aberrant Rejuvenation",
					"entries": [
						"When the emissary drops to 0 hit points, its body melts away. A greater star spawn emissary instantly appears in an unoccupied space within 60 feet of where the lesser emissary disappeared. The greater emissary uses the lesser emissary's initiative count."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the emissary fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The emissary doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The emissary makes three attacks."
					]
				},
				{
					"name": "Lashing Maw",
					"entries": [
						"{1d20+11} to hit, reach 15 ft., one target. 16 (2d10 + 5}) piercing damage plus 13 (3d8}) acid damage."
					]
				},
				{
					"name": "Psychic Orb",
					"entries": [
						"{@atk rs} +13} to hit, range 120 ft., one creature. 18 (2d10 + 7}) psychic damage."
					]
				},
				{
					"name": "Change Shape",
					"entries": [
						"The emissary polymorphs into a Small or Medium creature of its choice or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed."
					]
				}
			],
			"legendary": [
				{
					"name": "Psychic Orb",
					"entries": [
						"The emissary makes a Psychic Orb attack."
					]
				},
				{
					"name": "Teleportation Maw (Costs 2 Actions)",
					"entries": [
						"The emissary teleports to an unoccupied space it can see within 30 feet of it and can make a Lashing Maw attack."
					]
				},
				{
					"name": "Psychic Lash (Costs 3 Actions)",
					"entries": [
						"The emissary targets a creature it can see within 30 feet of it and psychically lashes at that creature's mind. The target must succeed on a {21} Wisdom saving throw or take 36 (8d8}) psychic damage and be {stunned} until the start of its next turn."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances",
				"Unusual Nature"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Loup Garou",
			"group": [
				"Lycanthropes"
			],
			"source": "VRGR",
			"page": 237,
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger"
				]
			},
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 170,
				"formula": "20d8 + 80"
			},
			"speed": {
				"walk": {
					"number": 30,
					"condition": "(40 ft. in hybrid form, 50 ft. in dire wolf form)"
				}
			},
			"str": 18,
			"dex": 18,
			"con": 18,
			"int": 14,
			"wis": 16,
			"cha": 16,
			"save": {
				"dex": "+9",
				"con": "+9",
				"cha": "+8"
			},
			"skill": {
				"perception": "+13",
				"stealth": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 23,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common (can't speak in wolf form)"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Blood Frenzy",
					"entries": [
						"The loup garou has advantage on attack rolls against a creature that doesn't have all its hit points."
					]
				},
				{
					"name": "Legendary Resistance (2/Day)",
					"entries": [
						"When the loup garou fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The loup garou regains 10 hit points at the start of each of its turns. If the loup garou takes damage from a silver weapon, this trait doesn't function at the start of the loup garou's next turn. The loup garou dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The loup garou makes two attacks: two with its Longsword (humanoid form) or one with its Bite and one with its Claws (dire wolf or hybrid form)."
					]
				},
				{
					"name": "Bite (Dire Wolf or Hybrid Form Only)",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 13 (2d8 + 4}) piercing damage plus 14 (4d6}) necrotic damage. If the target is a Humanoid, it must succeed on a {17} Constitution saving throw or be cursed with loup garou lycanthropy."
					]
				},
				{
					"name": "Claws (Dire Wolf or Hybrid Form Only)",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 11 (2d6 + 4}) slashing damage. If the target is a creature, it must succeed on a {17} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Longsword (Humanoid Form Only)",
					"entries": [
						"{1d20+9} to hit, reach 5 ft., one target. 13 (2d8 + 4}) slashing damage, or 15 (2d10 + 4}) slashing damage if used with two hands."
					]
				}
			],
			"bonus": [
				{
					"name": "Change Shape",
					"entries": [
						"The loup garou polymorphs into a Large wolf-humanoid hybrid or into a Large dire wolf, or back into its true form, which appears humanoid. Its statistics, other than its size and speed, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
					]
				}
			],
			"legendary": [
				{
					"name": "Swipe",
					"entries": [
						"The loup garou makes one Claws attack (dire wolf or hybrid form only) or one Longsword attack (humanoid form only)."
					]
				},
				{
					"name": "Mauling Pounce (Costs 2 Actions)",
					"entries": [
						"The loup garou moves up to its speed without provoking opportunity attacks, and it can make one Claws attack (dire wolf or hybrid form only) or one Longsword attack (humanoid form only) against each creature it moves past."
					]
				},
				{
					"name": "Bite (Costs 3 Actions)",
					"entries": [
						"The loup garou changes into hybrid or dire wolf form and then makes one Bite attack."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Shapechanger"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
				"N",
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
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Necrichor",
			"source": "VRGR",
			"page": 238,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				12
			],
			"hp": {
				"average": 67,
				"formula": "9d8 + 27"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 8,
			"dex": 15,
			"con": 17,
			"int": 17,
			"wis": 13,
			"cha": 10,
			"save": {
				"con": "+6",
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+9"
			},
			"senses": [
				"blindsight 120 ft. (blind beyond this radius)"
			],
			"passive": 11,
			"resist": [
				"acid",
				"necrotic"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"any three languages",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Legendary Resistance (2/Day)",
					"entries": [
						"If the necrichor fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Rejuvenation",
					"entries": [
						"Unless its lifeless remains are splashed with holy water or placed in a vessel under the effects of the { hallow} spell, the destroyed necrichor re-forms in {@dice 1d10} days, regaining all its hits points and appearing in the place it died or in the nearest unoccupied space."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The necrichor can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The necrichor doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The necrichor makes two attacks."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{1d20+5} to hit, reach 10 ft., one target. 5 (1d6 + 2}) necrotic damage, and the target must succeed on a {14} Constitution saving throw or be {paralyzed} until the start of the necrichor's next turn."
					]
				},
				{
					"name": "Necrotic Bolt",
					"entries": [
						"{@atk rs} +6} to hit, range 120 ft., one creature. 12 (2d8 + 3}) necrotic damage, and the target can't regain hit points until the start of the necrichor's next turn."
					]
				},
				{
					"name": "Blood Puppeteering {Recharge -}",
					"entries": [
						"The necrichor targets a creature it can see within 5 feet of it that is missing any of its hit points. If the target isn't a Construct or an Undead, it must succeed on a {14} Constitution saving throw or the necrichor enters the target's space and attaches itself to the target for 1 minute. While attached, the necrichor takes only half damage dealt to it (round down), and the target takes the remaining damage. The necrichor can attach to only one creature at a time.",
						"The attached necrichor can telepathically control the target's move, action, or both. When controlled this way, the target can take only the Attack action (necrichor chooses the target) or the Dash action. The attached target can repeat the saving throw at the end of each of its turns, detaching from the necrichor and forcing it to move into the nearest unoccupied space on a success."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances",
				"Rejuvenation",
				"Spider Climb",
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"X"
			],
			"damageTags": [
				"N"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nosferatu",
			"source": "VRGR",
			"page": 239,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 85,
				"formula": "9d8 + 45"
			},
			"speed": {
				"walk": 40
			},
			"str": 20,
			"dex": 18,
			"con": 21,
			"int": 6,
			"wis": 17,
			"cha": 14,
			"save": {
				"dex": "+7",
				"con": "+8",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+10"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"resist": [
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Regeneration",
					"entries": [
						"The nosferatu regains 10 hit points at the start of each of its turns if it has at least 1 hit point and isn't in sunlight. If the nosferatu takes radiant damage, this trait doesn't function until the start of the nosferatu's next turn."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The nosferatu can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Sunlight Hypersensitivity",
					"entries": [
						"The nosferatu takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The nosferatu doesn't require air."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The nosferatu makes two Claw attacks followed by one Bite attack. If both Claw attacks hit the same creature, the Bite attack is made with advantage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 9 (1d8 + 5}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one creature. 9 (1d8 + 5}) piercing damage plus 7 (2d6}) necrotic damage. If the target is missing any of its hit points, it instead takes 11 (2d10}) necrotic damage.",
						"The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the nosferatu regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0. A Humanoid slain in this way and then buried in the ground rises as a nosferatu after {@dice 1d10} days."
					]
				},
				{
					"name": "Blood Disgorge {Recharge - 5}",
					"entries": [
						"The nosferatu vomits blood in a 15-foot cone. Each creature in that area must make a {16} Constitution saving throw. On a failed save, a creature takes 18 (4d8}) necrotic damage, and it can't regain hit points for 1 minute. On a successful save, the creature takes half as much damage with no additional effects."
					]
				}
			],
			"traitTags": [
				"Regeneration",
				"Spider Climb",
				"Sunlight Sensitivity",
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
				"N",
				"P",
				"R",
				"S"
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
			"name": "Podling",
			"source": "VRGR",
			"page": 227,
			"size": [
				"M"
			],
			"type": "plant",
			"ac": [
				10
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 20
			},
			"str": 15,
			"dex": 11,
			"con": 14,
			"int": 10,
			"wis": 10,
			"cha": 10,
			"senses": [
				"blindsight 30 ft."
			],
			"passive": 10,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Deep Speech",
				"the languages the creature knew in life"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Semblance of Life",
					"entries": [
						"The podling is a physical copy of a creature digested by a bodytaker plant. The podling has the digested creature's memories and behaves like that creature, but with occasional lapses. An observer familiar with the digested creature can recognize the discrepancies with a successful {20} Wisdom (Insight) check, or automatically if the podling does something in direct contradiction to the digested creature's established beliefs or behavior. The podling melts into a slurry when it dies, when the bodytaker plant that created it dies, or when the bodytaker plant dismisses it (no action required)."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The podling doesn't require sleep."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) bludgeoning damage."
					]
				}
			],
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"languageTags": [
				"DS",
				"LF"
			],
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
			"name": "Priest of Osybus",
			"source": "VRGR",
			"page": 241,
			"size": [
				"M"
			],
			"type": "humanoid",
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
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
			"str": 10,
			"dex": 14,
			"con": 16,
			"int": 18,
			"wis": 17,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+6",
				"cha": "+3"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 13,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"any three languages"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Tattoo of Osybus",
					"entries": [
						"If the priest drops to 0 hit points, roll on the Boons of Undeath table for the boon the priest receives. The priest dies if it receives a boon it already has. If it receives a new boon, it revives at the start of its next turn with half its hit points restored, and its creature type is now Undead.",
						"To prevent this revival, the Tattoo of Osybus on the priest's body must be destroyed. The tattoo is invulnerable while the priest has at least 1 hit point. The tattoo is otherwise an object with AC 15, and it is immune to poison and psychic damage. It has 15 hit points, but it regains all its hit points at the end of every combatant's turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The priest attacks twice."
					]
				},
				{
					"name": "Soul Blade",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 7 (2d4 + 2}) piercing damage, and if the target is a creature, it is {paralyzed} until the start of the priest's next turn. If this damage reduces a Medium or smaller creature to 0 hit points, the creature dies, and its soul is trapped in the priest's body, manifesting as a shadowy Soul Tattoo on the priest. The soul is freed if the priest dies."
					]
				},
				{
					"name": "Necrotic Bolt",
					"entries": [
						"{@atk rs} +7} to hit, range 120 ft., one target. 17 (3d8 + 4}) necrotic damage, and the target can't regain hit points until the start of the priest's next turn."
					]
				}
			],
			"bonus": [
				{
					"name": "Soul Tattoo {Recharge - 5}",
					"entries": [
						"The priest touches one of the Soul Tattoos on its body. The tattoo vanishes as the trapped soul manifests as a shadowy creature that appears in an unoccupied space the priest can see within 30 feet of it. The creature has the size and silhouette of its original body, but it otherwise uses the stat block of a shadow.",
						"The shadow obeys the priest's mental commands (no action required) and takes its turn immediately after the priest. If the creature is within 5 feet of the priest, it can turn back into a tattoo as an action, reappearing on the priest's flesh and regaining all its hit points."
					]
				}
			],
			"variant": [
				{
					"type": "inset",
					"name": "Boons of Undeath",
					"entries": [
						"When a priest of Osybus drops to 0 hit points, the priest might revive with a benefit from the Boons of Undeath table. You can give a priest one or more of these boons of your choice before the priest faces adventurers. If you do so, the priest is Undead, rather than Humanoid, and a priest can receive each boon only once.",
						{
							"type": "table",
							"caption": "Boons of Undeath",
							"colLabels": [
								"d6",
								"Boon"
							],
							"colStyles": [
								"col-1 text-center",
								"col-11"
							],
							"rows": [
								[
									"1",
									{
										"type": "entries",
										"name": "Dread",
										"entries": [
											"Eerie whispers can now be heard around the priest. Any non-Undead creature that starts its turn within 30 feet of the priest must succeed on a DC 15 Wisdom saving throw or be {frightened} of the priest until the start of the creature's next turn."
										]
									}
								],
								[
									"2",
									{
										"type": "entries",
										"name": "Ectoplasmic",
										"entries": [
											"An otherworldly slime drips off the priest and fades away moments later, leaving a greenish stain. When any creature starts its turn within 10 feet of the priest, the priest can reduce that creature's speed by 10 feet until the start of the creature's next turn, until which the creature is covered by ectoplasm. In addition, as an action, the priest can use the slime to make itself look and feel like any creature that is Medium or Small, while retaining its game statistics. This transformation lasts for 8 hours or until the priest drops to 0 hit points."
										]
									}
								],
								[
									"3",
									{
										"type": "entries",
										"name": "Vampiric",
										"entries": [
											"When the priest deals necrotic damage to any creature, the priest gains a number of temporary hit points equal to half that necrotic damage. The priest's speed also increases by 10 feet."
										]
									}
								],
								[
									"4",
									{
										"type": "entries",
										"name": "Blazing",
										"entries": [
											"The priest sloughs off its flesh, and its skeleton crumbles away, leaving only its skull. Its stat block is replaced by that of a {@creature flameskull}, but it retains its Tattoo of Osybus trait, and all fire damage it deals becomes necrotic damage. The Tattoo of Osybus now appears carved into the skull's forehead."
										]
									}
								],
								[
									"5",
									{
										"type": "entries",
										"name": "Spectral",
										"entries": [
											"The priest now appears wraithlike, and its challenge rating increases by 1. It gains resistance to all damage but force, radiant, and psychic, and it is vulnerable to radiant damage. It can also move through creatures and objects as if they were {@quickref difficult terrain||3}, but it takes 5 ({@dice 1d10}) force damage if it ends its turn inside a creature or an object."
										]
									}
								],
								[
									"6",
									{
										"type": "entries",
										"name": "Deathly",
										"entries": [
											"The priest's visage becomes bone white, and its challenge rating increases by 1. It can cast { animate dead} and { create undead} once per day each, using Intelligence as the spellcasting ability, and it gains the following action:",
											{
												"type": "entries",
												"name": "Circle of Death (Spell; {Recharge - 5|m})",
												"entries": [
													"Each creature in a 60-foot-radius sphere centered on a point the priest can see within 150 feet of it must make a DC 15 Constitution saving throw, taking 28 ({@dice 8d6}) necrotic damage on a failed save, or half as much damage on a successful one.)"
												]
											}
										]
									}
								]
							]
						}
					]
				}
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"N",
				"P"
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
			"hasFluffImages": true,
			"_versions": [
				{
					"name": "Priest of Osybus (Blazing Boon)",
					"source": "VRGR",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Blazing Boon",
								"entries": [
									"The priest sloughs off its flesh, and its skeleton crumbles away, leaving only its skull. Its stat block is replaced by that of a {@creature flameskull}, but it retains its Tattoo of Osybus trait, and all fire damage it deals becomes necrotic damage. The Tattoo of Osybus now appears carved into the skull's forehead."
								]
							}
						}
					},
					"type": "undead",
					"variant": null
				},
				{
					"name": "Priest of Osybus (Deathly Boon)",
					"source": "VRGR",
					"_mod": {
						"action": {
							"mode": "appendArr",
							"items": {
								"name": "Circle of Death (Spell; {Recharge - 5|m})",
								"entries": [
									"Each creature in a 60-foot-radius sphere centered on a point the priest can see within 150 feet of it must make a DC 15 Constitution saving throw, taking 28 ({@dice 8d6}) necrotic damage on a failed save, or half as much damage on a successful one.)"
								]
							}
						}
					},
					"type": "undead",
					"cr": "7",
					"spellcasting": [
						{
							"name": "Innate Spellcasting",
							"headerEntries": [
								"The priest casts one of the following spells, requiring no components and using Intelligence as the spellcasting ability (spell save {15}):"
							],
							"will": [
								{
									"entry": "{ circle of death}",
									"hidden": true
								}
							],
							"daily": {
								"1e": [
									"{ animate dead}",
									"{ create undead}"
								]
							},
							"ability": "int",
							"displayAs": "action"
						}
					],
					"variant": null
				},
				{
					"name": "Priest of Osybus (Dread Boon)",
					"source": "VRGR",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Dread Boon",
								"entries": [
									"Eerie whispers can now be heard around the priest. Any non-Undead creature that starts its turn within 30 feet of the priest must succeed on a DC 15 Wisdom saving throw or be {frightened} of the priest until the start of the creature's next turn."
								]
							}
						}
					},
					"type": "undead",
					"variant": null
				},
				{
					"name": "Priest of Osybus (Ectoplasmic Boon)",
					"source": "VRGR",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Ectoplasmic Boon",
								"entries": [
									"An otherworldly slime drips off the priest and fades away moments later, leaving a greenish stain. When any creature starts its turn within 10 feet of the priest, the priest can reduce that creature's speed by 10 feet until the start of the creature's next turn, until which the creature is covered by ectoplasm. In addition, as an action, the priest can use the slime to make itself look and feel like any creature that is Medium or Small, while retaining its game statistics. This transformation lasts for 8 hours or until the priest drops to 0 hit points."
								]
							}
						}
					},
					"type": "undead",
					"variant": null
				},
				{
					"name": "Priest of Osybus (Spectral Boon)",
					"source": "VRGR",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Spectral Boon",
								"entries": [
									"The priest now appears wraithlike, and its challenge rating increases by 1. It gains resistance to all damage but force, radiant, and psychic, and it is vulnerable to radiant damage. It can also move through creatures and objects as if they were {@quickref difficult terrain||3}, but it takes 5 ({@dice 1d10}) force damage if it ends its turn inside a creature or an object."
								]
							}
						}
					},
					"type": "undead",
					"variant": null
				},
				{
					"name": "Priest of Osybus (Vampiric Boon)",
					"source": "VRGR",
					"_mod": {
						"trait": {
							"mode": "appendArr",
							"items": {
								"name": "Vampiric Boon",
								"entries": [
									"When the priest deals necrotic damage to any creature, the priest gains a number of temporary hit points equal to half that necrotic damage. The priest's speed also increases by 10 feet."
								]
							}
						}
					},
					"type": "undead",
					"variant": null
				}
			]
		},
		{
			"name": "Relentless Juggernaut",
			"source": "VRGR",
			"page": 243,
			"size": [
				"L"
			],
			"type": "fiend",
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 161,
				"formula": "14d10 + 84"
			},
			"speed": {
				"walk": 30
			},
			"str": 22,
			"dex": 12,
			"con": 22,
			"int": 8,
			"wis": 15,
			"cha": 16,
			"save": {
				"dex": "+5",
				"wis": "+6",
				"cha": "+7"
			},
			"skill": {
				"perception": "+6",
				"survival": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"understands all languages but can't speak"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the juggernaut fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The juggernaut regains 20 hit points at the start of its turn. If the juggernaut takes radiant damage, this trait doesn't function at the start of its next turn. The juggernaut dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The juggernaut doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The juggernaut makes two attacks. It can replace one attack with Deadly Shaping if it is ready."
					]
				},
				{
					"name": "Executioner's Pick",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 17 (2d10 + 6}) piercing damage, and if the target is a creature, its speed is reduced by 10 feet until the start of the juggernaut's next turn."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{1d20+10} to hit, reach 5 ft., one target. 11 (1d10 + 6}) bludgeoning damage, and if the target is a Large or smaller creature, it must succeed on a {18} Strength saving throw or be knocked {prone}."
					]
				},
				{
					"name": "Deadly Shaping {Recharge - 5}",
					"entries": [
						"The juggernaut magically shapes a feature of its surroundings into a deadly implement. A creature the juggernaut can see within 60 feet of it must make a {18} Dexterity saving throw. If the saving throw fails, the targeted creature is struck by one of the following (juggernaut's choice):"
					]
				},
				{
					"name": "Flying Stone",
					"entries": [
						"The target takes 22 (5d8}) bludgeoning damage and is {incapacitated} until the start of the juggernaut's next turn, and the implement vanishes."
					]
				},
				{
					"name": "Scything Shrapnel",
					"entries": [
						"The target takes 14 (4d6}) slashing damage, and the implement vanishes. At the start of each of its turns, the target takes 10 (3d6}) necrotic damage from the wound left by the shrapnel. The wound ends if the target regains any hit points or if a creature uses an action to stanch the wound, which requires a successful {15} Wisdom (Medicine) check."
					]
				}
			],
			"legendary": [
				{
					"name": "Implacable Advance",
					"entries": [
						"The juggernaut moves up to its speed, ignoring {@quickref difficult terrain||3}. Any object in its path takes 55 (10d10}) bludgeoning damage if it isn't being worn or carried."
					]
				},
				{
					"name": "Rapid Shaping (Costs 3 Actions)",
					"entries": [
						"The juggernaut recharges Deadly Shaping and uses it."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances",
				"Regeneration",
				"Unusual Nature"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"XX"
			],
			"damageTags": [
				"B",
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"incapacitated",
				"prone"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Relentless Slasher",
			"source": "VRGR",
			"page": 242,
			"size": [
				"M"
			],
			"type": "fiend",
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
				"formula": "13d8 + 26"
			},
			"speed": {
				"walk": 40
			},
			"str": 12,
			"dex": 18,
			"con": 14,
			"int": 14,
			"wis": 15,
			"cha": 16,
			"save": {
				"str": "+4",
				"dex": "+7",
				"con": "+5",
				"wis": "+5"
			},
			"skill": {
				"athletics": "+7",
				"perception": "+5",
				"survival": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"understands all languages but can't speak"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Legendary Resistance (1/Day)",
					"entries": [
						"If the slasher fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Shrouded Presence",
					"entries": [
						"The slasher is immune to any effect that would sense its emotions or read its thoughts, and it can't be detected by abilities that sense Fiends."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The slasher makes two Slasher's Knife attacks."
					]
				},
				{
					"name": "Slasher's Knife",
					"entries": [
						"{@atk mw,rw} +7} to hit, reach 5 ft. or range 30/60 ft., one target. 6 (1d4 + 4}) slashing damage plus 21 (6d6}) necrotic damage. If the target is a creature, it suffers a lingering wound that causes it to take 7 (2d6}) necrotic damage at the start of each of its turns. Each time the slasher hits the wounded target with this attack, the damage dealt by the wound increases by 3 ({@dice 1d6}). The wound ends if the target regains hit points or if a creature uses an action to stanch the wound, which requires a successful {15} Wisdom (Medicine) check."
					]
				}
			],
			"legendary": [
				{
					"name": "Slice",
					"entries": [
						"{@atk mw,rw} +7} to hit, reach 5 ft. or range 30/60 ft., one target. 7 (1d6 + 4}) slashing damage."
					]
				},
				{
					"name": "Vanishing Strike (Costs 3 Actions)",
					"entries": [
						"The slasher makes one Slasher's Knife attack. After the attack hits or misses, the slasher can teleport up to 30 feet to an unoccupied space it can see."
					]
				}
			],
			"traitTags": [
				"Legendary Resistances"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"XX"
			],
			"damageTags": [
				"N",
				"S"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "Strigoi",
			"source": "VRGR",
			"page": 246,
			"size": [
				"M"
			],
			"type": "monstrosity",
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
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 17,
			"dex": 14,
			"con": 16,
			"int": 11,
			"wis": 17,
			"cha": 10,
			"save": {
				"str": "+5",
				"dex": "+4",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"resist": [
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Stirge Telepathy",
					"entries": [
						"The strigoi can magically command any {@creature stirge} within 120 feet of it, using a limited form of telepathy."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The strigoi makes one Claw attack and makes one Proboscis attack."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 7 (1d8 + 3}) slashing damage plus 6 (1d12}) acid damage."
					]
				},
				{
					"name": "Proboscis",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one creature. 8 (1d10 + 3}) piercing damage plus 10 (3d6}) necrotic damage, and the strigoi regains hit points equal to the amount of necrotic damage dealt. A creature reduced to 0 hit points from this attack dies and leaves nothing behind except its skin and its equipment."
					]
				},
				{
					"name": "Ravenous Children (1/Day)",
					"entries": [
						"The strigoi magically summons {@dice 1d4 + 2} {@creature stirge||stirges} (see their entry in the Monster Manual) in unoccupied spaces it can see within 30 feet of it. The stirges are under the strigoi's control and act immediately after the strigoi in the initiative order. The stirges disappear after 1 hour, when the strigoi dies, or when the strigoi dismisses them (no action required)."
					]
				}
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"A",
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
			"name": "Swarm of Gremishkas",
			"source": "VRGR",
			"page": 235,
			"size": [
				"M"
			],
			"type": {
				"type": "monstrosity",
				"swarmSize": "T"
			},
			"ac": [
				12
			],
			"hp": {
				"average": 24,
				"formula": "7d6"
			},
			"speed": {
				"walk": 25
			},
			"str": 12,
			"dex": 14,
			"con": 10,
			"int": 12,
			"wis": 14,
			"cha": 4,
			"skill": {
				"perception": "+4"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 14,
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
				"understands Common but can't speak"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Limited Spell Immunity",
					"entries": [
						"The swarm automatically succeeds on saving throws against spells of 3rd level or lower, and the attack rolls of such spells always miss it."
					]
				},
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny gremishka. The swarm can't regain hit points or gain temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Bites",
					"entries": [
						"{1d20+4} to hit, reach 0 ft., one target in the swarm's space. 12 (3d6 + 2}) piercing damage, or 5 (1d6 + 2}) piercing damage if the swarm has half of its hit points or fewer, plus 7 (2d6}) force damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Spell Redirection",
					"entries": [
						"In response to a spell attack roll missing the swarm, the swarm causes that spell to hit another creature of its choice within 30 feet of it that it can see."
					]
				}
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
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
			"name": "Swarm of Maggots",
			"source": "VRGR",
			"page": 247,
			"size": [
				"M"
			],
			"type": {
				"type": "beast",
				"swarmSize": "T"
			},
			"ac": [
				11
			],
			"hp": {
				"average": 22,
				"formula": "5d8"
			},
			"speed": {
				"walk": 20,
				"swim": 20
			},
			"str": 3,
			"dex": 12,
			"con": 10,
			"int": 1,
			"wis": 7,
			"cha": 1,
			"senses": [
				"blindsight 10 ft."
			],
			"passive": 8,
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
			"cr": "2",
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
					"name": "Infestation",
					"entries": [
						"{1d20+3} to hit, reach 0 ft., one target in the swarm's space. 10 (4d4}) piercing damage, or 5 (2d4}) piercing damage if the swarm has half of its hit points or fewer. A creature damaged by the swarm must succeed on a {12} Constitution saving throw or contract a disease.",
						"Each time the diseased creature finishes a long rest, roll a {@dice d6} to determine the disease's effect:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1-2",
									"entries": [
										"The creature is {blinded} until it finishes a long rest."
									]
								},
								{
									"type": "item",
									"name": "3-4",
									"entries": [
										"The creature's hit point maximum decreases by 5 ({@dice 2d4}), and the reduction can't be removed until the disease ends. The creature dies if its hit point maximum drops to 0."
									]
								},
								{
									"type": "item",
									"name": "5-6",
									"entries": [
										"The creature has disadvantage on ability checks and attack rolls until it finishes its next long rest.",
										"The disease lasts until it's removed by magic or until the creature rolls the same random effect for the disease two long rests in a row."
									]
								}
							]
						}
					]
				}
			],
			"senseTags": [
				"B"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
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
			"name": "Swarm of Scarabs",
			"source": "VRGR",
			"page": 247,
			"size": [
				"M"
			],
			"type": {
				"type": "beast",
				"swarmSize": "T"
			},
			"ac": [
				{
					"ac": 13,
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
				"walk": 30,
				"burrow": 30,
				"climb": 30
			},
			"str": 3,
			"dex": 14,
			"con": 13,
			"int": 1,
			"wis": 12,
			"cha": 1,
			"senses": [
				"tremorsense 60 ft."
			],
			"passive": 11,
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
			"cr": "3",
			"trait": [
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny scarab. The swarm can't regain hit points or gain temporary hit points."
					]
				},
				{
					"name": "Skeletonize",
					"entries": [
						"If the swarm starts its turn in the same space as a dead creature that is Large or smaller, the corpse is destroyed, leaving behind only equipment and bones (or exoskeleton)."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Ravenous Bites",
					"entries": [
						"{1d20+4} to hit, reach 0 ft., one target in the swarm's space. 14 (4d6}) piercing damage, or 7 (2d6}) piercing damage if the swarm has half of its hit points or fewer. If the target is a creature, scarabs burrow into its body, and the creature takes 3 (1d6}) piercing damage at the start of each of its turns. Any creature can use an action to kill or remove the scarabs with fire or a weapon that deals piercing damage, causing 1 damage of the appropriate type to the target. A creature reduced to 0 hit points by the swarm's piercing damage dies."
					]
				}
			],
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"T"
			],
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
			"name": "Swarm of Zombie Limbs",
			"source": "VRGR",
			"page": 254,
			"size": [
				"M"
			],
			"type": {
				"type": "undead",
				"swarmSize": "T"
			},
			"ac": [
				10
			],
			"hp": {
				"average": 22,
				"formula": "5d8"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 14,
			"dex": 10,
			"con": 10,
			"int": 3,
			"wis": 8,
			"cha": 5,
			"senses": [
				"blindsight 30 ft. (blind beyond this radius)"
			],
			"passive": 9,
			"resist": [
				"bludgeoning",
				"piercing",
				"slashing"
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
				"restrained",
				"stunned"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny limb. The swarm can't regain hit points or gain temporary hit points."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The swarm doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The swarm makes one Undead Mass attack and one Grasping Limbs attack."
					]
				},
				{
					"name": "Undead Mass",
					"entries": [
						"{1d20+4} to hit, reach 0 ft., one target in the swarm's space. 5 (1d6 + 2}) bludgeoning damage, or 4 (1d4 + 2}) bludgeoning damage if the swarm has half of its hit points or fewer."
					]
				},
				{
					"name": "Grasping Limbs",
					"entries": [
						"{1d20+4} to hit, reach 0 ft., one creature in the swarm's space. 7 (2d6}) necrotic damage, and the creature must succeed on a {12} Strength saving throw or be {restrained}. The creature can repeat the saving throw at the end of each of its turns, taking 7 (2d6}) necrotic damage on a failed save. The creature is freed if it succeeds on this saving throw, the swarm moves out of the creature's space, or the swarm dies."
					]
				}
			],
			"traitTags": [
				"Unusual Nature"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true
		},
		{
			"name": "The Bagman",
			"source": "VRGR",
			"page": 225,
			"_copy": {
				"name": "Troll",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "troll",
						"with": "Bagman",
						"flags": "i"
					},
					"trait": [
						{
							"mode": "appendArr",
							"items": [
								{
									"name": "Grappler",
									"entries": [
										"The Bagman has advantage on attack rolls against any creature {grappled} by it."
									]
								},
								{
									"name": "Amorphous",
									"entries": [
										"The Bagman can move through a space as narrow as 1 inch wide without squeezing."
									]
								},
								{
									"name": "Alien Mind",
									"entries": [
										"If a creature tries to read the Bagman's thoughts, that creature must succeed on a {8} Intelligence saving throw or be {stunned} for 1 minute. The {stunned} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
									]
								}
							]
						}
					]
				}
			},
			"traitTags": [
				"Amorphous",
				"Keen Senses",
				"Regeneration"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Unspeakable Horror",
			"source": "VRGR",
			"page": 250,
			"size": [
				"H"
			],
			"type": "monstrosity",
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				},
				{
					"ac": 17,
					"from": [
						"Aberrant Armor Only"
					]
				}
			],
			"hp": {
				"average": 95,
				"formula": "10d10 + 40"
			},
			"speed": {
				"walk": 40
			},
			"str": 21,
			"dex": 13,
			"con": 19,
			"int": 3,
			"wis": 14,
			"cha": 17,
			"save": {
				"con": "+7",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"cr": "8",
			"trait": [
				{
					"name": "Formed by the Mists",
					"entries": [
						"When created, the horror's body composition takes one of four forms: Aberrant Armor, Loathsome Limbs, Malleable Mass, or Oozing Organs. This form determines certain traits in this stat block."
					]
				},
				{
					"name": "Amorphous (Malleable Mass Only)",
					"entries": [
						"The horror can move through any opening at least 1 inch wide without squeezing."
					]
				},
				{
					"name": "Bile Body (Oozing Organs Only)",
					"entries": [
						"Any creature that touches the horror or hits it with a melee attack takes 5 (1d10}) acid damage."
					]
				},
				{
					"name": "Relentless Stride (Loathsome Limbs Only)",
					"entries": [
						"The horror can move through the space of another creature. The first time on a turn that the horror enters a creature's space during this move, the creature must succeed on a {16} Strength saving throw or be knocked {prone}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The horror makes two Limbs attacks."
					]
				},
				{
					"name": "Limbs",
					"entries": [
						"{1d20+8} to hit, reach 5 ft., one target. 21 (3d10 + 5}) bludgeoning damage."
					]
				},
				{
					"name": "Hex Blast {Recharge - 5}",
					"entries": [
						"The horror expels necrotic energy in a 30-foot cone. Each creature in that area must make a {15} Constitution saving throw, taking 45 (7d12}) necrotic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"variant": [
				{
					"type": "inset",
					"name": "Customizing a Horror",
					"entries": [
						"An unspeakable horror has one of four body compositions, determined by rolling on the Body Composition table. You can roll on the Limbs to customize it further, while results from the Hex Blast table replace that action in the stat block. If the results of multiple tables conflict, chose your preferred result.",
						"The results of these tables are meant to be broad, so feel free to describe the details of an unspeakable horror's form and the interplay between its parts however you desire. The more discordant and unexpected a horror's parts, the more unsettling it might be.",
						{
							"type": "table",
							"caption": "Body Composition",
							"colLabels": [
								"d4",
								"Body"
							],
							"colStyles": [
								"col-1 text-center",
								"col-11"
							],
							"rows": [
								[
									"1",
									{
										"type": "entries",
										"name": "Aberrant Armor",
										"entries": [
											"The horror's body is armored in {petrified} wood, alien crystal, rusted mechanisms, sculpted stone, or an exoskeleton."
										]
									}
								],
								[
									"2",
									{
										"type": "entries",
										"name": "Loathsome Limbs",
										"entries": [
											"The horror's body boasts spider like legs, many-jointed appendages, or thrashing tentacles."
										]
									}
								],
								[
									"3",
									{
										"type": "entries",
										"name": "Malleable Mass",
										"entries": [
											"The horror's body is composed of a clot of boneless flesh, shadowy tendrils, or mist."
										]
									}
								],
								[
									"4",
									{
										"type": "entries",
										"name": "Oozing Organs",
										"entries": [
											"The horror's body boasts exposed entrails, bloated parasites, or a gelatinous shroud, perhaps because it is inside out."
										]
									}
								]
							]
						},
						{
							"type": "table",
							"caption": "Hex Blast",
							"colLabels": [
								"d4",
								"Hex"
							],
							"colStyles": [
								"col-1 text-center",
								"col-11"
							],
							"rows": [
								[
									"1",
									{
										"type": "entries",
										"name": "Beguiling Hex {Recharge - 5}",
										"entries": [
											"The horror expels a wave of mind-altering magic. Each creature within 30 feet of the horror must make a DC 15 Wisdom saving throw, taking 33 ({@dice 6d10}) psychic damage and being {incapacitated} until the end of the creature's next turn on a failed save, or taking half as much damage on a successful one."
										]
									}
								],
								[
									"2",
									{
										"type": "entries",
										"name": "Bile Hex {Recharge - 5}",
										"entries": [
											"The horror expels acidic bile in a 60-foot line that is 5 feet wide. Each creature in that line must succeed on a DC 15 Dexterity saving throw or be covered in bile. A creature covered in bile takes 31 ({@dice 7d8}) acid damage at the start of each of its turns until it or another creature uses its action to scrape or wash off the bile that covers it."
										]
									}
								],
								[
									"3",
									{
										"type": "entries",
										"name": "Petrifying Hex {Recharge - 5}",
										"entries": [
											"The horror expels petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 15 Constitution saving throw or take 14 ({@dice 4d6}) necrotic damage and be {restrained} as it begins to turn to stone. A {restrained} creature must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is {petrified} until freed by the { greater restoration} spell or other magic."
										]
									}
								],
								[
									"4",
									{
										"type": "entries",
										"name": "Reality-Stealing Hex {Recharge - 5}",
										"entries": [
											"The horror expels a wave of perception-distorting energy. Each creature within 30 feet of the horror must make a DC 15 Wisdom saving throw. On a failed save, the target takes 22 ({@dice 5d8}) psychic damage and is {deafened} until the end of its next turn. If the saving throw fails by 5 or more, the target is also {blinded} until the end of its next turn."
										]
									}
								]
							]
						},
						{
							"type": "table",
							"caption": "Limbs",
							"colLabels": [
								"d4",
								"Attack"
							],
							"colStyles": [
								"col-1 text-center",
								"col-11"
							],
							"rows": [
								[
									"1",
									{
										"type": "entries",
										"name": "Bone Blade",
										"entries": [
											"The horror's limb ends in a blade made of bone, which deals slashing damage instead of bludgeoning damage. In addition, it scores a critical hit on a roll of 19 or 20 and rolls the damage dice of a crit three times, instead of twice."
										]
									}
								],
								[
									"2",
									{
										"type": "entries",
										"name": "Corrosive Pseudopod",
										"entries": [
											"The horror's limb attack deals an extra 9 ({@dice 2d8}) acid damage."
										]
									}
								],
								[
									"3",
									{
										"type": "entries",
										"name": "Grasping Tentacle",
										"entries": [
											"The horror's limb is a grasping tentacle. When the horror hits a creature with this limb, the creature is also {grappled} (escape DC 16). The limb can have only one creature {grappled} at a time."
										]
									}
								],
								[
									"4",
									{
										"type": "entries",
										"name": "Poisonous Limb",
										"entries": [
											"The horror's limb deals piercing damage instead of bludgeoning damage. In addition, when the horror hits a creature with this limb, the creature must succeed on a DC 15 Constitution saving throw or take 7 ({@dice 2d6}) poison damage and be {poisoned} until the end of its next turn."
										]
									}
								]
							]
						}
					],
					"_version": {
						"name": "Unspeakable Horror (Customized)",
						"addAs": "trait"
					}
				}
			],
			"traitTags": [
				"Amorphous"
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
				"I",
				"N",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"blinded",
				"deafened",
				"grappled",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vampiric Mind Flayer",
			"source": "VRGR",
			"page": 252,
			"size": [
				"M"
			],
			"type": "undead",
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
				"formula": "10d8 + 40"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 18,
			"dex": 18,
			"con": 18,
			"int": 5,
			"wis": 15,
			"cha": 18,
			"save": {
				"dex": "+7",
				"int": "+0",
				"wis": "+5",
				"cha": "+7"
			},
			"skill": {
				"perception": "+5",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"resist": [
				"necrotic",
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"telepathy 120 ft. but can only project emotions"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Spider Climb",
					"entries": [
						"The mind flayer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the mind flayer has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The mind flayer doesn't require air, food, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mind flayer makes two Claw attacks or one Claw attack and one Tentacles attack."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one target. 8 (1d8 + 4}) slashing damage plus 10 (3d6}) necrotic damage."
					]
				},
				{
					"name": "Tentacles",
					"entries": [
						"{1d20+7} to hit, reach 5 ft., one creature. 7 (1d6 + 4}) piercing damage, and if the target is a creature, it is {grappled} (escape {15})."
					]
				},
				{
					"name": "Drink Sapience",
					"entries": [
						"The mind flayer targets one creature it is grappling. The target must succeed on a {15} Wisdom saving throw or take 14 (4d6}) psychic damage and gain 1 level of {exhaustion}. The mind flayer regains a number of hit points equal to the psychic damage dealt. A creature reduced to 0 hit points by the psychic damage dies."
					]
				}
			],
			"bonus": [
				{
					"name": "Disrupt Psyche {Recharge - 5}",
					"entries": [
						"The mind flayer magically emits psionic energy in a 30-foot-radius sphere centered on itself. Each creature in that area must succeed on a {15} Intelligence saving throw or be {incapacitated} for 1 minute. The {incapacitated} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"traitTags": [
				"Spider Climb",
				"Sunlight Sensitivity",
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
				"TP"
			],
			"damageTags": [
				"N",
				"P",
				"S",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"exhaustion",
				"grappled",
				"incapacitated"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Wereraven",
			"group": [
				"Lycanthropes"
			],
			"source": "VRGR",
			"page": 253,
			"otherSources": [
				{
					"source": "CM"
				},
				{
					"source": "CoS",
					"page": 242
				}
			],
			"size": [
				"M"
			],
			"type": {
				"type": "humanoid",
				"tags": [
					"human",
					"shapechanger"
				]
			},
			"ac": [
				12
			],
			"hp": {
				"average": 31,
				"formula": "7d8"
			},
			"speed": {
				"walk": {
					"number": 30,
					"condition": "(fly 50 ft. in raven and hybrid forms)"
				}
			},
			"str": 10,
			"dex": 15,
			"con": 11,
			"int": 13,
			"wis": 15,
			"cha": 14,
			"skill": {
				"insight": "+4",
				"perception": "+6"
			},
			"passive": 16,
			"languages": [
				"Common (can't speak in raven form)"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The wereraven can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies."
					]
				},
				{
					"name": "Mimicry",
					"entries": [
						"The wereraven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful {10} Wisdom (Insight) check."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The wereraven regains 10 hit points at the start of its turn. If the wereraven takes damage from a silvered weapon or a spell, this trait doesn't function at the start of the wereraven's next turn. The wereraven dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Human or Hybrid Form Only)",
					"entries": [
						"The wereraven makes two weapon attacks, one of which can be with its hand crossbow."
					]
				},
				{
					"name": "Beak (Raven or Hybrid Form Only)",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 1 piercing damage in raven form, or 4 (1d4 + 2}) piercing damage in hybrid form. If the target is humanoid, it must succeed on a {10} Constitution saving throw or be cursed with wereraven lycanthropy."
					]
				},
				{
					"name": "Shortsword (Human or Hybrid Form Only)",
					"entries": [
						"{1d20+4} to hit, reach 5 ft., one target. 5 (1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Hand Crossbow (Human or Hybrid Form Only)",
					"entries": [
						"1d20+4} to hit, range 30/120 ft., one target. 5 (1d6 + 2}) piercing damage."
					]
				}
			],
			"traitTags": [
				"Regeneration",
				"Shapechanger"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"CS"
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
			"name": "Zombie Clot",
			"source": "VRGR",
			"page": 255,
			"size": [
				"H"
			],
			"type": "undead",
			"ac": [
				{
					"ac": 12,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 104,
				"formula": "11d12 + 33"
			},
			"speed": {
				"walk": 40
			},
			"str": 20,
			"dex": 10,
			"con": 16,
			"int": 3,
			"wis": 8,
			"cha": 10,
			"save": {
				"con": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"paralyzed",
				"petrified",
				"poisoned",
				"stunned"
			],
			"languages": [
				"understands the languages it knew in life but can't speak"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Deathly Stench",
					"entries": [
						"Any creature that starts its turn within 10 feet of the zombie must succeed on a {14} Constitution saving throw or take 9 (2d8}) poison damage and be {poisoned} until the start of the creature's next turn."
					]
				},
				{
					"name": "Undead Fortitude",
					"entries": [
						"If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The zombie doesn't require air, food, drink, or sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The zombie makes two Slam attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+8} to hit, reach 10 ft., one target. 18 (3d8 + 5}) bludgeoning damage."
					]
				},
				{
					"name": "Flesh Entomb {Recharge - 5}",
					"entries": [
						"The zombie flings a detached clump of corpses at a creature it can see within 30 feet of it. The target must succeed on a {16} Strength saving throw or take 16 (3d10}) bludgeoning damage, and if the target is a Large or smaller creature, it becomes entombed in dead flesh.",
						"A creature entombed in the dead flesh is {restrained}, has total cover against attacks and other effects outside the dead flesh, and takes 10 (3d6}) necrotic damage at the start of each of its turns. The creature can be freed if the dead flesh is destroyed. The dead flesh is a Large object with AC 10, 25 hit points, and immunity to poison and psychic damage."
					]
				}
			],
			"traitTags": [
				"Undead Fortitude",
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
				"B",
				"I",
				"N"
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
			"name": "Zombie Plague Spreader",
			"source": "VRGR",
			"page": 255,
			"size": [
				"M"
			],
			"type": "undead",
			"ac": [
				10
			],
			"hp": {
				"average": 78,
				"formula": "12d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 10,
			"con": 15,
			"int": 3,
			"wis": 5,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 7,
			"resist": [
				"necrotic"
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
				"understands the languages it knew in life but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Undead Fortitude",
					"entries": [
						"If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
					]
				},
				{
					"name": "Unusual Nature",
					"entries": [
						"The zombie doesn't require air, food, drink, or sleep."
					]
				},
				{
					"name": "Viral Aura",
					"entries": [
						"Any creature that starts its turn within 10 feet of the plague spreader must make a {12} Constitution saving throw. On a failed save, the creature is {poisoned} and can't regain hit points until the end of its next turn. On a successful save, the creature is immune to this plague spreader's Viral Aura for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The plague spreader makes two Slam attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{1d20+5} to hit, reach 5 ft., one target. 6 (1d6 + 3}) bludgeoning damage plus 9 (2d8}) necrotic damage."
					]
				},
				{
					"name": "Virulent Miasma (1/Day)",
					"entries": [
						"The plague spreader releases toxic gas in a 30-foot-radius sphere centered on itself. Each creature in that area must make a {12} Constitution saving throw, taking 14 (4d6}) poison damage on a failed save, or half as much damage on a successful one. A Humanoid reduced to 0 hit points by this damage dies and rises as a zombie (see its stat block in the Monster Manual) 1 minute later. The zombie acts immediately after the plague spreader in the initiative count."
					]
				}
			],
			"traitTags": [
				"Undead Fortitude",
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
				"B",
				"I",
				"N"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasToken": true,
			"hasFluff": true
		}
	]
}
