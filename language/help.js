
  // Message Salah Command
  exports.wrongFormat = (prefix) => {
  return `Format Salah โ Silakan Cek Cara Penggunaan Di *${prefix}allmenu*`
  }

  // Message Wrong Url
  exports.notNum = (q) => {
  return `"${q}", _๐๐๐ ๐๐๐ธ๐ฎ๐ป ๐๐ป๐ด๐ธ๐ฎ ๐๐ฎ๐๐ฎ๐ป๐ด!_
  `
  }

  // Message Fitur Off
  exports.fiturOff = () => {
  return `โ ๏ธ _๐๐ถ๐๐๐ฟ๐ป๐๐ฎ ๐ง๐ถ๐ฑ๐ฎ๐ธ ๐๐ธ๐๐ถ๐ณ_
  `
  }

  // Message Saat Fitur Error
  exports.fiturError = () => {
  return `โ ๏ธ _๐๐ฎ๐ธ๐๐ฎ๐ ๐๐ต๐ต ๐๐ฎ๐ฝ๐ฒ ๐๐ฟ๐ผ๐ฟ ๐บ๐๐น๐_
  `
  }

  // Message When Not the Destined Link
  exports.notLink = () => {
  return `โ ๏ธ _๐๐๐ ๐๐๐ธ๐ฎ๐ป ๐๐ถ๐ป๐ธ ๐๐ฎ๐บ๐ฏ๐ฎ๐ป๐ด_
  `
  }

  // Message Successfully Adding User To Group
  exports.addUser =() => {
  return `_๐ฆ๐๐ธ๐๐ฒ๐ ๐ ๐ฒ๐ป๐ฎ๐ฏ๐ฎ๐ต๐ธ๐ฎ๐ป ๐๐ฎ๐ฏ๐ฎ๐ป ๐๐ฒ ๐ด๐ฟ๐๐ฝ_ โ๏ธ
  `
  }

  // Message Success Kick User From Group
  exports.kickUser =() => {
  return `_๐ฆ๐๐ธ๐๐ฒ๐ ๐ ๐ฒ๐ป๐ด๐ฒ๐น๐๐ฎ๐ฟ๐ธ๐ฎ๐ป ๐๐ฒ๐ฏ๐ฎ๐ป ๐๐ฎ๐ฟ๐ถ ๐๐ฟ๐๐ฝ_ โ๏ธ
  `
  }

  // Message Promote User
  exports.proMote =() => {
  retun `_๐๐ถ๐ฒ๐ฒ๐ฒ ๐๐ฑ๐บ๐ถ๐ป ๐๐ฎ๐ฟ๐_ (โงโฝโฆ)  โ๏ธ
  `
  }

  // Message Demote User
  exports.deMote =() => {
  return `_๐ฆ๐๐ธ๐๐ฒ๐ ๐ ๐ฒ๐ป๐๐ฟ๐๐ป๐ธ๐ฎ๐ป ๐๐ฎ๐ฏ๐ฎ๐๐ฎ๐ป_ โ๏ธ
  `
  }

  // Message Rename Group
  exports.namaGrup =(text) => {
  return `_๐ฆ๐๐ธ๐๐ฒ๐ ๐ ๐ฒ๐ป๐ด๐๐ฏ๐ฎ๐ต ๐ก๐ฎ๐บ๐ฎ ๐ด๐ฟ๐๐ฝ ๐บ๐ฒ๐ป๐ท๐ฎ๐ฑ๐ถ_ : ${text} โ๏ธ
  `
  }

