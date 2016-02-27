# Dufine Mobile App

Combine a word definition with one of your own photos.

### Latest Release (1.7)
 - Added ability to delete.
 - Added success message on Saving new Dufine


---

## Roadmap
##### 1.8
- Searching for an existing word brings up the word
- Download dufine to camera roll
- Implement Austen's imagery/design/ui
- Bug: deal with definition loop as fragment warning

##### 1.9
- Sort list by letter
- Rebuild from latest react native
- Enable proper answers tracking
- Refactor worsapi to an action using thunk middleware

##### 2.0
- Look into other code push options per reactjs conf

##### 2.1
- Consider using http://pouchdb.com/

---
### Changelog


##### 1.6.3
add icons; refactor dufine view so it share components; add 'clear state data' option to the settings page.
##### 6.3 changing versioning names

##### 6.2

ability to delete dufines; add photo to all Dufines

**6.1** upload photo; wordsapi; async storage

**6.0** Refactored entire app using redux, so there are many missing; Added new app icon (v1)

**5** (Never existed)
**4.2** adding mixpanel tracking, and device info pacakge

**4.1** added padding to button, moved delete button, added export button new testers: stew and blake (a dude from reddit)
**3.2** New definition api (wordsapi) and stores data in a new way
upgraded to data version 4 with no migration plan.
**3.1** New UI/UX that implements Navigator instead of NavigatorIOS


---
### Developer Configuration
Todo

### Fabric build instructions
 1. Update version & build number in xcode
 2. set jsCodeLocation in ApDelegate.m
 3. `react-native bundle`
 4. Set device to generic iOS device
 5. Xcode > Product > Archive
 6. Fabric > Distribute


### Adding new tester to fabric
1. Add email, he clicked it to get his udid
2. Add his udid to the apple devides on the apple website
3. Delete privsioning profile from xcode AND member center
4. Re-Create it in member center
5. Re-Add it to xcode


#### Resources
- https://github.com/jondot/awesome-react-native
- https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content


#### Initial config with fabric (notes)

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
