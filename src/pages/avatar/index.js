import Handlebars from "handlebars";

const template = `
<section class="page">
  <h4>Change avatar</h4>
  <label class="input">
    <span class="input__label">Avatar</span>
    <input class="input__input" type="file">
  </label>
  <button>Save avatar</button>
</section>
`
export const showAvatar = () => Handlebars.compile(template)({user: 'user fff'});
