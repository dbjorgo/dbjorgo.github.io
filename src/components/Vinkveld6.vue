<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <img src="/oversikt6.png" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #6</p>
    <p class="text-2xl">Nebbiolo</p>
    <p class="text-gray-500">6. September 2024</p>
    <p class="my-2">Location -> Johannes.</p>
    <p class="mb-2">Ja, selvfølgelig endte vi opp her! Favoritten til flere. Det beste av det beste. Nebbiolo hvorav noen baroloer.</p>
    <p class="mb-2">Som sist fylte vi vinene i karafler med god hjelp fra fruen i huset slik at ingen av deltakerene visste kva vin som blei drukket.</p>
    <p class="mb-4">Deltakere er Ørjan, Daniel, Johannes, Eivind og Jonny.</p>
    <p class="mb-4">Denne gangen startet vi også med blindsmaking av en hvitvin.</p>
    <VinInfo
      imgSrc="/marcobartoli.png"
      name="Marco de Bartoli Grappoli Grillo Riserva 2022"
      artikkelNr="16539201"
      price="430"
      grape="Grillo 100%"
    >Daniel sin blind. Første gang vi har hatt denne druen, så blei vanskelig å tippe. Pinot grigio nevnt. Pris blei tippa fra 300-500. Vinen falt i smak! Kjempevin.
      <p class="mt-1"><i>'Beste hvitvinen eg har smakt '</i> - Eivind</p></VinInfo>
    <img src="/kveld6terasse1.png" />
    <img src="/kveld6terasse2.png" class="mb-4" />
    <VinInfo
      imgSrc="/gatonegro.png"
      name="Gato Negro Cabernet Sauvignon 2022"
      artikkelNr="295301"
      price="110"
      grape="Cabernet Sauvignon 100%"
    >Ørjan hadde det litt morro med blindsmaking av denne i anledning navneskifte i klubben :D Druen blei spotta med ein gang. Skjønte at dette var en standard billigvin. Vinen blei ikkje drukket opp.
    </VinInfo>
    <VinInfo
      imgSrc="/malvira2009.png"
      name="Malvirà Roero Riserva Trinità 2009"
      artikkelNr="5106801"
      price="475"
      grape="Nebbiolo 100%"
    >Lys brunlig farge i kantene. Lukter deilige syrlige røde bær. Litt lett ettersmak og tanniner.
      <p class="mt-1"><i>'Denne lukta Jäger '</i> - Ørjan</p>
    </VinInfo>
    <VinInfo
      imgSrc="/sassella.png"
      name="Arpepe Sassella Stella Retica Riserva 2019"
      artikkelNr="932901"
      price="500"
      grape="Nebbiolo 100%"
    >Ungdommen i gjengen. Sitrus og markjordbær, lettere tanniner. Mørke bær også nevnt, som
      bjørnebær og solbær.</VinInfo>
    <VinInfo
      imgSrc="/rivetto2017.png"
      name="Rivetto Barolo di Serralunga d'Alba 2017"
      artikkelNr="5856301"
      price="600"
      grape="Nebbiolo 100%"
    >Undertegnedes favoritt(les: Johannes). Lett brunlig og gjennomsiktig. Deilig parfyme av kirsebær, smak av
      perfekt moden frukt med lette tanniner.
      </VinInfo>
    <VinInfo
      imgSrc="/settimo2017.png"
      name="Aurelio Settimo Barolo 2017"
      artikkelNr="5130201"
      price="500"
      grape="Nebbiolo 100%"
    >Rødbrun gjennomsiktig. Fantastisk smak. Hint av tynner, på en positiv måte.</VinInfo>
    <p class="my-4">Et slags mareritt å tolke hva folk likte best, men det var ganske spredt.</p>
    <img src="/kveld6inne1.png" class="mb-4"/>
    <VinInfo
      imgSrc="/edelvernatsch.png"
      name="Kaltern Alto Adige Edelvernatsch 2023"
      artikkelNr="17434401"
      price="185"
      grape="Schiava 100%"
    >Blindsmaking på tampen fra Jonny. Fint å avslutte med en litt lettere vin. Vi hadde ikkje sjans på druen, men landet var vi ikke i tvil på. Pristipping var +/- 80. Alle enige om bra qpr. </VinInfo>
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
