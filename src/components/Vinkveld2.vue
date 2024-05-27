<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <div>LEGG INN OVERSIKTSBILDE</div>
    <img src="/deltakere100524.png" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #2</p>
    <p class="text-2xl">Syrah + blindings</p>
    <p class="text-gray-500">10. mai 2024</p>
    <p class="my-2">Vinkveld nummer 2!</p>
    <p class="mb-2">Alle medbringer en Syrah/Shiraz og en blindings som overskriften sier. Prisrange er 250-350 men litt over er også ok. Deltakerene klarte nesten oppgaven med å ankomme med riktig vin untatt Jonny. Han er uansett utvilsomt tilgitt som du vil se lenger nede i vinlisten.</p>
    <p class="mb-2">Det var en del ekstra viner som dukket opp både før og etter på denne kvelden... (:</p>
    <p class="mb-4">Deltakere er Johannes, Ørjan, Daniel og Jonny.</p>
    <VinInfo
      imgSrc="/palarsenriesling.png"
      name="P. A. Larsen Riesling Hock"
      artikkelNr="16860201"
      price="184,9"
      grape="Riesling 88%
Weissburgunder 5%
Cabernet blanc 7%"
      rating="Rating: Ingen karakter satt"
    >Kjapp oppvarmingblindings på Johannes før resten kom. Tok den på første sniff!  </VinInfo>
    <VinInfo
      imgSrc="/ilmimo2023.png"
      name="Il Mimo 2023"
      artikkel-nr="17060601"
      price="216"
      rating="Rating: Ingen karakter satt"
      grape="Nebbiolo 100%"
    >Servert når alle var på plass. 2022 årgang på første kveld. 2023 denne gang.</VinInfo>
    <div class="my-4 bg-red-500">LEGG INN BOBLENE HER</div>
    <VinInfo
      imgSrc="/wholebunch2022.png"
      artikkel-nr="15435401"
      name="Gabriëlskloof Whole Bunch Syrah 2022"
      price="269,9"
      rating="LEGG INN ØRJAN SIN SYRAH"
      grape="Syrah 100%"
    >LEGG INN ØRJAN SIN SYRAH
    </VinInfo>
    <VinInfo
      imgSrc="/wholebunch2022.png"
      artikkel-nr="15435401"
      name="Gabriëlskloof Whole Bunch Syrah 2022"
      price="269,9"
      rating="Rating: Ingen karakter satt."
      grape="Syrah 100%"
    >LEGG INN TEKST
    </VinInfo>
    <VinInfo
      imgSrc="/napasyrah2011.png"
      artikkel-nr="15716201"
      name="School House Mescolanza Napa Valley Spring Mountain District Syrah Blend 2011"
      price="381,20"
      rating="Rating: Ingen karakter satt."
      grape="Syrah 100%"
    >Johannes sin. Denne var godt utviklet og drikkeklar. Bør ikke lagres lenger etter Ørjan og Daniel sin smak. Før pris er kjent er vi samstemte om at denne vinen uansett har høy kvalitet og er den "beste" syrah'en.
    </VinInfo>
    <VinInfo
      imgSrc="/radici2015.png"
      artikkel-nr="1053001"
      name="Radici Taurasi Riserva 2015"
      price="639,90 * usikker på pris"
      rating="Rating: Ingen karakter satt."
      grape="Aglianico 100%"
    >Jonny #1. Meget positivt overrasket. Samtlige liker vinen meget godt. Vi kommer oss til riktig land, men druen klarte vi ikke å tippe.
    </VinInfo>
    <VinInfo
      imgSrc="/thibault2020.png"
      artikkel-nr="12729601"
      name="Thibault Liger-Belair Bourgogne Gamay Les Deux Terres"
      price="255,8"
      rating="Rating: Ingen karakter satt."
      grape="
Pinot Noir 33%
Gamay 67%"
    >Daniel sin blindings. Pinot blir nevnt, men Gamay er det ingen som finner. En unnskyldning kan være at dette var blandt de siste vinene.
    </VinInfo>
    <div class="my-2 bg-red-500">AMARONE</div>
    <div class="my-2 bg-red-500">ROERO</div>
    <div class="my-2 bg-red-500">DOLCETTO TIL ØRJAN</div>
    <p>Fyll inn oppsummeringstekst</p>
    <div>FlYTT BILDET FRA TOPPEN NED HER</div>
  </div>
</template>
<script>
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline/index.js";
import {Dialog, DialogPanel} from "@headlessui/vue";
import VinInfo from "./VinInfo.vue";

export default {
  components: {VinInfo, DialogPanel, XMarkIcon, Dialog, Bars3Icon},
  data() {
    return {
      headerText: '',
    };
  },
  computed: {
    getWidth() {
      const width = window.innerWidth;
      if (width > 1020) return 1020;
      return width;
    },
    getHeight() {
      const width = window.innerWidth;
      if (width <= 362) return 236;
      if (width <= 640) return 274;
      if (width < 1020) return 655;
      return 655;
    },
  },
};
</script>