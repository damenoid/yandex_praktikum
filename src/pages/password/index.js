import Handlebars from "handlebars";

const template = `
<section class="page">
  <header>Password</header>
  <label class="input">
    <span class="input__label">Old password</span>
    <input class="input__input" type="text" name="oldPassword">
  </label>
  <label class="input">
    <span class="input__label">New password</span>
    <input class="input__input" type="text" name="newPassword">
  </label>
  <label>Old password<input type="password"></label>
  <label>New password<input type="password"></label>
  
  <button>Save</button>
</section>
`
export const showPassword = () => Handlebars.compile(template)({});