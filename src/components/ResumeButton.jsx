import React from "react";

const ResumeButton = () => {
    const handleClick = () => {
        // Replace the URL below with the desired URL
        window.location.href = "https://your-resume-url.com";
    };

    return (
        <button
            onClick={handleClick}
            style={{
                background: "linear-gradient(90deg, #ffffff, #a974d4)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "12px 24px",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0px 6px 8px rgba(0, 0, 0, 0.2)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)")
            }
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            View Resume
        </button>
    );
};

export default ResumeButton;
