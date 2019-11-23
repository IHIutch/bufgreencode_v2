<template>
  <Layout>
    <div class="lg:w-3/4">
      <h1 class="text-4xl mb-6 font-medium">Welcome</h1>
      <p class="text-xl font-light mb-4">
        The Buffalo Green Code Unified Development Ordinance Becomes Effective
        Citywide.
      </p>
      <p>
        With the Unified Development Ordinance now effective citywide, April 3,
        2017 marks the culmination of a nearly seven-year effort that involved
        thousands of community members in neighborhoods throughout our city.
        Since Mayor Byron W. Brown initially announced the Buffalo Green Code,
        on Earth Day of 2010, the effort has been a community-driven process
        aimed at ensuring the Green Code reflects the values of our residents.
        Thank you to all of you who have dedicated so much of your time and
        passion during this historic initiative!
      </p>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Layout from "~/layouts/SidebarLayout";

export default {
  name: "IndexPage",
  metaInfo: {
    title: "Welcome"
  },
  components: {
    Layout
  }
};
</script>
