<template>
  <div class="mx-auto max-w-2xl text-center mt-6">
    <img src="/oversikt8.png" />
    <p class="text-amber-700 uppercase font-bold mt-2">Vinkveld #8</p>
    <p class="text-2xl">Lett blanding</p>
    <p class="text-gray-500">22. November 2024</p>
    <p class="my-2">Location -> Johannes.</p>
    <p class="mb-2">Valken bistod med plukking av vin denne gangen også. I anledning Beujolais slipp valge vi 1 vin derfra. I tilleg ønska me et par viner fra Argentina og eit par fra Hellas.</p>
    <p class="mb-4">Deltakere er Ørjan, Daniel, Johannes og Jonny.</p>
    <p class="mb-4">Kvitvinen må først på bordet.</p>
    <img src="/grace_koshu2.png" class="mb-4" />
    <VinInfo
      imgSrc="/grace_koshu.png"
      name="Grace Koshu Misawa Vineyard 2021"
      artikkelNr="18643101"
      price="650"
      grape="Koshu 100%"
    >Burde kosta halve prisen. Uansett god kvalitet. Mye volum. Brukte tid på å åpne seg
      </VinInfo>
    <VinInfo
      imgSrc="/lancien2024.png"
      name="Jean-Paul Brun L'Ancien Beaujolais Nouveau 2024"
      artikkelNr="5804001"
      price="235"
      grape="Gamay 100%"
    >Ingen notat
    </VinInfo>
    <VinInfo
      imgSrc="/methimon.png"
      name="Dougos Meth'Imon L 2018"
      artikkelNr="12291901"
      grape="Limniona 100%"
      price="363"
    >Aldri testet denne druen før. Dessverre ingen notater
    </VinInfo>
    <VinInfo
      imgSrc="/magoutes2020.png"
      name="Magoutes Vineyard Xinomavro 2020"
      artikkelNr="17428601"
      grape="Xinomavro 100%"
      price="445"
    >Husker vi var veldig fornøyd med denne selv om notatet mangler.
    </VinInfo>
    <VinInfo
      imgSrc="/alpamanta2013.png"
      name="Alpamanta Estate Malbec 2013"
      artikkelNr="15814001"
      grape="Malbec 100%"
      price="315"
    >Husker vi var veldig fornøyd med denne selv om notater mangler.
    </VinInfo>
    <VinInfo
      imgSrc="/kaiken2022.png"
      name="Kaiken Ultra Pinot Noir 2022"
      artikkelNr="14209901"
      grape="Pinot noir 100%"
      price="240"
    >Ingen notater.
    </VinInfo>
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
