<script lang="ts" setup>
interface iRightsProps {
  copyrightText: string
  madeByText: string
  isContacts?: boolean
}

defineProps<iRightsProps>()
</script>

<template>
  <div class="rights" :class="{ 'rights--contacts': isContacts }">
    <p v-if="copyrightText" class="rights__text">
      {{ copyrightText }}
    </p>
    <div v-if="madeByText" class="rights__text">
      <span>{{ madeByText }} {{ ' ' }}</span>
      <a
        href="https://www.emotion-agency.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline rights__by"
      >
        Emotion Agency
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rights {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: vw(144);
  @include text-reg-p2;

  @media (max-width: $br1) {
    margin-top: 80px;
  }

  @media (max-width: $br3) {
    flex-direction: column;
    row-gap: 12px;
  }

  &--contacts {
    .rights__text {
      span {
        color: var(--foreground-muted-50);
      }
    }

    .rights__by {
      &::before {
        background-color: var(--foreground);
      }
    }
  }
}

.rights__text {
  position: relative;

  span {
    color: var(--bg-muted-50);
  }
}

.rights__by {
  position: relative;

  &::before {
    background-color: var(--secondary);
  }
}
</style>
