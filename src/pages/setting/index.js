import Handlebars from "handlebars";

const template = `
<section class="page">
  <header>Settings</header>
  
  <label class="input">
    <span class="input__label">First name</span>
    <input class="input__input" type="text">
  </label>
  <label class="input">
    <span class="input__label">Second name</span>
    <input class="input__input" type="text">
  </label>
  <label class="input">
    <span class="input__label">Display name</span>
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
    <span class="input__label">Phone</span>
    <input class="input__input" type="text" name="login">
  </label>
  
  <a href="/avatar">Set avatar...</a>
  <a href="/password">Change password...</a>
  
  <button>Save</button>
</section>
`
export const showSettings = () => Handlebars.compile(template)({});