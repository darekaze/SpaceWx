<template>
  <v-container mt-5 fill-height>
    <v-layout align-center>
      <v-flex>
        <div class="display-1 pb-3">
          <span class="font-weight-bold">404</span>: {{ $t('404-msg') }}
        </div>
        <v-btn flat color="blue"
          :to="$i18nRoute({ name: 'home' })">
          <v-icon class="pr-2">
            keyboard_arrow_left</v-icon>{{ $t('back-home') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<i18n>
{
  "en": {
    "404-msg": "We could's find this page, Sorry..."
  },
  "zh_hk": {
    "404-msg": "抱歉，此頁面並不存在..."
  }
}
</i18n>
