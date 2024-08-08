### getAgentsByTeam(team: ETeams)

Returns all agents by team.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `team` | `ETeams` | The team. |

#### Enums
```ts
export enum ETeams {
    T = 0,
    CT = 1,
    BOTH = 2
}
```

#### Returns

Type: `object`

Example:

```js
{
  '4619': {
    weapon_name: "'Blueberries' Buckshot",
    name: 'NSWC SEAL',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/characters/customplayer_ctm_st6_variantj.png',
    team: 1,
    color: '#8847ff'
  },
  '4680': {
    weapon_name: "'Two Times' McCoy",
    name: 'TACP Cavalry',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/characters/customplayer_ctm_st6_variantl.png',
    team: 1,
    color: '#d32ce6'
  },
  '4711': {
    weapon_name: "Cmdr. Mae 'Dead Cold' Jamison",
    name: 'SWAT',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/characters/customplayer_ctm_swat_variante.png',
    team: 1,
    color: '#eb4b4b'
  },
  '4712': {
    weapon_name: '1st Lieutenant Farlow',
    name: 'SWAT',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/characters/customplayer_ctm_swat_variantf.png',
    team: 1,
    color: '#d32ce6'
  },
  [...]
}
```