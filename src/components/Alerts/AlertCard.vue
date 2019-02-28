<template>
  <v-card flat
    max-width="380px"
    color="#FAFAFA"
    class="round">
    <v-img
      :src="require(`@/assets/images/${info.image}`)"
      :aspect-ratio="1.9"
      class="round">
    </v-img>
    <v-card-title class="p-relative pl-1">
      <v-tooltip left open-delay="100">
        <template #activator="hint">
          <v-btn
            v-if="condition"
            v-on="hint.on"
            @click.stop="toogleDialog()"
            absolute icon dark
            :large="isDesktop"
            :color="getColor(condition.scale)"
            class="alert-btn">
            <v-icon dark :medium="isDesktop">
              {{ alertIcon }}
            </v-icon>
          </v-btn>
        </template>
        <span>Show Details</span>
      </v-tooltip>
      <div class="ctx-click" @click.stop="toogleDialog()">
        <h3 class="subheading indigo--text font-weight-bold">
          {{ info.name }}
        </h3>
        <indicator :scale="condition.scale" :msg="condition.message"/>
      </div>
    </v-card-title>
    <alert-dialog
      ref="alertDialog" :info="info" :condition="condition"/>
  </v-card>
</template>

<script>
import getColor from '@/helpers/indicatorColor';

export default {
  components: {
    AlertDialog: () => import('@/components/Alerts/Dialog/AlertDialog.vue'),
    Indicator: () => import('@/components/Alerts/Indicator.vue'),
  },
  props: {
    info: Object,
    condition: Object,
  },
  methods: {
    getColor,
    toogleDialog() {
      this.$refs.alertDialog.display();
    },
  },
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    alertIcon() {
      return this.condition.scale ? 'notifications_active' : 'notifications';
    },
  },
};
</script>

<style lang="scss" scoped>
.p-relative {
  position: relative;
  padding: 6px 4px 8px 4px;

  .alert-btn {
    top: -26px;
    right: 8px;
  }
}

.ctx-click {
  cursor: pointer;
  user-select: none;
}
</style>
