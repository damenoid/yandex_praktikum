import Handlebars from "handlebars";

const template = `
<section class="page">
  <div>{{ error.code }}</div>
  <div>{{ error.message }}</div>
  <div>=(</div>
</section>
`
export const showError404 = () => Handlebars.compile(template)({error: {code: 404, message: 'error'}});