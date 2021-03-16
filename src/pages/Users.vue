<template>
  <v-container>
    <v-row justify="space-between" class="my-3">
      <v-col cols="auto">
        <h2 class="font-weight-bold">Users</h2>
      </v-col>
      <v-col cols="auto" class="text-right">
        <v-btn dark class="mr-1 body-2 font-weight-bold" @click="openForm"
          >Add User</v-btn
        >
      </v-col>
      <v-col cols="12" class="caption red--text">{{ errorMsg }}</v-col>
    </v-row>
    <v-row>
      <v-dialog v-model="dialog" max-width="600px" class="py-5">
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
            <p class="body-1 font-weight-bold">{{ formTitle }}</p>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    color="grey"
                    dense
                    v-model="name"
                    label="User Name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto" class="py-0">
                  <v-radio-group v-model="userRole" row dense>
                    <span class="mr-3 grey--text text--darken-2"
                      >User Role</span
                    >
                    <v-radio
                      label="Admin"
                      value="admin"
                      color="grey darken-3"
                    ></v-radio>
                    <v-radio
                      label="Member"
                      value="member"
                      color="grey darken-3"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="body-1">User Access</v-col>
                <v-col cols="auto" class="body-2 pr-0 py-0">
                  <v-checkbox
                    color="grey darken-3"
                    dense
                    v-model="userAccess"
                    label="HR Stock"
                    value="hr_stock"
                    hide-details
                    class="ma-0 pa-0 body-2"
                  ></v-checkbox>
                </v-col>
                <v-col cols="auto" class="pr-0 py-0">
                  <v-checkbox
                    class="ma-0 pa-0"
                    color="grey darken-3"
                    dense
                    v-model="userAccess"
                    label="Slits Stock"
                    value="slits_stock"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="auto" class="pr-0 py-0">
                  <v-checkbox
                    class="ma-0 pa-0"
                    color="grey darken-3"
                    dense
                    v-model="userAccess"
                    label="Slits Preview"
                    value="slits_preview"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="auto" class="pr-0 py-0">
                  <v-checkbox
                    class="ma-0 pa-0"
                    color="grey darken-3"
                    dense
                    v-model="userAccess"
                    label="User Creation"
                    value="users"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions class="pb-5 mt-4">
            <v-spacer></v-spacer>
            <v-btn outlined text @click="dialog = false"> Cancel </v-btn>
            <v-btn
              :dark="name.length > 0"
              :disabled="name.length <= 0"
              @click="addUpdateUser"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="$store.state.users"
      hide-default-footer
      class="elevation-1 coils mt-3"
      :loading="$store.state.isLoading"
      fixed-header
      height="calc(100vh - 210px)"
      disable-pagination
    >
      <template v-slot:[`item.access`]="{ item }">
        <p class="my-1">HR Stock: {{ item.access.hr_stock ? "Yes" : "No" }}</p>
        <p class="my-0">
          Slits Stock: {{ item.access.slits_stock ? "Yes" : "No" }}
        </p>
        <p class="py-0 my-1">
          Slits Preview: {{ item.access.slits_preview ? "Yes" : "No" }}
        </p>
        <p class="py-0 my-1">Users: {{ item.access.users ? "Yes" : "No" }}</p>
      </template>
      <template v-slot:[`item.role`]="{ item }">
        <div class="text-capitalize">{{ item.role }}</div>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import users from "@/services/users";
export default {
  components: {},
  data() {
    return {
      pwd: null,
      userRole: null,
      userAccess: [],
      errorMsg: "",
      editedIndex: -1,
      dialog: false,
      actionsList: [
        { icon: "mdi-plus-circle", text: "add" },
        { icon: "mdi-pencil", text: "edit" },
        { icon: "mdi-delete", text: "delete" },
      ],
      name: "",
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        { text: "Name", value: "name", sortable: false },
        { text: "Role", value: "role", sortable: false },
        { text: "Access", value: "access", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    let access = JSON.parse(localStorage.getItem("user")).access;
    if (access && access.users) this.$store.dispatch("getUsers");
    else this.$router.push({ name: "forbidden" });
  },
  watch: {},
  computed: {
    formTitle() {
      return this.editedIndex <= 0 ? "Add User" : "Edit User";
    },
  },
  methods: {
    openForm() {
      this.editedIndex = 0;
      this.dialog = true;
      this.name = "";
      this.userAccess = [];
      this.userRole = null;
      this.pwd = null;
    },
    async deleteItem(id) {
      try {
        const result = await users.delete(id);
        console.log("result", result.data);
      } catch (error) {
        if (error.response.data) {
          this.errorMsg = error.response.data;
          setTimeout(() => {
            this.errorMsg = "";
          }, 5000);
        }
      } finally {
        this.$store.dispatch("getUsers");
      }
    },
    editItem(item) {
      this.userRole = item.role;
      this.pwd = item.pwd;
      this.userAccess = [];
      for (const [key, value] of Object.entries(item.access)) {
        if (value) this.userAccess.push(key);
      }
      this.dialog = true;
      this.editedIndex = item.id;
      this.name = item.name;
    },
    async addUpdateUser() {
      let access = {
        hr_stock: this.userAccess.includes("hr_stock"),
        slits_stock: this.userAccess.includes("slits_stock"),
        slits_preview: this.userAccess.includes("slits_preview"),
        users: this.userAccess.includes("users"),
      };
      if (this.editedIndex > 0) {
        try {
          const result = await users.update(this.editedIndex, {
            name: this.name,
            pwd: this.pwd,
            access: JSON.stringify(access),
            role: this.userRole,
          });
          console.log("result", result);
        } catch (error) {
          console.log("error", error);
        } finally {
          this.dialog = false;
          // this.$store.dispatch('getUsers', {id: this.editedIndex})
          this.$store.dispatch("getUsers");
        }
      } else {
        try {
          const result = await users.add({
            name: this.name,
            pwd: "test123",
            access: JSON.stringify(access),
            role: this.userRole,
          });
          console.log("result", result);
        } catch (error) {
          console.log("error", error);
        } finally {
          this.dialog = false;
          this.$store.dispatch("getUsers");
        }
      }
    },
  },
};
</script>


<style>
.v-data-table.coils > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 16px !important;
  color: black !important;
}
.v-data-table.coils > .v-data-table__wrapper > table > tbody > tr > td {
  /* padding: 10px 10px ; */
}
</style>