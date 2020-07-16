import Vue from 'vue'
import Vuex from 'vuex'
import Paho from 'paho-mqtt'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mqttBroker : null
  },
  mutations: {
    connectToBroker: state => {
      console.log("ok")
      state.mqttBroker = new Paho.Client("127.0.0.1", Number(9001), "dashboard")

      state.mqttBroker.onConnectionLost = function (responseObject) {
        if (responseObject.errorCode !== 0) {
          console.log("onConnectionLost:"+responseObject.errorMessage)
        }
      }

      state.mqttBroker.onMessageArrived = function (message) {
        console.log("onMessageArrived:"+message.payloadString)
      };

      state.mqttBroker.connect({onSuccess: function() {
        // called when the client connects
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        state.mqttBroker.subscribe("World");
        let message = new Paho.Message("Hello");
        message.destinationName = "World";
        state.mqttBroker.send(message);
      }});
    }
  },
  actions: {
  },
  modules: {
  }
})