// Message Ephermal On
  exports.epOn =() => {
  return `_๐ฆ๐๐ธ๐๐ฒ๐ ๐ ๐ฒ๐ป๐ด๐ต๐ถ๐ฑ๐๐ฝ๐ธ๐ฎ๐ป ๐ฝ๐ฒ๐๐ฎ๐ป ๐๐ฒ๐บ๐ฒ๐ป๐๐ฎ๐ฟ๐ฎ ๐ฑ๐ถ ๐ด๐ฟ๐๐ฝ ๐ถ๐ป๐ถ_ โ๏ธ
  `
  }

  // Message Ephermal Off
  exports.epOff =() => {
  return `_๐ฆ๐๐ธ๐๐ฒ๐ ๐ ๐ฒ๐ป๐ผ๐ป๐ฎ๐ธ๐๐ถ๐ณ๐ธ๐ฎ๐ป ๐ฝ๐ฒ๐๐ฎ๐ป ๐๐ฒ๐บ๐ฒ๐ป๐๐ฎ๐ฟ๐ฎ ๐ฑ๐ถ ๐ด๐ฟ๐๐ฝ ๐ถ๐ป๐ถ โ๏ธ
  `
  }

  // Message No Spam
  exports.janSpam = () => {
  return `_๐๐ฎ๐ป๐ด๐ฎ๐ป ๐ฆ๐ฝ๐ฎ๐บ ๐๐ฎ๐๐ฎ๐ป๐ด_ -_
  `
  }

  // List
  exports.list = (pushname, ucapanWaktu) => {
  return`${ucapanWaktu}
๐๐ฎ๐ถ ${pushname} ๐ฆ๐ถ๐น๐ฎ๐ต๐ธ๐ฎ๐ป ๐ฑ๐ถ ๐ฝ๐ถ๐น๐ถ๐ต ๐น๐ถ๐๐๐บ๐ฒ๐ป๐ ๐ฑ๐ถ ๐ฏ๐ฎ๐๐ฎ๐ต ๐ถ๐ป๐ถ.
  `
  }

  // All Menu
  exports.allmenu = (prefix) => {
  return`  *๐ค Bot Info*
  โ ${prefix}ping
  โ ${prefix}owner
  โ ${prefix}creator
  โ ${prefix}menu
  โ ${prefix}delete
  โ ${prefix}donasi
  โ ${prefix}rules
  โ ${prefix}sewabot
  โ ${prefix}report

  *๐ฆ Owner Menu*
  โ > / $ / =>
  โ ${prefix}banned
  โ ${prefix}unbanned
  โ ${prefix}banchat
  โ ${prefix}unbanchat
  โ ${prefix}autoreact
  โ ${prefix}setmenu
  โ ${prefix}join [link]
  โ ${prefix}leave
  โ ${prefix}self
  โ ${prefix}public
  โ ${prefix}setppbot
  โ ${prefix}block @user
  โ ${prefix}unblock @user 
  โ ${prefix}bc
  โ ${prefix}bcgc
  โ ${prefix}listpc
  โ ${prefix}listgc

  *๐ฅ Group Menu*
  โ ${prefix}antilink
  โ ${prefix}antiwame
  โ ${prefix}antivirtex
  โ ${prefix}nsfw
  โ ${prefix}event
  โ ${prefix}afk [alasan]
  โ ${prefix}tagall
  โ ${prefix}hidetag
  โ ${prefix}liston
  โ ${prefix}linkgroup
  โ ${prefix}revoke
  โ ${prefix}ephemeral [option]
  โ ${prefix}setppgc
  โ ${prefix}setname [text]
  โ ${prefix}group [option]
  โ ${prefix}add @user
  โ ${prefix}kick @user
  โ ${prefix}promote @user
  โ ${prefix}demote @user
  โ ${prefix}absen
  โ ${prefix}hadir
  โ ${prefix}tidakhadir
  โ ${prefix}cekabsen
  โ ${prefix}hapusabsen

  *๐๏ธ Rpg Menu*
  โ ${prefix}profile
  โ ${prefix}leaderboard
  โ ${prefix}daily
  โ ${prefix}monthly
  โ ${prefix}gajian
  โ ${prefix}judi
  โ ${prefix}berburu
  โ ${prefix}nebang
  โ ${prefix}mancing
  โ ${prefix}mining
  โ ${prefix}adventure
  โ ${prefix}transfer
  โ ${prefix}kill
  โ ${prefix}slot
  โ ${prefix}buy
  โ ${prefix}sell
  โ ${prefix}heal
  โ ${prefix}bansos

  *๐ Database Menu*
  โ ${prefix}setcmd [reply sticker/pesan]
  โ ${prefix}delcmd [reply sticker/pesan]
  โ ${prefix}listcmd
  โ ${prefix}lockcmd
  โ ${prefix}addmsg
  โ ${prefix}getmsg
  โ ${prefix}listmsg
  โ ${prefix}delmsg

  *๐ Search Menu*
  โ ${prefix}pinterest [query]
  โ ${prefix}pantun
  โ ${prefix}google [query]
  โ ${prefix}gimage [query]
  โ ${prefix}kbbi [query]
  โ ${prefix}igstalk [username]
  โ ${prefix}ghstalk [username]
  โ ${prefix}wallpaper

  *๐ฅ Download Menu*
  โ ${prefix}tiktok [url]
  โ ${prefix}tiktokwm [url]
  โ ${prefix}tiktoknowm [url]
  โ ${prefix}tiktokaudio [url]
  โ ${prefix}instagram [url]
  โ ${prefix}twitter [url]
  โ ${prefix}facebook [url]
  โ ${prefix}ytmp4 [url]
  โ ${prefix}ytmp3 [url]
  โ ${prefix}play [judul]
  โ ${prefix}ytsearch [judul]
  โ ${prefix}gitclone

  *โณ Convert Menu*
  โ ${prefix}toimage
  โ ${prefix}smeme
  โ ${prefix}smeme2
  โ ${prefix}sticker
  โ ${prefix}tovideo
  โ ${prefix}togif
  โ ${prefix}tourl
  โ ${prefix}readmore
  โ ${prefix}ttp [teks]
  โ ${prefix}emojimix ๐+๐
  โ ${prefix}semoji [emoji]
  โ ${prefix}ssweb
  โ ${prefix}nulisbiasa
  โ ${prefix}nuliskanan
  โ ${prefix}nuliskiri
  โ ${prefix}foliokanan
  โ ${prefix}foliokiri

  *โน๏ธ๏ธ Informasi Menu*
  โ ${prefix}infogempa
  โ ${prefix}covid
  โ ${prefix}faktaunik
  โ ${prefix}merdeka-news 
  โ ${prefix}kontan-news 
  โ ${prefix}cnbc-news 
  โ ${prefix}tribun-news 
  โ ${prefix}indozone-news 
  โ ${prefix}kompas-news 
  โ ${prefix}detik-news 
  โ ${prefix}daily-news 
  โ ${prefix}inews-news 
  โ ${prefix}okezone-news 
  โ ${prefix}sindo-news 
  โ ${prefix}tempo-news 
  โ ${prefix}antara-news 
  โ ${prefix}cnn-news 
  โ ${prefix}fajar-news 

  *๐จ Textpro Menu*
  โ ${prefix}serti1 [teks]
  โ ${prefix}serti2 [teks]
  โ ${prefix}serti3 [teks]
  โ ${prefix}blackpink [teks]
  โ ${prefix}neon [teks]
  โ ${prefix}magma [teks]
  โ ${prefix}3dstone [teks]
  โ ${prefix}halloween [teks]
  โ ${prefix}horror [teks]
  โ ${prefix}larva [teks]
  โ ${prefix}toxic [teks]
  โ ${prefix}marvel [teks|teks]
  โ ${prefix}potter [teks]
  โ ${prefix}pornhub [teks|teks]
  โ ${prefix}tahta [teks]

  *๐ผ๏ธ Photooxy Menu*
  โ ${prefix}3d-underwater  
  โ ${prefix}3dtext-pig  
  โ ${prefix}3dvalentine-cards  
  โ ${prefix}anonymous-neon  
  โ ${prefix}advanced-glow  
  โ ${prefix}art-shader  
  โ ${prefix}angels-wings 

  *๐ธ Ephoto Menu*
  โ ${prefix}3dnature
  โ ${prefix}bevel
  โ ${prefix}burnpaper
  โ ${prefix}quotesgrass
  โ ${prefix}stars
  โ ${prefix}flaming
  โ ${prefix}romance
  โ ${prefix}gerbang
  โ ${prefix}fur
  โ ${prefix}funnycup

  *๐ฎ Game Menu*
  โ ${prefix}tebak lagu
  โ ${prefix}tebak gambar
  โ ${prefix}tebak kata
  โ ${prefix}tebak kalimat
  โ ${prefix}tebak lirik
  โ ${prefix}tebak lontong
  โ ${prefix}kuismath

  *๐คน Fun Menu*
  โ ${prefix}truth
  โ ${prefix}dare
  โ ${prefix}bagaimanakah [teks]
  โ ${prefix}kapankah [teks]
  โ ${prefix}dimanakah [teks]
  โ ${prefix}jodohku
  โ ${prefix}jadian
  โ ${prefix}suit [โ๏ธ/โ/โ]
  โ ${prefix}aduayam [๐ฅ/๐ค๐/๐ฃ/๐ฆ]
  โ ${prefix}suitpvp [tag user]
  โ ${prefix}ttt
  โ ${prefix}delttt

  *โฉ๏ธ Anime Menu*
  โ ${prefix}waifu
  โ ${prefix}loli
  โ ${prefix}cry
  โ ${prefix}kill
  โ ${prefix}hug
  โ ${prefix}pat
  โ ${prefix}lick
  โ ${prefix}kiss
  โ ${prefix}bite
  โ ${prefix}yeet
  โ ${prefix}neko
  โ ${prefix}bully
  โ ${prefix}bonk
  โ ${prefix}wink
  โ ${prefix}poke
  โ ${prefix}nom
  โ ${prefix}slap
  โ ${prefix}smile
  โ ${prefix}wave
  โ ${prefix}awoo
  โ ${prefix}blush
  โ ${prefix}smug
  โ ${prefix}glomp
  โ ${prefix}happy
  โ ${prefix}dance
  โ ${prefix}cringe
  โ ${prefix}cuddle
  โ ${prefix}highfive
  โ ${prefix}shinobu
  โ ${prefix}megumin
  โ ${prefix}handhold
  โ ${prefix}yotsuba
  โ ${prefix}shinomiya
  โ ${prefix}yumeko
  โ ${prefix}tejina
  โ ${prefix}chiho
  โ ${prefix}toukachan
  โ ${prefix}akira
  โ ${prefix}itori
  โ ${prefix}kurumi
  โ ${prefix}miku
  โ ${prefix}pokemon
  โ ${prefix}ryujin
  โ ${prefix}kaori
  โ ${prefix}shizuka
  โ ${prefix}kotori
  โ ${prefix}kaga
  โ ${prefix}mikasa
  โ ${prefix}akiyama
  โ ${prefix}gremory
  โ ${prefix}isuzu
  โ ${prefix}cosplay
  โ ${prefix}shina
  โ ${prefix}kagura
  โ ${prefix}shinka
  โ ${prefix}eba
  โ ${prefix}deidara
  โ ${prefix}itachi
  โ ${prefix}madara
  โ ${prefix}yuki
  โ ${prefix}asuna
  โ ${prefix}ayuzawa
  โ ${prefix}chitoge
  โ ${prefix}emilia
  โ ${prefix}hestia
  โ ${prefix}inori
  โ ${prefix}ana
  โ ${prefix}boruto
  โ ${prefix}erza
  โ ${prefix}kakasih
  โ ${prefix}sagiri
  โ ${prefix}minato
  โ ${prefix}naruto
  โ ${prefix}nezuko
  โ ${prefix}onepiece
  โ ${prefix}sakura
  โ ${prefix}sasuke
  โ ${prefix}tsunade
  โ ${prefix}jhota
  โ ${prefix}hinata

  *๐ Nsfw Menu*
  โ ${prefix}ahegeo
  โ ${prefix}ass
  โ ${prefix}bdsm
  โ ${prefix}blowjob
  โ ${prefix}cuckold 
  โ ${prefix}cum 
  โ ${prefix}ero
  โ ${prefix}femdom
  โ ${prefix}foot
  โ ${prefix}gangbang
  โ ${prefix}glasses
  โ ${prefix}hentai
  โ ${prefix}ahy
  โ ${prefix}mstb
  โ ${prefix}neko
  โ ${prefix}orgy
  โ ${prefix}panties
  โ ${prefix}pussy
  โ ${prefix}yuri
  โ ${prefix}zettai

  *๐ง Asupan Menu*
  โ ${prefix}hijaber
  โ ${prefix}cecan
  โ ${prefix}bocil
  โ ${prefix}ukhty
  โ ${prefix}gheayubi
  โ ${prefix}rikagusriani
  โ ${prefix}santuy

  *๐ง Cecan Menu*
  โ ${prefix}china
  โ ${prefix}vietnam
  โ ${prefix}thailand
  โ ${prefix}indonesia
  โ ${prefix}korea
  โ ${prefix}japan
  โ ${prefix}malaysia

  *๐๏ธ Primbon Menu*
  โ ${prefix}nomorhoki
  โ ${prefix}artimimpi
  โ ${prefix}artinama
  โ ${prefix}ramaljodoh
  โ ${prefix}ramaljodohbali
  โ ${prefix}suamiistri
  โ ${prefix}ramalcinta
  โ ${prefix}cocoknama
  โ ${prefix}pasangan
  โ ${prefix}jadiannikah
  โ ${prefix}sifatusaha
  โ ${prefix}rezeki
  โ ${prefix}pekerjaan
  โ ${prefix}nasib
  โ ${prefix}penyakit
  โ ${prefix}tarot
  โ ${prefix}fengshui
  โ ${prefix}haribaik
  โ ${prefix}harisangar
  โ ${prefix}harisial
  โ ${prefix}nagahari
  โ ${prefix}arahrezeki
  โ ${prefix}peruntungan
  โ ${prefix}weton
  โ ${prefix}karakter
  โ ${prefix}keberuntungan
  โ ${prefix}memancing
  โ ${prefix}masasubur
  โ ${prefix}zodiak
  โ ${prefix}shio

  *๐ Cerpen Menu*
  โ ${prefix}cerpen anak
  โ ${prefix}cerpen bahasa daerah
  โ ${prefix}cerpen bahasa inggris
  โ ${prefix}cerpen bahasa jawa
  โ ${prefix}cerpen bahasa sunda
  โ ${prefix}cerpen budaya
  โ ${prefix}cerpen cinta
  โ ${prefix}cerpen cinta islami
  โ ${prefix}cerpen cinta pertama
  โ ${prefix}cerpen cinta romantis
  โ ${prefix}cerpen cinta sedih
  โ ${prefix}cerpen cinta segitiga
  โ ${prefix}cerpen cinta sejati
  โ ${prefix}cerpen galau
  โ ${prefix}cerpen gokil
  โ ${prefix}cerpen inspiratif
  โ ${prefix}cerpen jepang
  โ ${prefix}cerpen kehidupan
  โ ${prefix}cerpen keluarga
  โ ${prefix}cerpen kisah nyata
  โ ${prefix}cerpen korea
  โ ${prefix}cerpen kristen
  โ ${prefix}cerpen liburan
  โ ${prefix}cerpen lingkungan
  โ ${prefix}cerpen lucu
  โ ${prefix}cerpen malaysia
  โ ${prefix}cerpen mengharukan
  โ ${prefix}cerpen misteri
  โ ${prefix}cerpen motivasi
  โ ${prefix}cerpen nasihat
  โ ${prefix}cerpen nasionalisme
  โ ${prefix}cerpen olahraga
  โ ${prefix}cerpen patah hati
  โ ${prefix}cerpen penantian
  โ ${prefix}cerpen pendidikan
  โ ${prefix}cerpen pengalaman pribadi
  โ ${prefix}cerpen pengorbanan
  โ ${prefix}cerpen penyesalan
  โ ${prefix}cerpen perjuangan
  โ ${prefix}cerpen perpisahan
  โ ${prefix}cerpen persahabatan
  โ ${prefix}cerpen petualangan
  โ ${prefix}cerpen ramadhan
  โ ${prefix}cerpen remaja
  โ ${prefix}cerpen renungan
  โ ${prefix}cerpen rindu
  โ ${prefix}cerpen rohani
  โ ${prefix}cerpen romantis
  โ ${prefix}cerpen sastra
  โ ${prefix}cerpen sedih
  โ ${prefix}cerpen sejarah
  โ ${prefix}cerpen slice of life
  โ ${prefix}cerpen terjemahan
  โ ${prefix}cerpen thriller

  *๐๏ธ Voice Changer*
  โ ${prefix}bass
  โ ${prefix}blown
  โ ${prefix}deep
  โ ${prefix}earrape
  โ ${prefix}fast
  โ ${prefix}fat
  โ ${prefix}nightcore
  โ ${prefix}reverse
  โ ${prefix}robot
  โ ${prefix}slow
  โ ${prefix}tupai

  *โป๏ธ Telegram Sticker*
  โ ${prefix}awoawo
  โ ${prefix}benedict
  โ ${prefix}chat
  โ ${prefix}dbfly
  โ ${prefix}dino_kuning
  โ ${prefix}doge
  โ ${prefix}gojosatoru
  โ ${prefix}hope_boy
  โ ${prefix}jisoo
  โ ${prefix}kr_robot
  โ ${prefix}kucing
  โ ${prefix}lonte
  โ ${prefix}manusia_lidi
  โ ${prefix}menjamet
  โ ${prefix}meow
  โ ${prefix}nicholas
  โ ${prefix}patrick
  โ ${prefix}popoci
  โ ${prefix}sponsbob
  โ ${prefix}kawan_sponsbob
  โ ${prefix}tyni

  *๐ก Random Menu*
  โ ${prefix}quotesanime
  โ ${prefix}quotes
  โ ${prefix}quotes2
  โ ${prefix}katabijak
  โ ${prefix}katailham
  โ ${prefix}fiersabersari
  โ ${prefix}katasenja

  *๐ Thanks To*
  โ Dika Ardnt
  โ Fatih Arridho
  โ Nurutomo
  โ Mhankbarbar
  โ Zeeone Ofc
  โ Ryuka Team
  โ Deff
  โ Yoga
  โ Nelson
  โ Riy
  `
  }

  // Rules
  exports.rules = () => {
  return`*R U L E S*
	
1. Jangan Pernah Spam Bot โ
2. Jangan Call Nomer Bot โ
3. Jangan Mengeksploitasi Bot โ

Sanksi : *Warn/Soft Block ๐ง*

*About Questions โ๏ธ*
 
๐ฆ : Bot nya Slow Respon ๐
๐ค : Mohon Bersabar, Mungkin Kendala Dari Jaringan, Signal, Atau Bahkan Terbanned Dari Pihak WhatsApp

๐ฆ : Scriptnya Beli Dimana? ๐
๐ค : Script Ini Tidak Di Perjualbelikan Karena Script Ini Dibagikan Secara Free. Kalian Bisa Mendapatkannya Di Channel Ryuuka Botz

๐ฆ : Boleh Masukin Ke Grup Saia Tidak? ๐
๐ค : Untuk Masalah Memasukkan Bot Ke Dalam Grup Bisa Menghubungi Owner

๐ฆ : Apakah Bot Ini Masih Menyimpan File Yang Saya Kirim?
๐ค : Data WhatsApp Anda Hanya Tersimpan Saat Bot Aktif, Dan Bot Tidak Pernah Menyimpan File-file Yang Anda Kirim

๐ฆ : Min, Ada Fitur Yang Error ๐
๐ค : Jika Menemukan Bug/Error Silahkan Langsung Hubungi Owner/Creator Agar Segera Di Fix 


Tetap Patuhi Rules Agar Tetap Bisa Menikmati Bot ๐

*โ ๏ธ Note :* Segala Ketentuan Dan Kebijakan Yang Berlaku Di Pegang Oleh Owner Bot, Sewaktu-Waktu Owner Berhak Memakai Ataupun Mengubah Kebijakan Dan Ketentuan Yang Berlaku

*Thanks To ๐* Buat Kalian User-User Yang Sudah Memakai Script Ini Dan Pengguna Bot Yang Sudah Mau Mematuhi Rules, Serta Para Constributor Yang Sudah Membantu Dalam Pembuatan Bot Ini ๐๐
`
}

