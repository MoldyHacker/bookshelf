<template>
  <v-layout>
    <v-app-bar
      color="primary"
    >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-filter"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary>
      <!--        <v-list-->
      <!--        :items="items">-->
      <!--&lt;!&ndash;          <v-list-item title="Navigation drawer"></v-list-item>&ndash;&gt;-->
      <!--        </v-list>-->
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>

      <v-main style="min-height: 300px;">
        <router-view />
      </v-main>

    <v-bottom-navigation
      grow
      color="primary"
    >
      <v-btn
        v-for="link in bottomNavLinks"
        :key="link.to"
        :to="link.to">
        <v-icon>{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
    ],
    bottomNavLinks: [
      {
        to: '/bookmarked',
        title: 'Bookmarked',
        icon: 'mdi-bookmark-outline',
      },
      {
        to: '/collected',
        title: 'Collected',
        icon: 'mdi-bookshelf',
      },
      {
        to: '/wanted',
        title: 'Wanted',
        icon: 'mdi-bookmark-plus-outline',
      },
    ]
  }),
  // watch: {
  //   group () {
  //     this.drawer = false
  //   },
  // },
}
</script>

<style>
  .constrain {
    max-width: 800px;
    margin: auto;
  }
</style>
