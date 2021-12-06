<template>
    <div>
        <v-row>
          <v-col v-for="(item, key) in allDatas" :key="key" cols="3">
            <v-card>
              <v-container>
                <v-row>
                <v-col md="10">
                  <v-card-title> {{item.name}} </v-card-title></v-col>
                    <v-col md="2">
                        <a :href="item.link" target="_blank">
                          <v-img contain :src="item.image" height="40px"></v-img>
                        </a>
                    </v-col>  
                </v-row>
                <v-row>
                  <v-card-text> {{item.purpose}} </v-card-text>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>

export default {

  computed: {
    allCripto() {
      return this.$store.state.criptos;
    },
    allDatas() {
      return this.$store.state.criptos.filter(cripto => cripto.category=="Data")
    },
  },
};
</script>


