<script setup lang="ts"></script>

<template>
  <section class="a-filter">
    <ul class="a-filter__list">
      <li class="a-filter__item">
        <MultipleButton direction="right-up-down" is-active>Всі</MultipleButton>
      </li>
      <li class="a-filter__item">
        <MultipleButton direction="down-up">Аутстафінг</MultipleButton>
      </li>
      <li class="a-filter__item">
        <MultipleButton direction="up-down">HR-поради</MultipleButton>
      </li>
      <li class="a-filter__item">
        <MultipleButton direction="down-up">Мотивація</MultipleButton>
      </li>
      <li class="a-filter__item">
        <MultipleButton direction="up-down">Новини</MultipleButton>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.a-filter__list {
  display: flex;
  gap: vw(16);
  white-space: nowrap;

  @media (max-width: $br1) {
    gap: 16px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
