// eslint-disable-next-line sonarjs/cognitive-complexity
export default function featuresClmns() {
  if ($('.features-clmns .features-clmns__box').length > 0 & $(window).width() > 1259) {
    const columns = $('.features-clmns__main')
    let count = 0
    for (const element of columns) {
      if ($(element).children().length > count) {
        count = $(element).children().length
      }
    }
    for (let row = 0; row < count; row++) {
      let maxHeight = 0
      for (const element of columns) {
        if ($(element).children().eq(row).outerHeight() > maxHeight) {
          maxHeight = $(element).children().eq(row).outerHeight()
        }
      }
      for (const element of columns) {
        $(element).children().eq(row).css('height', `${maxHeight}px`)
      }
    }
  }
}
