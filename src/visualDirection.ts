// src/visualDirection.ts — Visual Direction configuration
export interface VisualDirectionConfig {
  name: string;
  category: string;
  palette: {
    bg: string;
    surface: string;
    primary: string;
    accent: string;
    text: string;
    muted: string;
  };
  typography: {
    display: string;
    body: string;
    bengali: string;
  };
  motif: string;
  mood: string;
}

export const visualDirection: VisualDirectionConfig = {
  name: "Claude Warm Keynote",
  category: "AI / Machine Learning / LLM & Technology News",
  palette: {
    bg: "#181714",
    surface: "#24221E",
    primary: "#D97757",
    accent: "#E28D73",
    text: "#FAF7F2",
    muted: "#A8A29E",
  },
  typography: {
    display: "'Space Grotesk', 'Hind Siliguri', sans-serif",
    body: "'Hind Siliguri', sans-serif",
    bengali: "'Hind Siliguri', sans-serif",
  },
  motif: "Anthropic Claude Warm Atmosphere, glowing terracotta starburst asterisk, subtle grid mesh, floating glass cards",
  mood: "Authoritative, exciting, cutting-edge AI keynote with Anthropic brand identity",
};
