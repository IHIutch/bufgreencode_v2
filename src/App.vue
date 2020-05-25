<template>
  <router-view
    :siteUrl="$static.metadata.siteUrl"
    :siteName="$static.metadata.siteName"
  />
</template>

<static-query>
query App {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
