export const useStyles = MUITheme => ({
  metamaskAccBalanceContainer: { padding: "0 19px 0" },
  accountDetails: {
    "& div": {
      display: "flex",
      margin: "7px 0 8px",
      "@media(max-width:600px)": {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      "& div": {
        width: "56%",
        marginTop: 0,
        display: "inline-block",
        "& span": {
          width: "auto",
          display: "inline-block",
          color: MUITheme.palette.text.primary,
          fontSize: 16,
          lineHeight: "20px",
          "@media(max-width: 1122px)": { fontSize: 13 },
          "@media(max-width: 960px)": { fontSize: 16 },
        },
      },
      "& > span": {
        width: "44%",
        display: "inline-block",
        color: MUITheme.palette.text.darkGrey,
        fontSize: 16,
        lineHeight: "20px",
        "@media(max-width:600px)": { width: "100%" },
      },
    },
    "& > div": {
      "@media(max-width:1280px)": {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: MUITheme.palette.text.lightGrey,
      },
      "@media(max-width:960px)": {
        flexDirection: "row",
        borderBottom: 0,
      },
      "@media(max-width:600px)": {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: MUITheme.palette.border.secondary,
      },
    },
  },
  infoIcon: {
    color: MUITheme.palette.text.disabled,
    fontSize: 18,
    marginRight: 9,
    verticalAlign: "middle",
    "@media(max-width: 1122px)": { marginRight: 5 },
    "@media(max-width: 960px)": { marginRight: 11 },
  },
  walletIdContainer: {
    paddingBottom: 18,
    "& > div": {
      boxSizing: "border-box",
      paddingLeft: 33,
    },
  },
  walletId: {
    fontSize: "14px !important",
    wordBreak: "break-all",
  },
  bgBox: {
    alignItems: "center",
    "& > div": { marginTop: "7px !important" },
    "& > span": {
      padding: "14px 6px",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#e2e2e2",
      borderRadius: 4,
      backgroundColor: "#f8f8f8",
      textAlign: "center",
      "@media(max-width:600px)": { width: "90% !important" },
    },
  },
  tabsHeader: {
    backgroundColor: "transparent",
    color: MUITheme.palette.text.lightGrey,
    boxShadow: "none",
    "& button": {
      minWidth: "auto",
      padding: 0,
      marginRight: 40,
      fontSize: 18,
      textTransform: "none",
      color: MUITheme.palette.text.lightGrey,
      fontFamily: MUITheme.typography.fontFamily,
    },
    "& .Mui-selected": {
      color: MUITheme.palette.text.primary,
      fontWeight: 600,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: MUITheme.palette.text.primary,
      "@media(max-width: 1122px)": { display: "none" },
      "@media(max-width: 960px)": { display: "block" },
    },
    "& .MuiTabs-flexContainer": {
      "@media(max-width: 1122px)": { flexDirection: "column" },
      "@media(max-width: 960px)": { flexDirection: "row" },
    },
  },
  tabsContainer: {
    marginTop: 35,
    "& > div": {
      width: "100%",
      margin: "24px 0",
      "& label": { color: MUITheme.palette.secondary.main },
      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.87) !important" },
    },
  },
  btnContainer: { textAlign: "center" },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  iconTooltipContainer: {
    width: "auto !important",
    "& > svg": {
      paddingRight: 14,
      color: MUITheme.palette.text.disabled,
      cursor: "pointer",
      fontSize: 18,
      verticalAlign: "middle",
    },
    "& p": {
      width: 377,
      padding: 16,
      borderRadius: 4,
      display: "none",
      position: "absolute",
      bottom: 25,
      background: MUITheme.palette.text.lightGrey,
      boxShadow: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
      color: MUITheme.palette.text.white,
      fontSize: 16,
      lineHeight: "20px",
    },
    "&:hover": {
      "& svg": { color: MUITheme.palette.primary.main },
      "& p": { display: "block" },
    },
  },

  switchToggleContainer: {
    "& > div": {
      width: "auto !important",
      margin: 0,
    },
    "& > label": {
      width: "100%",
      margin: 0,
      "& > span": {
        "&:first-of-type": {
          width: 55,
          height: 35,
          "& span": {
            "&.MuiSwitch-thumb": {
              width: 16,
              height: 17,
              background: MUITheme.palette.text.darkGrey,
            },
            "&:hover": {
              background: "none",
            },
          },
        },
        "&:last-of-type": {
          width: "100%",
          color: MUITheme.palette.text.darkGrey,
          fontSize: 16,
          lineHeight: "20px",
        },
      },
    },
  },
});
