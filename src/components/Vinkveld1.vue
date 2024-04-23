<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <img src="/Volumes/code/githubio/src/assets/images/vinoversikt1.jpg" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #1</p>
    <p class="text-2xl">Ta med noe du vil dele</p>
    <p class="text-gray-500">22. februar 2024</p>
    <p class="my-2">Første (offisielle) vinkveld. Dette er noe vi har prøvd å få til lenge, og endelig er vi der! Vi blir enig om å ta med noen delvis tilfeldige viner som vi ønsker å dele. Enkelt og greit. Ta med en hver til blindsmaking var det eneste kravet. En deltager hadde kun med seg øl.</p>
    <p class="mb-4">Vi smaker viner svært uhøytidlig, og ingen analyser eller forslag er for dumme til å nevnes. Det var mer fokus på smaking enn å notere... Vinene fra kvelden finner du uansett under. Deltakere er Johannes, Torkild og Daniel.</p>
    <VinInfo
      imgSrc="/dist/ilmimo2023.png"
      name="Il Mimo 2023"
      artikkelNr="17060601"
      price="216"
      grape="Nebbiolo 100%"
      rating="Rating: Ingen karakter satt"
    >Startet enkelt med denne. Hadde stått en dag for lenge åpnet i kjøleskapet men var ok drikkendes.</VinInfo>
    <VinInfo
      imgSrc="/dist/sassara2022.png"
      name="Sassara Esotico 2022"
      artikkel-nr="13055301"
      price="249.90"
      rating="Rating: Ingen karakter satt"
      grape="Corvina 30%
            Trebbiano 10%
            Moscato 10%
            Molinara 40%
            Garganega 10%"
    >Lukter snop!</VinInfo>
    <VinInfo
      imgSrc="/dist/filari2022.png"
      name="Brandini Filari Corti Langhe Nebbiolo 2022"
      artikkel-nr="12338501"
      price="269.90"
      rating="Rating: Ingen karakter satt."
      grape="Nebbiolo 100%"
    >Daniel og Torkild blindsmaker. Lukt tilsier Pinot Noir med en gang, smaken gjør det vanskeligere. Vi går på en 20min lang historiereise fra Torkild gjennom Europa selv om han mener det er Italia som er fasit. Johannes tipser om fargen etterhvert. Får endelig med Torkild på et stopp i Piemonte og Nebbiolo blir nevnt.
      <p class="mt-1"><i>'Eg er ikkje så opptatt av druer'</i> - Torkild</p></VinInfo>
    <VinInfo
      imgSrc="/dist/mukuzani.png"
      artikkel-nr="12527701"
      name="Gio's Marani Mukuzani"
      price="229.90"
      rating="Rating: Ingen karakter satt."
      grape="Saperavi 100%"
    >Johannes og Torkild blindsmaker. Krydder og pepper blir fort nevt. Da Rhone blir utelukket finner de fort veien østover og til Georgia ganske kjapt. Nelliken får begge snerten av men da druen er veldig ukjent og i overkant vanskelig å gjette.
      <p class="mt-1"><i>'Trege tanniner fra fjøs'</i> - Torkild</p></VinInfo>
    <VinInfo
      imgSrc="/dist/capanna2020.png"
      artikkel-nr="15666301"
      name="Capanna Rosso di Montalcino 2020"
      price="289.70"
      rating="Rating: Lett 90+"
      grape="Sangiovese 100%"
    >Enstemmig om at dette er en kjempevin. En lang vin med masse røde bær. Mye vin for pengene
      <p class="mt-1"><i>'Eg kjenner jordsmonnet '</i> - Torkild</p></VinInfo>
    <VinInfo
      imgSrc="/dist/chanin2021.png"
      artikkel-nr="15834701"
      name="Chanin Zotovich Vineyard Pinot Noir 2021"
      price="651.30"
      rating="Rating: Ingen karakter satt."
      grape="Pinot Noir 100%"
    >Kveldens høydepunkt! Mange forskjellige smaker som sikkert blei nevnt her.
      <p class="mt-1"><i>'Forfina båtlukt '</i> - Johannes</p></VinInfo>
  </div>
  <img src="/Volumes/code/githubio/src/assets/images/johannesOgTorkild.png" />
  <div class="mx-auto max-w-2xl text-center mb-4">
    <p class="my-10">Veien tok turen ned i garasjen for en runde dart og roting i vinskapet. Der blei det ein bonusvin.</p>
    <VinInfo
      imgSrc="/dist/ghemme2006.png"
      artikkel-nr="12427001"
      name="Ioppa Ghemme 2006"
      price="379.90"
      rating="Rating: Ingen karakter satt."
      grape="Vespolina 20%
                Nebbiolo 80%"
    >Ferdig utvikla. Klar mursteinfarge. Lær og tjære.
    </VinInfo>
    <img src="/Volumes/code/githubio/src/assets/images/ghemmekaraffel.png" />
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