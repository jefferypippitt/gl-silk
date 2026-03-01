export default function WindowsTerminalTitlebar({
  tabLabel,
}: {
  tabLabel: string
}) {
  return (
    <div className="wt-titlebar">
      <div className="wt-tabs">
        {/* Active tab */}
        <div className="wt-tab wt-tab-active">
          {/* PowerShell icon */}
          <svg
            className="wt-tab-icon"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="16" height="16" rx="2" fill="#012456" />
            <path
              d="M3 10.5L7 7L3 3.5"
              stroke="#eeeef0"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 11H13"
              stroke="#eeeef0"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <span className="wt-tab-label">{tabLabel}</span>
          <span className="wt-tab-close">✕</span>
        </div>

        {/* New tab button */}
        <div className="wt-new-tab">
          <span style={{ fontSize: "1rem", lineHeight: 1, opacity: 0.5 }}>+</span>
        </div>
      </div>

      {/* Window control buttons */}
      <div className="wt-window-buttons">
        {/* Minimize */}
        <div className="wt-win-btn">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Maximize */}
        <div className="wt-win-btn">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
          </svg>
        </div>
        {/* Close */}
        <div className="wt-win-btn wt-win-btn-close">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
