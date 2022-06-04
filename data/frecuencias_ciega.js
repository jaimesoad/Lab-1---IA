const blind_words = [
	"se",
	"su",
	"sus",
	"si",
	"sin",
	"sobre",
	"ser",
	"son",
	"sí",
	"según",
	"sino",
	"san",
	"siglo",
	"señor",
	"solo",
	"saber",
	"seis",
	"salud",
	"serie",
	"sol",
	"salir",
	"suelo",
	"siete",
	"sur",
	"santa",
	"sola",
	"sala",
	"sueño",
	"sitio",
	"sal",
	"santo",
	"salvo",
	"sede",
	"suma",
	"suyo",
	"sexo",
	"sacar",
	"salón",
	"serio",
	"suya",
	"solar",
	"señal",
	"signo",
	"sida",
	"silla",
	"subir",
	"suave",
	"seno",
	"sabor",
	"salsa",
	"seco",
	"salto",
	"saca",
	"suiza",
	"socio",
	"selva",
	"seca",
	"silva",
	"seria",
	"sexto",
	"saco",
	"sudor",
	"simón",
	"soto",
	"seda",
	"sano",
	"salga",
	"sabio",
	"sello",
	"sed",
	"sofá",
	"sana",
	"sopa",
	"sant",
	"sobra",
	"sumo",
	"sucia",
	"saldo",
	"sutil",
	"sonar",
	"sumar",
	"sor",
	"show",
	"sucio",
	"soñar",
	"susto",
	"set",
	"sodio",
	"sosa",
	"suizo",
	"senda",
	"salva",
	"sordo",
	"sucre",
	"soler",
	"sueco",
	"saque",
	"sonda",
	"secta",
	"serna",
	"siria",
	"soja",
	"semen",
	"shock",
	"so",
	"sao",
	"sabia",
	"secar",
	"suero",
	"suba",
	"sazón",
	"suite",
	"soplo",
	"saudí",
	"sueca",
	"sport",
	"seña",
	"soga",
	"serpa",
	"soya",
	"sorda",
	"súper",
	"sorbo",
	"sesgo",
	"sapo",
	"sula",
	"sorna",
	"salve",
	"surco",
	"sena",
	"savia",
	"sufra",
	"sopor",
	"saña",
	"sirio",
	"sable",
	"spot",
	"suela",
	"stock",
	"seta",
	"sauna",
	"símil",
	"stop",
	"senil",
	"sismo",
	"sauce",
	"sud",
	"sanar",
	"sera",
	"sigma",
	"sorgo",
	"soul",
	"sima",
	"sigla",
	"swing",
	"siena",
	"silba",
	"spray",
	"soso",
	"salmo",
	"spam",
	"socia",
	"soez",
	"satén",
	"sil",
	"sushi",
	"subte",
	"siseo",
	"sufí",
	"soro",
	"sueno",
	"suní",
	"sural",
	"sabea",
	"sabeo",
	"sabir",
	"sabre",
	"sacho",
	"sacia",
	"sacio",
	"sacón",
	"sacra",
	"sacre",
	"sacro",
	"saeta",
	"saetí",
	"safir",
	"safo",
	"saga",
	"sagaz",
	"sago",
	"sagú",
	"sah",
	"saín",
	"saíno",
	"saja",
	"sajar",
	"sajía",
	"sajón",
	"sake",
	"salar",
	"salaz",
	"salce",
	"salea",
	"salep",
	"salia",
	"salín",
	"salio",
	"salma",
	"salol",
	"salpa",
	"salso",
	"sama",
	"samán",
	"samba",
	"sambo",
	"samia",
	"samio",
	"sampa",
	"sanco",
	"sango",
	"sanie",
	"sansa",
	"sanso",
	"saó",
	"sapa",
	"sarán",
	"sarao",
	"sarda",
	"sarde",
	"sardo",
	"sarga",
	"sargo",
	"sari",
	"sariá",
	"sarna",
	"sarro",
	"sarta",
	"sarza",
	"sarzo",
	"sasal",
	"sata",
	"satán",
	"satín",
	"satis",
	"sato",
	"sauco",
	"saúco",
	"sauz",
	"sáxea",
	"sáxeo",
	"saxo",
	"saya",
	"sayal",
	"sayo",
	"sayón",
	"saz",
	"sebe",
	"sebo",
	"sece",
	"secón",
	"secre",
	"secua",
	"sedal",
	"sedán",
	"sedar",
	"seer",
	"sega",
	"segar",
	"segrí",
	"segur",
	"seibó",
	"seico",
	"seise",
	"seje",
	"sel",
	"selfi",
	"sema",
	"semis",
	"sen",
	"señar",
	"seño",
	"seo",
	"seó",
	"seor",
	"seora",
	"sepe",
	"sepia",
	"septo",
	"serba",
	"serbo",
	"serón",
	"servo",
	"ses",
	"sesén",
	"seseo",
	"sesga",
	"sesí",
	"sésil",
	"sesma",
	"sesmo",
	"seso",
	"setal",
	"sete",
	"seto",
	"sexar",
	"sexi",
	"sexma",
	"sexmo",
	"sexta",
	"sexy",
	"short",
	"shuar",
	"sian",
	"sibil",
	"sic",
	"siclo",
	"sicu",
	"sidra",
	"siega",
	"sien",
	"siesa",
	"sieso",
	"sifón",
	"sifué",
	"sigua",
	"sij",
	"sijú",
	"silbo",
	"sílex",
	"silfo",
	"silga",
	"silo",
	"simia",
	"simio",
	"simpa",
	"simún",
	"singa",
	"sioux",
	"sipe",
	"sique",
	"sira",
	"sirga",
	"sirgo",
	"sirín",
	"sirle",
	"siro",
	"sirte",
	"sisa",
	"sisal",
	"sisar",
	"sisca",
	"sisón",
	"sita",
	"sitar",
	"sito",
	"siu",
	"siux",
	"slip",
	"soba",
	"sobao",
	"sobar",
	"sobeo",
	"sobo",
	"sobón",
	"soca",
	"socaz",
	"soche",
	"socol",
	"soda",
	"soeza",
	"sofí",
	"sogún",
	"solaz",
	"soleá",
	"solén",
	"soleo",
	"sóleo",
	"solfa",
	"solio",
	"solla",
	"sollo",
	"soma",
	"somo",
	"sonio",
	"sonsa",
	"sonso",
	"sonta",
	"sonto",
	"sopar",
	"sopié",
	"sopón",
	"sora",
	"sorba",
	"sorce",
	"sóror",
	"sorra",
	"sosal",
	"sosar",
	"sosia",
	"sota",
	"sotar",
	"sote",
	"sotil",
	"sotol",
	"sovoz",
	"spa",
	"split",
	"stand",
	"stent",
	"suaba",
	"suabo",
	"suata",
	"suato",
	"suazi",
	"subeo",
	"suche",
	"suco",
	"sucu",
	"sudar",
	"sueva",
	"suevo",
	"suflé",
	"suido",
	"sulco",
	"sulla",
	"sumir",
	"sumu",
	"sumun",
	"sunca",
	"sunco",
	"sunna",
	"sunní",
	"sura",
	"surá",
	"surf",
	"suri",
	"surta",
	"surto",
	"suso",
	"sutás",
	"sute",
	"suzón"
]