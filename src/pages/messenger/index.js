import Handlebars from "handlebars";

const template = `
<section class="page">
  <div>message</div>
  <div>contacts</div>
</section>
`
export const showMessenger = () => Handlebars.compile(template)({});
