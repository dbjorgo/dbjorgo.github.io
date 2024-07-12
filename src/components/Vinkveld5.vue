<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <img src="/oversikt5.png" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #5</p>
    <p class="text-2xl">Pinot!</p>
    <p class="text-gray-500">5. Juli 2024</p>
    <p class="my-2">Location -> Johannes.</p>
    <p class="mb-2">Etter en Spansk nedtur sist kveld ønsket vi å drikke noe virkelig godt. Pinot noir! Hvilket som helst land. Prisrange 300-500,-</p>
    <p class="mb-2">Artig nok blei det 3 forskjellige land. USA, New Zealand og England. Vinene fra USA var hhv fra Oregon og California. Me starta med å fylle alle 4 pinotene i karafler med et tall på undersiden slik ingen visste hvilken vin som blei drukket. Dette gjorde smakingen enda artigere. Vinene var veldig forskjellige og nesten alle deltagere klarte å tippe samtlige riktige!</p>
    <p class="mb-4">Deltakere er Ørjan, Daniel, Johannes og Jarle.</p>
    <p class="mb-4">Alle først startet vi med blindsmaking av en hvitvin.</p>
    <VinInfo
      imgSrc="/ebnerblackedition.png"
      name="Ebner-Ebenauer Black Edition Grüner Veltliner 2021"
      artikkelNr="15939601"
      price="510"
      grape="Grüner Veltliner 100%"
      rating="JO-89/D-91/Ø-91/JA-91"
    >Daniel+Ørjan sin blind. Litt ukjent drue som gjorde det vanskelig å komme frem til riktig. Etter å ha utelukka Riesling og kommet frem til Østerrike klarte Johannes druen. Pris blei tippa rundt 400. Fokuset gjekk meir over på å nyte denne fantastiske vinen! Virkelig god kvalitet er samtlige enige om. Skal kjøpes igjen.
      <p class="mt-1"><i>'Denne hører heime på tunga '</i> - Ørjan</p></VinInfo>
    <VinInfo
      imgSrc="/burncottage.png"
      name="Burn Cottage Moonlight Race Pinot Noir 2021"
      artikkelNr="10696401"
      price="439,9"
      grape="Pinot noir 100%"
      rating="JO-91/D-88/Ø-90/JA-91"
    >Mørk i farge. Fin lengde med litt krydder. Etter å få alle andre viner på bordet er denne minst typisk pinot. Johannes var usikker og tippa dessverre på vin 1 og 2 forståelig nok. Resten var heldige og traff.</VinInfo>

    <VinInfo
      imgSrc="/meyer.png"
      name="Meyer McLean Creek Road Vineyard Pinot Noir 2022"
      artikkelNr="7377401"
      price="449"
      grape="Pinot noir 100%"
      rating="JO-91/D-88/Ø-88/JA-91"
    >Mindre mørk enn forrige, men fremdeles mørk. Litt "svidd lukt" ble nevnt av flere. Ok lengde på denne også. Ellers lite notater fra gjengen. </VinInfo>
    <VinInfo
      imgSrc="/simpsonspinot.png"
      name="Simpsons Rabbit Hole Pinot Noir 2022"
      artikkelNr="11430801"
      price="369"
      grape="Pinot noir 100%"
      rating="JO-90/D-88/Ø-89/JA-89"
    >Denne skilte seg veldig ut. Vaniljen kunne ikke blitt tydeligere og blei litt i overkant for enkelte. Litt delte meninger om denne vinen. Hadde vi kun hatt denne vinen foran oss hadde den muligens blitt satt mer pris på. Ørjan fant blåbær som var tydelig etter at det ble nevnt.</VinInfo>
    <VinInfo
      imgSrc="/chanin2021pinot.png"
      name="Chanin Sta. Rita Hills Pinot Noir 2021"
      artikkelNr="11039301"
      price="399,90"
      grape="Pinot Noir 100%"
      rating="JO-93/D-91/Ø-91/JA-92"
    >Mye lukt. Mye lengde. Alle enige om at dette var den beste vinen. Virkelig verdt pengene.
      <p class="mt-1"><i>'Dette! No snakker vi!'</i> - Johannes</p></VinInfo>
    <VinInfo
      imgSrc="/bousquet.png"
      name="Dom. Bousquet Reserve Pinot Noir"
      artikkelNr="16656701"
      price="219,9"
      grape="Pinot Noir 100%"
    >Finner denne tilfeldigvis innimellom de dyre vinene til Johannes. Sammenlignet med Wetshof er dette veldig typisk pinot som gir mye av seg selv. Meget god kvalitet. Vi hadde lett betalt dobbelt pris for denne. Røverkjøp som er blitt glemt i skapet :D </VinInfo>
    <VinInfo
      imgSrc="/tibouren.png"
      name="Clos Cibonne Prestige Caroline Côtes de Provence Cru Classé Tibouren"
      artikkelNr="13764001"
      price="419,4"
      grape="Tibouren 90%
Grenache 10%"
    >Avsluttet med en blindsmaking fra Johannes. Hadde aldri hørt om Tibouren så hadde ikkje sjans på det. Landet klarte vi å tippe riktig. Har dessverre ikke mer notater fra denne.</VinInfo>
    <img src="/tsjekkiapinot.png" />
    <p class="my-4">Heilt på tampen testa vi denne. En vin Jarle hadde kjøpt i Tsjekka noen år siden. Han var overbevist om at den skulle være ødelagt og tenkte at den ikke var verdt å åpne. Vinen viste seg å være helt grei, men var uansett den "svakeste" pinoten for dagen uansett. </p>
    <p class="my-4">Oppsummert må det nevnes at vinmengde var heilt perfekt. Vi klarte også å gi oss i fornuftig tid :)</p>
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
