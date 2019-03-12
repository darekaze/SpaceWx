<template>
  <v-container pt-3>
    <v-card flat class="extra">
      <v-card-title class="pt-3 pb-2">
        <v-btn
          dark flat color="blue"
          :to="$i18nRoute({ name: $route.params.category })">
          <v-icon class="pr-2">keyboard_arrow_left</v-icon>Back
        </v-btn>
      </v-card-title>
      <v-card-text class="pt-0" v-if="article">
        <div class="article-md" v-html="article.html"/>
      </v-card-text>
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
  &/deep/ {
    padding: 0 2.2em;
    margin: auto;
    font: 1.3rem "Noto Sans TC", sans-serif;
    color: #333;
    line-height: 1.58;
    text-align: justify;

    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      border-radius: 4px;
    }
    img + em {
      display: block;
      margin: auto;
      text-align: center;
      font-size: 1.1rem;
      padding-top: 8px;
    }

    table {
      width: 100%;
    }
    table, th, td {
      padding: 5px;
    }
    video {
      margin: 2em 0;
      border:1px solid #ddd;
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
      -webkit-hypens:auto;
      -moz-hypens:auto;
      hyphens:auto;
    }
    strong {
      color: #0c72a1;
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
    &/deep/ {
      font-size: 1.1rem;
      line-height: 1.44;
    }
  } /* @iPad */
}

@media only screen and (max-device-width: 480px) {
  .article-md {
    &/deep/ {
      text-align: left;
      width: auto;
      padding: 0 10px;
    }
  } /* @Phone */
}
</style>
