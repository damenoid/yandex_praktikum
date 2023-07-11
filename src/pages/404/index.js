import Handlebars from "handlebars";

const template = `
<section class="page">
  <h3>{{ error.code }}</h3>
  <div>{{ error.message }}</div>
  <div>=(</div>
</section>
`
export const showError404 = () => Handlebars.compile(template)({error: {code: 404, message: 'Страница не найдена'}});
