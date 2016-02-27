# Dufine Mobile App

Lets you combine your own photo with a word definition.

### Latest Release (1.7)
 - Enable delete.
 - Success message on Saving new Dufine

---

## Roadmap
##### 1.8
- searching for a word you already have brings up the word
- download image to roll
- include better fabric tracking, exluding simulator
- add austen's imagery/design
- bug: deal with definition loop as fragment warning

##### 1.9
- Submit this to the app store via testflight
- Apply austens style/ui
- Sort list by letter
- Refactor worsapi to an action using thunk middleware

##### 2.0
- deploy to testflight
- look into other code push options

##### 2.1
- Consider using http://pouchdb.com/

---
### Changelog


##### 1.6.3
add icons
refactor dufine view so it share components
add 'clear state data' option to the settings page.
##### 6.3 changing naming structure

##### 6.2

delete dufine
add photo to all Dufines

##### 6.1
upload photo
wordsapi
async storage

##### 6.0
Refactored entire app using redux, so there are many mussing features
Added new app icon (v1)

##### 5 (Never existed)

##### 4.2
adding mixpanel tracking, and device info pacakge

##### 4.1
added padding to button, moved delete button, added export button
new testers: stew and blake (a dude from reddit)

##### 3.2
New definition api (wordsapi) and stores data in a new way
upgraded to data version 4 with no migration plan.

##### 3.1
New UI/UX that implements Navigator instead of NavigatorIOS


---
## Developer Configuration

- Pull latest code from master
- Install react-native npm
    $ npm install -g react-native-cli
- Install https://github.com/marcshilling/react-native-image-picker
- Install https://github.com/johanneslumpe/react-native-fs
- Install https://github.com/jsierles/react-native-view-snapshot
- Install https://github.com/thewei/react-native-store
- Select a devide and build!



## Fabric build instructions
update version/build values
set jsCodeLocation in ApDelegate.m
$ react-native bundle
set iOS device
product > archive
Fabric > distribute

## Adding new tester to fabric
Add email, he clicked it to get his udid
Add his udid to the apple devides on the apple website
Delete privsioning profile from xcode AND member center
Re-Create it in member center
Re-Add it to xcode


## Resources
- https://github.com/jondot/awesome-react-native
- https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content


## Initial config with fabric

- added run script to build phases
- added 3 lines of code to AppDelegate.m
- signed up as apple developer ($99) took an hour or so to get approval
(agreed my life to the dev rules)
created 2 certs for my account in xcode settings
updated my team identity in the project general settings

send to iOS Device
archive

in fabric, click distribute
Send to tester
open link in mobile safari and install crashanlytics


uncommented a js line in the AppDelegate.m and ran
react-native bundle --minify

tried figuring out a way to deploy without fabric, but archiving again and trying again

2nd build not showing up :/

xcode was out of date


---- Fabric build instructions
update version/build values
set jsCodeLocation in ApDelegate.m
react-native bundle
set iOS device
product > archive
Fabric > distribute

---- Fabric Distribution
trying to te hoffman the app
added his email, he clicked it to get his udid
i added his udid to the apple devides on the apple website
i resent him the same build, but i dont think the email sent
i made a small change to the app, changed the build # and resent him
had trouble. and i needed to go into xcode and delete, then redownload the provisioning profile
sending this ro rob, it didnt work the first tiem (at least it said his udid wasnt there in the fabric dist)
i also changed the provision profile inthe build settings

Deleted the provisioning profile in member center
redownloaded in xcode




## Notes on learning react-native
  "state" is an object to track and respond to user's input
  each component gets its own instance of state
  when state changes, the component re-renders



# Notes on learning redux
#### Redux overview

Manages the app state, which is different from the component state. Never manipulate the app state in a reducer. Only create new states. A component can be a cunction or a class component. if we do not manipulate the app state.

store is the state I think

#### Terminology

 - **Containers:** Components that talk to redux
 - **Controlled Input** state driven input
 - **Middleware:** Takes in an action and either does nothing, it can stop it or change the action. I think it returns a promise


 Leaving off..
just got listview to show. I think it depends on the component state, not the app state.
http://marconijr.com/post/react-native-and-redux/
I should ask the discord group



### updating the app icon
create images in  the 4 different sizes (29,57,80,120)
copy images to Supporting Files in the project navigator
