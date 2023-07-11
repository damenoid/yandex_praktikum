import Handlebars from "handlebars";

const template = `
<section class="page">  
  <div>500</div>
  <div>Что-то пошло не так...</div>
  <div>=(</div>
</section>
`
export const showError500 = () => Handlebars.compile(template)({});