import Handlebars from "handlebars";

const template = `
<section class="page">
  <label class="input">
    <span class="input__label">Login</span>
    <input class="input__input" type="text" name="login" id="login">
  </label>
  <label>
    <span class="input__label">Password</span>
    <input class="input__input" type="Password" name="login" id="Password">
  </label>
  <button>Enter {{ user }}</button>
  <a href="/registration">Sing up</a>
</section>
`
export const showLogin = () => Handlebars.compile(template)({user: 'user fff',});