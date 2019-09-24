<template>
  <router-view :siteUrl="$static.metadata.siteUrl" />
</template>

<static-query>
query App {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>
