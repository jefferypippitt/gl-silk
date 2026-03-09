import "./logo-cloud-section-v2.css";

export const CARD_H = 64;
export const CARD_GAP = 20;
export const FAN_W = 88;

const STACK_H = CARD_H * 3 + CARD_GAP * 2;
const Y_TOP = CARD_H / 2;
const Y_MID = CARD_H + CARD_GAP + CARD_H / 2;
const Y_BOT = CARD_H * 2 + CARD_GAP * 2 + CARD_H / 2;

export function HorizontalBeam() {
  return (
    <div className="w-16 shrink-0 overflow-hidden text-foreground/30 dark:text-foreground/50">
      <svg width="100%" height="6" style={{ overflow: "visible" }}>
        <g className="beam-line">
          <line
            x1="-10"
            y1="3"
            x2="9999"
            y2="3"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="3 7"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

export function FanBeams() {
  return (
    <svg
      width={FAN_W}
      height={STACK_H}
      viewBox={`0 0 ${FAN_W} ${STACK_H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-foreground/30 dark:text-foreground/50"
    >
      <line x1="0" y1={Y_MID} x2={FAN_W} y2={Y_TOP} stroke="currentColor" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" className="beam-diagonal" />
      <line x1="0" y1={Y_MID} x2={FAN_W} y2={Y_MID} stroke="currentColor" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" className="beam-diagonal" />
      <line x1="0" y1={Y_MID} x2={FAN_W} y2={Y_BOT} stroke="currentColor" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" className="beam-diagonal" />
    </svg>
  );
}
