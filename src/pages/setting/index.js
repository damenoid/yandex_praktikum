import Handlebars from "handlebars";

const template = `
<section class="page">
  <h4>Settings</h4>
  <form action="" class="form">
    <label class="input">
      <span class="input__label">First name</span>
      <input class="input__input" type="text" name="first_name">
    </label>
    <label class="input">
      <span class="input__label">Second name</span>
      <input class="input__input" type="text" name="second_name">
    </label>
    <label class="input">
      <span class="input__label">Display name</span>
      <input class="input__input" type="text" name="display_name">
    </label>
    <label class="input">
      <span class="input__label">Login</span>
      <input class="input__input" type="text" name="login">
    </label>
    <label class="input">
      <span class="input__label">Email</span>
      <input class="input__input" type="text" name="email">
    </label>
    <label class="input">
      <span class="input__label">Phone</span>
      <input class="input__input" type="text" name="phone">
    </label>
    
    <a href="/avatar">Set avatar...</a>
    <a href="/password">Change password...</a>
    
    <input type="submit" value="Save">
  </form>
</section>
`
export const showSettings = () => Handlebars.compile(template)({});
