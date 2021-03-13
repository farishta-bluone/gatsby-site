<template>
    <v-navigation-drawer
        v-if="$store.state.slittedDrawer"
        v-model="$store.state.slittedDrawer"
        temporary
        right
        width="420"  
        style="position:fixed; top:0; right:0; overflow-y:scroll; z-index:101"
        >
            <div class="subtitle-1 font-weight-bold px-4 py-2">
                <span>{{ $store.state.coilId ? 'Edit Slitted Coil' : 'Add Slitted Coil'}}</span>
                <v-icon
                    class="float-right"
                    @click="close"
                >
                    mdi-close-circle
                </v-icon>
            </div>
            <v-divider />
            <v-container>
                <v-row class="px-4">
                    <v-col cols="12">
                        <p class="body-1 font-weight-bold mb-1">Parent Coil:</p>
                    </v-col>
                    <!-- <v-col cols="6" class="text-right pb-5">
                        <v-btn dark small @click="addSlits">Add Slits</v-btn>
                    </v-col> -->
                    <v-col cols="6" class="py-0">
                        <v-combobox
                            v-model.trim="selCompany"
                            :items="$store.state.companies"
                            item-text="name"
                            label="Company"
                            outlined
                            color="grey"
                            dense
                            :return-object='false'
                            @change="changeCompany"
                        />
                    </v-col>
                    <v-col cols="6" class="py-0">
                        <v-menu
                            ref="menu"
                            v-model="dateMenu"
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
                                    v-model="selDate"
                                    placeholder="Select Date"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    clearable
                                    class="body-1"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="selDate"
                                no-title
                                scrollable
                                @input="dateMenu = false"
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col class="py-0 my-0" cols="6">
                        <v-select
                            outlined
                            dense
                            v-model="data.shift"
                            :items="$store.state.shifts"
                            label="Select Shift"
                            item-text="name"
                            item-value="id"
                            color="grey"
                            
                        ></v-select>
                    </v-col>
                <v-col cols="6" class="py-0">
                    <v-text-field
                        v-model="data.brand_no"
                        outlined
                        label="Parent Coil ID"
                        color="grey"
                        dense
                    />
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-combobox
                        v-model.number="selThickness"
                        :items="$store.state.thicknessList"
                        item-text="value"
                        label="Thickness (mm)"
                        outlined
                        color="grey"
                        dense
                        :return-object='false'
                        @change="changeThickness"
                        type="number"
                    />
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-text-field
                        v-model.number="data.width"
                        label="Width (mm)"
                        outlined
                        dense
                        color="grey"
                        type="number"
                        readonly
                        hint="This field will be auto filled"
                    />
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-text-field
                        v-model.number="data.weight"
                        label="Weight (kg)"
                        outlined
                        dense
                        color="grey"
                        type="number"
                        readonly
                        hint="This field will be auto filled"
                    />
                </v-col>
                <v-col cols="6" class="text-right">
                        <v-btn dark small @click="addSlits">Add Slits</v-btn>
                    </v-col>
                <!-- <v-col cols="6" class="py-0">
                    <v-text-field
                    v-model.number="data.formulated_weight"
                    label="Formulated Wt (kg)"
                    outlined
                    dense
                    color="grey"
                    type="number"
                    />
                </v-col> -->
                </v-row>
                <v-row v-if="slits.length > 0"><v-divider class="py-3" /></v-row>
                <v-row class="px-4" v-for="(item) in slits" :key="item.id">
                    <v-col  cols="3" class="py-0">
                        <v-text-field
                            v-model="item.slit_no"
                            label="Coil No"
                            outlined
                            dense
                            color="grey"
                        />
                    </v-col>
                    <v-col class="py-0" cols="4">
                        <v-text-field
                        v-model="item.slitted_weight"
                        label="Weight (kg)"
                        outlined
                        dense
                        color="grey"
                        type="number"
                        
                        />
                    </v-col>
                    <v-col  class="py-0" cols="4">
                        <v-text-field
                        v-model="item.slitted_width"
                        label="Width (mm)"
                        outlined
                        dense
                        color="grey"
                        type="number"
                        
                        />
                    </v-col>
                    <v-col cols="1">
                        <v-icon
                            class="float-right"
                            @click="deleteSlit(item.id)"
                            small
                        >
                            mdi-close-thick
                        </v-icon>
                    </v-col>
                </v-row>
            </v-container>
        <v-divider />
        <div class="ma-4 mt-8 float-right">
            <v-btn
                class="mr-2"
                outlined
                @click= "close"
            >
                Cancel
            </v-btn>
            <v-btn
                @click= "addCoil"
                :dark="!haltSave && validateForm"
                :disabled="haltSave || !validateForm"
            >
                Save
            </v-btn>
        </div>
    </v-navigation-drawer>
