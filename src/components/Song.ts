export interface Song {
    id: string,
    title: string,
    channel: string,
    // views: string,
    // thumbnails: object
}

const SongData: Array<Song> = [
    {
        id: 'DfIjeqJr0Jc',
        title: '東方[Touhou] Demetori- 彼岸帰航 ～ View of The River Styx',
        channel: 'R E'
    },
    {
        id: 'oZO0dHKs2Ic',
        title: '【神霊廟アレンジ】 Demetori - デザイアドライブ ～ Desire Dream',
        channel: 'Kitsuyukino'
    },
    {
        id: 'nahnRPU3OwM',
        title: 'Demetori - 童祭　～ Innocent Treasures',
        channel: 'Diremagic'
    },
    {
        id: 'betM4QG_DgQ',
        title: 'Demetori - Mystical Dream ~ The Woman Who Sold the Moon',
        channel: 'vicildur'
    },
    {
        id: 'IC3A7XxVw0M',
        title: '【東方ボーカル】 「HOLY WORLD」 【SOUND HOLIC】',
        channel: 'Alice Margatroid'
    }
]

export default SongData;
