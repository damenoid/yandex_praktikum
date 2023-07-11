import Handlebars from "handlebars";

const template = `
<label class="input">
  <span class="input__label">{{ label }}</span>
  <input class="input__input" type="{{ type }}">
</label>
`
export const showBaseInput = ({label, type}) => Handlebars.compile(template)({label, type});

