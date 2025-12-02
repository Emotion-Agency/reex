<script setup lang="ts"></script>

<template>
  <section class="about">
    <div class="container about__wrapper">
      <Pill variant="light"> Про компанію </Pill>
      <h2 class="about__t">
        Reex — ваш партнер у підборі тимчасового, та
        <span>постійного персоналу.</span>
      </h2>
      <DualButton
        class="about__btn"
        tag="nuxt-link"
        to="/about"
        variant="secondary"
      >
        Детальніше про нас
      </DualButton>
    </div>
    <div class="about__imgs">
      <img src="/images/home-2.png" alt="About image" class="about__img" />
      <img src="/images/home-3.png" alt="About image" class="about__img" />
      <img src="/images/home-4.png" alt="About image" class="about__img" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;
  background-color: var(--foreground);
  color: var(--secondary);
  margin-top: vw(144);

  @media (min-width: $br1) {
    height: 100dvh;
    min-height: 500px;
  }

  @media (max-width: $br1) {
    margin-top: 100px;
    padding: 100px 0;
  }
}

.about__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  z-index: 1;
}

.about__t {
  margin-top: vw(24);
  max-width: vw(680);
  @include heading-h2;

  @media (max-width: $br1) {
    max-width: 448px;
    margin-top: 18px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }

  span {
    color: var(--bg-muted-50);
  }
}

.about__btn {
  width: fit-content;
  margin-top: vw(48);

  @media (max-width: $br1) {
    margin-top: 32px;
  }
}

.about__imgs {
  @media (max-width: $br1) {
    display: none;
  }
}

.about__img {
  position: absolute;
  border-radius: vw(12);

  &:nth-child(1) {
    top: 0;
    right: vw(216);
    width: vw(264);
    height: vw(274);
  }
  &:nth-child(2) {
    bottom: vw(177);
    left: 0;
    width: vw(264);
    height: vw(264);
  }
  &:nth-child(3) {
    bottom: 0;
    right: 0;
    width: vw(360);
    height: vw(260);
  }
}
</style>
