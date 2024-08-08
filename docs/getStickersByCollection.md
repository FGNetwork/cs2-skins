### getStickersByCollection(collection: string)

Returns all stickers by collection.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `collection` | `string` | The collection. |

#### Returns

Type: `object`

Example:

```js
{
  '1': {
    weapon_name: 'Sticker',
    name: 'Shooter',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/stickers/dreamhack/dh_gologo1_png.png',
    collection: 'dreamhack'
  },
  '2': {
    weapon_name: 'Sticker',
    name: 'Shooter (Foil)',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/stickers/dreamhack/dh_gologo1_holo_png.png',
    collection: 'dreamhack'
  },
  '3': {
    weapon_name: 'Sticker',
    name: 'Shooter Close',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/stickers/dreamhack/dh_gologo2_png.png',
    collection: 'dreamhack'
  },
  '4': {
    weapon_name: 'Sticker',
    name: 'Shooter Close (Foil)',
    image: 'https://raw.githubusercontent.com/FGNetwork/cs2-images/master/stickers/dreamhack/dh_gologo2_holo_png.png',
    collection: 'dreamhack'
  },
  [...]
}
```