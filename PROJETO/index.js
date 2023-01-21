//Arrays:
const genres = ["Ação e Aventura", "Fantasia", "Mundo Aberto", "RPG", "Quebra-cabeça", "Multijogador", "Ritmo", "Roguelike", "Hack n' Slash"]
const platforms = ["N64", "3DS", "Wii U", "Switch", "Famicom", "NES", "Game Boy Advance", "Wii", "Nintendo DS", "SNES", "GameCube", "Game Boy", "Game Boy Color"]
const series = ["The Legend of Zelda"]
const titles = ["ocarina of time", "majoras mask", "breath of the wild", "a link between worlds", "a link to the past", "four swords adventures", "links awakening", "oracle of ages", "oracle of seasons", "phantom hourglass", "skyward sword", "spirit tracks", "the adventure of link", "tri force heroes", "the legend of zelda", "the minish cap", "tears of the kingdom", "twilight princess", "the wind waker", "hyrule warriors", "hyrule warriors age of calamity", "cadence of hyrule"]
const styleTitles = ["Ocarina of Time", "Majora's Mask", "Breath of the Wild", "A Link Between Worlds", "A Link to the Past", "Four Swords Adventures", "Link's Awakening", "Oracle of Ages", "Oracle of Seasons", "Phantom Hourglass", "Skyward Sword", "Spirit Tracks", "The Adventure of Link", "Tri Force Heroes", "The Legend of Zelda", "The Minish Cap", "Tears of the Kingdom", "Twilight Princess", "The Wind Waker", "Hyrule Warriors", "Hyrule Warriors Age of Calamity", "Cadence of Hyrule"]

//Imagens:
const logoImgs = [
    logoOOT = "./assets/TLOZ Games/Polished Logos/OOT.png",
    logoMM = "./assets/TLOZ Games/Polished Logos/MM.png",
    logoBOTW = "./assets/TLOZ Games/Polished Logos/BOTW.png",
    logoALBW = "./assets/TLOZ Games/Polished Logos/ALBW.png",
    logoALTTP = "./assets/TLOZ Games/Polished Logos/ALTTP.png",
    logoFSA = "./assets/TLOZ Games/Polished Logos/FSA.png",
    logoLA = "./assets/TLOZ Games/Polished Logos/LA.png",
    logoOOA = "./assets/TLOZ Games/Polished Logos/OOA.png",
    logoOOS = "./assets/TLOZ Games/Polished Logos/OOS.png",
    logoPH = "./assets/TLOZ Games/Polished Logos/PH.png",
    logoSS = "./assets/TLOZ Games/Polished Logos/SS.png",
    logoST = "./assets/TLOZ Games/Polished Logos/ST.png",
    logoTAOL = "./assets/TLOZ Games/Polished Logos/TAOL.png",
    logoTFH = "./assets/TLOZ Games/Polished Logos/TFH.png",
    logoTLOZ = "./assets/TLOZ Games/Polished Logos/TLOZ.png",
    logoTMC = "./assets/TLOZ Games/Polished Logos/TMC.png",
    logoTOTK = "./assets/TLOZ Games/Polished Logos/TOTK.png",
    logoTP = "./assets/TLOZ Games/Polished Logos/TP.png",
    logoTWW = "./assets/TLOZ Games/Polished Logos/TWW.png",
    logoHW = "./assets/TLOZ Games/Polished Logos/HW.png",
    logoHWAOC = "./assets/TLOZ Games/Polished Logos/HWAOC.png",
    logoCOH = "./assets/TLOZ Games/Polished Logos/COH.png"
];

