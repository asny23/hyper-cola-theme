const colaRed = 'rgb(222, 10, 28)'
const colaLiquid = 'rgb(40, 12, 12)'
const colaLiquidOp = 'rgba(40, 12, 12, 0.4)'
const colaWhite = 'rgb(255, 255, 255)'
const colaWhiteOp = 'rgba(255, 255, 255, 0.5)'

const schemeRed = {
  bgColor: colaRed,
  fgColor: colaWhite,
  cursorColor: colaLiquidOp,
  selectionColor: colaLiquidOp,
  subBgColor: colaLiquid,
  subFgColor: colaWhite,
}
const schemeDark = {
  bgColor: colaLiquid,
  fgColor: colaRed,
  cursorColor: colaWhiteOp,
  selectionColor: colaWhiteOp,
  subBgColor: colaRed,
  subFgColor: colaWhite,
}

const colors = {
  black: '#1e1d1b',
  red: '#dc322f',
  green: '#859900',
  yellow: '#b58900',
  blue: '#268bd2',
  magenta: '#d33682',
  cyan: '#2aa198',
  white: '#ffffff',
  lightBlack: '#7a7267',
  lightRed: '#ff7c6c',
  lightGreen: '#bcd42a',
  lightYellow: '#e6db74',
  lightBlue: '#26a6a6',
  lightMagenta: '#ffa47c',
  lightCyan: '#bcd42a',
  lightWhite: '#f8f8f0',
}

exports.decorateConfig = config => {
  const scheme = config.hyperColaTheme === 'dark' ? schemeDark : schemeRed;

  return Object.assign({}, config, {
    backgroundColor: scheme.bgColor,
    foregroundColor: scheme.fgColor,
    cursorColor: scheme.cursorColor,
    selectionColor: scheme.selectionColor,
    colors,
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none;
      }
      .header_header {
        top: 0;
        left: 0;
        right: 0;
        background-color: ${scheme.subBgColor};
      }
      .tabs_title {
        font-family: ${'Coca Cola ii, ' + config.fontFamily}
      }
      .tab_tab {
        border: none;
      }
      .tab_tab.tab_active {
        background-color: ${scheme.bgColor};
      }
      .tabs_borderShim {
        display: none;
      }
      .footer_footer {
        background-color: ${scheme.subBgColor};
      }
      .footer_footer .footer_group {
        color: ${scheme.subFgColor};
      }
    `
  })
}
