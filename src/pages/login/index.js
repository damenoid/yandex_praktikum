import Handlebars from "handlebars";

const template = `
<section class="page">
  <form action="" class="form">
    <label class="input">
      <span class="input__label">Login</span>
      <input class="input__input" type="text" name="login">
    </label>
    <label class="input">
      <span class="input__label">Password</span>
      <input class="input__input" type="Password" name="password">
    </label>
    <input type="submit" value="Enter">
  <form>
  <a href="/registration">Sing up</a>
</section>
`
export const showLogin = () => Handlebars.compile(template)({user: 'user fff',});
