import Handlebars from "handlebars";

const template = `
<section class="page">
  <h4>Change avatar</h4>
  <form>
    <label class="input">
      <span class="input__label">Avatar</span>
      <input class="input__input" type="file" name="avatar">
    </label>
    <input type="submit">Save avatar</input>
  </form>
</section>
`
export const showAvatar = () => Handlebars.compile(template)({user: 'user fff'});
