<template>
  <v-container mt-5 pt-3>
    <v-card flat class="extra">
      <v-card-title class="pt-3 pb-2">
        <!-- Change to breadcrum -->
        <v-btn
          dark flat color="blue"
          :class="{ 'pl-0 ma-0': $vuetify.breakpoint.xsOnly }"
          :to="$i18nRoute({ name: $route.params.category })">
          <v-icon class="pr-2">keyboard_arrow_left</v-icon>{{ $t('back') }}
        </v-btn>
      </v-card-title>
      <v-card-text class="pt-0" v-if="article">
        <div class="article-md" v-html="article.html"/>
      </v-card-text>
      <!-- Disabled for integration... -->
      <!-- <v-card-actions>
        <v-btn flat color="blue"
          :to="$i18nRoute({ name: $route.params.category })">
          <v-icon class="pr-2">keyboard_arrow_left</v-icon>{{ $t('back') }}
        </v-btn>
      </v-card-actions> -->
    </v-card>

  </v-container>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  data: () => ({
    article: null,
  }),
  beforeMount() {
    this.updateArticle();
  },
  methods: {
    async updateArticle() {
      const { currentLanguage: lang } = Trans;
      const { topic, category } = this.$route.params;
      try {
        this.article = await import(`@/data/articles/${category}/${lang}/${topic}.md`);
      } catch (err) {
        this.$router.replace(this.$i18nRoute({ name: '404' }));
      }
    },
  },
  watch: {
    '$route.params.lang': {
      immediate: true,
      handler() {
        this.updateArticle();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.extra {
  border-radius: 8px;
  max-width: 68em;
  margin: 0 auto;
}

.article-md {
  &::v-deep {
    padding: 0 2.2em;
    margin: auto;
    font: 1.3rem "Noto Sans TC", sans-serif;
    color: #333;
    line-height: 1.58;
    width: 90vw;
    max-width: 100%;

    img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
      border-radius: 4px;
      object-fit: contain;
    }
    img + em, iframe + p em, video + p em {
      display: block;
      margin: auto;
      text-align: center;
      font-size: 1.1rem;
      padding-top: 8px;
    }

    iframe {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 400px;
    }

    video {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: auto;
    }

    table {
      background: white;
      border-radius:3px;
      border-collapse: collapse;
      height: 320px;
      margin: 30px auto;
      width: 95%;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      animation: float 5s infinite;
      text-align: center;
    }

    th {
      color:#D5DDE5;;
      background:#1b1e24;
      border-bottom:4px solid #9ea7af;
      border-right: 1px solid #343a45;
      font-size: 20px;
      font-weight: 100;
      padding: 16px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      vertical-align:middle;
    }

    th:first-child {
      border-top-left-radius:3px;
    }

    th:last-child {
      border-top-right-radius:3px;
      border-right:none;
    }

    tr {
      border-top: 1px solid #C1C3D1;
      border-bottom: 1px solid #C1C3D1;
      color:#666B85;
      font-size: 16px;
      font-weight:normal;
      text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
    }

    tr:first-child {
      border-top: none;
    }

    tr:last-child {
      border-bottom: none;
    }

    tr:nth-child(odd) td {
      background:#EBEBEB;
    }

    tr:last-child td:first-child {
      border-bottom-left-radius:3px;
    }

    tr:last-child td:last-child {
      border-bottom-right-radius:3px;
    }

    td {
      background:#FFFFFF;
      padding: 12px;
      vertical-align:middle;
      font-weight:300;
      font-size:18px;
      text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      border-right: 1px solid #C1C3D1;
    }

    td:last-child {
      border-right: 0px;
    }

    /* Typography */
    h1, h2 {
      margin-top: 0;
      margin-bottom: 8px;
      font-weight: bold;
    }
    h3 {
      font-weight: normal;
      font-style: italic;
      margin-top: 3em;
      text-align: left;
    }
    p {
      margin-top: 0;
      margin-bottom: 28px;
      text-align: justify;
      text-justify: auto;
      -webkit-hypens:auto;
      -moz-hypens:auto;
      hyphens:auto;
    }
    ul {
      list-style: square;
      padding-left:1.2em;
    }
    ol {
      padding-left:1.2em;
      }
    blockquote {
      margin-left: 1em;
      padding-left: 1em;
      border-left: 1px solid #ddd;
    }
    code {
      font-family: "Consolas", "Menlo", "Monaco", monospace, serif;
      font-size: .9em;
      background: white;
    }
    a {
      color: #2484c1;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    a img {
      border:none;
    }
    h1 a, h1 a:hover {
      color: #333;
      text-decoration: none;
    }
    hr {
      color : #ddd;
      height : 1px;
      margin: 2em 0;
      border-top : solid 1px #ddd;
      border-bottom : none;
      border-left: 0;
      border-right: 0;
    }
  }
}

@media only screen and (max-device-width: 1024px) {
  .article-md {
    &::v-deep {
      font-size: 1.1rem;
      line-height: 1.44;

      img + em, iframe + p em, video + p em {
        font-size: 1.0rem;
      }
      th, tr, td {
        font-size: 1.3rem;
      }
    }
  } /* @iPad */
}

@media only screen and (max-device-width: 600px) {
  .article-md {
    &::v-deep {
      width: auto;
      padding: 0 10px;

      img {
        width: 95%;
      }
      th, tr, td {
        font-size: 1.1rem;
      }
    }
  } /* @Phone */
}
</style>
