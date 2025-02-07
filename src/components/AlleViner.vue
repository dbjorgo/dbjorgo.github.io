<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Gatonegro</span>
            <img class="h-8 w-auto" src=/wineHome.png alt="" />
          </router-link>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen1 = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link v-for="item in navigation" :key="item.name" class="text-sm font-semibold leading-6 text-gray-900" :to="item.to" @click="goTo(item.to)">{{ item.name }}</router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
      <div class="lg:hidden" @close="mobileMenuOpen1 = false" v-show="mobileMenuOpen1" >
        <div class="fixed inset-0 z-50"  />
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between" >
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Gatonegro</span>
              <img class="h-8 w-auto" src=/wineHome.png alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen1 = false" >
              <span class="sr-only" >Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root" >
            <div class="-my-6 divide-y divide-gray-500/10" ref="completeButtonRef">
              <div class="space-y-2 py-6" >
                <router-link  v-for="item in navigation" :key="item.name" :to="{name: item.to}" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mt-4 flex flex-col justify-center items-start">
        <label for="location" class="block text-sm font-medium leading-6 text-gray-900 w-1/3">Sortering:</label>
        <select v-model="selected" id="location" name="location" class="mt-2 w-2/3 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option disabled value="">Ingen sortering</option>
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>

      <div class="w-full mt-4 grid-cols-2 grid">
        <VinInfo
          class="mx-1"
          v-for="vin in sortedWines"
          :imgSrc="vin.imgSrc"
          :artikkelNr="vin.artikkelNr"
          :name="vin.name"
          :price="vin.price"
          :grape="vin.grape"
          :rating="vin.rating"
        />
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <!--        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />-->
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import VinInfo from "./VinInfo.vue";

const selected = ref('')

const options = ref([
  { text: 'Navn', value: 'name' },
  { text: 'Pris', value: 'price' },
  { text: 'Drue', value: 'grape' }
])

const navigation = [
  { name: 'Vinsmakinger', to: 'smakinger' },
  { name: 'Om oss', to: 'om-oss' },
  { name: 'Alle smakte viner', to: 'vinoversikt' },
  { name: 'Vedtekter', to: 'vedtekter' },
]