//Trailers:
const trailers = [
    trailerOOT = "./assets/TLOZ Games/Videos/OOT trailer.mp4",
    trailerMM = "./assets/TLOZ Games/Videos/MM trailer.mp4",
    trailerBOTW = "./assets/TLOZ Games/Videos/BOTW trailer.mp4",
    trailerALBW = "./assets/TLOZ Games/Videos/ALBW trailer.mp4",
    trailerALTTP = "./assets/TLOZ Games/Videos/ALTTP trailer.mp4",
    trailerFSA = "./assets/TLOZ Games/Videos/FSA trailer.mp4",
    trailerLA = "./assets/TLOZ Games/Videos/LA trailer.mp4",
    trailerOOA = "./assets/TLOZ Games/Videos/OOA trailer.mp4",
    trailerOOS = "./assets/TLOZ Games/Videos/OOS trailer.mp4",
    trailerPH = "./assets/TLOZ Games/Videos/PH trailer.mp4",
    trailerSS = "./assets/TLOZ Games/Videos/SS trailer.mp4",
    trailerST = "./assets/TLOZ Games/Videos/ST trailer.mp4",
    trailerTAOL = "./assets/TLOZ Games/Videos/TAOL trailer.mp4",
    trailerTFH = "./assets/TLOZ Games/Videos/TFH trailer.mp4",
    trailerTLOZ = "./assets/TLOZ Games/Videos/TLOZ trailer.mp4",
    trailerTMC = "./assets/TLOZ Games/Videos/TMC trailer.mp4",
    trailerTOTK = "./assets/TLOZ Games/Videos/TOTK trailer.mp4",
    trailerTP = "./assets/TLOZ Games/Videos/TP trailer.mp4",
    trailerTWW = "./assets/TLOZ Games/Videos/TWW trailer.mp4",
    trailerHW = "./assets/TLOZ Games/Videos/HW trailer.mp4",
    trailerHWAOC = "./assets/TLOZ Games/Videos/HWAOC trailer.mp4",
    trailerCOH = "./assets/TLOZ Games/Videos/COH trailer.mp4"
];

