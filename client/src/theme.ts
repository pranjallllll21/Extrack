export const tokens = {
  grey: {
    100: "#f8fafc",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  primary: {
    // Rich purple
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7c3aed",
    800: "#6b21a8",
    900: "#581c87",
  },
  secondary: {
    // Deep emerald green
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  tertiary: {
    // Rich gold/amber
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  accent: {
    // Coral/salmon
    100: "#fef2f2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  background: {
    light: "#1f2937",
    main: "#111827",
    card: "#1f2937",
    elevated: "#374151",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
      dark: tokens.primary[600],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
      light: tokens.secondary[400],
      dark: tokens.secondary[600],
    },
    tertiary: {
      ...tokens.tertiary,
      main: tokens.tertiary[500],
      light: tokens.tertiary[400],
      dark: tokens.tertiary[600],
    },
    accent: {
      ...tokens.accent,
      main: tokens.accent[500],
      light: tokens.accent[400],
      dark: tokens.accent[600],
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      paper: tokens.background.card,
      light: tokens.background.light,
      elevated: tokens.background.elevated,
    },
    text: {
      primary: tokens.grey[900],
      secondary: tokens.grey[700],
      disabled: tokens.grey[500],
      light: tokens.grey[100],
      dark: tokens.grey[800],
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: 700,
      background: `linear-gradient(135deg, ${tokens.primary[400]} 0%, ${tokens.secondary[400]} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: 600,
      color: tokens.grey[100],
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.primary[300],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[200],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[300],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      fontWeight: 500,
      color: tokens.grey[400],
    },
    body1: {
      fontSize: 14,
      color: tokens.grey[800],
    },
    body2: {
      fontSize: 12,
      color: tokens.grey[700],
    },
  },
  components: {
    // Example component customizations
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${tokens.primary[500]} 0%, ${tokens.primary[600]} 100%)`,
          boxShadow: `0 4px 20px ${tokens.primary[500]}40`,
          '&:hover': {
            background: `linear-gradient(135deg, ${tokens.primary[400]} 0%, ${tokens.primary[500]} 100%)`,
            boxShadow: `0 6px 25px ${tokens.primary[500]}60`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${tokens.secondary[500]} 0%, ${tokens.secondary[600]} 100%)`,
          boxShadow: `0 4px 20px ${tokens.secondary[500]}40`,
          '&:hover': {
            background: `linear-gradient(135deg, ${tokens.secondary[400]} 0%, ${tokens.secondary[500]} 100%)`,
            boxShadow: `0 6px 25px ${tokens.secondary[500]}60`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.background.card,
          borderRadius: 12,
          border: `1px solid ${tokens.grey[800]}`,
          boxShadow: `0 4px 20px ${tokens.background.main}80`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.grey[100],
          color: tokens.grey[900],
        },
      },
    },
  },
};