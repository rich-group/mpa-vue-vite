import { createApp } from 'vue';
import App from './app.vue';
{{#if tailwind}}
import 'tailwindcss/tailwind.css';
{{/if}}

async function bootstrap () {
  const app = createApp(App);
  app.mount('#demo');
}

bootstrap();