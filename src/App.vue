<template>
  <router-view />
</template>

<static-query>
query App {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>
