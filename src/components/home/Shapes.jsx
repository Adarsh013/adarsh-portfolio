import React from 'react'

const Shapes = () => {
    return (
        <div className='shapes'>

            {/* s1 — 4-point star, gold */}
            <svg width="28" height="28" className="shape s1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 0 L17 10.5 L28 14 L17 17.5 L14 28 L11 17.5 L0 14 L11 10.5 Z"
                    fill="#FFD166"
                    fillRule="evenodd"
                />
            </svg>

            {/* s2 — orbit ring, coral */}
            <svg width="46" height="24" className="shape s2" xmlns="http://www.w3.org/2000/svg">
                <ellipse
                    cx="23" cy="12" rx="21" ry="10"
                    stroke="#FF6B6B"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>

            {/* s3 — crescent moon, violet */}
            <svg width="22" height="30" className="shape s3" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 2 C6 2 0 8 0 16 C0 24 6 30 14 30 C10 26 7 22 7 16 C7 10 10 6 14 2 Z"
                    fill="#A78BFA"
                    fillRule="evenodd"
                />
            </svg>

            {/* s4 — 6-point star outline, sky blue */}
            <svg width="24" height="24" className="shape s4" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 0 L13.5 8 L21 4 L16 10 L24 12 L16 14 L21 20 L13.5 16 L12 24 L10.5 16 L3 20 L8 14 L0 12 L8 10 L3 4 L10.5 8 Z"
                    stroke="#48CAE4"
                    strokeWidth="1.5"
                    fill="none"
                    fillRule="evenodd"
                />
            </svg>

            {/* s5 — dot triangle cluster, gold */}
            <svg width="22" height="18" className="shape s5" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="15" r="3" fill="#FFD166" />
                <circle cx="19" cy="15" r="3" fill="#FFD166" />
                <circle cx="11" cy="3" r="3" fill="#FFD166" />
            </svg>

            {/* s6 — ringed planet, coral */}
            <svg width="56" height="36" className="shape s6" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="18" r="10" fill="none" stroke="#FF6B6B" strokeWidth="2" />
                <ellipse cx="28" cy="18" rx="26" ry="7" fill="none" stroke="#FF6B6B" strokeWidth="1.5" opacity="0.55" />
            </svg>

            {/* s7 — open arc hook, sky blue */}
            <svg width="24" height="24" className="shape s7" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 22 C2 10 9 1 22 1"
                    stroke="#48CAE4"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>

            {/* s8 — diamond outline, violet */}
            <svg width="28" height="28" className="shape s8" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 1 L27 14 L14 27 L1 14 Z"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                />
            </svg>

            {/* s9 — lightning bolt, gold */}
            <svg width="18" height="28" className="shape s9" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 0 L4 14 L9 14 L2 28 L16 11 L10 11 Z"
                    fill="#FFD166"
                    fillRule="evenodd"
                />
            </svg>

            {/* s10 — hexagon outline, violet */}
            <svg width="32" height="36" className="shape s10" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 1 L31 9.66 L31 26.98 L16 35.64 L1 26.98 L1 9.66 Z"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                />
            </svg>

            {/* s11 — tilted dash, sky blue */}
            <svg width="32" height="16" className="shape s11" xmlns="http://www.w3.org/2000/svg">
                <rect
                    transform="rotate(-30 16 8)"
                    x="2" y="6"
                    width="28" height="3"
                    rx="1.5"
                    fill="#48CAE4"
                    fillRule="evenodd"
                />
            </svg>

            {/* s12 — plus cross, coral */}
            <svg width="20" height="20" className="shape s12" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8 0 L8 6 L14 6 L14 8 L8 8 L8 14 L6 14 L6 8 L0 8 L0 6 L6 6 L6 0 Z"
                    fill="#FF6B6B"
                    fillRule="evenodd"
                />
            </svg>

        </div>
    )
}

export default Shapes