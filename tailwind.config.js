/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      width:{
        logoWidth:'180px',
        loginLogoWidth:'240px',
      },
      height:{
        logoHeight:'17px',
        logoLoginHeight:'22px',
      },
      backgroundColor:{
        loginBtn:"#2B3D90",
        navbarItemActive:"rgba(55, 125, 255, 0.05)",
        modalFixedBg:"rgba(0, 0, 0, 0.15)",
        languageBg:"#F2F2F2",
        newBtnBg:"#0BCC23",
        saleBtnBg:"#FF5C5C",
        xitProductBtnBg:"#FF3A3A",
        defaultBtnBg:"#F2F2F2",
        recomendBtnBg:"#22B0F8;",
        addProductSizeBtnBg:"#9CDAFF",
      },
      colors:{
        forgotPasswordColor:'#4F46E5',
        inputPleacholderColor:'#B4B6B8',
        ruUzUsColors:"#2B3D91",
      },
    },
  },
  plugins: [],
}