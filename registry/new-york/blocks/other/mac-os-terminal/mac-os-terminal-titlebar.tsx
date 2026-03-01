export default function MacOsTerminalTitlebar({
  title,
  subtitle,
  dimensions,
  showIcon,
}: {
  title: string
  subtitle: string
  dimensions: string
  showIcon: boolean
}) {
  return (
    <div className="mot-titlebar">
      <div className="mot-dots">
        <span className="mot-dot mot-dot-close" />
        <span className="mot-dot mot-dot-minimize" />
        <span className="mot-dot mot-dot-maximize" />
      </div>
      <div className="mot-title-group">
        {showIcon && (
          <svg
            className="mot-title-icon"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5.4C1.5 4.516 2.216 3.8 3.1 3.8H6.2L7.34 5H12.9C13.784 5 14.5 5.716 14.5 6.6V11.9C14.5 12.784 13.784 13.5 12.9 13.5H3.1C2.216 13.5 1.5 12.784 1.5 11.9V5.4Z"
              fill="currentColor"
              opacity="0.18"
            />
            <path
              d="M1.5 5.4C1.5 4.516 2.216 3.8 3.1 3.8H6.2L7.34 5H12.9C13.784 5 14.5 5.716 14.5 6.6V11.9C14.5 12.784 13.784 13.5 12.9 13.5H3.1C2.216 13.5 1.5 12.784 1.5 11.9V5.4Z"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 6.35H14.5"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.65"
            />
          </svg>
        )}
        <span className="mot-title">
          {title}
          {subtitle && ` \u2014 ${subtitle}`}
          {dimensions && ` \u2014 ${dimensions}`}
        </span>
      </div>
      <div className="mot-dots-spacer" />
    </div>
  )
}
