<template>
    <div>
        <v-row>
          <v-col v-for="(item, key) in allCripto" :key="key" cols="3">
         
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
                <v-row>
                  <v-col md="4">
                    <v-card-text>Valor : {{item.cur}} </v-card-text>
                  </v-col>
                  <v-col md="8">
                  <v-card-text>Conversão : {{item.conv}} </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
  
  data(){
    return{
      events: null,
    }
  },
  
  computed: {
    allCripto() {
      return this.$store.state.criptos;
    },
  },

  async created() {
    await this.$store.dispatch("fetch");
  },
};
</script>