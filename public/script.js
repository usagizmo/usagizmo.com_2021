;(function () {
  'use strict'

  const setThemeEvents = function () {
    const themeToBoolean = function (theme) {
      return theme === 'dark' ? true : false
    }

    const booleanToTheme = function (checked) {
      return checked ? 'dark' : 'light'
    }

    const getTheme = function () {
      const mql = matchMedia('(prefers-color-scheme: dark)')
      return localStorage.getItem('theme') || booleanToTheme(mql.matches)
    }

    const state = {
      theme: getTheme(),
    }
    const el = {
      themeCheckboxes: document.querySelectorAll('.js-theme-checkbox'),
      themeTexts: document.querySelectorAll('.js-theme-text'),
    }

    const setTheme = function (theme) {
      state.theme = theme
      el.themeTexts.forEach(function (themeText) {
        themeText.innerText = booleanToTheme(!themeToBoolean(state.theme))
      })
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }

    const onChangeCheckbox = function (e) {
      const theme = booleanToTheme(e.target.checked)
      setTheme(theme)
    }

    el.themeCheckboxes.forEach(function (themeCheckbox) {
      themeCheckbox.checked = themeToBoolean(state.theme)
      themeCheckbox.addEventListener('change', onChangeCheckbox)
    })

    setTheme(state.theme)
  }

  setThemeEvents()
})()
