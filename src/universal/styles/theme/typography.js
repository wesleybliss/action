const typography = {
  // TODO: refactor appTheme
  // #deprecated use fontFamily and fontSize constants instead of typography

  // Font stacks
  sansSerif: '"IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: '"IBM Plex Serif", Georgia, "Times New Roman", Times, serif',
  monospace: '"IBM Plex Mono", Menlo, Monaco, Consolas, "Courier New", monospace',

  // Typography scale (matches a subset of Sketch defaults)
  sBase: '1rem', // 16px
  s1: '.75rem', // 12px
  s2: '.8125rem', // 13px
  s3: '.875rem', // 14px
  s4: '1.125rem', // 18px
  s5: '1.25rem', // 20px
  s6: '1.5rem', // 24px
  s7: '2.125rem', // 34px
  s8: '3rem' // 48px
}

export default typography

export const fontFamily = {
  sansSerif: '"IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: '"IBM Plex Serif", Georgia, "Times New Roman", Times, serif',
  monospace: '"IBM Plex Mono", Menlo, Monaco, Consolas, "Courier New", monospace'
}

// [0] .75rem     (12px)
// [1] .8125rem   (13px)
// [2] .875rem    (14px)
// [3] 1rem       (16px)
// [4] 1.125rem   (18px)
// [5] 1.25rem    (20px)
// [6] 1.5rem     (24px)
// [7] 2.125rem   (34px)
// [8] 3rem'      (48px)

export const fontSize = [
  '.75rem',
  '.8125rem',
  '.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '2.125rem',
  '3rem'
]
