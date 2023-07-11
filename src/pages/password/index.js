import Handlebars from "handlebars";

const template = `
<section class="page">
  <h4>Change password</h4>
  <form>
    <label class="input">
      <span class="input__label">Old password</span>
      <input class="input__input" type="text" name="oldPassword">
    </label>
    <label class="input">
      <span class="input__label">New password</span>
      <input class="input__input" type="text" name="newPassword">
    </label>
    
    <input type="submit">Save</input>
  </form>
</section>
`
export const showPassword = () => Handlebars.compile(template)({});
