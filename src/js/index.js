import $ from 'jquery'
import 'lazysizes'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import accordion from '../blocks/accordion/accordion'
import bannerSapid from '../blocks/banner-sapid/banner-sapid'
import featuresClmns from '../blocks/features-clmns/features-clmns'
import howGet from '../blocks/how-get/how-get'
import './_backend'

document.addEventListener('DOMContentLoaded', function () {
  window.$ = $

  uiTooltip()
  accordion()
  bannerSapid()
  featuresClmns()
  howGet()

  openAccordionByLink()
})

function openAccordionByLink() {
  for (const link of document.querySelectorAll('.js-open-accordion')) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target && target.classList.contains('accordion-item')) {
        target.querySelector('.accordion-item__head').classList.add('accordion-item__head--active')
        $(target.querySelector('.accordion-item__main')).slideDown(() => target.scrollIntoView())
      }
    })
  }
}
