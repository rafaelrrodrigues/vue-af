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
                  <v-card-text>Valor : {{item.cur}} </v-card-text>

                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios"
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
  methods:{
    fetch(){
      console.log();
      axios.get('https://developers.coinbase.com/api/v2?javascript#get-currencies')
      .then(res=>{
        console.log(res.data.values)
        this.events=res.data.values})
      .catch(err=>{console.log(err)})
    },
  },
};
</script>