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
      <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
<!--          <p class="text-base font-semibold leading-7 text-indigo-600">farget </p>-->
          <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Om oss</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">En vennegjeng som er litt over snittet interessert i vin.</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Vi har tidligere hatt flere vinkvelder og fant på et tidspunkt ut at vi ville prøve å smake under litt mer organiserte forhold. Ørjan tok initiativet og startet banet vei.</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Kunnskapet kommer etterhvert, men vi har heldigvis Johannes på laget som har smakt og samlet på vin i åresvis som vi kan støtte oss på.</p>
        </div>
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <!--        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Vinkveld1 from "./Vinkveld1.vue";

const navigation = [
  { name: 'Vinsmakinger', to: 'smakinger' },
  { name: 'Om oss', to: 'om-oss' },
  { name: 'Alle smakte viner', to: 'vinoversikt' },
  { name: 'Vedtekter', to: 'vedtekter' },
]

const mobileMenuOpen1 = ref(false)
</script>
