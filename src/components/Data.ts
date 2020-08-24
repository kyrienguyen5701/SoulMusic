import Realm from 'realm'
import {Song} from "components/Song";

const MAX_RECENT = 10;

const FavoriteSchema = {
    name: 'Favorite',
    properties: {
        id: 'string',
        // title: 'string',
        // channel: 'string',
        // genre: 'string',
        // url: 'any'
    }
}

const RecentSchema = {
    name: 'Recent',
    properties: {
        id: 'string',
        title: 'string',
        // channel: 'string',
        // genre: 'string',
        // url: 'any'
    }
}

const createFavorite = (song: Song) => {
    Realm.open({schema: [FavoriteSchema]})
        .then((realm) => {
            realm.write(() => {
                const favorite = realm.create('Favorite', {id: song.id})
            });
            realm.close();
        })
        .catch(error => console.log("Create Error: ", error))
}

const getFavorites = (callback) => {
    Realm.open({schema: [FavoriteSchema]})
        .then((realm) => {
            const favorites = realm.objects('Favorite');
            callback(favorites);
            realm.close();
        })
        .catch(error => console.log("Get Error: ", error))
}

const deleteFavorite = (song: Song) => {
    Realm.open({schema: [FavoriteSchema]})
        .then((realm) => {
            realm.write(() => {
                const favorites = realm.objects('Favorite')
                const favoriteIndex = favorites.findIndex((element) => element.id === song.id);
                console.log("Del favorite:", favorites[favoriteIndex])
                realm.delete(favorites[favoriteIndex]);
            });
            realm.close();
        })
        .catch(error => console.log("Delete Error: ", error))
}

const createRecent = (song: Song) => {
    Realm.open({schema: [RecentSchema]})
        .then((realm) => {
            realm.write(() => {
                const recents = realm.objects('Recent');
                const index = recents.findIndex((element) => element.id === song.id)
                if (index !== -1) {
                    realm.delete(recents[index]);
                }
                if (recents.length === MAX_RECENT) {
                    realm.delete(recents[0]);
                }
                const recent = realm.create('Recent', {id: song.id, title: song.title});
            });
            realm.close();
        })
        .catch(error => console.log("Create Error: ", error))
}

const getRecents = (callback) => {
    Realm.open({schema: [RecentSchema]})
        .then((realm) => {
            const recents = realm.objects('Recent');
            callback(recents);
            realm.close();
        })
        .catch(error => console.log("Get Error: ", error))
}

const deleteRecent = (song: Song) => {
    Realm.open({schema: [RecentSchema]})
        .then((realm) => {
            realm.write(() => {
                const recents = realm.objects('Recent')
                const recentIndex = recents.findIndex((element) => element.id === song.id);
                console.log("Del recent:", recents[recentIndex])
                realm.delete(recents[recentIndex]);
            });
            realm.close();
        })
        .catch(error => console.log("Delete Error: ", error))
}

export {
    createFavorite,
    getFavorites,
    deleteFavorite,
    createRecent,
    getRecents,
    deleteRecent,
};

