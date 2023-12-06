class TimeQuote {
  constructor() {
    this.date = new Date()
  }

  getQuote() {
    fetch(`/api?time=${String(this.date.getHours()) + '00'}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.quote-block--item').innerHTML =
          data.data.quote
        document.querySelector('.quote-block--author').innerHTML =
          data.data.author
        document.querySelector('.quote-block--source').innerHTML =
          data.data.source
      })
  }
}

let time = new TimeQuote()
time.getQuote()
