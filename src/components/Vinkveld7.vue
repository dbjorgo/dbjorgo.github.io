<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <img src="/oversikt7.png" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #7</p>
    <p class="text-2xl">Valkendorf mysteryboks!</p>
    <p class="text-gray-500">18. Oktober 2024</p>
    <p class="my-2">Location -> Ørjan.</p>
    <p class="mb-2">Å bestemme seg for kva ein skal drikke er ikkje alltid lett. I kveld veit me faktisk ikkje noko som helst.</p>
    <p class="mb-2">I anledning spesialslipp fra Italia valgte vi å få en ansatt på Vinmonopolet Valkendorfsgaten til å plukke ut viner for oss.</p>
    <p class="mb-2">Den ansatte synest dette var veldig gøy og hadde ingen problemer med å ta fatt på oppgaven. Dette blir spennende!</p>
    <p class="mb-4">Deltakere er Ørjan, Daniel, Johannes, Atle og Jonny.</p>
    <p class="mb-4">Starter selvfølgelig med hvitvin som vanlig.</p>
    <img src="/oversikt_7_1.png" class="mb-4" />
    <VinInfo
      imgSrc="/rocheauxmoines2021.png"
      name="Dom. Moines Savennières Roche aux Moines 2021"
      artikkelNr="7300401"
      price="520"
      grape="Chenin Blanc 100%"
    >Først litt klaging over at enkelte ikkje liker kvitvin. Det tok ikkje mangen slurker før de plutselig likte allikevel. Kraftig lukt og bra lengde.
      Tydelig honning og bakt sitron. Kvalitetsvin!
      </VinInfo>
    <p class="my-4">De 4 neste rødvinene er fra Valken og smakes samtidig mot hverandre. Veldig fornøyd med vinene som blei plukket ut for oss!</p>
    <VinInfo
      imgSrc="/canova2021.png"
      name="Ca'Nova Barbaresco Montefico Bric Mentina 2021"
      artikkelNr="14930801"
      price="450"
      grape="Nebbiolo 100%"
    >Kveldens favoritt blandt alle. Veldig fruktig med tydelig blåbær og bringebær. Noe stengte tanninger. Barbaresco/barolo er tippet blindt her som må sies å være godkjent. Veldig synd at denne nå er utsolgt.
    </VinInfo>
    <VinInfo
      imgSrc="/Chioccioli2021.png"
      name="Chioccioli Chianti Classico Fossivento 2021"
      artikkelNr="18626001"
      grape="Sangiovese 100%"
      price="362"
    >Rangert som den "dårligste" vinen. Veldig lukket med medium pluss tanniner. Lite notater ellers. Vi klarte ikke å plassere druen på denne.
    </VinInfo>
    <VinInfo
      imgSrc="/Quintodecimo2021.png"
      name="Quintodecimo Aglianico Irpinia Terra d'Eclano"
      artikkelNr="15415101"
      grape="Aglianico 100%"
      price="650"
    >Vi var enig om at her skulle vi sørover i Italia. Sicilia og Nero'd'Avola blei nevnt under sterk tvil. Alle hadde vanilje på notatene sine og noen har nevt smør. En veldig myk og god vin som vi lett kan drikke igjen.
    </VinInfo>
    <p class="mt-1"><i>'Skal vi hente vann?'</i> - Johannes. </p>
    <p class="mt-1 mb-3"><i>'Nei'</i> - Atle.</p>
    <VinInfo
      imgSrc="/Buscemi2020.png"
      name="Buscemi Tartaraci 2020"
      artikkelNr="18625701"
      grape="Grenache, Nerello Mascalese"
      price="516"
    >Mørk, purpur, diffus. Vanskelig å tippe her. Husker at Grenache ble nevnt uten at vi konkluderte videre. Vi snitta uansett på 91 poeng på denne.
    </VinInfo>
    <img src="/oversikt_7_2.png" class="mb-3" />
    <VinInfo
      imgSrc="/Selvapiana.png"
      name="Selvapiana Chianti Rufina 2022"
      artikkelNr="3316901"
      grape="Sangiovese 94%
Canaiolo 3%
Colorino 2%
Malvasia Nera 1%"
      price="218"
    >Atle hadde med en vin på sidelinjen. Veldig mykje vin for pengene! Her tippa me alle ein høgare pris for vinen. Denne skal undertegna ihvertfall kjøpe igjen.
    </VinInfo>
    <VinInfo
      imgSrc="/gaja2021.png"
      name="Gaja Sito Moresco 2021"
      artikkelNr="16928901"
      grape="Barbera 50%, Nebbiolo 50%"
      price="580"
    >Denne kom på bordet litt seinere på kvelden. Ingen notater å vise til dessverre.
    </VinInfo>
    <p class="my-4">Vincoachen med vinneren fra Valken mystery. (iPhonen la på ein automatisk effekt. Passa perfekt :D)</p>
    <img src="/johannes_7.png" />
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