const vinoversikt = [
  {
    imgSrc: "/ilmimo2023.png",
    name: "Il Mimo 2022",
    artikkelNr: "17060601",
    price: 216,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/sassara2022.png",
    name: "Sassara Esotico 2022",
    artikkelNr: "13055301",
    price: 250,
    grape: "Corvina 30% Trebbiano 10% Moscato 10% Molinara 40% Garganega 10%",
  },
  {
    imgSrc: "/filari2022.png",
    name: "Brandini Filari Corti Langhe Nebbiolo 2022",
    artikkelNr: "12338501",
    price: 270,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/mukuzani.png",
    artikkelNr: "12527701",
    name: "Gio's Marani Mukuzani",
    price: 230,
    grape: "Saperavi 100%",
  },
  {
    imgSrc: "/capanna2020.png",
    artikkelNr: "15666301",
    name: "Capanna Rosso di Montalcino 2020",
    price: 290,
    rating: "Rating: Lett 90+",
    grape: "Sangiovese 100%",
  },
  {
    imgSrc: "/chanin2021.png",
    artikkelNr: "15834701",
    name: "Chanin Zotovich Vineyard Pinot Noir 2021",
    price: 651,
    rating: "Rating: 90+",
    grape: "Pinot Noir 100%",
  },
  {
    imgSrc: "/ghemme2006.png",
    artikkelNr: "12427001",
    name: "Ioppa Ghemme 2006",
    price: 380,
    grape: "Vespolina 20% Nebbiolo 80%",
  },
  {
    imgSrc: "/palarsenriesling.png",
    name: "P. A. Larsen Riesling Hock",
    artikkelNr: "16860201",
    price: 185,
    grape: "Riesling 88% Weissburgunder 5% Cabernet blanc 7%",
  },
  {
    imgSrc: "/ilmimo2023.png",
    name: "Il Mimo 2023",
    artikkelNr: "17060601",
    price: 216,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/wholebunch2022.png",
    artikkelNr: "15435401",
    name: "Gabriëlskloof Whole Bunch Syrah 2022",
    price: 270,
    rating: "Rating: Ingen karakter satt.",
    grape: "Syrah 100%",
  },
  {
    imgSrc: "/wholebunch2022.png",
    artikkelNr: "15435401",
    name: "Gabriëlskloof Whole Bunch Syrah 2022",
    price: 270,
    rating: "Rating: Ingen karakter satt.",
    grape: "Syrah 100%",
  },
  {
    imgSrc: "/napasyrah2011.png",
    artikkelNr: "15716201",
    name: "School House Mescolanza Napa Valley Spring Mountain District Syrah Blend 2011",
    price: 381,
    rating: "Rating: Ingen karakter satt.",
    grape: "Syrah 100%",
  },
  {
    imgSrc: "/radici2015.png",
    artikkelNr: "1053001",
    name: "Radici Taurasi Riserva 2015",
    price: 640,
    rating: "Rating: Ingen karakter satt.",
    grape: "Aglianico 100%",
  },
  {
    imgSrc: "/thibault2020.png",
    artikkelNr: "12729601",
    name: "Thibault Liger-Belair Bourgogne Gamay Les Deux Terres",
    price: 256,
    rating: "Rating: Ingen karakter satt.",
    grape: "Pinot Noir 33% Gamay 67%",
  },
  {
    imgSrc: "/LagardeBesada.png",
    name: "Lagar de Besada Albariño 2021",
    artikkelNr: "12992502",
    price: 91,
    grape: "Albariño 100%",
    rating: "Rating: Ø85/D85",
  },
  {
    imgSrc: "/rosaura.png",
    name: "Rosaura 2022",
    artikkelNr: "3311501",
    price: 156,
    grape: "Aglianico 100%",
  },
  {
    imgSrc: "/Saladini.png",
    artikkelNr: "4446501",
    name: "Saladini Pilastri Rosso Piceno 2022",
    price: 158,
    rating: "Rating: Ø85/D85",
    grape: "Montepulciano 30% Sangiovese 70%",
  },
  {
    imgSrc: "/marques.png",
    artikkelNr: "137201",
    name: "Marqués de Cáceres Crianza 2020",
    price: 145,
    grape: "Graciano (Bovale) 5% Garnacha 10% Tempranillo (Tinto del Pais) 85%",
  },
  {
    imgSrc: "/montecillo1981.png",
    artikkelNr: "3270301",
    name: "Montecillo Gran Reserva Especial 1981",
    price: 500,
    grape: "Tempranillo 100%",
  },
  {
    imgSrc: "/amaronenatale.png",
    artikkelNr: "123",
    name: "Amarone della Valpolicella Natale",
    price: 1000,
    grape: "Rondinella 15% Corvina 70% Molinara 15%",
  },
  {
    imgSrc: "/bollaciao.png",
    artikkelNr: "15127801",
    name: "Fontanafredda Bollaciao Piemonte Brut",
    price: 260,
    grape: "Chardonnay 50% Pinot Nero 50%",
  },
  {
    imgSrc: "/cuilleron2022.png",
    artikkelNr: "1880801",
    name: "Cuilleron Les Vignes d'à Côté Syrah 2022",
    price: 200,
    grape: "Syrah 100%",
  },
  {
    imgSrc: "/dolcettoMirafiore.png",
    artikkelNr: "14119101",
    name: "Mirafiore Dolcetto d'Alba 2022",
    price: 200,
    grape: "Dolcetto 100%",
  },
  {
    imgSrc: "/roero.png",
    artikkelNr: "123",
    name: "Cascina Val del Prete Roero riserva",
    price: 500,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/orage2023.png",
    name: "Torredemer-Mangin Orage 2023",
    artikkelNr: "15860001",
    price: 220,
    grape: "Muscat Blanc 100%",
  },
  {
    imgSrc: "/bousquet.png",
    name: "Dom. Bousquet Reserve Pinot Noir",
    artikkelNr: "16656701",
    price: 220,
    grape: "Pinot Noir 100%",
  },
  {
    imgSrc: "/wetshof2018.png",
    name: "De Wetshof Nature in Concert 2018",
    artikkelNr: "9293701",
    price: 200,
    grape: "Pinot Noir 100%",
  },
  {
    imgSrc: "/tondonia2011.png",
    name: "Viña Tondonia Reserva 2011",
    artikkelNr: "3461001",
    price: 420,
    grape: "Mazuelo 5% Tempranillo (Tinto del Pais) 75% Garnacha 15% Graciano (Bovale) 5%",
    rating: "86",
  },
  {
    imgSrc: "/bosconia2012.png",
    name: "Lopez de Heredia Viña Bosconia 2012",
    artikkelNr: "1917901",
    price: 410,
    grape: "Mazuelo 2% Tempranillo (Tinto del Pais) 80% Graciano (Bovale) 3% Garnacha 15%",
    rating: "88/87",
  },
  {
    imgSrc: "/karlmay2023.png",
    name: "Karl May Riesling Trocken 2023",
    artikkelNr: "9849001",
    price: 200,
    grape: "Riesling 100%",
    rating: "86",
  },
  {
    imgSrc: "/pflugerweiss.png",
    name: "Pflüger Weissburgunder Quarzit 2023",
    artikkelNr: "15020301",
    price: 190,
    grape: "Weissburgunder 100%",
    rating: "J-85/D-85/Ø-85",
  },
  {
    imgSrc: "/ebnerblackedition.png",
    name: "Ebner-Ebenauer Black Edition Grüner Veltliner 2021",
    artikkelNr: "15939601",
    price: 510,
    grape: "Grüner Veltliner 100%",
    rating: "JO-89/D-91/Ø-91/JA-91",
  },
  {
    imgSrc: "/burncottage.png",
    name: "Burn Cottage Moonlight Race Pinot Noir 2021",
    artikkelNr: "10696401",
    price: 440,
    grape: "Pinot noir 100%",
    rating: "JO-91/D-88/Ø-90/JA-91",
  },
  {
    imgSrc: "/meyer.png",
    name: "Meyer McLean Creek Road Vineyard Pinot Noir 2022",
    artikkelNr: "7377401",
    price: 449,
    grape: "Pinot noir 100%",
    rating: "JO-91/D-88/Ø-88/JA-91",
  },
  {
    imgSrc: "/simpsonspinot.png",
    name: "Simpsons Rabbit Hole Pinot Noir 2022",
    artikkelNr: "11430801",
    price: 369,
    grape: "Pinot noir 100%",
    rating: "JO-90/D-88/Ø-89/JA-89",
  },
  {
    imgSrc: "/chanin2021pinot.png",
    name: "Chanin Sta. Rita Hills Pinot Noir 2021",
    artikkelNr: "11039301",
    price: 400,
    grape: "Pinot Noir 100%",
    rating: "JO-93/D-91/Ø-91/JA-92",
  },
  {
    imgSrc: "/bousquet.png",
    name: "Dom. Bousquet Reserve Pinot Noir",
    artikkelNr: "16656701",
    price: 220,
    grape: "Pinot Noir 100%",
  },
  {
    imgSrc: "/tibouren.png",
    name: "Clos Cibonne Prestige Caroline Côtes de Provence Cru Classé Tibouren",
    artikkelNr: "13764001",
    price: 419,
    grape: "Tibouren 90% Grenache 10%",
  },
  {
    imgSrc: "/gatonegro.png",
    name: "Gato Negro Cabernet Sauvignon 2022",
    artikkelNr: "295301",
    price: 110,
    grape: "Cabernet Sauvignon 100%",
  },
  {
    imgSrc: "/marcobartoli.png",
    name: "Marco de Bartoli Grappoli Grillo Riserva 2022",
    artikkelNr: "16539201",
    price: 430,
    grape: "Grillo 100%",
  },
  {
    imgSrc: "/malvira2009.png",
    name: "Malvirà Roero Riserva Trinità 2009",
    artikkelNr: "5106801",
    price: 475,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/sassella.png",
    name: "Arpepe Sassella Stella Retica Riserva 2019",
    artikkelNr: "932901",
    price: 500,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/rivetto2017.png",
    name: "Rivetto Barolo di Serralunga d'Alba 2017",
    artikkelNr: "5856301",
    price: 600,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/settimo2017.png",
    name: "Aurelio Settimo Barolo 2017",
    artikkelNr: "5130201",
    price: 500,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/edelvernatsch.png",
    name: "Kaltern Alto Adige Edelvernatsch 2023",
    artikkelNr: "17434401",
    price: 185,
    grape: "Schiava 100%",
  },
  {
    imgSrc: "/gaja2021.png",
    name: "Gaja Sito Moresco 2021",
    artikkelNr: "16928901",
    grape: "Barbera 50%, Nebbiolo 50%",
    price: 580,
  },
  {
    imgSrc: "/Selvapiana.png",
    name: "Selvapiana Chianti Rufina 2022",
    artikkelNr: "3316901",
    grape: "Sangiovese 94%, Canaiolo 3%, Colorino 2%, Malvasia Nera 1%",
    price: 218,
  },
  {
    imgSrc: "/Buscemi2020.png",
    name: "Buscemi Tartaraci 2020",
    artikkelNr: "18625701",
    grape: "Grenache, Nerello Mascalese",
    price: 516,
  },
  {
    imgSrc: "/Quintodecimo2021.png",
    name: "Quintodecimo Aglianico Irpinia Terra d'Eclano",
    artikkelNr: "15415101",
    grape: "Aglianico 100%",
    price: 650,
  },
  {
    imgSrc: "/Chioccioli2021.png",
    name: "Chioccioli Chianti Classico Fossivento 2021",
    artikkelNr: "18626001",
    grape: "Sangiovese 100%",
    price: 362,
  },
  {
    imgSrc: "/canova2021.png",
    name: "Ca'Nova Barbaresco Montefico Bric Mentina 2021",
    artikkelNr: "14930801",
    price: 450,
    grape: "Nebbiolo 100%",
  },
  {
    imgSrc: "/rocheauxmoines2021.png",
    name: "Dom. Moines Savennières Roche aux Moines 2021",
    artikkelNr: "7300401",
    price: 520,
    grape: "Chenin Blanc 100%",
  },
  {
    imgSrc: "/grace_koshu.png",
    name: "Grace Koshu Misawa Vineyard 2021",
    artikkelNr: "18643101",
    price: 650,
    grape: "Koshu 100%",
  },
  {
    imgSrc: "/lancien2024.png",
    name: "Jean-Paul Brun L'Ancien Beaujolais Nouveau 2024",
    artikkelNr: "5804001",
    price: 235,
    grape: "Gamay 100%",
  },
  {
    imgSrc: "/methimon.png",
    name: "Dougos Meth'Imon L 2018",
    artikkelNr: "12291901",
    grape: "Limniona 100%",
    price: 363,
  },
  {
    imgSrc: "/magoutes2020.png",
    name: "Magoutes Vineyard Xinomavro 2020",
    artikkelNr: "17428601",
    grape: "Xinomavro 100%",
    price: 445,
  },
  {
    imgSrc: "/alpamanta2013.png",
    name: "Alpamanta Estate Malbec 2013",
    artikkelNr: "15814001",
    grape: "Malbec 100%",
    price: 315,
  },
  {
    imgSrc: "/kaiken2022.png",
    name: "Kaiken Ultra Pinot Noir 2022",
    artikkelNr: "14209901",
    grape: "Pinot noir 100%",
    price: 240,
  },
]

const sortedWines = computed(() => {
  if(selected.value === '') return vinoversikt;
  if(selected.value === 'price') {
    return vinoversikt.sort((a,b) => a[selected.value] - b[selected.value])
  } else {
    return vinoversikt.sort((a,b) => a[selected.value].localeCompare(b[selected.value]))
  }
})

const mobileMenuOpen1 = ref(false)
</script>
