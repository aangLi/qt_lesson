<template>
  <div>
    <ul class="thread-list">
      <thread
      />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: mapGetters(['threads', 'currentThread']),
  commponents: {
    Thread
  },
  methods: mapActions(['switchThread'])
}
</script>

<style>

</style>