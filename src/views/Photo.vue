<template>
  <div>
    <Gallery />
    <Photo />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import Photo from '@/components/Photo.vue';

export default {
  name: 'photo',
  components: {
    Gallery,
    Photo,
  },
};
</script>
