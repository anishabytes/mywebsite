export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
