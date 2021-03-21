// Processing without getting the DOM

;(function () {
  'use strict'

  const setInitialTheme = function () {
    const booleanToTheme = function (checked) {
      return checked ? 'dark' : 'light'
    }

    const getTheme = function () {
      const mql = matchMedia('(prefers-color-scheme: dark)')
      return localStorage.getItem('theme') || booleanToTheme(mql.matches)
    }

    const setTheme = function (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }

    setTheme(getTheme())
  }

  setInitialTheme()
})()
