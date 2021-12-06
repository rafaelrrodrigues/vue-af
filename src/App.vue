<template>
  <v-app>
  <toolbar>
  </toolbar>
  
  <v-navigation-drawer app clipped>
  
      <v-list>
        <v-list-item-group>
          
          <v-list-item
            Criptos
            @click="$router.push('/')"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'Cripto'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            Criptos
            @click="$router.push('/nfts')"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'NFTs-games-Metaverse'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            Criptos
            @click="$router.push('/data')"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'Data'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            Criptos
            @click="$router.push('/smart')"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'Smart Contracts'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            Criptos
            @click="$router.push('/finance')"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'Decentralized finance'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>

  </v-navigation-drawer>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>

import toolbar from '@/components/toolbar.vue'

export default {
  name: 'App',
  components: {
    toolbar
  },
  data: () => ({
    //
  }),
};
</script>
