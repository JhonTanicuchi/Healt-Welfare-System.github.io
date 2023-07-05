/* ARRAY DE PROVINCIAS */

var provincias = [
    "Azuay","Bolívar","Carchi","Cañar","Chimborazo","Cotopaxi","El Oro","Esmeraldas","Galápagos","Guayas","Imbabura","Loja",
    "Los Ríos","Manabí","Morona Santiago","Napo","Orellana","Pastaza","Pichincha","Santa Elena","Santo Domingo de los Tsáchilas","Sucumbíos","Tungurahua","Zamora Chinchipe",
  ];
  
  /* ARRAY DE CANTONES */
  
  var cantones = [
    /* Azuay */
    ["Cuenca","Camilo Ponce Enríquez","Chordeleg","El Pan","Girón","Guachapala","Gualaceo","Nabón","Oña","Paute","Pucará",
      "San Fernando","Santa Isabel","Sevilla de Oro","Sígsig"],
    /* Bolivar */
    ["Guaranda","Caluma","Chillanes","Chimbo","Echeandía","Las Naves","San Miguel"],
    /* Carchi */
    ["Tulcán", "Bolívar", "Espejo", "Mira", "Montúfar","San Pedro de Huaca"],
    /* Cañar */
    ["Azogues", "Biblián", "Cañar", "Déleg", "El Tambo", "La Troncal", "Suscal"],
    /* Chimborazo */
    ["Riobamba","Alausí","Chambo","Chunchi","Colta","Cumandá","Guamote","Guano","Pallatanga","Penipe"],
    /* Cotopaxi */
    ["Latacunga","La Maná","Pangua","Pujilí","Salcedo","Saquisilí","Sigchos"],
    /* El oro */
    ["Machala","Arenillas","Atahualpa","Balsas","Chilla","El Guabo","Huaquillas","Las Lajas","Marcabelí","Pasaje","Piñas","Portovelo",
      "Santa Rosa","Zaruma"],
    /* Esmeraldas */
    ["Esmeraldas","Atacames","Eloy Alfaro","Muisne","Quinindé","Rioverde","San Lorenzo"],
    /* Galapagos */
    [
      "San Cristóbal", "Isabela", "Santa Cruz"],
    /* Guayas */
    [
      "Guayaquil","Alfredo Baquerizo Moreno","Balao","Balzar","Colimes","Daule","Durán","El Empalme","El Triunfo","General Antonio Elizalde","Isidro Ayora","Lomas de Sargentillo","Marcelino Maridueña","Milagro","Naranjal","Naranjito","Palestina","Pedro Carbo","Playas","Salitre","Samborondón","Santa Lucía","Simón Bolívar","Yaguachi"
    ],
    /* Imbabura */
    [
      "Ibarra","Antonio Ante","Cotacachi","Otavalo","Pimampiro","San Miguel de Urcuquí"
    ],
    /* Loja */
    [
      "Loja","Calvas","Catamayo","Celica","Chaguarpamba","Espíndola","Gonzanamá","Macará","Olmedo","Paltas","Pindal","Puyango","Quilanga","Saraguro","Sozoranga","Zapotillo"
    ],
    /* Los rios */
    [
      "Babahoyo","Baba","Buena Fe","Mocache","Montalvo","Palenque","Puebloviejo","Quevedo","Quinsaloma","Urdaneta","Valencia","Ventanas","Vinces"
    ],
    /* Manabi */
    [
      "Portoviejo","24 de Mayo","Bolívar","Chone","El Carmen","Flavio Alfaro","Jama","Jaramijó","Jipijapa"," Junín","Manta","Montecristi","Olmedo","Paján","Pedernales","Pichincha","Puerto López","Rocafuerte","San Vicente"," Santa Ana","Sucre"," Tosagua"
    ],
    /* Morona santiago */
    ["Morona","Gualaquiza","Huamboya","Limón Indanza","Logroño","Pablo Sexto","Palora","San Juan Bosco"," Santiago de Méndez","Sucúa","Taisha","Tiwintza"
    ],
    /* Napo */
    [
      "Tena", "Archidona", "Carlos Julio Arosemena Tola", "El Chaco", "Quijos"
    ],
    /* Orellana */
    [
      "Francisco de Orellana", "Aguarico", "La Joya de los Sachas", "Loreto"
    ],
    /* Pastaza */
    [
      "Pastaza", "Arajuno", " Mera", "Santa Clara"
    ],
    /* Pichincha */
    [
      "Quito","Cayambe","Mejía","Pedro Moncayo","Pedro Vicente Maldonado","Puerto Quito","Rumiñahui","San Miguel de los Bancos"
    ],
    /* Santa elena */
    [
      "Santa Elena", "La Libertad", "Salinas"
    ],
    /* Santo domingo */
    [
      "Santo Domingo", "La Concordia"
    ],
    /* Sucumbios */
    [
      "Lago Agrio","Cascales","Cuyabeno","Gonzalo Pizarro","Putumayo","Shushufindi","Sucumbíos"
    ],
    /* Tungurahua */
    [
      "Ambato","Baños","Cevallos","Mocha","Patate","Pelileo"," Quero","Santiago de Píllaro","Tisaleo"
    ],
    /* Zamora chinchipe */
    [
      "Zamora","Centinela del Cóndor","Chinchipe","El Pangui","Nangaritza","Palanda"," Paquisha","Yacuambi","Yantzaza"
    ],
  ];
  
  /* ARRAY DE ENUNCIADOS DEL PDF */
  
  var pdfenunciado = [
    " ",
    "NO TE PREOCUPES TIENES UNA PROBABILIDAD MUY BAJA",
    "TUS RESULTADOS SON PREOCUPANTES, TU PROBABILIDAD",
    "DE COVID-19 ES INTERMEDIA",
    "URGENTE!! TU PROBABILIDAD DE SER PORTADOR DE COVID-19",
    "ES MUY ALTA",
    "PARA ESTAR SEGURO DE TU SALUD, CONTÁCTATE AL",
    "NUMERO DEL MINISTERIO DE SALUD:",
    "#171",
    "healt&welfaresystem@gmail.com",
    "Por tu salud, quedate en casa",
  ];

  /* ARRAY DE ENUNCIADOS */
  
  var enunciado = [
    "No te preocupes tienes una probabilidad muy baja de COVID-19.",
    "Tus resultados son preocupantes, tu probabilidad de COVID-19 es intermedia.",
    "URGENTE!! Tu probabilidad de ser portador de COVID-19 es muy alta.",
    "PARA ESTAR SEGURO DE TU SALUD, CONTÁCTATE AL NUMERO DEL MINISTERIO DE SALUD:",
    "*Recuerda que puedes descargar un documento con tus datos y resultados detallados.",
    "Gracias por usar el Test COVID-19",
    "Espero haberte ayudado con tus dudas y necesidades.",
    "*Recuerda usa todas las medidas de protección ante el COVID-19.",
    "#ProtegeTuFamilia"
  ];
  
  /* ARRAY DE PREGUNTAS */
  
  var preguntas = [
    "¿Tienes fiebre de (+37.7°C)?", 
    "¿Últimamente te has sentido cansado?", 
    "¿Tienes dolor muscular?", 
    "¿Presentas fuerte dolor de cabeza?",
    "¿Te sientes con fatiga?",
    "¿Has tenido mareos en los últimos días?",
    "¿Presentas vómitos?",
    "¿Tienes sensación de falta de aire?",
    "¿En los últimos días has presentado dolor o presión en el pecho?", 
    "¿Presentas tos seca y persistente? ",
    "¿Tienes dolor de garganta? ",
    "¿Presentas mucosidad en la nariz?",
    "¿Tienes escalofríos?",
    "¿Últimamente has presentado erupciones en la piel?",
    "¿Tienes ojos rojos?",
    "¿Presentas incapacidad para hablar o moverte?",
    "¿En los últimos días has presentado diarrea?",
    "¿Presentas pérdida del sentido del olfato o del gusto?",
    "¿Has tenido contacto con algún paciente confirmado?",
    "¿Llevas más de 15 días con estos síntomas?",
  ];

  console.log(preguntas.length)