// Donasi
  exports.donasi = () => {
	return`โโโโโใ *DONATE* ใโโโโโ

Hai kak โบ๏ธ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti ๐

Thanks!
  `
  } 

  // Sewa
  exports.sewa = () => {
  return`
  โใ *SEWA | JADI BOT | RUN BOT* ใโ

  *_SEWA BOT_* 
  *โป* Sewa Bot free/1grup (1 hari)
  *โป* Sewa Bot 15k/1grup (1 minggu)
  *โป* Sewa Bot 20k/1grup (1 bulan)
  *โป* Sewa Bot 30k/3grup (Permanen)

  *JADI BOT*  
  *โป* Jadi Bot 15k TidakOwner (1 minggu)
  *โป* Jadi Bot + Owner 20k (1 bulan)
  *โป* Jadi Bot + Owner 35k (1 Tahun)

  *JASA RUN BOT*
  *โป* Run Bot 15k (1 minggu)
  *โป* Run Bot 20k (1 bulan)
  *โป* Run Bot 20k (1 Tahun)

   *_PEMBAYARAN_* 
   - _Gopay_
   - _Dana_
   - _Pulsa +5k_
 
  *Minat? Langsung chat aja ya cuy ๐ฆ*
   https://wa.me/message/LQNEJVLYV5HZI1
  `
  }

  // Welcome
  exports.welcome = () => {
  return `โฆโโโโโโ[ *WELCOME* ]โโโโโโโฆ\n\nโโโโโโโโโโโโโโโโข\nโโซนโซบ ๐๐ฎ๐ธ ๐ง๐ฎ๐ ๐ด๐ฟ๐๐ฝ ๐ฎ๐ฝ๐ฎ๐ฎ๐ป\nโฃโโโโโโโโโโโ\nโ( ๐ ๐๐ฎ๐น๐ผ ๐๐ฎ๐ธ )\nโ[ *INTRO* ]โ\nโ *๐๐๐ฆ๐:* \nโ *๐๐ฆ๐ฎ๐ซ:* \nโ *๐๐๐ง๐๐๐ซ:*\nโ *๐๐ฌ๐ค๐จ๐ญ:*\nโ *๐๐ญ๐๐ญ๐ฎ๐ฌ:*\nโโโโโโโโโโโโ\n\nโโโโโโ *DESCRIPTION* โโโโโโ\n\n\n\n\n\n\n\n\n\n\n\n      ๐๐ฎ๐ฐ๐ฎ ๐ฎ๐ท๐ฎ ๐๐ฒ๐ฑ๐ถ๐ฟ๐ถ.   \n\n\n\n\n\n\n\n\n\n\n\n 
  `
  }

  // Leave
  exports.goodbye = () => {
  return `โฆโโโโโโ[ *GOOD BYE* ]โโโโโโโฆ\nSayonara kak ๐( โนโฝโน )\n\nTetap Putus Asa Jangan Semangat Dan Jadilah Beban Keluarga ๐ค๐ฟ
  `
  } 

  // Info
  exports.sinfobot = (prefix) => {
  return`  *๐ค Bot Info*
  โ ${prefix}ping
  โ ${prefix}owner
  โ ${prefix}creator
  โ ${prefix}menu
  โ ${prefix}delete
  โ ${prefix}donasi
  โ ${prefix}rules
  โ ${prefix}sewabot
  โ ${prefix}report
  `
  }

  // Owner
  exports.sowner = (prefix) => {
  return`  *๐ฆ Owner Menu*
  โ > / $ / =>
  โ ${prefix}banned
  โ ${prefix}unbanned
  โ ${prefix}banchat
  โ ${prefix}unbanchat
  โ ${prefix}autoreact
  โ ${prefix}setmenu
  โ ${prefix}join [link]
  โ ${prefix}leave
  โ ${prefix}self
  โ ${prefix}public
  โ ${prefix}setppbot
  โ ${prefix}block @user
  โ ${prefix}unblock @user 
  โ ${prefix}bc
  โ ${prefix}bcgc
  โ ${prefix}listpc
  โ ${prefix}listgc
`
}

