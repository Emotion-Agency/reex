<script lang="ts" setup>
interface iSocialsProps {
  label: string
  x?: string
  instagram?: string
  telegram?: string
  isContacts?: boolean
}

withDefaults(defineProps<iSocialsProps>(), {
  x: '',
  instagram: '',
  telegram: '',
})
</script>

<template>
  <div class="socials" :class="{ 'socials--contacts': isContacts }">
    <p class="socials__t">{{ label }}</p>
    <ul class="socials__list socials__list--socials">
      <li class="socials__item">
        <MultipleButton
          tag="a"
          :href="x"
          direction="right-down-up"
          :variant="isContacts ? 'primary' : 'secondary'"
          is-icons
        >
          <IconsSocialsX />
        </MultipleButton>
      </li>
      <li class="socials__item">
        <MultipleButton
          tag="a"
          :href="instagram"
          direction="up-down"
          :variant="isContacts ? 'primary' : 'secondary'"
          is-icons
        >
          <IconsSocialsInstagram />
        </MultipleButton>
      </li>
      <li class="socials__item">
        <MultipleButton
          tag="a"
          :href="telegram"
          direction="left-down-up"
          :variant="isContacts ? 'primary' : 'secondary'"
          is-icons
        >
          <IconsSocialsTelegram />
        </MultipleButton>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.socials {
  width: 100%;

  &--contacts {
    margin-top: vw(32);

    @media (max-width: $br1) {
      margin-top: 24px;
    }

    .socials__t {
      color: var(--foreground-muted-50);
    }

    .socials__list {
      margin-top: vw(16);

      @media (max-width: $br1) {
        margin-top: 12px;
      }
    }
  }
}

.socials__t {
  color: var(--bg-muted-50);
  @include text-reg-p1;
}

.socials__list {
  display: flex;
  flex-direction: column;
  gap: vw(12);
  margin-top: vw(24);
  @include text-med-p1;

  @media (max-width: $br1) {
    margin-top: 18px;
    gap: 10px;
  }

  &--socials {
    flex-direction: row;
    gap: vw(20);

    @media (max-width: $br1) {
      gap: 20px;
    }
  }
}

.socials__item {
  width: fit-content;
}
</style>
