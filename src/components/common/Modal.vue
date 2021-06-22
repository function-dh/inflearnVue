<template>
  <div v-if="isModal" class="Modal">
    <div class="dim" @click="toggleModal"></div>
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
import { mapState, mapMutations } from 'vuex'

export default {
  computed : {
    ...mapState('modal', ['isModal']),
  },
  methods: {
    ...mapMutations('modal', ['toggleModal'])
  },
}
</script>

<style lang="scss" scoped>
  .Modal{
    position: relative;
    .dim{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #000;
      opacity: 0.3;
      z-index: 100;
    }
    .modal-cont{
      position: fixed;
      top: 50%;
      left: 50%;
      width: calc(100% - 32px);
      padding: 24px;
      text-align: center;
      transform: translate(-50%, -50%);
      background: #fff;
      z-index: 101;
      .modal-header{
        padding: 12px 0;
        color: $POINT;
      }
      .modal-body{
        padding: 12px 0;
        .emoji{
          font-style: normal;
          line-height: 1;
          vertical-align: baseline;
        }
      }
    }
  }
</style>
