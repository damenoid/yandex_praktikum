import Handlebars from "handlebars";

const template = `
<section class="page">
  <header>Password</header>
  
  <label>Old password<input type="password"></label>
  <label>New password<input type="password"></label>
  
  <button>Save</button>
</section>
`
export const showPassword = () => Handlebars.compile(template)({});