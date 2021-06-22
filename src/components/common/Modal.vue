<template>
  <div v-if="false" class="Modal">
    <div class="dim"></div>
    <div class="modal-cont">
      <div class="modal-header">
        <slot name="header">
          기본 모달 header
        </slot>
      </div>
      <div class="modal-body">
        <slot name="body">
          기본 모달 container
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
