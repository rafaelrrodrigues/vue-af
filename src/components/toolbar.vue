<template>
  
    <v-app-bar dark app absolute clipped-left elevation="0">
      <v-toolbar-title>MyWallet</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="$router.push('/')">
        Criptos
      </v-btn>
      <v-btn text @click="$router.push('/nfts')">
        Nfts
      </v-btn>
      <v-btn text @click="$router.push('/data')">
        Data
      </v-btn>
      <v-btn text @click="$router.push('/smart')">
        Smart
      </v-btn>
      <v-btn text @click="$router.push('/finance')">
        Finance
      </v-btn>
      
    </v-app-bar>

</template>

<script>
 
  export default {
    data: () => ({
      bars: [
        { class: '' },
        { class: '', dark: true },
        { class: 'primary', dark: true },
        { class: 'elevation-0' },
      ],
    }),
  }
</script>