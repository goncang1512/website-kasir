let dataBase = {
  appetizerFood: [
    {
      id: 1,
      kode: "S96",
      name: "Salad Sayur",
      harga: 20000,
      foto: require("./img/images/salad.jpg"),
      description:
        "Daun Selada Hijau, Tomat Ceri, Mentimun, Wortel Parut, Potongan Daging Ayam Panggang, Kacang Almond Panggang, Dressing Lemon dan Zaitun.",
    },
    {
      id: 2,
      kode: "66",
      name: "Canape Salmon",
      harga: 15000,
      foto: require("./img/images/canapesalmon.jpg"),
      description: "Roti Canape, Salmon Segar, Cream Cheese.",
    },
    {
      id: 3,
      kode: "B6",
      name: "Strawberry Cocktail",
      harga: 13000,
      foto: require("./img/images/strawberrycocktail.jpg"),
      description: "Strawbary, Jud Lemon, Gula, Es Batu, Soda, Daun Mints.",
    },
    {
      id: 4,
      kode: "M61",
      name: "Bruschetta",
      harga: 15000,
      foto: require("./img/images/bruschetta.jpg"),
      description:
        "Roti Baguette, Tomat, Bawang Bombay, Daun Basil, Bawang Putih, Minyak Zaitun, Garam dan Merica.",
    },
    {
      id: 5,
      kode: "I41",
      name: "Tomato Soup",
      harga: 10000,
      foto: require("./img/images/tomatosoup.jpg"),
      description:
        "Tomat Kalengan, Bawang Bombay, Bawang Putih, Kaldu Sayuran:, Gula, Mentega, Garam dan Merica, Remah Roti Panggang.",
    },
  ],
  mainCourse: [
    {
      id: 6,
      kode: "E21",
      name: "Steak",
      harga: 7500,
      foto: require("./img/images/steak.jpg"),
      description: "Potongan Daging, Garam dan Merica, Minyak, Bawang Putih.",
    },
    {
      id: 7,
      kode: "K51",
      name: "Pasta",
      harga: 10000,
      foto: require("./img/images/pasta.jpg"),
      description: "Pasta Kering, Air Garam,Saus.",
    },
    {
      id: 8,
      kode: "L56",
      name: "Fresh Sushi",
      harga: 13000,
      foto: require("./img/images/sushi.jpg"),
      description:
        "Nasi Sushi, Ikan Segar, Sayuran, Nori, Wasabi, Kecap, Jahe.",
    },
    {
      id: 9,
      kode: "A46",
      name: "Nachos",
      harga: 15000,
      foto: require("./img/images/nachos.jpg"),
      description:
        "Keripik Jagung, Daging Cincang, Kacang Hitam, Saus Tomat, Saus Guacamole, Saus Cream, Bawang Bombay.",
    },
  ],
  seaFood: [
    {
      id: 10,
      kode: "R91",
      name: "Kerang Saus Tomat",
      harga: 12000,
      foto: require("./img/images/shellstomato.jpg"),
      description:
        "Kerang Segar, Bawang Putih, Saus Tomat, Cabai Merah, Daun Peterseli, Minyak Zaitun.",
    },
    {
      id: 11,
      kode: "P76",
      name: "Udang Goreng",
      harga: 14000,
      foto: require("./img/images/tempurashrimps.jpg"),
      description:
        "Udang Segar, Tepung Terigu, Bumbu Rempah-rempah, Minyak Goreng, Saus Sambal.",
    },
    {
      id: 12,
      kode: "P77",
      name: "Lobster",
      harga: 120000,
      foto: require("./img/images/lobster.jpg"),
      description: "Lobster, Mentega, Bawang Putih, Lemon, Daun Peterseli.",
    },
    {
      id: 13,
      kode: "R92",
      name: "Ikan Bakar",
      harga: 9000,
      foto: require("./img/images/roastedfish.jpg"),
      description:
        "Ikan Segar, Bumbu Marinasi, Bumbu Bakar, Minyak Goreng, Daun Pisang, Jeruk Nipis.",
    },
    {
      id: 14,
      kode: "K52",
      name: "Sushi",
      harga: 11000,
      foto: require("./img/images/sushifresh.jpg"),
      description:
        "Nasi Sushi, Ikan Segar, Sayuran, Nori, Wasabi, Kecap, Jahe.",
    },
  ],
  dessertFood: [
    {
      id: 10,
      kode: "R91",
      name: "Creme Brulee",
      harga: 12000,
      foto: require("./img/images/cremebrulee.jpg"),
      description: "Krim Cair, Gula Pasir, Telur, Vanilla.",
    },
    {
      id: 11,
      kode: "P76",
      name: "Puding",
      harga: 14000,
      foto: require("./img/images/puding.jpg"),
      description: "Susu, Gula, Bahan Pengental, Coklat.",
    },
    {
      id: 12,
      kode: "P77",
      name: "Ice Cream",
      harga: 120000,
      foto: require("./img/images/icecream.jpg"),
      description: "Susu, Gula, Krim, Coklat, Vanilla, Telur, Topping.",
    },
    {
      id: 13,
      kode: "R92",
      name: "Buah Segar",
      harga: 9000,
      foto: require("./img/images/freshfruit.jpg"),
      description: "Semangka, Pisang, Jeruk, Anggur, Kiwi, Strawberry, Berry.",
    },
    {
      id: 14,
      kode: "K52",
      name: "Kue Coklat",
      harga: 11000,
      foto: require("./img/images/kuecoklat.jpg"),
      description:
        "Coklat, Mentga, Telur, Tepung, Baking Powder, Ekstrak Vanilla, Garam.",
    },
  ],
  fastFood: [
    {
      id: "auisfha78w345r34hfha",
      kode: "S96",
      name: "Burger",
      harga: 20000,
      foto: require("./img/images/burger.jpg"),
      description:
        "Daging, Roti, Bumbu, Topping(saus sambel, saus tomat, keju, saus BBQ, mayones, acar).",
    },
    {
      id: "sajf873467hfdhfer87",
      kode: "66",
      name: "Ayam Goreng",
      harga: 15000,
      foto: require("./img/images/friedchicken.jpg"),
      description: "Ayam, Bumbu Marinasi, Tepung, Minyak.",
    },
    {
      id: "fhasu48753459gdfhgwr",
      kode: "B6",
      name: "Hot Dog",
      harga: 13000,
      foto: require("./img/images/hotdog.jpg"),
      description:
        "Sosis, Roti Hot Dog, Topping(saus tomat, saus sambel, saus BBQ, acar, bawang bombay).",
    },
    {
      id: "asdfha3w74245efge44ae",
      kode: "M61",
      name: "Pizza",
      harga: 15000,
      foto: require("./img/images/pizza.jpg"),
      description:
        "Adonan Pizza, Saus Tomat, Keju, Saus dan Rempah rempah, Topping(sosis, daging, nans).",
    },
    {
      id: "afsuify87345rfwfhewr3",
      kode: "I41",
      name: "Kentang Goreng",
      harga: 10000,
      foto: require("./img/images/potato.jpg"),
      description: "",
    },
  ],
  imgCarousel: [
    {
      id: 55,
      images: require("./img/kopicaraousel.jpg"),
      tittle: "Kopi",
      subTittle: "Torabika",
      text: '"Rasakan kenikmatan kopi terbaik yang membangunkan selera Anda. Dapatkan pengalaman kopi yang tak terlupakan dengan cita rasa yang memikat."',
    },
    {
      id: 56,
      images: require("./img/roticarousel.jpg"),
      tittle: "Roti",
      subTittle: "Roti Bakar",
      text: '"Nikmati kelezatan roti kami yang segar dan lezat. Setiap gigitan adalah kepuasan bagi lidah Anda. Segera cicipi dan buktikan sendiri!"',
    },
    {
      id: 57,
      images: require("./img/pizzacaraousel.jpg"),
      tittle: "Pizza",
      subTittle: "Pizza Itali",
      text: '"Rasakan kelezatan pizza kami yang tiada tara. Paduan sempurna antara adonan lembut, saus yang kaya rasa, dan topping berkualitas. Puaskan selera Anda dengan setiap gigitan!"',
    },
    {
      id: 58,
      images: require("./img/lemnonteacaraousel.jpg"),
      tittle: "Lemon Tea",
      subTittle: "Pizza Itali",
      text: '"Nikmati keceriaan segar dengan segelas Teh Lemon kami. Menyegarkan dan lezat!"',
    },
  ],
  menuPopuler: [
    {
      id: "foodsatepadang",
      kode: "S96",
      name: "Sate Padang",
      harga: 20000,
      foto: require("./img/satepadang.jpg"),
      text: '"Sate Padang di tempat ini benar-benar menggugah selera! Dagingnya empuk, bumbunya kaya rempah, dan sausnya begitu lezat. Setiap gigitan memberikan sensasi yang menggoyang lidah, benar-benar juara!"',
      komposisi:
        "Daging sapi, Bumbu marinasi, Bawang putih, Bawang merah, Cabe rawit, Ketumbar, Serai, Gula merah, Gula pasir, Garam, Air asam jawa, Minyak goreng, Air matang",
    },
    {
      id: "foodmieayam",
      kode: "M61",
      name: "Mie Ayam",
      harga: 15000,
      foto: require("./img/mieayam.jpg"),
      text: '"Mie ayam di sini sungguh enak! Kuahnya kaya rasa, mie-nya kenyal, dan topping ayamnya lezat. Rasanya begitu autentik dan mengingatkan saya pada cita rasa mie ayam favorit masa kecil."',
      komposisi:
        "Mie telur, Kaldu ayam, Bawang putih, Bawang merah, Daun bawang, Sawi hijau atau kangkung, Kecap manis, Minyak wijen, Garams, Merica bubuk ",
    },
    {
      id: "foodpisangcrispy",
      kode: "P76",
      name: "Pisang Crispy",
      harga: 14000,
      foto: require("./img/pisangcrispy.jpg"),
      text: '"Pisang crispy ini sungguh luar biasa! Kulitnya yang renyah dan garing sempurna, dengan pisang yang lembut di dalamnya. Rasanya manis dan memuaskan, membuat saya ingin selalu kembali untuk mencicipinya lagi."',
      komposisi:
        "Pisang matang, Tepung terigu, Tepung beras, Coklat batangan, Kejut parut, Air dingin, Gula pasir, Garam, Minyak",
    },
    {
      id: "foodkopulatte",
      kode: "K51",
      name: "Kopi Latte",
      harga: 10000,
      foto: require("./img/kopi.jpg"),
      text: '"Tidak ada kata yang bisa menggambarkan betapa memuaskannya secangkir kopi ini. Setiap tegukan membawa kepuasan dan kenikmatan yang tak tergantikan."',
      komposisi:
        "Kopi bubuk, Air panas, Susu segar, Gula pasir, Ekstrak vanila",
    },
  ],
};

export default dataBase;
