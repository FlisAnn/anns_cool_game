[![Netlify Status](https://api.netlify.com/api/v1/badges/d61e8aa5-594b-412c-a614-b44f86302282/deploy-status)](https://app.netlify.com/sites/annscoolgame/deploys)

Screenshot 2020-11-27 at 01.15.13
## Components

1. DisplayGameSite (blue): contains the entirety of the page. always visible
2. Header (dark red): contains header. always visible
3. Footer (light blue): contains footer. always visible
4. DisplayPlayers (dark green): always visible
  * DisplayHuman (light green): always visible
    * DisplayOptions (yellow): are updated: states: ChooseItem and ItemClicked
  * DisplayComputer (orange): always visible
    * DisplayOptions (yellow): are updated: states: default:choosen
5. DisplayPlayButton (light orange): contains start new game functionality
6. DisplayRules (purple): contains the rules for the game. Always visible
7. DisplayResult (pink):is updated. GameNotStarted=Invisible GameEnded: Visible. Displays win, lose, tie.