/* ARRAY DE IMAGENES */
  var imagenes= [
    "../img/test/iconos_preguntas/pregunta0.png",
    "../img/test/iconos_preguntas/pregunta1.png",
    "../img/test/iconos_preguntas/pregunta2.png",
    "../img/test/iconos_preguntas/pregunta3.png",
    "../img/test/iconos_preguntas/pregunta4.png",
    "../img/test/iconos_preguntas/pregunta5.png",
    "../img/test/iconos_preguntas/pregunta6.png",
    "../img/test/iconos_preguntas/pregunta7.png",
    "../img/test/iconos_preguntas/pregunta8.png",
    "../img/test/iconos_preguntas/pregunta9.png",
    "../img/test/iconos_preguntas/pregunta10.png",
    "../img/test/iconos_preguntas/pregunta11.png",
    "../img/test/iconos_preguntas/pregunta12.png",
    "../img/test/iconos_preguntas/pregunta13.png",
    "../img/test/iconos_preguntas/pregunta14.png",
    "../img/test/iconos_preguntas/pregunta15.png",
    "../img/test/iconos_preguntas/pregunta16.png",
    "../img/test/iconos_preguntas/pregunta17.png",
    "../img/test/iconos_preguntas/pregunta18.png",
    "../img/test/iconos_preguntas/pregunta19.png",
  ]

/* ARRAY DE AUDIOS ASISTENTE */

  var audios = [
    "./sound/popup/saludo_modal_index.wav",
    "./sound/popup/presentacion_modal_index.wav",
    "./sound/popup/modal2_index.wav",
    "./sound/index/index.wav",
    "./sound/test/presentacion_test.wav",
    "./sound/test/datos_test.wav",
    "./sound/test/correcion_datos_test.wav",
    "./sound/test/inicio_preguntas_test.wav",
    "./sound/test/pregunta2_test.wav",
    "./sound/test/pregunta3_test.wav",
    "./sound/test/pregunta4_test.wav",
    "./sound/test/pregunta5_test.wav",
    "./sound/test/pregunta6_test.wav",
    "./sound/test/pregunta7_test.wav",
    "./sound/test/pregunta8_test.wav",
    "./sound/test/pregunta9_test.wav",
    "./sound/test/pregunta10_test.wav",
    "./sound/test/pregunta11_test.wav",
    "./sound/test/pregunta12_test.wav",
    "./sound/test/pregunta13_test.wav",
    "./sound/test/pregunta14_test.wav",
    "./sound/test/pregunta15_test.wav",
    "./sound/test/pregunta16_test.wav",
    "./sound/test/pregunta17_test.wav",
    "./sound/test/pregunta18_test.wav",
    "./sound/test/pregunta19_test.wav",
    "./sound/test/pregunta20_test.wav",
    "./sound/test/resultados_sano_test.wav",
    "./sound/test/resultados_preocupante_test.wav",
    "./sound/test/resultados_grave_test.wav",
    "./sound/test/resultados_texto_test.wav",
    "./sound/test/descarga_test.wav",
    "./sound/test/fin_test.wav",
    "./sound/test/fondo_preguntas.wav",
    "./sound/prevencion/prevencion.wav",
    "./sound/sintomas/sintomas.wav",
    "./sound/tratamientos/tratamientos.wav",

  ]






  