export enum EWeapons {
    Knifes = 0,
    Gloves = 1,
    Smgs = 2,
    Rifles = 3,
    Heavys = 4,
    Pistols = 5,
    Agents = 6,
    Others = 7
}

export enum ETeams {
    T = 0,
    CT = 1,
    BOTH = 2
}

class Items {
    private items: { 
        [key: string]: object[]
    };
    private stickers: { 
        [key: string]: { 
          weapon_name: string; 
          name: string; 
          image: string; 
          collection: string; 
        }; 
    };
    private stickersCollections: string[];
    private pins: { 
        [key: string]: { 
          weapon_name: string; 
          name: string; 
          image: string; 
          color: string; 
        }; 
    };
    private musicKits: { 
        [key: string]: { 
          weapon_name: string; 
          name: string; 
          image: string; 
          color: string; 
        }; 
    };
    private agents: {
        [key: string]: {
            weapon_name: string;
            name: string;
            image: string;
            team: number;
            color: string;
        };
    }
    private smokes: {
        [key: string]: {
            weapon_name: string;
            name: string;
            image: string;
            color: string;
        };
    }
    private skins: {
        [key: string]: {
            [key: string]: {
                weapon_name: string;
                name: string;
                image: string;
                color: string;
                rarity: string;
            };
        }
    }

    constructor() {
        this.items = require("../public/data/items.json");
        this.stickers = require("../public/data/stickers.json");
        this.stickersCollections = require("../public/data/stickers-collections.json");
        this.pins = require("../public/data/collectibles.json");
        this.musicKits = require("../public/data/musickit.json");
        this.agents = require("../public/data/agents.json");
        this.smokes = require("../public/data/smokes.json");
        this.skins = require("../public/data/skins.json");
    }

    getAll = () => {
        return this.items;
    };

    getSmokes = () => {
        return this.smokes;
    };

    getStickersCollections() {
        return this.stickersCollections;
    };

    getStickersByCollection = (collection: string) => {
        return Object.fromEntries(
            Object.entries(this.stickers)
                .filter(([_, sticker]) => sticker.collection === collection)
        );
    };

    getPins = () => {
        return this.pins;
    };

    getMusicKits = () => {
        return this.musicKits;
    };

    getAgentsByTeam = (team: ETeams) => {
        return Object.fromEntries(
            Object.entries(this.agents)
                .filter(([_, agent]) => team !== 2 ? agent.team === team : agent)
        );
    };

    getSkinsByWeaponId = (id: number) => {
        return this.skins[id];
    };
};

export const CS2Items = new Items();