export interface Song {
  id: string;
  title: string;
  channel: string;
  genre: string;
  url: any;
}

const SongData: Array<Song> = [
  {
    id: 'jgZkrA8E5do',
    title: 'TOULIVER x BINZ - -BIGCITYBOI- (Official Music Video)',
    channel: 'Binz Da Poet',
    url:
        'http://42.112.17.21:8077/TOULIVER%20x%20BINZ%20-%20-BIGCITYBOI-%20(Official%20Music%20Video).mp4',
    genre: 'V-Pop',
  },
  {
    id: 'K-a8s8OLBSE',
    title: 'Taylor Swift - cardigan (Official Music Video)',
    channel: 'Taylor Swift',
    url:
        'http://42.112.17.21:8077/Taylor%20Swift%20-%20cardigan%20(Official%20Music%20Video).mp4',
    genre: 'Pop',
  },
  {
    id: 'Ujb-gvqsoi0',
    title: "Red Velvet - IRENE & SEULGI 'Monster' MV",
    channel: 'SMTOWN',
    url:
        "http://42.112.17.21:8077/Red%20Velvet%20-%20IRENE%20&%20SEULGI%20'Monster'%20MV.mp4",
    genre: 'K-Pop',
  },
  {
    id: 'LZN4I3K8SC0',
    title:
        'Cứ Chill Thôi - Chillies (Official Music Video) ft Suni Hạ Linh & Rhymastic',
    channel: 'Chillies',
    url:
        'http://42.112.17.21:8077/C%E1%BB%A9_Chill_Th%C3%B4i_Chillies_Official_Music_Video_ft_Suni_H%E1%BA%A1_Linh_&_Rhymastic.mp4',
    genre: 'V-Pop',
  },
  {
    id: 'HlN2BXNJzxA',
    title: "CHUNG HA 청하 'Gotta Go (벌써 12시)' Official MV",
    channel: 'MNH Entertainment',
    url:
        "http://42.112.17.21:8077/CHUNG_HA_%EC%B2%AD%ED%95%98_'Gotta_Go_%EB%B2%8C%EC%8D%A8_12%EC%8B%9C'_Official_MV.mp4",
    genre: 'K-Pop',
  },
  {
    id: '2S24-y0Ij3Y',
    title: "BLACKPINK - 'Kill This Love' M-V",
    channel: 'BLACKPINK',
    url:
        "http://42.112.17.21:8077/BLACKPINK%20-%20'Kill%20This%20Love'%20M-V.mp4",
    genre: 'K-Pop',
  },
  {
    id: 'ioNng23DkIM',
    title: "BLACKPINK - 'How You Like That' M-V",
    channel: 'chanel 7',
    url:
        "http://42.112.17.21:8077/BLACKPINK%20-%20'How%20You%20Like%20That'%20M-V.mp4",
    genre: 'K-Pop',
  },
  {
    id: 'ijfpolQfzvI',
    title: '[MV] 화사 (Hwa Sa) - LMM',
    channel: '1theK (원더케이)',
    url:
        'http://42.112.17.21:8077/[MV]%20%ED%99%94%EC%82%AC%20(Hwa%20Sa)%20-%20LMM.mp4',
    genre: 'K-Pop',
  },
  {
    id: 'ScSn235gQx0',
    title: '[MV] Hwa Sa(화사) _ TWIT(멍청이) ',
    channel: '1theK (원더케이)',
    url:
        'http://42.112.17.21:8077/[MV]%20%ED%99%94%EC%82%AC%20(Hwa%20Sa)%20-%20LMM.mp4',
    genre: 'K-Pop',
  },
  {
    id: 'tDukIfFzX18',
    title: '[MV] Hwa Sa(화사) _ Maria(마리아)',
    channel: '1theK (원더케이)',
    url:
        'http://42.112.17.21:8077/[MV]%20Hwa%20Sa(%ED%99%94%EC%82%AC)%20_%20Maria(%EB%A7%88%EB%A6%AC%EC%95%84).mp4',
    genre: 'K-Pop',
  },
  {
    id: 'G5UM2rOyqr4',
    title: '[MV] 마마무(MAMAMOO) - 너나 해(Egotistic)',
    channel: 'MAMAMOO',
    url:
        "http://42.112.17.21:8077/BLACKPINK%20-%20'Kill%20This%20Love'%20M-V.mp4",
    genre: 'K-Pop',
  },
  {
    id: 'ZAfAud_M_mg',
    title: 'Halsey - Without Me',
    channel: 'Halsey',
    url: 'http://42.112.17.21:8077/Halsey%20-%20Without%20Me.mp4',
    genre: 'Pop',
  },
  {
    id: 'WnIL4o6_D8M',
    title: 'Michele Morrone - Feel It (from 365 days movie)',
    channel: 'Michele Morrone',
    url: 'http://42.112.17.21:8077/Halsey%20-%20Without%20Me.mp4',
    genre: 'Pop',
  },
  {
    id: 'gVlYxmdbYqM',
    title: 'nhận một cú lừa nhưng bích phương không quá buồn như anh nghĩ đâu',
    channel: 'BÍCH PHƯƠNG',
    url:
        "http://42.112.17.21:8077/BLACKPINK%20-%20'How%20You%20Like%20That'%20M-V.mp4",
    genre: 'V-Pop',
  },
  {
    id: 'VYIdx0J7SPA',
    title: 'I See Red - Everybody Loves An Outlaw (Lyrics) ',
    channel: 'DopeLyrics',
    url:
        'http://42.112.17.21:8077/[MV]%20Hwa%20Sa(%ED%99%94%EC%82%AC)%20_%20TWIT(%EB%A9%8D%EC%B2%AD%EC%9D%B4).mp4',
    genre: 'Pop',
  },
  {
    id: 'Nj2U6rhnucI',
    title: 'Dua Lipa - Break My Heart (Official Video)',
    channel: 'Dua Lipa',
    url:
        "http://42.112.17.21:8077/Red%20Velvet%20-%20IRENE%20&%20SEULGI%20'Monster'%20MV.mp4",
    genre: 'Pop',
  },
  {
    id: 'ECxVfrwwTp0',
    title: 'Gác lại âu lo - Da LAB ft. Miu Lê (Official MV)',
    channel: 'Da LAB Official',
    url:
        'http://42.112.17.21:8077/Taylor%20Swift%20-%20cardigan%20(Official%20Music%20Video).mp4',
    genre: 'V-Pop',
  },
  {
    id: '32si5cfrCNc',
    title: "BLACKPINK - 'How You Like That' DANCE PERFORMANCE VIDEO",
    channel: 'BLACKPINK',
    url:
        "http://42.112.17.21:8077/BLACKPINK%20-%20'How%20You%20Like%20That'%20M-V.mp4",
    genre: 'K-Pop',
  },
  {
    id: 'qWi-yviL-oI',
    title: "HyunA(현아) - 'Lip & Hip' Official Music Video",
    channel: 'HyunA',
    url:
        'http://42.112.17.21:8077/[MV]%20Hwa%20Sa(%ED%99%94%EC%82%AC)%20_%20Maria(%EB%A7%88%EB%A6%AC%EC%95%84).mp4',
    genre: 'K-Pop',
  },
  {
    id: 'BA8LxdqYdMw',
    title:
        'BIGCITYBOI - BINZ X TOULIVER ( VUX REMIX ) | Nhớ Đeo Tai Nghe  (Follow @HHD Remix & @HHD Music)',
    channel: 'HOA HỒNG DẠI MUSIC',
    url:
        'http://42.112.17.21:8077/TOULIVER%20x%20BINZ%20-%20-BIGCITYBOI-%20(Official%20Music%20Video).mp4',
    genre: 'Rock',
  },
  {
    id: '-M5H_0Gx9Qg',
    title: "[화사] '마리아(Maria)' Performance Video",
    channel: 'MAMAMO',
    url:
        'http://42.112.17.21:8077/[MV]%20Hwa%20Sa(%ED%99%94%EC%82%AC)%20_%20Maria(%EB%A7%88%EB%A6%AC%EC%95%84).mp4',
    genre: 'Rock',
  },
  {
    id: 'MOwaUlXZxkI',
    title: "BLACKPINK - 'Kill This Love' DANCE PRACTICE VIDEO (MOVING VER.)",
    channel: 'BLACKPINK',
    url:
        "http://42.112.17.21:8077/BLACKPINK%20-%20'Kill%20This%20Love'%20M-V.mp4",
    genre: 'K-Pop',
  },
];

export {SongData};