// Group
  exports.sgrup = (prefix) => {
	return`  ๐ฅ Group Menu*
  โ ${prefix}antilink
  โ ${prefix}antiwame
  โ ${prefix}antivirtex
  โ ${prefix}nsfw
  โ ${prefix}event
  โ ${prefix}afk [alasan]
  โ ${prefix}tagall
  โ ${prefix}hidetag
  โ ${prefix}liston
  โ ${prefix}linkgroup
  โ ${prefix}revoke
  โ ${prefix}ephemeral [option]
  โ ${prefix}setppgc
  โ ${prefix}setname [text]
  โ ${prefix}group [option]
  โ ${prefix}add @user
  โ ${prefix}kick @user
  โ ${prefix}promote @user
  โ ${prefix}demote @user
  โ ${prefix}absen
  โ ${prefix}hadir
  โ ${prefix}tidakhadir
  โ ${prefix}cekabsen
  โ ${prefix}hapusabsen
  `
  }

  // Rpg
  exports.srpg = (prefix) => {
  return`  *๐๏ธ Rpg Menu*
  โ ${prefix}profile
  โ ${prefix}leaderboard
  โ ${prefix}daily
  โ ${prefix}monthly
  โ ${prefix}gajian
  โ ${prefix}judi
  โ ${prefix}berburu
  โ ${prefix}nebang
  โ ${prefix}mancing
  โ ${prefix}mining
  โ ${prefix}adventure
  โ ${prefix}transfer
  โ ${prefix}kill
  โ ${prefix}slot
  โ ${prefix}buy
  โ ${prefix}sell
  โ ${prefix}heal
  โ ${prefix}bansos
  `
  }

  // Database
  exports.sdatabase = (prefix) => {
  return`  *๐ Database Menu*
  โ ${prefix}absen
  โ ${prefix}hadir
  โ ${prefix}tidakhadir
  โ ${prefix}cekabsen
  โ ${prefix}hapusabsen
  โ ${prefix}setcmd [reply sticker/pesan]
  โ ${prefix}delcmd [reply sticker/pesan]
  โ ${prefix}listcmd
  โ ${prefix}lockcmd
  โ ${prefix}addmsg
  โ ${prefix}getmsg
  โ ${prefix}listmsg
  โ ${prefix}delmsg
  `
  }

  // Search
  exports.ssearch = (prefix) => {
  return`  *๐ Search Menu*
  โ ${prefix}pinterest [query]
  โ ${prefix}pantun
  โ ${prefix}google [query]
  โ ${prefix}gimage [query]
  โ ${prefix}kbbi [query]
  โ ${prefix}darkjokes
  โ ${prefix}igstalk [username]
  โ ${prefix}ghstalk [username]
  โ ${prefix}wallpaper
  `
  }

  // Download
  exports.sdown = (prefix) => {
  return`  *๐ฅ Download Menu*
  โ ${prefix}tiktok [url]
  โ ${prefix}tiktokwm [url]
  โ ${prefix}tiktoknowm [url]
  โ ${prefix}tiktokaudio [url]
  โ ${prefix}instagram [url]
  โ ${prefix}twitter [url]
  โ ${prefix}facebook [url]
  โ ${prefix}ytmp4 [url]
  โ ${prefix}ytmp3 [url]
  โ ${prefix}play [judul]
  โ ${prefix}ytsearch [judul]
  โ ${prefix}gitclone
  `
  }

  // Convert
  exports.sconverter = (prefix) => {
  return`  *โณ Convert Menu*
  โ ${prefix}toimage
  โ ${prefix}smeme
  โ ${prefix}smeme2
  โ ${prefix}sticker
  โ ${prefix}tovideo
  โ ${prefix}togif
  โ ${prefix}tourl
  โ ${prefix}readmore
  โ ${prefix}ttp [teks]
  โ ${prefix}emojimix ๐+๐
  โ ${prefix}semoji [emoji]
  โ ${prefix}ssweb
  โ ${prefix}nulisbiasa
  โ ${prefix}nuliskanan
  โ ${prefix}nuliskiri
  โ ${prefix}foliokanan
  โ ${prefix}foliokiri
  `
  }

  // Informasi
  exports.sinfo = (prefix) => {
  return`  *โน๏ธ๏ธ Informasi Menu*
  โ ${prefix}infogempa
  โ ${prefix}covid
  โ ${prefix}faktaunik
  โ ${prefix}merdeka-news 
  โ ${prefix}kontan-news 
  โ ${prefix}cnbc-news 
  โ ${prefix}tribun-news 
  โ ${prefix}indozone-news 
  โ ${prefix}kompas-news 
  โ ${prefix}detik-news 
  โ ${prefix}daily-news 
  โ ${prefix}inews-news 
  โ ${prefix}okezone-news 
  โ ${prefix}sindo-news 
  โ ${prefix}tempo-news 
  โ ${prefix}antara-news 
  โ ${prefix}cnn-news 
  โ ${prefix}fajar-news 
  `
  }

  // Textpro Menu
  exports.stextpro = (prefix) => {
  return`  *๐จ Textpro Menu*
  โ ${prefix}serti1 [teks]
  โ ${prefix}serti2 [teks]
  โ ${prefix}serti3 [teks]
  โ ${prefix}blackpink [teks]
  โ ${prefix}neon [teks]
  โ ${prefix}magma [teks]
  โ ${prefix}3dstone [teks]
  โ ${prefix}halloween [teks]
  โ ${prefix}horror [teks]
  โ ${prefix}larva [teks]
  โ ${prefix}toxic [teks]
  โ ${prefix}marvel [teks|teks]
  โ ${prefix}potter [teks]
  โ ${prefix}pornhub [teks|teks]
  โ ${prefix}tahta [teks]
  `
  }

  // Photooxy
  exports.sphoto = (prefix) => {
  return`  *๐ผ๏ธ Photooxy Menu*
  โ ${prefix}3d-underwater  
  โ ${prefix}3dtext-pig  
  โ ${prefix}3dvalentine-cards  
  โ ${prefix}anonymous-neon  
  โ ${prefix}advanced-glow  
  โ ${prefix}art-shader  
  โ ${prefix}angels-wings 
  `
  }

  // Ephoto
  exports.spoto = (prefix) => {
  return`  *๐ธ Ephoto Menu*
  โ ${prefix}3dnature
  โ ${prefix}bevel
  โ ${prefix}burnpaper
  โ ${prefix}quotesgrass
  โ ${prefix}stars
  โ ${prefix}flaming
  โ ${prefix}romance
  โ ${prefix}gerbang
  โ ${prefix}fur
  โ ${prefix}funnycup
  `
  }

  // Game
  exports.sgame = (prefix) => {
  return`  *๐ฎ Game Menu*
  โ ${prefix}tebak lagu
  โ ${prefix}tebak gambar
  โ ${prefix}tebak kata
  โ ${prefix}tebak kalimat
  โ ${prefix}tebak lirik
  โ ${prefix}tebak lontong
  โ ${prefix}kuismath
  `
  }

  // Fun
  exports.sfun = (prefix) => {
  return`  *๐คน Fun Menu*
  โ ${prefix}truth
  โ ${prefix}dare
  โ ${prefix}bagaimanakah
  โ ${prefix}kapankah
  โ ${prefix}dimanakah
  โ ${prefix}suit [โ๏ธ/โ/โ]
  โ ${prefix}aduayam [๐ค/๐/๐ฅ/๐ฃ/๐ฆ]
  โ ${prefix}suitpvp [tag user]
  โ ${prefix}ttt
  โ ${prefix}delttt
  `
  }

  // Anime
  exports.sanime = (prefix) => {
  return`    *โฉ๏ธ Anime Menu*
  โ ${prefix}waifu
  โ ${prefix}loli
  โ ${prefix}cry
  โ ${prefix}kill
  โ ${prefix}hug
  โ ${prefix}pat
  โ ${prefix}lick
  โ ${prefix}kiss
  โ ${prefix}bite
  โ ${prefix}yeet
  โ ${prefix}neko
  โ ${prefix}bully
  โ ${prefix}bonk
  โ ${prefix}wink
  โ ${prefix}poke
  โ ${prefix}nom
  โ ${prefix}slap
  โ ${prefix}smile
  โ ${prefix}wave
  โ ${prefix}awoo
  โ ${prefix}blush
  โ ${prefix}smug
  โ ${prefix}glomp
  โ ${prefix}happy
  โ ${prefix}dance
  โ ${prefix}cringe
  โ ${prefix}cuddle
  โ ${prefix}highfive
  โ ${prefix}shinobu
  โ ${prefix}megumin
  โ ${prefix}handhold
  โ ${prefix}yotsuba
  โ ${prefix}shinomiya
  โ ${prefix}yumeko
  โ ${prefix}tejina
  โ ${prefix}chiho
  โ ${prefix}toukachan
  โ ${prefix}akira
  โ ${prefix}itori
  โ ${prefix}kurumi
  โ ${prefix}miku
  โ ${prefix}pokemon
  โ ${prefix}ryujin
  โ ${prefix}kaori
  โ ${prefix}shizuka
  โ ${prefix}kotori
  โ ${prefix}kaga
  โ ${prefix}mikasa
  โ ${prefix}akiyama
  โ ${prefix}gremory
  โ ${prefix}isuzu
  โ ${prefix}cosplay
  โ ${prefix}shina
  โ ${prefix}kagura
  โ ${prefix}shinka
  โ ${prefix}eba
  โ ${prefix}deidara
  โ ${prefix}itachi
  โ ${prefix}madara
  โ ${prefix}yuki
  โ ${prefix}asuna
  โ ${prefix}ayuzawa
  โ ${prefix}chitoge
  โ ${prefix}emilia
  โ ${prefix}hestia
  โ ${prefix}inori
  โ ${prefix}ana
  โ ${prefix}boruto
  โ ${prefix}erza
  โ ${prefix}kakasih
  โ ${prefix}sagiri
  โ ${prefix}minato
  โ ${prefix}naruto
  โ ${prefix}nezuko
  โ ${prefix}onepiece
  โ ${prefix}sakura
  โ ${prefix}sasuke
  โ ${prefix}tsunade
  โ ${prefix}jhota
  โ ${prefix}hinata
  `
  }

  // Nsfw
  exports.snsfw = (prefix) => {
  return`  *๐ Nsfw Menu*
  โ ${prefix}ahegeo
  โ ${prefix}ass
  โ ${prefix}bdsm
  โ ${prefix}blowjob
  โ ${prefix}cuckold 
  โ ${prefix}cum 
  โ ${prefix}ero
  โ ${prefix}femdom
  โ ${prefix}foot
  โ ${prefix}gangbang
  โ ${prefix}glasses
  โ ${prefix}hentai
  โ ${prefix}ahy
  โ ${prefix}mstb
  โ ${prefix}neko
  โ ${prefix}orgy
  โ ${prefix}panties
  โ ${prefix}pussy
  โ ${prefix}yuri
  โ ${prefix}zettai
  `
  }

  // Asupan
  exports.sasupan = (prefix) => {
  return`  *๐ง Asupan Menu*
  โ ${prefix}hijaber
  โ ${prefix}cecan
  โ ${prefix}bocil
  โ ${prefix}ukhty
  โ ${prefix}gheayubi
  โ ${prefix}rikagusriani
  โ ${prefix}santuy
  `
  }

  // Cecan
  exports.scecan = (prefix) => {
  return`  *๐ง Cecan Menu*
  โ ${prefix}china
  โ ${prefix}vietnam
  โ ${prefix}thailand
  โ ${prefix}indonesia
  โ ${prefix}korea
  โ ${prefix}japan
  โ ${prefix}malaysia
  `
  }

  // Telegram Sticker
  exports.stele = (prefix) => {
  return`  *โป๏ธ Telegram Sticker*
  โ ${prefix}awoawo
  โ ${prefix}benedict
  โ ${prefix}chat
  โ ${prefix}dbfly
  โ ${prefix}dino_kuning
  โ ${prefix}doge
  โ ${prefix}gojosatoru
  โ ${prefix}hope_boy
  โ ${prefix}jisoo
  โ ${prefix}kr_robot
  โ ${prefix}kucing
  โ ${prefix}lonte
  โ ${prefix}manusia_lidi
  โ ${prefix}menjamet
  โ ${prefix}meow
  โ ${prefix}nicholas
  โ ${prefix}patrick
  โ ${prefix}popoci
  โ ${prefix}sponsbob
  โ ${prefix}kawan_sponsbob
  โ ${prefix}tyni
  `
  }

  // Primbon
  exports.sprimbon = (prefix) => {
  return`  *๐๏ธ Primbon Menu*
  โ ${prefix}nomorhoki
  โ ${prefix}artimimpi
  โ ${prefix}artinama
  โ ${prefix}ramaljodoh
  โ ${prefix}ramaljodohbali
  โ ${prefix}suamiistri
  โ ${prefix}ramalcinta
  โ ${prefix}cocoknama
  โ ${prefix}pasangan
  โ ${prefix}jadiannikah
  โ ${prefix}sifatusaha
  โ ${prefix}rezeki
  โ ${prefix}pekerjaan
  โ ${prefix}nasib
  โ ${prefix}penyakit
  โ ${prefix}tarot
  โ ${prefix}fengshui
  โ ${prefix}haribaik
  โ ${prefix}harisangar
  โ ${prefix}harisial
  โ ${prefix}nagahari
  โ ${prefix}arahrezeki
  โ ${prefix}peruntungan
  โ ${prefix}weton
  โ ${prefix}karakter
  โ ${prefix}keberuntungan
  โ ${prefix}memancing
  โ ${prefix}masasubur
  โ ${prefix}zodiak
  โ ${prefix}shio
  `
  }

  // Cerpen
  exports.scerpen = (prefix) => {
  return`  *๐ Cerpen Menu*
  โ ${prefix}cerpen anak
  โ ${prefix}cerpen bahasa daerah
  โ ${prefix}cerpen bahasa inggris
  โ ${prefix}cerpen bahasa jawa
  โ ${prefix}cerpen bahasa sunda
  โ ${prefix}cerpen budaya
  โ ${prefix}cerpen cinta
  โ ${prefix}cerpen cinta islami
  โ ${prefix}cerpen cinta pertama
  โ ${prefix}cerpen cinta romantis
  โ ${prefix}cerpen cinta sedih
  โ ${prefix}cerpen cinta segitiga
  โ ${prefix}cerpen cinta sejati
  โ ${prefix}cerpen galau
  โ ${prefix}cerpen gokil
  โ ${prefix}cerpen inspiratif
  โ ${prefix}cerpen jepang
  โ ${prefix}cerpen kehidupan
  โ ${prefix}cerpen keluarga
  โ ${prefix}cerpen kisah nyata
  โ ${prefix}cerpen korea
  โ ${prefix}cerpen kristen
  โ ${prefix}cerpen liburan
  โ ${prefix}cerpen lingkungan
  โ ${prefix}cerpen lucu
  โ ${prefix}cerpen malaysia
  โ ${prefix}cerpen mengharukan
  โ ${prefix}cerpen misteri
  โ ${prefix}cerpen motivasi
  โ ${prefix}cerpen nasihat
  โ ${prefix}cerpen nasionalisme
  โ ${prefix}cerpen olahraga
  โ ${prefix}cerpen patah hati
  โ ${prefix}cerpen penantian
  โ ${prefix}cerpen pendidikan
  โ ${prefix}cerpen pengalaman pribadi
  โ ${prefix}cerpen pengorbanan
  โ ${prefix}cerpen penyesalan
  โ ${prefix}cerpen perjuangan
  โ ${prefix}cerpen perpisahan
  โ ${prefix}cerpen persahabatan
  โ ${prefix}cerpen petualangan
  โ ${prefix}cerpen ramadhan
  โ ${prefix}cerpen remaja
  โ ${prefix}cerpen renungan
  โ ${prefix}cerpen rindu
  โ ${prefix}cerpen rohani
  โ ${prefix}cerpen romantis
  โ ${prefix}cerpen sastra
  โ ${prefix}cerpen sedih
  โ ${prefix}cerpen sejarah
  โ ${prefix}cerpen slice of life
  โ ${prefix}cerpen terjemahan
  โ ${prefix}cerpen thriller
  `
  }

  // Voice
  exports.svoice = (prefix) => {
  return`  *๐๏ธ Voice Changer*
  โ ${prefix}bass
  โ ${prefix}blown
  โ ${prefix}deep
  โ ${prefix}earrape
  โ ${prefix}fast
  โ ${prefix}fat
  โ ${prefix}nightcore
  โ ${prefix}reverse
  โ ${prefix}robot
  โ ${prefix}slow
  โ ${prefix}tupai
  `
  }

  // Random
  exports.srandom = (prefix) => {
  return`  *๐ก Random Menu*
  โ ${prefix}quotesanime
  โ ${prefix}quotes
  โ ${prefix}quotes2
  โ ${prefix}katabijak
  โ ${prefix}katailham
  โ ${prefix}fiersabersari
  โ ${prefix}katasenja
  `
  }

  // Thanks To
  exports.sthanksto= () => {
  return`  *๐ Thanks To*
  โ Dika Ardnt
  โ Fatih Arridho
  โ Nurutomo
  โ Mhankbarbar
  โ Zeeone Ofc
  โ Ryuka Team
  โ Deff
  โ Yoga
  โ Nelson
  โ Riy
  `
  }
  
