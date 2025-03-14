export enum CardClass {
	Assassin = 'Assassin',
	Knight = 'Knight',
	Tanker = 'Tanker',
	Wizard = 'Wizard',
	Summoner = 'Summoner',
	Beast = 'Beast',
}

export enum CardKind {
	Hero = 'Hero',
	Troop = 'Troop',
	Spell = 'Spell',
}

export interface CardEntity {
	id: string;
	components: {
		CardAttribute: {
			health: number;
			attack: number;
			defense: number;
		};
		CardClass: {
			kind: CardKind;
			class: CardClass;
		};
		CardMetadata: {
			metaId: string;
			name: string;
		};
		CardDescription: {
			template: string;
		};
		DeathInspireActivation: {};
		SkillInspireActivation: {};
		ChargeActivation: {
			threshold: number;
		};
	};
}
