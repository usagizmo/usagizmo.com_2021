// Processing without getting the DOM

;(function () {
  'use strict'

  const getTheme = function () {
    const mql = matchMedia('(prefers-color-scheme: dark)')
    return localStorage.getItem('theme') || booleanToTheme(mql.matches)
  }

  const themeToBoolean = function (theme) {
    return theme === 'dark' ? true : false
  }

  const booleanToTheme = function (checked) {
    return checked ? 'dark' : 'light'
  }

  const setTheme = function (theme, options) {
    document.documentElement.setAttribute('data-theme', theme)
    if (options && options.save) {
      localStorage.setItem('theme', theme)
    }
  }

  const initialize = function (theme) {
    setTheme(theme)
  }

  const onDOMContentLoaded = function () {
    const el = {
      themeCheckboxes: document.querySelectorAll('.js-theme-checkbox'),
      themeInvertTexts: document.querySelectorAll('.js-theme-invert-text'),
    }

    const setThemeCheckboxes = function (theme) {
      const checked = themeToBoolean(theme)
      el.themeCheckboxes.forEach(function (themeCheckbox) {
        themeCheckbox.checked = checked
      })
    }

    const setThemeInvertTexts = function (theme) {
      const invertText = booleanToTheme(!themeToBoolean(theme))
      el.themeInvertTexts.forEach(function (themeInvertText) {
        themeInvertText.innerText = invertText
      })
    }

    const setInitialValues = function (theme) {
      setThemeCheckboxes(theme)
      setThemeInvertTexts(theme)
    }

    const setThemeEvents = function () {
      const onChangeCheckbox = function (e) {
        const theme = booleanToTheme(e.target.checked)
        setTheme(theme, { save: true })
        setThemeInvertTexts(theme)
      }

      el.themeCheckboxes.forEach(function (themeCheckbox) {
        themeCheckbox.addEventListener('change', onChangeCheckbox)
      })
    }

    setInitialValues(getTheme())
    setThemeEvents()
  }

  initialize(getTheme())
  window.addEventListener('DOMContentLoaded', onDOMContentLoaded)
})()
