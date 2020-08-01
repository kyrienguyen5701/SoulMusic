export interface Song {
    id: string,
    title: string,
    channel: string,
    genre?: string,
    url: any
    // views: string,
    // thumbnails: object
}

const SongData: Array<Song> = [
    {
        id: "jgZkrA8E5do",
        title: "TOULIVER x BINZ - -BIGCITYBOI- (Official Music Video)",
        channel: "Binz Da Poet",
        url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        genre: "V-Pop"
    },
    {
        id: "K-a8s8OLBSE",
        title: "Taylor Swift - cardigan (Official Music Video)",
        channel: "Taylor Swift",
        url: "https://drive.google.com/file/d/1KkCfcfcSJlJLXExv-3152YAF7bJrk-71/view?usp=sharing",
        genre: "Pop"
    },
    {
        id: "Ujb-gvqsoi0",
        title: "Red Velvet - IRENE & SEULGI 'Monster' MV",
        channel: "SMTOWN",
        url: "https://drive.google.com/file/d/1YTN6TtvPe1ZIL8sgVqkUb4ssVRpMcViF/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "LZN4I3K8SC0",
        title: "Cứ Chill Thôi - Chillies (Official Music Video) ft Suni Hạ Linh & Rhymastic",
        channel: "Chillies",
        url: "https://drive.google.com/file/d/1ssOF54D24JhOORqZ-aNX2zksBxEgfnrq/view?usp=sharing",
        genre: "V-Pop"
    },
    {
        id: "HlN2BXNJzxA",
        title: "CHUNG HA 청하 'Gotta Go (벌써 12시)' Official MV",
        channel: "MNH Entertainment",
        url: "https://drive.google.com/file/d/1MbIOgXdURE-95NASv5hrwcOke9rfjH93/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "2S24-y0Ij3Y",
        title: "BLACKPINK - 'Kill This Love' M-V",
        channel: "BLACKPINK",
        url: "https://drive.google.com/file/d/1V6UnC14i6fuUufDbnUi2marrPve2ms29/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "ioNng23DkIM",
        title: "BLACKPINK - 'How You Like That' M-V",
        channel: "channel 7",
        url: "https://drive.google.com/file/d/1UtNwfMIBzDurdWPWA_WRBaX0q8sYAa_S/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "ijfpolQfzvI",
        title: "[MV] 화사 (Hwa Sa) - LMM",
        channel: "1theK (원더케이)",
        url: "https://drive.google.com/file/d/12CqTztDoY3wgjJwhPgKBEqwXkIu9Nxjs/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "ScSn235gQx0",
        title: "[MV] Hwa Sa(화사) _ TWIT(멍청이) ",
        channel: "1theK (원더케이)",
        url: "https://drive.google.com/file/d/1P8zG7JWYtnZuf5-evB7P8MLPKRuaSskK/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "tDukIfFzX18",
        title: "[MV] Hwa Sa(화사) _ Maria(마리아)",
        channel: "1theK (원더케이)",
        url: "https://drive.google.com/file/d/1rkbKJ1KZojyObdwEVmadTbVpfizc-eG2/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "G5UM2rOyqr4",
        title: "[MV] 마마무(MAMAMOO) - 너나 해(Egotistic)",
        channel: "MAMAMOO",
        url: "https://drive.google.com/file/d/1rkbKJ1KZojyObdwEVmadTbVpfizc-eG2/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "ZAfAud_M_mg",
        title: "Halsey - Without Me",
        channel: "Halsey",
        url: "https://drive.google.com/file/d/1UtNwfMIBzDurdWPWA_WRBaX0q8sYAa_S/view?usp=sharing",
        genre: "Pop"
    },
    {
        id: "WnIL4o6_D8M",
        title: "Michele Morrone - Feel It (from 365 days movie)",
        channel: "Michele Morrone",
        url: "https://drive.google.com/file/d/16u4FnUnQNyPdwYzIu5jYlAqyukwZ2Q02/view?usp=sharing",
        genre: "Pop"
    },
    {
        id: "gVlYxmdbYqM",
        title: "nhận một cú lừa nhưng bích phương không quá buồn như anh nghĩ đâu",
        channel: "BÍCH PHƯƠNG",
        url: "https://drive.google.com/file/d/16u4FnUnQNyPdwYzIu5jYlAqyukwZ2Q02/view?usp=sharing",
        genre: "V-Pop"
    },
    {
        id: "VYIdx0J7SPA",
        title: "I See Red - Everybody Loves An Outlaw (Lyrics) ",
        channel: "DopeLyrics",
        url: "https://drive.google.com/file/d/16u4FnUnQNyPdwYzIu5jYlAqyukwZ2Q02/view?usp=sharing",
        genre: "Pop"
    },
    {
        id: "Nj2U6rhnucI",
        title: "Dua Lipa - Break My Heart (Official Video)",
        channel: "Dua Lipa",
        url: "https://drive.google.com/file/d/1rkbKJ1KZojyObdwEVmadTbVpfizc-eG2/view?usp=sharing",
        genre: "Pop"
    },
    {
        id: "ECxVfrwwTp0",
        title: "Gác lại âu lo - Da LAB ft. Miu Lê (Official MV)",
        channel: "Da LAB Official",
        url: "https://drive.google.com/file/d/1rkbKJ1KZojyObdwEVmadTbVpfizc-eG2/view?usp=sharing",
        genre: "V-Pop"
    },
    {
        id: "32si5cfrCNc",
        title: "BLACKPINK - 'How You Like That' DANCE PERFORMANCE VIDEO",
        channel: "BLACKPINK",
        url: "https://drive.google.com/file/d/1rkbKJ1KZojyObdwEVmadTbVpfizc-eG2/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "qWi-yviL-oI",
        title: "HyunA(현아) - 'Lip & Hip' Official Music Video",
        channel: "HyunA",
        url: "https://drive.google.com/file/d/1rkbKJ1KZojyObdwEVmadTbVpfizc-eG2/view?usp=sharing",
        genre: "K-Pop"
    },
    {
        id: "20",
        title: "title 20",
        channel: "channel 20",
        url: "url 20",
        genre: "K-Pop"
    },
    {
        id: "21",
        title: "title 21",
        channel: "channel 21",
        url: "url 21",
        genre: "K-Pop"
    },
    {
        id: "22",
        title: "title 22",
        channel: "channel 22",
        url: "url 22",
        genre: "K-Pop"
    },
    {
        id: "23",
        title: "title 23",
        channel: "channel 23",
        url: "url 23",
        genre: "K-Pop"
    },
    {
        id: "24",
        title: "title 24",
        channel: "channel 24",
        url: "url 24"
    },
    {
        id: "25",
        title: "title 25",
        channel: "channel 25",
        url: "url 25"
    },
    {
        id: "26",
        title: "title 26",
        channel: "channel 26",
        url: "url 26"
    },
    {
        id: "27",
        title: "title 27",
        channel: "channel 27",
        url: "url 27"
    },
    {
        id: "28",
        title: "title 28",
        channel: "channel 28",
        url: "url 28"
    },
    {
        id: "29",
        title: "title 29",
        channel: "channel 29",
        url: "url 29"
    },
    {
        id: "30",
        title: "title 30",
        channel: "channel 30",
        url: "url 30"
    },
    {
        id: "31",
        title: "title 31",
        channel: "channel 31",
        url: "url 31"
    },
    {
        id: "32",
        title: "title 32",
        channel: "channel 32",
        url: "url 32"
    },
    {
        id: "33",
        title: "title 33",
        channel: "channel 33",
        url: "url 33"
    },
    {
        id: "34",
        title: "title 34",
        channel: "channel 34",
        url: "url 34"
    },
    {
        id: "35",
        title: "title 35",
        channel: "channel 35",
        url: "url 35"
    },
    {
        id: "36",
        title: "title 36",
        channel: "channel 36",
        url: "url 36"
    },
    {
        id: "37",
        title: "title 37",
        channel: "channel 37",
        url: "url 37"
    },
    {
        id: "38",
        title: "title 38",
        channel: "channel 38",
        url: "url 38"
    },
    {
        id: "39",
        title: "title 39",
        channel: "channel 39",
        url: "url 39"
    },
    {
        id: "40",
        title: "title 40",
        channel: "channel 40",
        url: "url 40"
    },
    {
        id: "41",
        title: "title 41",
        channel: "channel 41",
        url: "url 41"
    },
    {
        id: "42",
        title: "title 42",
        channel: "channel 42",
        url: "url 42"
    },
    {
        id: "43",
        title: "title 43",
        channel: "channel 43",
        url: "url 43"
    },
    {
        id: "44",
        title: "title 44",
        channel: "channel 44",
        url: "url 44"
    },
    {
        id: "45",
        title: "title 45",
        channel: "channel 45",
        url: "url 45"
    },
    {
        id: "46",
        title: "title 46",
        channel: "channel 46",
        url: "url 46"
    },
    {
        id: "47",
        title: "title 47",
        channel: "channel 47",
        url: "url 47"
    },
    {
        id: "48",
        title: "title 48",
        channel: "channel 48",
        url: "url 48"
    },
    {
        id: "49",
        title: "title 49",
        channel: "channel 49",
        url: "url 49"
    },
    {
        id: "50",
        title: "title 50",
        channel: "channel 50",
        url: "url 50"
    }
]

export default SongData;
