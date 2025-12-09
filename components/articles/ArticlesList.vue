<script setup lang="ts">
const articlesItems = [
  {
    asset: {
      _uid: 'img-1',
      filename: '/images/home-1.png',
      alt: 'HR аутсорсинг для бізнесу',
      name: 'home-1',
    },
    category: 'HR',
    date: '12 грудня 2025',
    title: 'Як аутсорсинг персоналу допомагає бізнесу зменшити витрати',
    link: '/articles/hr-outsourcing',
  },
  {
    asset: {
      _uid: 'img-2',
      filename: '/images/home-2.png',
      alt: 'Масовий підбір персоналу',
      name: 'home-2',
    },
    category: 'Рекрутинг',
    date: '05 грудня 2025',
    title: 'Масовий підбір: як закривати десятки вакансій одночасно',
    link: '/articles/mass-recruitment',
  },
  {
    asset: {
      _uid: 'img-3',
      filename: '/images/home-3.png',
      alt: 'Управління персоналом',
      name: 'home-3',
    },
    category: 'Менеджмент',
    date: '28 листопада 2025',
    title: '5 ключових помилок в управлінні персоналом та як їх уникнути',
    link: '/articles/employee-management',
  },
  {
    asset: {
      _uid: 'img-4',
      filename: '/images/home-4.png',
      alt: 'Підвищення ефективності бізнесу',
      name: 'home-4',
    },
    category: 'Бізнес',
    date: '20 листопада 2025',
    title: 'Підвищення ефективності бізнесу: практики, що працюють у 2025 році',
    link: '/articles/business-efficiency',
  },
  {
    asset: {
      _uid: 'img-5',
      filename: '/images/home-5.png',
      alt: 'Оновлення трудового законодавства',
      name: 'home-5',
    },
    category: 'Юридичне',
    date: '14 листопада 2025',
    title: 'Оновлення трудового законодавства: що потрібно знати роботодавцю',
    link: '/articles/legal-updates',
  },
  {
    asset: {
      _uid: 'img-6',
      filename: '/images/service-1.png',
      alt: 'HR тренди 2025',
      name: 'service-1',
    },
    category: 'Аналітика',
    date: '01 листопада 2025',
    title: 'HR тренди 2025 року: автоматизація, гнучкість та нові підходи',
    link: '/articles/hr-trends-2025',
  },
]
</script>

<template>
  <section class="a-list">
    <div class="a-list__wrapper container">
      <Divider />
      <div class="grid a-list__top">
        <ArticlesFilter class="a-list__filter" />
        <p class="a-list__text">
          Аутстафінг, що допомагає швидко закривати потреби в персоналі без
          зайвих процесів і бюрократії.
        </p>
      </div>
      <ul class="a-list__items">
        <ArticleItem
          v-for="(article, idx) in articlesItems"
          :key="idx"
          :asset="article?.asset"
          :category="article?.category"
          :date="article?.date"
          :title="article?.title"
          :link="article?.link"
        />
      </ul>
      <DualButton direction="down" class="a-list__btn">
        Показати ще
      </DualButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.a-list {
  padding-bottom: vw(192);

  @media (max-width: $br1) {
    padding-bottom: 80px;
  }
}

.a-list__top {
  margin-top: vw(32);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column-reverse;
    gap: 38px;
    margin-top: 24px;
  }
}

.a-list__filter {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.a-list__text {
  @include heading-h4;

  @media (min-width: $br1) {
    @include col(9, 12);
  }

  @media (max-width: $br1) {
    max-width: 400px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.a-list__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: vw(96);
  column-gap: vw(16);
  row-gap: vw(96);

  @media (max-width: $br1) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 24px;
  }

  @media (max-width: $br3) {
    grid-template-columns: 1fr;
  }
}

.a-list__btn {
  margin: 0 auto;
  width: fit-content;
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 48px;
  }
}
</style>
