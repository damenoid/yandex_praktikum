import Handlebars from "handlebars";

const template = `
<section class="page">
  <header>Registration</header>
  
  <label class="input">
    <span class="input__label">First name</span>
    <input class="input__input" type="text">
  </label>
  <label class="input">
    <span class="input__label">Second name</span>
    <input class="input__input" type="text">
  </label>
  <label class="input">
    <span class="input__label">Login</span>
    <input class="input__input" type="text">
  </label>
  <label class="input">
    <span class="input__label">Email</span>
    <input class="input__input" type="text">
  </label>
  <label class="input">
    <span class="input__label">Password</span>
    <input class="input__input" type="Password" name="login">
  </label>
  <label class="input">
    <span class="input__label">Phone</span>
    <input class="input__input" type="text" name="login">
  </label>
  
  <button>Sing up</button>
</section>
`
export const showRegistration = () => Handlebars.compile(template)({});