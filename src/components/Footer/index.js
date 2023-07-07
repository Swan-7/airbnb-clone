import React from 'react'
import "./styles.css";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-left">
                <span>© 2023 Airbnb, Inc.</span>
                <span className="dot" aria-hidden="true">·</span>
                <span>Terms</span>
                <span className="dot" aria-hidden="true">·</span>
                <span>Sitemap</span>
                <span className="dot" aria-hidden="true">·</span>
                <span>Privacy</span>
                <span className="dot" aria-hidden="true">·</span>
                <span>Your Privacy choices
                    <span className='footer-icon'>
                        <svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect></svg>
                    </span>
                </span>
                <span className="dot" aria-hidden="true">·</span>
                <span>Destinations</span>
            </div>
            <div className="footer-right">
                <div className='language'>
                    <button>
                        <span className='icon'>
                            <LanguageIcon sx={{ fontSize: "1.2rem" }} />
                        </span>
                        <span>English (US)</span>
                    </button>
                    <button>
                        <span className='icon'>$</span>
                        <span>USD</span>
                    </button>
                </div>
                <button>
                    <span>Support & resources</span>
                    <span>
                        <ExpandLessIcon/>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Footer