const todosOsJogos = [
    jogo1 = {
        serie: series[0],
        title: titles[0],
        styleTitle: styleTitles[0],
        genre: `${genres[0]}, ${genres[1]}, ${genres[4]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 1998,
        criticReview: 9.9,
        publicReview: 9.1,
        availablePlataform: `${platforms[0]}, ${platforms[1]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: false,
        logoImg: logoImgs[0],
        trailer: trailers[0],
        linkWiki: "https://zeldapedia.wiki/wiki/The_Legend_of_Zelda:_Ocarina_of_Time"

    },

    jogo2 = {
        serie: series[0],
        title: titles[2],
        styleTitle: styleTitles[2],
        genre: `${genres[0]}, ${genres[2]}, ${genres[3]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2017,
        criticReview: 9.7,
        publicReview: 8.7,
        availablePlataform: `${platforms[2]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[2],
        trailer: trailers[2],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild"

    },

    jogo3 = {
        serie: series[0],
        title: titles[1],
        styleTitle: styleTitles[1],
        genre: `${genres[1]}, ${genres[4]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2000,
        criticReview: 9.5,
        publicReview: 9.1,
        availablePlataform: `${platforms[0]}, ${platforms[1]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: true,
        logoImg: logoImgs[1],
        trailer: trailers[1],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Majora%27s_Mask"

    },

    jogo4 = {
        serie: series[0],
        title: titles[3],
        styleTitle: styleTitles[3],
        genre: `${genres[3]}, ${genres[4]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2013,
        criticReview: 9.1,
        publicReview: 9.0,
        availablePlataform: `${platforms[1]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[3],
        trailer: trailers[3],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_A_Link_Between_Worlds"
    },

    jogo5 = {
        serie: series[0],
        title: titles[4],
        styleTitle: styleTitles[4],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 1991,
        criticReview: 9.5,
        publicReview: 9.0,
        availablePlataform: `${platforms[9]}, ${platforms[6]}, ${platforms[7]}, ${platforms[2]}, ${platforms[1]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[4],
        trailer: trailers[4],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past",
    },

    jogo6 = {
        serie: series[0],
        title: titles[5],
        styleTitle: styleTitles[5],
        genre: `${genres[0]}, ${genres[5]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2004,
        criticReview: 8.6,
        publicReview: 7.6,
        availablePlataform: `${platforms[10]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[5],
        trailer: trailers[5],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Four_Swords_Adventures",
    },

    jogo7 = {
        serie: series[0],
        title: titles[6],
        styleTitle: styleTitles[6],
        genre: `${genres[0]}, ${genres[2]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 1993,
        criticReview: 8.7,
        publicReview: 8.4,
        availablePlataform: `${platforms[11]}, ${platforms[12]}, ${platforms[1]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: true,
        logoImg: logoImgs[6],
        trailer: trailers[6],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Link%27s_Awakening",
    },

    jogo8 = {
        serie: series[0],
        title: titles[7],
        styleTitle: styleTitles[7],
        genre: `${genres[1]}, ${genres[4]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2001,
        criticReview: 9.2,
        publicReview: 9.0,
        availablePlataform: `${platforms[12]}, ${platforms[1]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: true,
        logoImg: logoImgs[7],
        trailer: trailers[7],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Oracle_of_Ages",
    },

    jogo9 = {
        serie: series[0],
        title: titles[8],
        styleTitle: styleTitles[8],
        genre: `${genres[1]}, ${genres[4]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2001,
        criticReview: 9.2,
        publicReview: 9.0,
        availablePlataform: `${platforms[12]}, ${platforms[1]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: true,
        logoImg: logoImgs[8],
        trailer: trailers[8],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Oracle_of_Seasons",
    },

    jogo10 = {
        serie: series[0],
        title: titles[9],
        styleTitle: styleTitles[9],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2007,
        criticReview: 9.0,
        publicReview: 7.9,
        availablePlataform: `${platforms[8]}, ${platforms[2]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[9],
        trailer: trailers[9],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Phantom_Hourglass",
    },

    jogo11 = {
        serie: series[0],
        title: titles[10],
        styleTitle: styleTitles[10],
        genre: `${genres[0]}, ${genres[1]}, ${genres[2]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2011,
        criticReview: 9.3,
        publicReview: 8.1,
        availablePlataform: `${platforms[7]}, ${platforms[2]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: false,
        logoImg: logoImgs[10],
        trailer: trailers[10],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Skyward_Sword",
    },

    jogo12 = {
        serie: series[0],
        title: titles[11],
        styleTitle: styleTitles[11],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2009,
        criticReview: 8.7,
        publicReview: 7.9,
        availablePlataform: `${platforms[8]}, ${platforms[2]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[11],
        trailer: trailers[11],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Spirit_Tracks",
    },

    jogo13 = {
        serie: series[0],
        title: titles[12],
        styleTitle: styleTitles[12],
        genre: `${genres[3]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 1988,
        criticReview: 7.3,
        publicReview: 7.1,
        availablePlataform: `${platforms[4]}, ${platforms[5]}, ${platforms[6]}, ${platforms[7]}, ${platforms[1]}, ${platforms[2]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: true,
        logoImg: logoImgs[12],
        trailer: trailers[12],
        linkWiki: "https://zeldawiki.wiki/wiki/Zelda_II:_The_Adventure_of_Link",
    },

    jogo14 = {
        serie: series[0],
        title: titles[13],
        styleTitle: styleTitles[13],
        genre: `${genres[0]}, ${genres[5]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2015,
        criticReview: 7.3,
        publicReview: 7.3,
        availablePlataform: `${platforms[1]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[13],
        trailer: trailers[13],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Tri_Force_Heroes",
    },

    jogo15 = {
        serie: series[0],
        title: titles[14],
        styleTitle: styleTitles[14],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 1987,
        criticReview: 8.4,
        publicReview: 8.0,
        availablePlataform: `${platforms[4]}, ${platforms[5]}, ${platforms[6]}, ${platforms[7]}, ${platforms[1]}, ${platforms[2]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[14],
        trailer: trailers[14],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda",
    },

    jogo16 = {
        serie: series[0],
        title: titles[15],
        styleTitle: styleTitles[15],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2005,
        criticReview: 8.9,
        publicReview: 8.9,
        availablePlataform: `${platforms[6]}, ${platforms[1]}, ${platforms[2]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[15],
        trailer: trailers[15],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_The_Minish_Cap",
    },

    jogo17 = {
        serie: series[0],
        title: titles[16],
        styleTitle: styleTitles[16],
        genre: `${genres[0]}, ${genres[2]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2023,
        criticReview: 0.0,
        publicReview: 0.0,
        availablePlataform: `${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: true,
        logoImg: logoImgs[16],
        trailer: trailers[16],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom",
    },

    jogo18 = {
        serie: series[0],
        title: titles[17],
        styleTitle: styleTitles[17],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2006,
        criticReview: 9.5,
        publicReview: 9.0,
        availablePlataform: `${platforms[10]}, ${platforms[7]}, ${platforms[2]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: false,
        logoImg: logoImgs[17],
        trailer: trailers[17],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_Twilight_Princess",
    },

    jogo19 = {
        serie: series[0],
        title: titles[18],
        styleTitle: styleTitles[18],
        genre: `${genres[0]}, ${genres[1]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2003,
        criticReview: 9.6,
        publicReview: 9.0,
        availablePlataform: `${platforms[10]}, ${platforms[2]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: false,
        logoImg: logoImgs[18],
        trailer: trailers[18],
        linkWiki: "https://zeldawiki.wiki/wiki/The_Legend_of_Zelda:_The_Wind_Waker",
    },

    jogo20 = {
        serie: series[0],
        title: titles[19],
        styleTitle: styleTitles[19],
        genre: `${genres[8]}, ${genres[5]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2014,
        criticReview: 7.6,
        publicReview: 8.3,
        availablePlataform: `${platforms[2]}, ${platforms[1]}, ${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: true,
        sequel: false,
        logoImg: logoImgs[19],
        trailer: trailers[19],
        linkWiki: "https://zeldawiki.wiki/wiki/Hyrule_Warriors",
    },

    jogo21 = {
        serie: series[0],
        title: titles[20],
        styleTitle: styleTitles[20],
        genre: `${genres[8]}, ${genres[5]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2020,
        criticReview: 7.8,
        publicReview: 7.9,
        availablePlataform: `${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[20],
        trailer: trailers[20],
        linkWiki: "https://zeldawiki.wiki/wiki/Hyrule_Warriors:_Age_of_Calamity",
    },

    jogo22 = {
        serie: series[0],
        title: titles[21],
        styleTitle: styleTitles[21],
        genre: `${genres[7]}, ${genres[6]}, ${genres[5]}`,
        sinopse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas accusamus totam hic ex, recusandae provident sapiente eius at consectetur modi dolore tempore adipisci aliquid aut expedita explicabo iste asperiores.",
        releaseDate: 2019,
        criticReview: 8.5,
        publicReview: 8.0,
        availablePlataform: `${platforms[3]}`,
        temEmBr: false,
        remasterOrRemake: false,
        sequel: false,
        logoImg: logoImgs[21],
        trailer: trailers[21],
        linkWiki: "https://zeldawiki.wiki/wiki/Cadence_of_Hyrule:_Crypt_of_the_NecroDancer_feat._The_Legend_of_Zelda",
    }
]

//Relatório impresso no console com as informações de cada item -----------------------------
function relatorio(objeto) {
    for (let i in objeto) {
        console.log(`Relatório do jogo ${objeto[i].styleTitle}`)
        console.table(objeto[i])
        console.log(`\n \n`)
    }
}
//Para fazer funcionar, descomente:
relatorio(todosOsJogos)


// Média numérica calculada e impressa no console -------------------------------------------
const fazerMediaReviewsCriticos = (array) => {
    let mediaReviewsCriticos = 0
    let somaReviewsCriticos = 0
    let totalReviewsCriticos = array.length
    for (let i in array) {
        somaReviewsCriticos = somaReviewsCriticos + array[i].criticReview
    }
    mediaReviewsCriticos = (somaReviewsCriticos / totalReviewsCriticos).toFixed(1)

    console.log(`A média da nota dos críticos é: ${mediaReviewsCriticos}`)
}
const fazerMediaReviewsPublico = (array) => {
    let mediaReviewsPublico = 0
    let somaReviewsPublico = 0
    let totalReviewsPublico = array.length
    for (let i in array) {
        somaReviewsPublico = somaReviewsPublico + array[i].publicReview
    }
    mediaReviewsPublico = (somaReviewsPublico / totalReviewsPublico).toFixed(1)

    console.log(`A média da nota do público é: ${mediaReviewsPublico}`)
}
//Para fazer funcionar, descomente:
fazerMediaReviewsCriticos(todosOsJogos)
fazerMediaReviewsPublico(todosOsJogos)


// Verificação de valores booleanos true impressa no console -------------------------------
const verificarIdioma = (array) => {
    const checkLanguage = (array[0].temEmBr && array[1].temEmBr && array[2].temEmBr && array[3].temEmBr && array[4].temEmBr && array[5].temEmBr && array[6].temEmBr && array[7].temEmBr && array[8].temEmBr && array[9].temEmBr && array[10].temEmBr && array[11].temEmBr && array[12].temEmBr && array[13].temEmBr && array[14].temEmBr && array[15].temEmBr && array[16].temEmBr && array[17].temEmBr && array[18].temEmBr && array[19].temEmBr && array[20].temEmBr && array[21].temEmBr && array[22].temEmBr);
    if (checkLanguage) {
        informLanguage =
            (`Todos os jogos da série "${series[0]}" são traduzidos para PT-BR`)
    } else {
        informLanguage =
            (`Infelizmente nem todos os jogos da série "${series[0]}" são traduzidos para PT-BR`)
    }
    console.log(informLanguage)
}
verificarIdioma(todosOsJogos)

// ------------------------------------------------------------------------------------------

const resultadoFinal = []
const campoPesquisa = document.getElementById("campoPesquisa")
const botaoPesquisa = document.getElementById("botaoPesquisa")
const areaDisplay = document.getElementById("areaDisplay")
const tituloDisplay = document.getElementById("tituloDisplay")
const displayVideo = document.getElementById("displayVideo")

// Criar Section com innerHTML --------------------------------------------------------------
const criarNovaSectionIH = (jogo) => {
    let section = `<section class="gridJogo">
    <h2 class="tituloJogo"><a class="tituloJogo" target="_blank" href="${jogo.linkWiki}">${jogo.styleTitle}</a></h2>
    <img class="logoJogo" src="${jogo.logoImg}" width="200px"
        alt="${jogo.serie}: ${jogo.styleTitle} logo">
    <ul class="infoJogo">
        <li> <b>Gênero: </b>${jogo.genre}</li>
        <li><b>Plataformas: </b>${jogo.availablePlataform}</li>
        <li><b>Sinopse: </b>${jogo.sinopse}</li>
        <li>&#160</li>
        <li><b>Data de lançamento: </b>${jogo.releaseDate}</li>
        <li><b>Nota dos críticos: </b>${jogo.criticReview}</li>
        <li><b>Nota do público: </b>${jogo.publicReview}</li>
        <li>&#160</li>
        <li>${jogo.temEmBr}</li>
        <li>${jogo.remasterOrRemake}</li>
        <li>${jogo.sequel}</li>
    </ul>
    <video class="trailerJogo" src="${jogo.trailer}" controls width="100%"></video>
</section>`

    displayVideo.innerHTML = ""
    areaDisplay.innerHTML += section
}

// Criar H1 para mensagem de ERRO com Create Element e Append Child ------------------------
const criarNovoH1 = (mensagem) => {
    displayVideo.innerHTML = ""
    const novoH1 = document.createElement("h1")
    const conteudoH1 = document.createTextNode(mensagem)
    novoH1.appendChild(conteudoH1)
    novoH1.classList.add("tituloDisplay")
    areaDisplay.appendChild(novoH1)
}

// Filtrar resultados ao clicar na barra de navegação ----------------------------------------------
const navTodosOsJogos = document.getElementById("Todos os Jogos")
const navJogosPrincipais = document.getElementById("navJogosPrincipais")


const filtrarNav = (navSelecionada) => {
    if (navSelecionada === "Todos os Jogos") {
        for (let i in todosOsJogos) {
            criarNovaSectionIH(todosOsJogos[i])
        }
    } else if (navSelecionada === "Jogos Principais" || navSelecionada === "Jogos Secundários") {
        if (navSelecionada === "Jogos Principais") {
            let j = 0
            while (j < 19) {
                criarNovaSectionIH(todosOsJogos[j])
                j++
            }

        } else {
            let j = 19
            while (j < 23) {
                criarNovaSectionIH(todosOsJogos[j])
                j++
            }
        }
    } else {
        criarNovoH1("Ainda estamos trabalhando para trazer o melhor conteúdo de The Legend of Zelda para você!")
        console.log("Ainda estamos trabalhando para trazer o melhor conteúdo de The Legend of Zelda para você!")
    }
}

const encaminharNav = () => {
    const navSelecionada = event.currentTarget.id
    tituloDisplay.innerHTML = (navSelecionada)
    areaDisplay.innerHTML = ""

    filtrarNav(navSelecionada)

}

//Adicionar nova variável para resposta Remaster/Remake --------------------------
const verificarRemasterRemake = (array) => {
    for (let i in array) {
        let RemasterRemake = (array[i].remasterOrRemake ? "Esse jogo tem uma versão Remaster/Remake" : "Esse jogo não tem uma versão Remaster/Remake")
        array[i].remasterOrRemake = RemasterRemake
    }
}

//Adicionar nova variável para resposta Remaster/Remake --------------------------
const verificarTraducao = (array) => {
    for (let i in array) {
        let Traducao = (array[i].temEmBr ? "Esse jogo tem tradução para Pt-BR" : "Esse jogo não tem tradução para Pt-BR")
        array[i].temEmBr = Traducao
    }
}

//Adicionar nova variável para resposta Remaster/Remake --------------------------
const verificarSequencia = (array) => {
    for (let i in array) {
        let Sequencia = (array[i].sequel ? "Esse jogo é uma sequência direta de outro jogo" : "Esse jogo não é uma sequência direta a outro jogo")
        array[i].sequel = Sequencia
    }
}
// -------------------------------------------------------------------------------
verificarRemasterRemake(todosOsJogos)
verificarTraducao(todosOsJogos)
verificarSequencia(todosOsJogos)

//Pesquisa -----------------------------------------------------------------------
const funcaoPesquisa = (inputPesquisa, todosOsJogos) => {


    tituloDisplay.innerHTML = "Resultado da Pesquisa"

    //Limpar o article
    areaDisplay.innerHTML = ""

    // Resetar o campo de resultado de pesquisa
    resultadoFinal.length = 0

    // Impedir que uma pesquisa vazia retorne todos os resultados
    if (inputPesquisa.length === 0) {
        console.log("Nada foi pesquisado")
        // Inserir comando para imprimir HTML de erro
        criarNovoH1("Nada foi pesquisado")
    } else {

        // Refinar pesquisa retirando os espaços em branco do começo e do final
        let espacoNaPesquisa = ""
        espacoNaPesquisa = inputPesquisa.trim()
        inputPesquisa = espacoNaPesquisa

        // Refinar pesquisa para não ser case sensitive
        let capsNaPesquisa = ""
        capsNaPesquisa = inputPesquisa.toLowerCase()
        inputPesquisa = capsNaPesquisa

        // Refinar pesquisa com '
        if (inputPesquisa.includes("'")) {
            let reformulaPesquisa = ""
            reformulaPesquisa = inputPesquisa.replaceAll("'", "")
            inputPesquisa = reformulaPesquisa
        }

        for (let i in todosOsJogos) {
            /*
            MÉTODO DE PESQUISA MAIS EXATO E MAIS TRAVADO, RETORNA UM VALOR SÓ, SENDO ESSE O ÚLTIMO
            if (inputPesquisa === todosOsJogos[i].title) {
                // Função para adicionar todo um elemento HTML Section na Article
                resultadoFinal = "O jogo que você pesquisou foi: " + todosOsJogos[i].serie + ": " + todosOsJogos[i].title
            }
            */

            // Função para adicionar todo um elemento HTML Section na Article
            if (todosOsJogos[i].title.includes(inputPesquisa)) {
                resultadoFinal.push("O jogo que você pesquisou foi: " + todosOsJogos[i].serie + ": " + todosOsJogos[i].styleTitle)
                // Trocar para que puxe um elemento para ser lido pela impressora HTML
                criarNovaSectionIH(todosOsJogos[i])
            }
        }
        if (resultadoFinal.length === 0) {
            // Tela de erro
            criarNovoH1("Não foi possível encontrar esse jogo!")
            console.log("Não foi possível encontrar esse jogo!")
        } else {
            // Resultado da Pesquisa
            imprimirResultadoFinal(resultadoFinal)
        }
    }
}

// Função para pesquisar com botão ----------------------------------------------------------
const puxarInput = () => {

    funcaoPesquisa(campoPesquisa.value, todosOsJogos)
    // Colocar função para dar início a exibição dos resultados

    // Limpar o input de pesquisa
    campoPesquisa.value = ""
}

// Função para pesquisar com enter ----------------------------------------------------------
campoPesquisa.addEventListener("keypress", function (botaoApertado) {
    if (botaoApertado.key === "Enter") {
        botaoApertado.preventDefault()
        document.getElementById("botaoPesquisa").click()
    }
})

//Função de Impressão do Resultado Final ----------------------------------------------------
const imprimirResultadoFinal = (resultadoFinal) => {
    for (let i in resultadoFinal) {
        console.log(resultadoFinal[i])
    }
}