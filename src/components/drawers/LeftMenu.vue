<template>
  <v-card>
    <v-navigation-drawer
    v-model="$store.state.menu"
    permanent
    :mini-variant.sync="$store.state.miniMenu"
    dark
    width="240"  
    style="position:fixed; top:60px; right:0; z-index: 10;"
    >
      <!-- <v-list class="" dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}
                
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
      </v-list> -->

      <v-list dense>
      <v-list-group
        v-for="item in settings"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        :to="item.link"
        color="grey lighten-4"
      >
      
        <template v-slot:activator>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}
                
            </v-icon>
          </v-list-item-icon> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-show="item.items"
          v-for="child in item.items"
          :key="child.title"
          :to="child.link"
        >
          <v-list-item-icon>
            <v-icon>{{ child.icon }}
                
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
         
        menuItems: [{ title: 'Dashboard', icon: 'mdi-newspaper-variant-outline', link: '/dashboard' },
            { title: 'Hot Rolled', icon: 'mdi-paper-roll', link: '/coils' },
        ],
        settings: [
            // { title: 'Dashboard', action: 'mdi-newspaper-variant-outline', link: '/dashboard' },
        {
          action: 'mdi-paper-roll',
          items: [{ title: 'HR Stock', icon: 'mdi-paper-roll', link: '/coils' },
          { title: 'Slits Preview', icon: 'mdi-view-grid', link: '/slits-preview' },
          { title: 'Slits Stock', icon: 'mdi-rollupjs', link: '/' }],
          title: 'Hot Rolled',
        },
        
        {
          action: 'mdi-office-building',
          link: '/companies',
          items: [{ title: 'Lists',icon: 'mdi-view-list', link: '/companies' }],
          title: 'Companies',
        },
      ],
      }
    },
    computed: {
     
      
    }
  }
</script>