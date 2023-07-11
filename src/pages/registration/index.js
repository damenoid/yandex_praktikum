import Handlebars from "handlebars";

const template = `
<section class="page">
  <h4>Registration</h4>
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
      <span class="input__label">Login</span>
      <input class="input__input" type="text" name="login">
    </label>
    <label class="input">
      <span class="input__label">Email</span>
      <input class="input__input" type="text" name="email">
    </label>
    <label class="input">
      <span class="input__label">Password</span>
      <input class="input__input" type="Password" name="password">
    </label>
    <label class="input">
      <span class="input__label">Phone</span>
      <input class="input__input" type="text" name="phone">
    </label>
    
    <input type="submit" value="Sing up">
  </form>
</section>
`
export const showRegistration = () => Handlebars.compile(template)({});
