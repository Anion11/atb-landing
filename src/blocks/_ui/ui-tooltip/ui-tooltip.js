import tippy from 'tippy.js'

export default function uiTooltip() {
  const tooltips = document.querySelectorAll('.ui-tooltip .ui-tooltip__btn')
  tippy(tooltips, {
    content(reference) {
      const content = reference.nextElementSibling
      return content.innerHTML
    },
    arrow: false,
    allowHTML: true,
    appendTo: () => document.body,
    trigger: 'click',
    interactive: true,
    theme: 'ui-tooltip',
    maxWidth: 260
  })
  $(document).on('click', '.ui-tooltip__btn', function (event) {
    event.preventDefault()
  })
}
