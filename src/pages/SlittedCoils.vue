<template>
    <v-container>
        <h2 class="my-5 mx-3">Slit Selection</h2>
        <div v-for="(item, index) in $store.state.selRows" :key="index">
            <SlittedCoil :coilData="item" />
        </div>
    </v-container>
</template>

<script>
    import SlittedCoil from '@/components/SlittedCoil';
    export default {
        components: {
            SlittedCoil
        },
        data () {
            return {
            }
        },
        mounted() {
            // console.log("Check this", this.$store.state.selRows)
        }
    }
</script>