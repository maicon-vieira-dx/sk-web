<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <v-app :theme="$theme.isDark.value ? 'dark' : 'light'">
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>
