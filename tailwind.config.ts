import type { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-gradient":
          "radial-gradient(88.57% 88.57% at 50% 50%, rgba(0,126,187,0.09) 0%, rgba(37,37,37,0.3) 100%)",
        "button-gradient":
          "radial-gradient(88.57% 88.57% at 50% 50%, rgba(104, 197, 242, 0.3) 0%, rgba(37, 37, 37, 0.3) 100%)",
        "onboard-gradient":
          " radial-gradient(88.57% 88.57% at 50% 50%, rgba(7, 44, 21, 0.3) 0%, rgba(37, 37, 37, 0.3) 100%);",
        "primary-gradient":
          " linear-gradient(90deg, rgba(135, 85, 216, 0.5) 0%, rgba(246, 157, 123, 0.5) 100%)",
      },
      borderImage: {
        "card-gradient":
          "linear-gradient(166.12deg, rgba(229, 229, 229, 0.3) -22.36%, rgba(127, 127, 127, 0.3) 82.81%)",
      },
      colors: {
        blackLight: "#181818",
        blackLightFull: "#1E1E1E",
        blackDark: "#131313",
        grayLight: "#474747BD",
        grayDark: "#3D3D3D",
        grayLightFull: "#484848",
      },
    },
  },
  plugins: [daisyui],
}
export default config
