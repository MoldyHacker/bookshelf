<template>
    <Default/>
</template>

<script setup lang="ts">
import Default from "@/layouts/default/Default.vue";
</script>

<!--<template>-->
<!--  <v-app>-->
<!--&lt;!&ndash;    <v-layout>&ndash;&gt;-->
<!--      <v-app-bar-->
<!--        color="primary"-->
<!--        promient-->
<!--      >-->
<!--        <v-app-bar-nav-icon-->
<!--          variant="text"-->
<!--          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
<!--        <v-toolbar-title>{{$route.name}}</v-toolbar-title>-->
<!--        <v-btn variant="text" icon="mdi-magnify"></v-btn>-->
<!--        <v-btn variant="text" icon="mdi-filter"></v-btn>-->
<!--        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>-->
<!--      </v-app-bar>-->

<!--      <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        temporary>-->
<!--        &lt;!&ndash;        <v-list&ndash;&gt;-->
<!--        &lt;!&ndash;        :items="items">&ndash;&gt;-->
<!--        &lt;!&ndash;&lt;!&ndash;          <v-list-item title="Navigation drawer"></v-list-item>&ndash;&gt;&ndash;&gt;-->
<!--        &lt;!&ndash;        </v-list>&ndash;&gt;-->
<!--        <v-list>-->
<!--          <v-list-item-->
<!--            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"-->
<!--            title="Sandra Adams"-->
<!--            subtitle="sandra_a88@gmailcom"-->
<!--          ></v-list-item>-->
<!--        </v-list>-->

<!--        <v-divider></v-divider>-->

<!--        <v-list density="compact" nav>-->
<!--          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>-->
<!--          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>-->
<!--          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>-->
<!--        </v-list>-->
<!--      </v-navigation-drawer>-->

<!--      <v-main style="min-height: 300px;">-->
<!--        <router-view />-->
<!--      </v-main>-->
<!--      <v-bottom-navigation-->
<!--        grow-->
<!--        color="teal"-->
<!--      >-->
<!--        <v-btn-->
<!--          v-for="link in bottomNavLinks"-->
<!--          :key="link.to"-->
<!--          :to="link.to">-->
<!--          <v-icon>{{ link.icon }}</v-icon>-->
<!--          {{ link.title }}-->
<!--        </v-btn>-->
<!--        &lt;!&ndash;        <v-btn to="/collected">&ndash;&gt;-->
<!--        &lt;!&ndash;          <v-icon>mdi-bookshelf</v-icon>&ndash;&gt;-->
<!--        &lt;!&ndash;          Collected&ndash;&gt;-->
<!--        &lt;!&ndash;        </v-btn>&ndash;&gt;-->
<!--        &lt;!&ndash;        <v-btn to="/wanted">&ndash;&gt;-->
<!--        &lt;!&ndash;          <v-icon>mdi-bookmark-plus-outline</v-icon>&ndash;&gt;-->
<!--        &lt;!&ndash;          Wanted&ndash;&gt;-->
<!--        &lt;!&ndash;        </v-btn>&ndash;&gt;-->
<!--      </v-bottom-navigation>-->
<!--&lt;!&ndash;    </v-layout>&ndash;&gt;-->
<!--  </v-app>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--export default {-->
<!--  data: () => ({-->
<!--    drawer: false,-->
<!--    group: null,-->
<!--    items: [-->
<!--      {-->
<!--        title: 'Foo',-->
<!--        value: 'foo',-->
<!--      },-->
<!--      {-->
<!--        title: 'Bar',-->
<!--        value: 'bar',-->
<!--      },-->
<!--    ],-->
<!--    bottomNavLinks: [-->
<!--      {-->
<!--        to: '/bookmarked',-->
<!--        title: 'Bookmarked',-->
<!--        icon: 'mdi-bookmark-outline',-->
<!--      },-->
<!--      {-->
<!--        to: '/collected',-->
<!--        title: 'Collected',-->
<!--        icon: 'mdi-bookshelf',-->
<!--      },-->
<!--      {-->
<!--        to: '/wanted',-->
<!--        title: 'Wanted',-->
<!--        icon: 'mdi-bookmark-plus-outline',-->
<!--      },-->
<!--    ]-->
<!--  }),-->
<!--  // watch: {-->
<!--  //   group () {-->
<!--  //     this.drawer = false-->
<!--  //   },-->
<!--  // },-->
<!--}-->
<!--</script>-->
