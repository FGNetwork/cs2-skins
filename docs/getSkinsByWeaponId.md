### getSkinsByWeaponId(id: number)

Returns all skins by weapon id.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | `number` | The weapon id. |

#### Returns

Type: `object`

Example:

```js
{
  '17': {
    weapon_name: 'Desert Eagle',
    name: 'Urban DDPAT',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png',
    color: '#5e98d9',
    rarity: 'industrial-grade'
  },
  '37': {
    weapon_name: 'Desert Eagle',
    name: 'Blaze',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/default_generated/weapon_deagle_aa_flames_light_png.png',
    color: '#8847ff',
    rarity: 'restricted'
  },
  '40': {
    weapon_name: 'Desert Eagle',
    name: 'Night',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/default_generated/weapon_deagle_so_night_light_png.png',
    color: '#5e98d9',
    rarity: 'industrial-grade'
  },
  '61': {
    weapon_name: 'Desert Eagle',
    name: 'Hypnotic',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/default_generated/weapon_deagle_aa_vertigo_light_png.png',
    color: '#d32ce6',
    rarity: 'classified'
  },
  [...]
}
```