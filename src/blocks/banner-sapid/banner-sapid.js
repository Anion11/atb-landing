export default function bannerSapid() {
  const sapidBoxMainClass = '.banner-sapid-box-main'
  const sapidBoxMain = $(sapidBoxMainClass)
  $('.banner-sapid-box-btn.js-open-content').on('click', function () {
    sapidBoxMain.fadeOut()
    $(this).siblings(sapidBoxMainClass).fadeIn()
  })
  $('.banner-sapid-box-btn.js-popup-open').on('click', function () {
    sapidBoxMain.fadeOut()
  })
  $('.banner-sapid-box-main-btn_close').on('click', function () {
    $(this).parent(sapidBoxMainClass).fadeOut()
  })
  $(document).click(function (event) {
    if ($(event.target).closest('.banner-sapid-box').length > 0) return
    sapidBoxMain.fadeOut()
    event.stopPropagation()
  })
}
