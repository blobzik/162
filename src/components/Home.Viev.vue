<template>
    <div class="home">
        <input type="text" v-model="message">
        <button class="btn">Send</button>
    </div>
</template>

<script>
import HelloWord from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data() {
        return {
            message:null
        }
    },
    methods: {
        send: async () => {
            socket.emit('message', this.message)
        }
    }
}
</script>