<script setup lang="ts">
import type { iMember } from '~/types/stories/home/homeTypes'

interface iMemberProps {
  member: iMember
}

defineProps<iMemberProps>()
</script>

<template>
  <div class="member">
    <CustomImage
      :src="member?.logo?.filename"
      :alt="member?.logo?.alt"
      :width="96"
      class="member__img"
    />
    <div class="member__info">
      <p class="member__name">{{ member?.name }}</p>
      <p class="member__pos">
        {{ member?.position }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.member {
  display: flex;
  align-items: center;
  gap: vw(16);
  width: fit-content;

  @media (max-width: $br1) {
    gap: 12px;
  }
}

.member__img {
  width: vw(48);
  height: vw(48);
  object-fit: cover;
  border-radius: vw(16);

  @media (max-width: $br1) {
    border-radius: 16px;
    width: 48px;
    height: 48px;
  }
}

.member__info {
  display: flex;
  flex-direction: column;
}

.member__name {
  @include text-med-p1;
}

.member__pos {
  @include text-reg-p1;
  margin-top: vw(4);
  color: var(--foreground-muted-50);

  @media (max-width: $br1) {
    margin-top: 4px;
  }
}
</style>
