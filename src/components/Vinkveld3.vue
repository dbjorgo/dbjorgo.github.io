<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #3</p>
    <p class="text-2xl">En spontan terassekveld</p>
    <p class="text-gray-500">18. mai 2024</p>
    <p class="my-2">Vinkveld nummer 2!</p>
    <p class="mb-2">Daniel ruslet ned til Ørjan for å ta et par glass. Det endte med å åpne noen flasker.</p>
    <p class="mb-4">Deltakere er Ørjan, Daniel og litt Marthe.</p>
    <VinInfo
      imgSrc="/LagardeBesada.png"
      name="Lagar de Besada Albariño 2021"
      artikkelNr="12992502"
      price="90,6"
      grape="Albariño 100%"
      rating="Rating: 85/85"
    >Heilt grei vin. Ganske anonym med lite lukt og fremtredende smaker. Vi fant litt nektarin.</VinInfo>
    <VinInfo
      imgSrc="/rosaura.png"
      name="Rosaura 2022"
      artikkel-nr="3311501"
      price="155,9"
      grape="Aglianico 100%"
    >Marthe synest den var veldig tørr. Mer tørr for hver slurk.
      Lite lukt generelt. Vanskelig å få smaken ut, men mer sitrus etterhvert som den stod</VinInfo>
    <VinInfo
      imgSrc="/Saladini.png"
      artikkel-nr="4446501"
      name="Saladini Pilastri Rosso Piceno 2022"
      price="157,9"
      rating="Rating: 85/85"
      grape="Montepulciano 30%
Sangiovese 70%"
    >Deilig drikkevin. Medium minus lukt. Kirsebær. Sikkert en bra pizzavin.
    </VinInfo>
    <VinInfo
      imgSrc="/marques.png"
      artikkel-nr="137201"
      name="Marqués de Cáceres Crianza 2020"
      price="144,9"
      grape="Graciano (Bovale) 5%
Garnacha 10%
Tempranillo (Tinto del Pais) 85%"
    >Denne ble åpnet slik at Marthe skulle få smake forskjell mot neste vin. Ho likte denne best. Saftig og god vin. Finner litt fat baki der.
    </VinInfo>
    <VinInfo
      imgSrc="/montecillo1981.png"
      artikkel-nr="3270301"
      name="Montecillo Gran Reserva Especial 1981"
      price="500"
      grape="Tempranillo 100%"
    >Så til rosinen i pølsa! Som smakte litt rosiner i dag også. Dette er 4 flasken. De 2 første hos Johannes var meget. Nummer 3 hos meg gjekk i vasken, men denne var akkurat innafor, kanskje litt over.
      Lite frukt og snerp igjen her men mange deilige høstsmaker. Etter litt googling fant vi ut at i 1981 ble blandt annet Metallica stifta. Denne blir fra nå av referert til som Metallicavinen.
    </VinInfo>
    <p>Grunnet null fokus på å ta bilder denne kvelden følger et bilde av en meget fornøyd grunnlegger Ørjan. Det ryktes om hole in one</p>
    <img src="/founder1.jpg" />

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