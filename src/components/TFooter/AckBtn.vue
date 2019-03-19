<template>
  <v-dialog v-model="dialog" width="500" scrollable>
    <template v-slot:activator="{ on }">
      <v-btn
        dark flat
        class="subheading text-capitalize mx-0"
        v-on="on">
        <!-- <v-icon left dark>stars</v-icon> -->
        {{ $t('ack') }}
      </v-btn>
    </template>
    <AckDialog @dialog="dialog = false"/>
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
