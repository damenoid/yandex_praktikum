import Handlebars from "handlebars";

const template = `
<section class="page">  
  <h3>500</h3>
  <div>Что-то пошло не так...</div>
  <div>=(</div>
</section>
`
export const showError500 = () => Handlebars.compile(template)({});