</template>

<script>
    import coils from '@/services/coils';
    import companies from '@/services/companies';
    import thicknesses from '@/services/thicknesses';
    export default {
        name: 'AddCoil',
        data () {
            return {
                count: 0,
                slits: [],
                selCompany: '',
                data: {},
                dateMenu: false,
                selDate: null,
                selThickness: null
            }
        },
        computed: {
            validateForm() {
                if(this.selCompany && this.selDate && this.data.brand_no && this.selThickness && this.data.width && this.data.weight)
                    return true
                    else return false
            },
            haltSave() {
                let flag = false;
                if(this.slits.length > 0) {
                    for(let i=0 ; i < this.slits.length ; i++) {
                        if(!this.slits[i].slit_no || !this.slits[i].slitted_weight || !this.slits[i].slitted_width) {
                            flag = true
                            break
                        }
                    }
                    return flag
                } else {
                    return true
                }
            },
        },
        watch:{
            slits: {
                deep: true,
                handler() {
                    let width = 0
                    let weight = 0
                    if(this.slits.length > 0) {
                        this.slits.map(slit => {
                            if(!slit.slitted_width) slit.slitted_width = 0
                            if(!slit.slitted_weight) slit.slitted_weight = 0
                            width = parseFloat(width) + parseFloat(slit.slitted_width)
                            weight = parseFloat(weight) + parseFloat(slit.slitted_weight)
                        })
                        this.data.width = width
                        this.data.weight = weight
                    } else {
                        this.data.width = 0
                        this.data.weight = 0
                    }
                }   
            }
        },
        methods: {
            deleteSlit(id) {
                let index = this.slits.findIndex(item => item.id == id)
                this.slits.splice(index,1)
            },
            addSlits() {
                this.count++;
                this.slits.push({id: this.count, slit_no: '', slitted_weight: '', slitted_width: ''})
            },
            changeThickness(name) {
                let index = this.$store.state.thicknessList.findIndex(item => (item.value == name))
                if(index < 0 && name.trim().length > 0) {
                    this.addThickness(name.trim())
                }
            },
            changeCompany(name) {
                let index = this.$store.state.companies.findIndex(item => (item.name.trim()).toLowerCase() == name.trim().toLowerCase())
                if(index < 0 && name.trim().length > 0) {
                    this.addCompany(name.trim())
                }
            },
            async addThickness(name) {
                try {
                const result = await thicknesses.add({value: parseFloat(name)})
                console.log("result", result);
                } 
                catch (error) {
                console.log("error",error)
                }
                finally {
                this.$store.dispatch('getThicknesses')
                }
            },
            async addCompany(company){
                try {
                const result = await companies.add({name: company})
                console.log("result", result);
                } 
                catch (error) {
                console.log("error",error)
                }
                finally {
                this.$store.dispatch('getCompanies')
                }
            },
            async addCoil(){
                let calendarDate = this.$options.filters.calendarDate(new Date().toISOString())
                this.data.formulated_weight = this.data.weight;
                this.data.thickness = this.selThickness;
                this.data.status = "slitted"
                if(this.selCompany) {
                    let result = this.$store.state.companies.find(item => item.name.trim() == this.selCompany.trim())
                    this.data.company = result.id
                }
            
                this.data.date = `${this.selDate}`
                this.data.created_at = calendarDate
                try {
                    this.$store.state.slittedDrawer = false
                    this.$store.state.isLoading = true
                    const result = await coils.add(this.data)
                    let createdCoil = result.data.coil;
                    if(createdCoil) this.saveSlits(createdCoil.id)
                } 
                catch (error) {
                    console.log("error",error)
                }
                finally {
                    this.$store.state.isLoading = false
                    this.$store.dispatch('getCoils', {page:1, limit:10});
                }
            
            },
            async saveSlits(parent_id) {
                let data = {}
                let calendarDate = this.$options.filters.calendarDate(new Date().toISOString())
                data.status = "slitted"
                data.slit_date = calendarDate;
                data.slit_shift = this.data.shift;
                data.slittedItems = [...this.slits];
                data.slittedItems.map(item => {
                    item.status = 'slitted'
                    item.is_avilable = true
                    item.created_at = calendarDate
                    item.updated_at = calendarDate;
                    item.actual_weight = item.slitted_weight
                    item.actual_width = item.slitted_width
                    item.parent_id = parent_id
                })

                try {
                    const result = await coils.addSlits(parent_id, data)
                    this.savedData = result.data[0];
                } 
                catch (error) {
                    console.log("error",error)
                }
                finally {
                    this.$store.state.coilDrawer = false
                }
            },
            close() {
                this.$store.state.slittedDrawer = false
            }
        }
    }
</script>