<template>
<div>
  <Navigation></Navigation>
  <div>
    <b-jumbotron header="Nexus Demo" lead="The application that demonstrates the coolest features available to Nexus!">
      <b-button variant="dark">Start the Tour!</b-button>
    </b-jumbotron>
  </div>
</div>
</template>
<script>
import Navigation from '@/components/Nav'

export default {
  name: 'home',
  methods: {

  },
  components: { Navigation }
}
</script>