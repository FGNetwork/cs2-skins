import fs from "fs";

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
            };
        }
    }
    private itemsFile: string = "./public/data/items.json";
    private stickersFile: string = "./public/data/stickers.json";
    private stickersCollectionsFile: string = "./public/data/stickers-collections.json";
    private pinsFile: string = "./public/data/collectibles.json";
    private musicKitsFile: string = "./public/data/musickit.json";
    private agentsFile: string = "./public/data/agents.json";
    private smokesFile: string = "./public/data/smokes.json";
    private skinsFile: string = "./public/data/skins.json";

    constructor() {
        this.items = JSON.parse(fs.readFileSync(this.itemsFile, "utf8"));
        this.stickers = JSON.parse(fs.readFileSync(this.stickersFile, "utf8"));
        this.stickersCollections = JSON.parse(fs.readFileSync(this.stickersCollectionsFile, "utf8"));
        this.pins = JSON.parse(fs.readFileSync(this.pinsFile, "utf8"));
        this.musicKits = JSON.parse(fs.readFileSync(this.musicKitsFile, "utf8"));
        this.agents = JSON.parse(fs.readFileSync(this.agentsFile, "utf8"));
        this.smokes = JSON.parse(fs.readFileSync(this.smokesFile, "utf8"));
        this.skins = JSON.parse(fs.readFileSync(this.skinsFile, "utf8"));
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