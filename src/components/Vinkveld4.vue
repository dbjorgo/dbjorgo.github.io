<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <img src="/oversikt41.jpeg" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #4</p>
    <p class="text-2xl">Vi tar en Spansk en!</p>
    <p class="text-gray-500">31. mai 2024</p>
    <p class="my-2">Johannes stiller som vert igjen. En oppgave han mestrer.</p>
    <p class="mb-2">Temaet for kvelden er Spanske viner + et hvitvinskupp til under 200,-</p>
    <p class="mb-4">Deltakere er Ørjan, Daniel og Johannes.</p>
    <VinInfo
      imgSrc="/pflugerweiss.png"
      name="Pflüger Weissburgunder Quarzit 2023"
      artikkelNr="15020301"
      price="189,9"
      grape="Weissburgunder 100%"
      rating="J-85/D-85/Ø-85"
    >Daniel sin blind. Klarte ikkje å tippe riktig før litt hint var på plass. Fornøyd med vinen.</VinInfo>
    <VinInfo
      imgSrc="/karlmay2023.png"
      name="Karl May Riesling Trocken 2023"
      artikkelNr="9849001"
      price="199,9"
      grape="Riesling 100%"
      rating="86"
    >Ørjan sin blind. Riesling blei spotta med ein gang. Johannes prøvde seg på produsent og tippa Dönnhoff.</VinInfo>
    <p class="text-left mb-2">Denne vinen satte i gang en helt ny runde med smaking. Dette er blandt favoritt rieslingene til Johannes. Han sprang ned i kjelleren og fant frem 2022 i halvflaske og boks for å sammenligne.
      Med alle 3 sidestilt var det faktisk stor forskjell på vinene. Etter å ha flyttet på glassene klarte både Ørjan og Johannes å tippe blindt samtlige.</p>
    <p class="text-left">2022 halvflaske - 88. Artikkel 9849001</p>
    <p class="text-left">2022 boks - 85. Artikkel 7650206</p>
    <p class="text-left mb-4">2023 0,75 - 86. Artikkel 9849002</p>
    <img src="/founder3.jpg" class="mb-4" />
    <VinInfo
      imgSrc="/bosconia2012.png"
      name="Lopez de Heredia Viña Bosconia 2012"
      artikkelNr="1917901"
      price="409,9"
      grape="Mazuelo 2%
Tempranillo (Tinto del Pais) 80%
Graciano (Bovale) 3%
Garnacha 15%"
      rating="88/87"
    >Beste av de to vinene. utifra fargen ser denne mer utviklet ut enn Tondoniaen. Denne gav fra seg mer frukt enn den andre.</VinInfo>
    <VinInfo
      imgSrc="/tondonia2011.png"
      name="Viña Tondonia Reserva 2011"
      artikkelNr="3461001"
      price="419,9"
      grape="Mazuelo 5% Tempranillo (Tinto del Pais) 75% Garnacha 15% Graciano (Bovale) 5%"
      rating="86"
    >Alt for mye eik for vår smak. Fremdeles ganske lukka vin. Bør ligge en del lenger.</VinInfo>
    <p class="mb-4">Ørjan hadde med seg samme vin som Daniel. Vi turer ned i kjelleren for å finne en alternativ spansk vin. I kjelleren finner vi dessverre ikke noe spansk i samme prisklasse og bestemmer oss for å åpne noen Pinoer.</p>
    <VinInfo
      imgSrc="/wetshof2018.png"
      name="De Wetshof Nature in Concert 2018"
      artikkelNr="9293701"
      price="200"
      grape="Pinot Noir 100%"
    >Utypisk pinot. Veldig lite frukt. Litt tørr. Te og krydder blir nevnt. Kort lengde</VinInfo>
    <VinInfo
      imgSrc="/bousquet.png"
      name="Dom. Bousquet Reserve Pinot Noir"
      artikkelNr="16656701"
      price="219,9"
      grape="Pinot Noir 100%"
    >Finner denne tilfeldigvis innimellom de dyre vinene til Johannes. Sammenlignet med Wetshof er dette veldig typisk pinot som gir mye av seg selv. Meget god kvalitet. Vi hadde lett betalt dobbelt pris for denne. Røverkjøp som er blitt glemt i skapet :D </VinInfo>
    <img src="/kjeller.jpg" class="mb-4" />
    <VinInfo
      imgSrc="/orage2023.png"
      name="Torredemer-Mangin Orage 2023"
      artikkelNr="15860001"
      price="219,9"
      grape="Muscat Blanc 100%"
    >Avslutter med Johannes sin blind. Godteributikk blandet med te! Overraskene god oransje! Anbefales å teste.</VinInfo>
    <p class="mb-4">Kvelden var meget bra og vi klarte å holde antall viner litt lavere denne gangen. Spanske viner visste vi på forhånd at ikkje var blandt favorittene men alt må uansett smakes. Plan for neste vinkveld er Pinot Noir i prisklasse 300-500</p>
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
