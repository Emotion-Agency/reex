<script setup lang="ts">
import type { StoryblokRichTextDocumentNode } from '@storyblok/richtext'
import type { iImage } from '~/types/stories/story'

interface iServiceFullscreenAssetProps {
  asset: iImage
  description: StoryblokRichTextDocumentNode
}

defineProps<iServiceFullscreenAssetProps>()

const $el = ref<HTMLElement | null>(null)

useDetectHeaderColor($el as Ref<HTMLElement>)
</script>

<template>
  <section ref="$el" class="fs-asset">
    <div class="container fs-asset__d-wrapper">
      <Button data-scale class="fs-asset__btn" variant="dark">
        <Icon name="lucide:arrow-down" />
      </Button>
      <div data-t class="fs-asset__d">
        <RichText :text="description" />
      </div>
    </div>
    <div class="fs-asset__wrapper">
      <AssetRenderer
        data-preload
        :src="asset?.filename"
        :alt="asset?.alt"
        :width="2560"
        :video-attributes="{
          autoplay: true,
          playsinline: true,
          muted: true,
        }"
        is-parallax
        class="fs-asset__asset"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.fs-asset {
  padding-top: vw(32);

  @media (max-width: $br1) {
    padding-top: 24px;
  }
}

.fs-asset__d-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: $br1) {
    flex-direction: column-reverse;
    gap: 18px;
  }
}

.fs-asset__d {
  @include heading-h4;
  max-width: vw(448);

  @media (max-width: $br1) {
    max-width: 320px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }

  :deep(p) {
    @include heading-h4;
  }

  :deep(ul) {
    margin-top: vw(10);

    @media (max-width: $br1) {
      margin-top: 10px;
    }

    li {
      @include heading-h4;
      position: relative;
      margin-left: vw(4);
      padding-left: vw(14);

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        top: 0;
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

  :deep(ul + p) {
    margin-top: vw(10);

    @media (max-width: $br1) {
      margin-top: 10px;
    }
  }

  :deep(p + p) {
    margin-top: vw(8);

    @media (max-width: $br1) {
      margin-top: 8px;
    }
  }
}

.fs-asset__btn {
  pointer-events: none;
  width: vw(48);
  height: vw(48);

  span {
    width: vw(18);
    height: vw(18);
    animation: bounce 2s ease-in-out infinite alternate;

    @media (max-width: $br1) {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: $br1) {
    backdrop-filter: blur(50px);
    width: 48px;
    height: 48px;
  }
}

.fs-asset__asset {
  display: block;
  object-fit: cover;
  width: 100vw;
  height: 100svh;
  margin-top: vw(48);

  @media (max-width: $br1) {
    width: 100%;
    height: 100%;
    aspect-ratio: 325/470;
    margin-top: 32px;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>
