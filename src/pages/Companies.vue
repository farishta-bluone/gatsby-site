<template>
    <v-container>
        
        <v-row justify="space-between" class="my-3"> 
            <v-col cols="auto">
                <h2 class=" font-weight-bold">Companies</h2>
            </v-col>
            <v-col cols="auto" class="text-right">
                <v-btn dark   class=" mr-1 body-2 font-weight-bold" @click="openForm">Add Company</v-btn>
            </v-col>
            <v-col cols="12" class="caption red--text">{{errorMsg}}</v-col>
            
        </v-row>
        <v-row>
            <v-dialog
          v-model="dialog"
          max-width="500px"
          class="py-5"
        >
          <!-- <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template> -->
          <v-card>
            <v-card-title>
              <p class="body-1 font-weight-bold">{{formTitle}}</p>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                        color="grey"
                        dense
                        v-model="name"
                        label="Company Name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions class="pb-5">
              <v-spacer></v-spacer>
              <v-btn
                outlined
                text
                @click="dialog=false"
              >
                Cancel
              </v-btn>
              <v-btn
                :dark="name.length > 0"
                :disabled="name.length <= 0"
                @click="addUpdateCompany"
               
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="$store.state.companies"
            hide-default-footer
            class="elevation-1 coils mt-3"
            :loading="$store.state.isLoading"
            fixed-header
            height="calc(100vh - 210px)"
            disable-pagination
        >
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item.id)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import companies from '@/services/companies';
    export default {
        components: {
           
        },
        data () {
            return {
                errorMsg: '',
                editedIndex: -1,
                dialog: false,
                actionsList: [{icon:'mdi-plus-circle', text: 'add'}, {icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-delete', text: 'delete'}],
                name: '',
                headers: [
                {
                    text: 'ID',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Company', value: 'name', sortable: false, },
                { text: 'Actions', value: 'actions', sortable: false, }],
       
            }
        },
        mounted() {
            this.$store.dispatch('getCompanies');
        },
        watch: {
            
        },
        computed: {
           formTitle () {
                return this.editedIndex <= 0 ? 'New Company' : 'Edit Company'
            },
           
        },
        methods: {
            openForm() {
                this.editedIndex = 0
                this.dialog = true
                this.name = ''
            },
            async deleteItem(id){
                try {
                    const result = await companies.delete(id);
                    console.log("result", result.data);
                } 
                catch (error) {
                    if(error.response.data) {
                        this.errorMsg = error.response.data
                        setTimeout(() => {
                            this.errorMsg = ''
                        }, 5000)
                        
                    }
                }
                finally { 
                        this.$store.dispatch('getCompanies')
                    }
            },
            editItem(item){
                this.dialog = true
                this.editedIndex = item.id
                this.name = item.name
            },
            async addUpdateCompany(){
                console.log(this.editedIndex,typeof(this.editedIndex), this.name)
                if(this.editedIndex > 0) {
                    try {
                    const result = await companies.update(this.editedIndex, {name: this.name});
                    console.log("result", result);
                    } catch (error) {
                    console.log("error",error)
                    }
                    finally {
                        this.dialog = false
                        this.$store.dispatch('getCompanies')
                    }
                }
                else {
                    try {
                    const result = await companies.add({name: this.name})
                    console.log("result", result);
                    } 
                    catch (error) {
                    console.log("error",error)
                    }
                    finally {
                        this.dialog = false
                        this.$store.dispatch('getCompanies')
                    }
                }
                
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
  /* padding: 10px 10px ; */
}

</style>