<template>
    <v-container fluid>
        <v-row justify="space-between" class="my-3"> 
            <v-col cols="auto">
                <h2 class=" font-weight-bold">Rolling Process</h2>
            </v-col>
            
            <v-col cols="auto" class="pb-0">
                <v-row justify="end">
                   <!-- <v-col
                        class="d-flex"
                        cols="auto"
                    >
                        <v-select
                            outlined
                            dense
                            v-model.number="selThickness"
                            :items="$store.state.thicknessList"
                            label="Select Thickness"
                            item-text="value"
                            item-value="value"
                            color="grey"
                            @input="setOptions"
                            clearable
                            @click:clear="clearSearch('thickness')"
                            class="select-box"
                        ></v-select>
                    </v-col> -->
                    <v-col cols="auto">
                        <v-menu
                            ref="menu"
                            v-model="addedFromMenu"
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
                                    v-model="addedFrom"
                                    placeholder="Select Date"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    clearable
                                    @click:clear="clearSearch('date')"
                                    class="body-1"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="addedFrom"
                                no-title
                                scrollable
                                @input="addedFromMenu = false"
                                @change="setOptions"
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-data-table 
            v-model="$store.state.selRows"
            :headers="headers"
            :items="$store.state.slittedCoils"
            item-key="ID"
            class="elevation-1 coils"
            :loading="$store.state.isLoading"
            disable-pagination
            fixed-header
            height="calc(100vh - 190px)"
            hide-default-footer
        >
            <template v-slot:[`item.rolling_date`]="{item}">
                <div class="body-2"> 
                    <span>{{ item.rolling_date ? $options.filters.formatDate(item.rolling_date) : '---'}}</span>
                </div>
            </template>
            <template v-slot:[`item.status`]="{item}">
                <div class="body-2"> 
                    <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status }}</span>
                </div>
            </template>
            <template v-slot:[`item.rolling_shift`]="{item}">
                <div class="body-2"> 
                    <span class="text-capitalize">{{ getShiftName(item.rolling_shift) }}</span>
                </div>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <v-row align="center">
                    <v-col v-if="item.status === 'in-process for rolling'" @click="editPlanning(item)" cols="12" :class="checkRole('member')? 'pb-0' : ''"><v-btn small outlined class="caption">Edit Rolling Planning</v-btn></v-col>
                    <v-col v-if="checkRole('member') && item.status === 'in-process for rolling'" @click="processCoil(item)" cols="12"><v-btn small outlined class="caption">View & Process</v-btn></v-col>
                    <v-col v-if="checkRole('admin') && item.status === 'approve for rolling'" @click="processCoil(item)" cols="12"><v-btn small outlined class="caption">Mark Complete</v-btn></v-col>
                </v-row>
        </template>
        </v-data-table>
        <v-row>
            <RollingPlanning v-if="$store.state.rolling.dialog"/>
            <RollingPreview v-if="$store.state.rolling.preview"/>
        </v-row>
    </v-container>
</template>

<script>
    import RollingPlanning from '@/components/RollingPlanning';
    import RollingPreview from '@/components/drawers/RollingPreview';
    export default {
        components: {
            RollingPlanning,
            RollingPreview
        },
        data () {
            return {
                selDate: null,
                dateMenu: false,
                data: [],
                selThickness: '',
                selRows: [],
                singleSelect: false,
                options: {},
                sortBy: '',
                orderBy: 'desc',
                selStatus: null,
                addedFromMenu: false,
                addedFrom: null,
                headers: [
                {
                    text: 'Coil No',
                    align: 'start',
                    value: 'slit_no',
                    sortable: false,
                    width:"10%"
                },
                { text: 'Thickness (mm)', value: 'pickled_thickness', sortable: false, width:"15%"},
                { text: 'Weight (kg)', value: 'pickled_weight', sortable: false, width:"10%" },
                { text: 'Width (mm)', value: 'pickled_width', sortable: false, width:"10%" },
                { text: 'Final Thickness', value: 'rolling_thickness', sortable: false,width:"10%" },
                { text: 'Rolling Date', value: 'rolling_date', sortable: false,width:"15%" },
                { text: 'Rolling Shift', value: 'rolling_shift', width:"10%" },
                { text: 'Status', value: 'status', sortable: false, width:"10%"},
                { text: 'Actions', value: 'actions', sortable: false,align: 'end', width:"10%" }],
       
            }
        },
        mounted() {
            this.$store.state.selRows = []
            this.$store.dispatch('getShifts')
            this.$store.dispatch('getThicknesses')
            this.$store.dispatch('getSlittedCoils', {status: 'in-process for rolling,approve for rolling'});  
        },
        watch: {
            options: {
                handler (newVal) {
                const { sortBy, sortDesc } = newVal
                if (sortBy.length === 1 && sortDesc.length === 1) {
                if(sortDesc[0] == true) this.orderBy = 'desc'
                else this.orderBy = 'asc'
                this.sortBy = sortBy[0]
                }
                this.searchData()
                },
                deep: true,
            },
        },
        methods: {
            processCoil(item) {
                this.$store.state.slitId = item.ID
                this.$store.state.rolling.preview = true
            },
            checkRole(role_name) {
                let user = JSON.parse(localStorage.getItem('user'))
                if(user && user.role == role_name) return true
                else return false 
            },
            getShiftName(shift) {
                if(shift === 1) return 'Day Shift'
                else if(shift === 2) return 'Night Shift'
                else return '24 Hour Shift'
            },
            editPlanning(item) {
                console.log("Called",item)
                let date = this.$options.filters.calendarDate(item.rolling_date).split(" ");
                // state.slittedDate = date[0];
                item.rolling_date = date[0]
                item.dateMenu = false
                this.$store.state.rolling.selRows = [item];
                this.$store.state.rolling.dialog = true  
            },
            setOptions() {
                this.searchData()
            },
            getTextColor(type) {
                let color = ''
                switch(type) {
                    case 'slitted': 
                    color = 'grey--text text--darken-1'
                    break
                    case 'available': 
                    color = 'green--text text--darken-2'
                    break
                    case 'edit-required': 
                    color = 'red--text text--lighten-1'
                    break 
                    default :
                    color = 'yellow--text text--darken-4'
                    break
                }
                return color
            },
            clearSearch(type) {
               if(type === 'date') this.addedFrom = null
               else if(type === 'status') this.selStatus = null
               else if(type === 'company') this.selCompany = null
               else if(type === 'thickness') this.selThickness = null
               this.setOptions() 
            },
            searchData() {
                let payload = { status: "in-process for rolling,approve for rolling"}
                if(this.addedFrom) payload.rolling_date = this.addedFrom
                if(this.selThickness) payload.rolling_thickness = this.selThickness
                this.$store.dispatch('getSlittedCoils', payload);
            }
        }
    }
</script>


<style>
.v-data-table.coils>.v-data-table__wrapper>table>thead>tr>th {
  font-size: 16px !important;
  color: black !important;
}
.v-data-table.coils>.v-data-table__wrapper>table>tbody>tr>td {
  padding: 10px 15px ;
}
.customize-list .v-list-item {
  min-height: 33px !important;
}
.search-list {
        color: grey !important; 
        padding-top: 18px !important; 
        padding-bottom: 20px !important;
    }
    .select-box.v-text-field.v-text-field--enclosed{
        max-width: 200px;
    }
</style>