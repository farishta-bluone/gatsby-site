<template>
    <v-container fluid>
        <v-row class="mt-3"><v-col class="py-0" cols="12"><v-btn @click="goBack" class="caption" text>Go Back</v-btn></v-col></v-row>
        <v-row justify="space-around" class=" mx-1">
            <!-- <v-col class="py-0" cols="12"><v-btn class="caption" text>Back</v-btn></v-col> -->
            <v-col>
                <h2>Slit Planning</h2>
            </v-col>
             <!-- <v-col cols="auto">
                <v-menu
                    ref="menu"
                    v-model="shiftDateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            dense
                            outlined
                            color="grey"
                            v-model="shiftDate"
                            placeholder="Select Shift Date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            clearable
                            @click:clear="clearSearch('date')"
                            class="body-1"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="shiftDate"
                        no-title
                        scrollable
                        @input="shiftDateMenu = false"
                        @change="setOptions"
                        :max="maxDate"
                        >
                    </v-date-picker>
                </v-menu>
            </v-col> -->
        </v-row>
        <div v-for="(item, index) in $store.state.selRows" :key="index">
            <Planning :coilData="item" />
        </div>
    </v-container>
</template>

<script>
    import Planning from '@/components/Planning';
    export default {
        components: {
            Planning
        },
        data () {
            return {
                shiftDateMenu: false,
                shiftDate: null,
                maxDate: new Date().toISOString()
            }
        },
        mounted() {
            if(this.$route.params.id) {
                this.$store.state.selRows = []
                this.$store.state.coilId = this.$route.params.id
                this.$store.dispatch('getSlits', {id: parseInt(this.$route.params.id)})
            }
            if(!this.$store.state.coilId && this.$store.state.selRows.length === 0 ) {
                this.$router.push({path: '/coils'})
            }
        },
        methods: {
            goBack() {
                this.$router.push({path: '/coils'});
            this.$store.dispatch('getCoils', {page:1, limit:10});
            },
            setOptions() {
                
            },
            clearSearch(type){
                console.log("type", type)
                this.shiftDate = null
            }
        }
    }
</script>