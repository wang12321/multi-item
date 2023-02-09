<template>
  <div class="iframe-div">
    <iframe
      id="bossIframe"
      :src="systemUrl"
      width="100%"
      height="100%"
      frameborder="0"
      class="iframe"
    />
  </div>
</template>

<script>
import { getProjectItem } from '@/utils/auth'

export default {
  name: 'Index',
  data() {
    return {
    }
  },
  computed: {
    systemUrl() {
      return getProjectItem().basepath
    }
  }
}
</script>
<style lang="scss" scoped>
  .iframe-div {
    height: calc(100vh - 100px);
  }

</style>
