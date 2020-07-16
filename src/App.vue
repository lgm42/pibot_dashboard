<template>
  <v-app>
    
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span class="mr-2">PIBOT</span>
      <v-spacer></v-spacer>

      <v-btn
        @click="connect()"
      >
        <span class="mr-2">Connect to broker</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="8">
            <v-card
            class="ma-3 pa-6"
            outlined
            tile
            >
              <HelloWorld/>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
            class="ma-3 pa-6"
            outlined
            tile
            >
              Plop
            </v-card>
          </v-col>
        </v-row>
        
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
  created: function() {
    
  },
  data: () => ({
    //
  }),
  methods: {
    connect () {
      this.$store.commit('connectToBroker')
    }
  }
};
</script>
