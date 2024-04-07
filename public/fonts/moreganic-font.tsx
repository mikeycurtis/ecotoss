import { localFont } from "@next/font/local";

export const moreganicFont = localFont({
  src: [
    {
      path: "/fonts/Moreganic.woff", // Use WOFF2 for better performance
      format: ["woff2", "woff"],
    },
  ],
  weight: ["400"], // Optional: Specify font weights you want to load
  style: "normal", // Optional: Specify font style (normal, italic)
  displayName: "Moreganic", // Optional: Define a display name
});
