import Handlebars from "handlebars";

const template = `
<section class="page">
  <h4>Change avatar</h4>
  <form action="" class="form">
    <label class="input">
      <span class="input__label">Avatar</span>
      <input class="input__input" type="file" name="avatar">
    </label>
    <input type="submit" value="Save avatar">
  </form>
</section>
`
export const showAvatar = () => Handlebars.compile(template)({user: 'user fff'});
