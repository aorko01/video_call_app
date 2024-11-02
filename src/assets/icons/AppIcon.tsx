import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100px"
    height="100px"
    {...props}
  >
    <Path
      fill="#c7ede6"
      d="M87.2,56.7c1.1-2.2,1.8-4.6,1.8-7.2c0-6.6-4.2-12.3-10-14.5c0,0,0,0,0,0c0-11.6-9.4-21-21-21 c-9.8,0-18,6.7-20.3,15.8c-1.5-0.5-3-0.8-4.7-0.8c-7.7,0-14,5.8-14.9,13.3C12.9,43.4,9,48,9,53.5C9,59.9,14.1,65,20.5,65 c0.2,0,0.4,0,0.5,0c0,0.2,0,0.3,0,0.5C21,76.8,30.2,86,41.5,86c6.4,0,12.2-3,15.9-7.6c2.2,2.2,5.2,3.6,8.6,3.6 c4.7,0,8.7-2.7,10.7-6.5c1.1,0.3,2.2,0.5,3.3,0.5c6.1,0,11-4.9,11-11C91,61.7,89.5,58.7,87.2,56.7z"
    />
    <Path
      fill="#fdfcef"
      d="M76.5,70.5V71h3v-0.5c0,0,4.2,0,5.5,0c2.5,0,4.5-2,4.5-4.5c0-2.3-1.8-4.2-4.1-4.5c0-0.2,0.1-0.4,0.1-0.5 c0-2.5-2-4.5-4.5-4.5c-1.4,0-2.7,0.7-3.5,1.7c-0.1-2.6-2.3-4.7-5-4.7c-2.8,0-5,2.2-5,5c0,0.4,0.1,0.9,0.2,1.3 C67,59,66.1,58.5,65,58.5c-1.8,0-3.2,1.3-3.5,3.1c-0.2,0-0.4-0.1-0.5-0.1c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5s9.5,0,9.5,0H76.5z"
    />
    <Path
      fill="#472b29"
      d="M72.5,53c-3,0-5.5,2.5-5.5,5.5c0,0,0,0,0,0c-0.6-0.4-1.3-0.5-2-0.5c-1.8,0-3.4,1.3-3.9,3c0,0-0.1,0-0.1,0 c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5h15.5c0.3,0,0.5-0.2,0.5-0.5S76.8,70,76.5,70H61c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.2,0,0.3,0 l0.1,0c0,0,0,0,0.1,0c0.2,0,0.5-0.2,0.5-0.4c0.2-1.5,1.5-2.6,3-2.6c0.9,0,1.7,0.4,2.3,1.1c0.1,0.1,0.2,0.2,0.4,0.2 c0.1,0,0.2,0,0.2-0.1c0.2-0.1,0.3-0.3,0.3-0.6c-0.1-0.4-0.2-0.8-0.2-1.2c0-2.5,2-4.5,4.5-4.5c2.4,0,4.3,1.9,4.5,4.3 c0,0.2,0.2,0.4,0.3,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.3-0.1,0.4-0.2c0.8-1,1.9-1.5,3.1-1.5c2.2,0,4,1.8,4,4c0,0.1,0,0.2,0,0.3l0,0.1 c0,0.1,0,0.3,0.1,0.4s0.2,0.2,0.3,0.2c2.1,0.2,3.6,1.9,3.6,4c0,2.2-1.8,4-4,4h-5.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H85 c2.8,0,5-2.2,5-5c0-2.4-1.7-4.4-4-4.9c0,0,0-0.1,0-0.1c0-2.8-2.2-5-5-5c-1.2,0-2.3,0.4-3.2,1.2C77.2,54.8,75.1,53,72.5,53L72.5,53 z"
    />
    <Path
      fill="#472b29"
      d="M71 60c-1.4 0-2.6 1-2.9 2.3-.4-.2-.8-.3-1.2-.3-1.2 0-2.2.9-2.4 2.1-.2 0-.4-.1-.6-.1-1.5 0-2.8 1.2-2.9 2.7 0 .1.1.3.2.3 0 0 0 0 0 0 .1 0 .2-.1.2-.2.1-1.3 1.2-2.3 2.4-2.3.2 0 .5 0 .7.1 0 0 0 0 .1 0 .1 0 .1 0 .2-.1.1 0 .1-.1.1-.2 0-1 .8-1.9 1.9-1.9.4 0 .9.2 1.2.5 0 0 .1.1.2.1 0 0 .1 0 .1 0 .1 0 .1-.1.2-.2.1-1.3 1.2-2.3 2.5-2.3.2 0 .4 0 .7.1 0 0 0 0 .1 0 .1 0 .2-.1.2-.2 0-.1 0-.3-.2-.3C71.5 60 71.3 60 71 60L71 60zM84.9 61.5c-1.3 0-2.5.9-2.9 2.2 0 .1 0 .3.2.3 0 0 0 0 .1 0 .1 0 .2-.1.2-.2.3-1.1 1.3-1.8 2.4-1.8.1 0 .2 0 .3 0 0 0 0 0 0 0 .1 0 .2-.1.2-.2 0-.1-.1-.3-.2-.3C85.2 61.5 85 61.5 84.9 61.5L84.9 61.5z"
    />
    <Path
      fill="#fff"
      d="M33.5 80h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S33.8 80 33.5 80zM36.5 80h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S36.8 80 36.5 80zM41.5 82h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5S41.8 82 41.5 82zM30.5 82h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S30.8 82 30.5 82zM27.5 82h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S27.8 82 27.5 82zM33.5 84h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S33.8 84 33.5 84zM36.5 75c-.2 0-.8 0-1 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 .8 0 1 0 .3 0 .5-.2.5-.5S36.8 75 36.5 75zM36.5 77c-.2 0-4.8 0-5 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 4.8 0 5 0 .3 0 .5-.2.5-.5S36.8 77 36.5 77zM41.5 79c-.2 0-2.8 0-3 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 2.8 0 3 0 .3 0 .5-.2.5-.5S41.8 79 41.5 79z"
    />
    <G>
      <Path
        fill="#fff"
        d="M72.5 24h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S72.8 24 72.5 24zM76.5 24h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S76.8 24 76.5 24zM81.5 26h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S81.8 26 81.5 26zM69.5 26h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S69.8 26 69.5 26zM66.5 26h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S66.7 26 66.5 26zM75.5 22h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5S75.8 22 75.5 22zM72.5 28h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S72.8 28 72.5 28z"
      />
    </G>
    <G>
      <Path
        fill="#add4a1"
        d="M52.5,26C39.5,26,29,36.5,29,49.5c0,4.5,1.2,8.6,3.4,12.2L29,72.1l10.1-3.3c3.8,2.7,8.4,4.2,13.4,4.2 C65.5,73,76,62.5,76,49.5S65.5,26,52.5,26z"
      />
      <Path
        fill="#472b29"
        d="M52.5,73.7c-4.9,0-9.5-1.4-13.5-4.1l-9.7,3.2c-0.3,0.1-0.5,0-0.7-0.2c-0.2-0.2-0.3-0.5-0.2-0.7l3.3-10.1 c-2.2-3.7-3.3-7.9-3.3-12.3c0-13.3,10.9-24.2,24.2-24.2s24.2,10.9,24.2,24.2S65.8,73.7,52.5,73.7z M39.1,68.1c0.1,0,0.3,0,0.4,0.1 c3.8,2.7,8.3,4.1,13,4.1c12.6,0,22.8-10.2,22.8-22.8c0-12.6-10.2-22.8-22.8-22.8c-12.6,0-22.8,10.2-22.8,22.8 c0,4.2,1.1,8.3,3.3,11.8c0.1,0.2,0.1,0.4,0.1,0.6L30.1,71l8.7-2.9C38.9,68.1,39,68.1,39.1,68.1z"
      />
    </G>
    <Path
      fill="#5aba9e"
      d="M67.6,38.1c-3.5-4.5-8.9-7.5-15.1-7.5c-10.4,0-18.9,8.5-18.9,18.9c0,3.9,1.2,7.6,3.3,10.6l-2,6.2l6-1.9 c3.2,2.5,7.3,4.1,11.7,4.1c10.4,0,18.9-8.5,18.9-18.9c0-1.1-0.1-2.1-0.3-3.2"
    />
    <Path
      fill="#472b29"
      d="M52.5,68.9c-4.3,0-8.4-1.4-11.8-4L35,66.8c-0.2,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.2-0.3-0.1-0.5l1.9-6 c-2.1-3.2-3.2-6.9-3.2-10.7c0-10.7,8.7-19.4,19.4-19.4c6.1,0,11.8,2.8,15.5,7.7c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.2-0.5,0.1-0.7-0.1 c-3.5-4.6-8.9-7.3-14.7-7.3c-10.1,0-18.4,8.3-18.4,18.4c0,3.7,1.1,7.3,3.2,10.3c0.1,0.1,0.1,0.3,0.1,0.4l-1.7,5.3l5-1.6 c0.2-0.1,0.3,0,0.5,0.1c3.3,2.6,7.2,4,11.4,4c10.1,0,18.4-8.3,18.4-18.4c0-1-0.1-2.1-0.3-3.1c0-0.3,0.1-0.5,0.4-0.6 c0.3,0,0.5,0.1,0.6,0.4c0.2,1.1,0.3,2.2,0.3,3.2C71.9,60.2,63.2,68.9,52.5,68.9z"
    />
    <G>
      <Path fill="#5aba9e" d="M70.5,43.6c-0.4-1.1-0.9-2.2-1.4-3.3" />
      <Path
        fill="#472b29"
        d="M70.5,44.1c-0.2,0-0.4-0.1-0.5-0.3c-0.4-1.1-0.8-2.2-1.4-3.2c-0.1-0.2,0-0.5,0.2-0.7c0.2-0.1,0.5,0,0.7,0.2 c0.6,1.1,1.1,2.2,1.5,3.3c0.1,0.3-0.1,0.5-0.3,0.6C70.6,44.1,70.5,44.1,70.5,44.1z"
      />
    </G>
    <G>
      <Path
        fill="#fdfcee"
        d="M60.1,59.6c-1.4,0-3.4-0.5-6.3-1.7c-3.8-1.5-7.6-4.6-10.7-8.8l-0.2-0.2c-0.9-1.2-2.5-3.6-2.5-6 c-0.1-1.8,0.7-3.6,2.2-4.8c0.5-0.4,1.2-0.6,1.8-0.6l0.2,0l0.7,0c0,0,0.1,0,0.2,0s0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.2 c0.2,0.2,0.3,0.4,0.4,0.7l0.8,1.7c0.6,1.4,1.1,2.5,1.2,2.7c0.1,0.1,0.3,0.5,0.1,0.9c-0.2,0.3-0.4,0.6-0.6,0.8 c-0.1,0.2-0.2,0.3-0.4,0.4l-0.1,0.1c-0.1,0.1-0.4,0.4-0.6,0.6c-0.5,0.5-0.6,1.1-0.3,1.6c1,1.6,2.2,3,3.7,4.2 c1.5,1.3,3.2,2.3,5.1,3l0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,0.9-0.2,1.2-0.5c0.5-0.5,1-1.2,1.5-1.8l0.3-0.4 c0.1-0.1,0.3-0.4,0.7-0.4c0.1,0,0.3,0,0.4,0.1c0.5,0.2,3.3,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0.2,0.1,0.3,0.2,0.3,0.4 c0,0.9-0.1,1.7-0.4,2.5c-0.5,1.2-2.5,2.4-4.1,2.7C61,59.5,60.6,59.6,60.1,59.6z"
      />
      <Path
        fill="#472b29"
        d="M45.4,38c0.1,0,0.1,0,0.2,0c0.1,0.1,0.2,0.3,0.3,0.5l0.6,1.3c0.8,1.7,1.3,3,1.4,3.2s0.1,0.3,0.1,0.4 c-0.1,0.3-0.3,0.5-0.5,0.7l-0.1,0.1c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6c-0.7,0.6-0.8,1.5-0.3,2.2 c1,1.6,2.3,3.1,3.8,4.3c1.5,1.3,3.3,2.3,5.2,3l0.2,0.1c0.3,0.1,0.6,0.2,0.9,0.2c0.6,0,1.2-0.2,1.6-0.6c0.5-0.6,1.1-1.2,1.5-1.8 l0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0,0.3,0.1c0.5,0.2,3.2,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0,0.8-0.1,1.6-0.4,2.3 c-0.4,1.1-2.2,2.1-3.7,2.4c-0.3,0.1-0.6,0.1-1.1,0.1c-1,0-2.7-0.3-6.2-1.6c-3.7-1.4-7.5-4.5-10.5-8.6l-0.2-0.2 c-0.9-1.2-2.4-3.4-2.4-5.7c-0.1-1.7,0.7-3.3,2-4.5c0.4-0.3,1-0.5,1.5-0.5c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0 C45.2,38,45.3,38,45.4,38 M45.4,37c-0.1,0-0.1,0-0.2,0h-0.6c-0.1,0-0.1,0-0.2,0c-0.8,0-1.5,0.3-2.1,0.7c0,0,0,0,0,0 c-1.6,1.3-2.4,3.3-2.4,5.2c0,2.5,1.7,5,2.7,6.3l0.2,0.2c3.1,4.2,7,7.4,10.9,8.9c3,1.2,5.1,1.7,6.5,1.7c0.6,0,1-0.1,1.3-0.1 c1.7-0.3,3.9-1.5,4.4-3c0.3-0.8,0.5-1.8,0.5-2.7c0-0.4-0.3-0.7-0.6-0.9l-0.5-0.2L64.8,53c-0.9-0.4-3.8-1.8-4.4-2 c-0.1,0-0.3-0.1-0.6-0.1c-0.7,0-1,0.5-1.1,0.6l-0.3,0.4c-0.5,0.6-0.9,1.2-1.4,1.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.2,0-0.4,0-0.5-0.1 l-0.2-0.1c-1.8-0.7-3.5-1.6-4.9-2.9c-1.4-1.2-2.6-2.6-3.6-4.1c-0.2-0.3-0.1-0.7,0.1-0.9c0,0,0.1-0.1,0.1-0.1 c0.2-0.2,0.4-0.4,0.5-0.6l0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.3-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.3-0.8-0.1-1.4 c-0.1-0.2-0.6-1.3-1.2-2.6l-0.2-0.5l-0.6-1.3c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.4-0.3-0.6-0.3C45.5,37,45.4,37,45.4,37L45.4,37 z"
      />
    </G>
    <G>
      <Path
        fill="#fdfcef"
        d="M32.5,56.5c0,0,1.6,0,3.5,0s3.5-1.6,3.5-3.5c0-1.8-1.3-3.2-3.1-3.5c0-0.2,0.1-0.4,0.1-0.5 c0-1.9-1.6-3.5-3.5-3.5c-1,0-2,0.5-2.6,1.2c-0.4-1.8-2-3.2-3.9-3.2c-2.2,0-4,1.8-4,4c0,0.2,0,0.4,0.1,0.6c-0.4-0.3-1-0.6-1.6-0.6 c-1.2,0-2.2,0.9-2.5,2.1c-0.2,0-0.4-0.1-0.5-0.1c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s7.5,0,7.5,0V57h7V56.5z"
      />
      <Path
        fill="#472b29"
        d="M34.3 52c-.1 0-.3-.1-.3-.3 0-1.2 1-2.2 2.2-2.2 0 0 .7 0 1.2.1.1 0 .2.2.2.3 0 .1-.2.2-.3.2C36.9 50 36.2 50 36.2 50c-.9 0-1.7.8-1.7 1.7C34.5 51.9 34.4 52 34.3 52zM27.5 56A.5.5 0 1 0 27.5 57 .5.5 0 1 0 27.5 56z"
      />
      <Path
        fill="#472b29"
        d="M36,57h-3.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H36c1.7,0,3-1.3,3-3c0-1.5-1.1-2.8-2.6-3 c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.2-0.1-0.4c0-0.2,0-0.3,0-0.5c0-1.7-1.3-3-3-3c-0.8,0-1.6,0.4-2.2,1c-0.1,0.1-0.3,0.2-0.5,0.1 c-0.2,0-0.3-0.2-0.4-0.4c-0.3-1.6-1.8-2.8-3.4-2.8c-1.9,0-3.5,1.6-3.5,3.5c0,0.1,0,0.3,0,0.4c0,0.2-0.1,0.4-0.2,0.5 s-0.4,0.1-0.6,0C21.9,48.2,21.4,48,21,48c-1,0-1.8,0.7-2,1.6c0,0.3-0.3,0.4-0.6,0.4c-0.2,0-0.3,0-0.5,0c-1.7,0-3,1.3-3,3 s1.3,3,3,3h7.5c0.3,0,0.5,0.2,0.5,0.5S25.8,57,25.5,57H18c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.1,0,0.2,0c0.4-1.2,1.5-2,2.8-2 c0.3,0,0.7,0.1,1,0.2c0.2-2.3,2.1-4.2,4.5-4.2c1.8,0,3.5,1.1,4.2,2.8c0.7-0.5,1.5-0.8,2.3-0.8c2.2,0,4,1.8,4,4c0,0,0,0.1,0,0.1 c1.7,0.4,3,2,3,3.9C40,55.2,38.2,57,36,57z"
      />
      <Path
        fill="#472b29"
        d="M30.5,56c-0.2,0-0.8,0-1,0c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,0.8,0,1,0c0.3,0,0.5-0.2,0.5-0.5 S30.8,56,30.5,56z"
      />
    </G>
  </Svg>
);
export default SVGComponent;
