import Realm from 'realm'
import {Song, SongSchema} from "components/Song";
const FavoriteSchema = {
    name: 'Favorite',
    properties: {
        data: {type: 'list', objectType: 'Song'}
    }
}

const RecentSchema = {
    name: 'Recent',
    properties: {
        data: {type: 'list', objectType: 'Song'}
    }
}

// let iniFavorite = () => {
//     Realm.open({schema: [FavoriteSchema, SongSchema]})
//         .then((realm) => {
//             realm.write(() => {
//                 let dbFavorite = realm.create('Favorite', {data: []})
//             });
//             realm.close();
//         })
//         .catch(error => console.log("Error: ", error))
// }
//
// const pushFavorite = (song: Song) => {
//     Realm.open({schema: [FavoriteSchema, SongSchema]})
//         .then(realm => {
//             let dbFavorite = realm.objects('Favorite')[0].data;
//             realm.write(() => {
//                 dbFavorite.data.push(song);
//             })
//             realm.close();
//         });
// }
//
// const popFavorite = (song: Song) => {
//     Realm.open({schema: [FavoriteSchema, SongSchema]})
//         .then(realm => {
//             let dbFavorite = realm.objects('Favorite')[0];
//             if (dbFavorite.data.length === 1) {
//                 realm.delete(dbFavorite);
//             }
//             else {
//                 realm.write(() => {
//                     dbFavorite.data = dbFavorite.data.filtered(`id == ${song.id}`)
//                 })
//             }
//             realm.close();
//         })
// }

// let iniRecent = () => {
//     Realm.open({schema: [RecentSchema, SongSchema]})
//         .then((realm) => {
//             realm.write(() => {
//                 let dbRecent = realm.create('Recent', {data: []})
//             });
//             realm.close();
//         })
//         .catch(error => console.log("Error: ", error))
// }

// const pushRecent = (song: Song) => {
//     Realm.open({schema: [RecentSchema, SongSchema]})
//         .then(realm => {
//             let dbRecent = realm.objects('Recent')[0].data;
//             realm.write(() => {
//                 dbRecent.data.push(song);
//             })
//             realm.close();
//         });
// }
//
// const popRecent = (song: Song) => {
//     Realm.open({schema: [RecentSchema, SongSchema]})
//         .then(realm => {
//             let dbRecent = realm.objects('Recent')[0];
//             if (dbRecent.data.length === 1) {
//                 realm.delete(dbRecent);
//             }
//             else {
//                 realm.write(() => {
//                     dbRecent.data = dbRecent.data.filtered(`id == ${song.id}`)
//                 })
//             }
//             realm.close();
//         })
// }

export default FavoriteSchema;

