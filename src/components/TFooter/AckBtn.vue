<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn dark flat
        class="subheading mx-0 text-capitalize"
        v-on="on">
        <v-icon class="pr-2">stars</v-icon>{{ $t('ack') }}
      </v-btn>
    </template>
    <AckDialog @dialog="dialog = false" />
  </v-dialog>
</template>

<script>
export default {
  components: {
    AckDialog: () => import('@/components/TFooter/AckDialog.vue'),
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<i18n>
{
  "en": {
    "ack": "Acknowledgement"
  },
  "zh": {
    "ack": "鳴謝"
  }
}
</i18n>
