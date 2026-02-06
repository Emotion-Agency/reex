<script setup lang="ts">
interface iMemberBlokProps {
  blok: any
}

defineProps<iMemberBlokProps>()
</script>

<template>
  <Member :member="blok" class="member-blok" />
</template>

<style lang="scss" scoped>
.member-blok {
  margin-top: vw(24);
  margin-bottom: vw(32);

  @media (max-width: $br1) {
    margin-top: 12px;
    margin-bottom: 16px;
  }
}
</style>
