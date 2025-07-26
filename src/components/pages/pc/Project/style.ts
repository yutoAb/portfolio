export const interactiveBoxStyle = {
  width: "100%",
  cursor: "pointer",
  boxSizing: "border-box",
  border: "2px solid white",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
  },
} as const;
