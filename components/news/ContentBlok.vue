<script setup lang="ts">
import type { StoryblokRichTextDocumentNode } from '@storyblok/richtext'

interface iProps {
  blok: StoryblokRichTextDocumentNode
}

defineProps<iProps>()
</script>

<template>
  <div class="curr-news-content container">
    <RichText :text="blok" />
    <div class="curr-news-content__bottom">
      <div class="curr-news-content__line" />
      <div class="curr-news-content__share-wrapper">
        <p class="curr-news-content__text">Поділитися:</p>
        <div class="curr-news-content__btns">
          <CircleButton
            tag="a"
            href="https://x.com/"
            class="curr-news-content__btn"
          >
            <IconsSocialsX />
          </CircleButton>
          <CircleButton
            tag="a"
            href="https://www.linkedin.com/"
            class="curr-news-content__btn"
          >
            <IconsSocialsLinkedin />
          </CircleButton>
          <CircleButton class="curr-news-content__btn">
            <IconsChains />
          </CircleButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.curr-news-content {
  max-width: vw(680);
  margin: 0 auto;
  margin-top: vw(96);

  @media (min-width: $br4) {
    padding: 0;
  }

  @media (max-width: $br1) {
    margin-top: 78px;
    max-width: 70%;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }

  p {
    @include text-reg-p1;
  }

  img {
    margin: 0 auto;
    display: block;
    width: auto;
    max-width: 100%;
    height: vw(448);
    object-fit: cover;

    @media (max-width: $br1) {
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @include heading-h2;
    font-size: vw(36);
    letter-spacing: -0.01em;
    margin-top: vw(64);

    @media (max-width: $br1) {
      font-size: 28px;
      margin-top: 32px;
    }

    & + p {
      margin-top: vw(32);

      @media (max-width: $br1) {
        margin-top: 16px;
      }
    }
  }

  :is(h1, h2, h3, h4, h5, h6) + :is(h1, h2, h3, h4, h5, h6) {
    margin-top: vw(32);

    @media (max-width: $br1) {
      margin-top: 16px;
    }
  }

  p + p {
    margin-top: vw(24);

    @media (max-width: $br1) {
      margin-top: 18px;
    }
  }

  p + ul,
  ul + p {
    margin-top: vw(24);

    @media (max-width: $br1) {
      margin-top: 18px;
    }
  }

  .center-text {
    text-align: center;
    display: inline-block;
  }

  ul {
    li {
      position: relative;
      margin-left: vw(4);
      padding-left: vw(14);

      &::before {
        content: '•';
        position: absolute;
        left: 0;
      }

      @media (max-width: $br1) {
        margin-left: 4px;
        padding-left: 14px;
      }
    }

    li + li {
      margin-top: vw(8);

      @media (max-width: $br1) {
        margin-top: 8px;
      }
    }
  }

  blockquote {
    & > p {
      @include heading-h4;
    }
  }

  :is(h1, h2, h3, h4, h5, h6) + blockquote,
  p + blockquote,
  ul + blockquote,
  blockquote + p,
  blockquote + ul {
    margin-top: vw(32);

    @media (max-width: $br1) {
      margin-top: 16px;
    }
  }
}

.curr-news-content__bottom {
  margin-top: vw(64);

  @media (max-width: $br1) {
    margin-top: 48px;
  }
}

.curr-news-content__line {
  width: 100%;
  height: 1px;
  background-color: var(--foreground-muted-10);
}

.curr-news-content__share-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: vw(24);

  @media (max-width: $br1) {
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
  }
}

.curr-news-content__text {
  @include text-reg-p1;
}

.curr-news-content__btns {
  display: flex;
  align-items: center;
  gap: vw(8);

  @media (max-width: $br1) {
    gap: 8px;
  }
}
</style>
