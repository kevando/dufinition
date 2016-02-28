# Dufine Mobile App

Combine a word definition with one of your own photos.

### Latest Release (1.7)
 - Added ability to delete.
 - Added success message on Saving new Dufine


---

## Roadmap
##### 1.8
- Prevent users from adding duplicate words
- Download dufine to camera roll (and delete other source files)
- Add onboarding
- Consolidate stylesheets
- Implement Austen's imagery/design/ui
- [Google Analytics plugin](https://github.com/idehub/react-native-google-analytics-bridge)

##### 1.9
- Sort list by letter
- Enable user tracking in Google Analytics
- Rebuild from latest react native
- Implement a loading state
- Refactor worsapi to an action using thunk middleware
- Option to export to dufine tumblr (feed)

##### 2.0
- Look into other code push options per reactjs conf

##### 2.1
- Consider using http://pouchdb.com/

---
### Changelog


**1.6.3** add icons; refactor dufine view so it share components; add 'clear state data' option to the settings page.
**6.3** changing versioning names
**6.2** ability to delete dufines; add photo to all Dufines
**6.1** upload photo; wordsapi; async storage
**6.0** Refactored entire app using redux, so there are many missing; Added new app icon (v1)
**5**   (Never existed)
**4.2** adding mixpanel tracking, and device info pacakge
**4.1** added padding to button, moved delete button, added export button new testers: stew and blake (a dude from reddit)
**3.2** New definition api (wordsapi) and stores data in a new wayupgraded to data version 4 with no migration plan.
**3.1** New UI/UX that implements Navigator instead of NavigatorIOS


---
### Developer Configuration
Todo

### Fabric build instructions
 1. Update version & build number in xcode
 2. set jsCodeLocation in ApDelegate.m
 3. `react-native bundle`--minify
 4. Set device to generic iOS device
 5. Xcode > Product > Archive
 6. Fabric > Distribute


### Adding new tester to fabric
1. Add email, he clicked it to get his udid
2. Add his udid to the apple devides on the apple website
3. Delete privsioning profile from xcode AND member center
4. Re-Create it in member center
5. Re-Add it to xcode

### Test flight notes, steps

creating itunes connect account. looks like everything is managed here.
  (I can change pricing here, etc)
* 1  new app. ios iOS wildcard bundle ID sku=dufine
    bundle ID is org.reactjs.native.example.Dufine
    https://i.imgur.com/iudaKSH.png
    Apple ID =1088592026
      this was generated for me

tried to upload, had problems
manually created and added new dist prov profile
clicked product>archive
then clicked validate.
[errored with bitcode checked.](https://imgur.com/69q4HRL)
then clicked upload to app store (uploading takes time. bitcode was
[got this error][error1]
created 640x1136 splash.png to fix this error
added it to launchimage settings
https://i.imgur.com/ir7uluO.png
**Distribute to Testers**
App is uploaded, but not quite ready to test yet [pic][processing]
Processed in about 2 minutes. Submitted to 1 tester
**Prepare for submission**
added all app information, app icon,
screenshots for all [screen sizes]

[screen sizes]: <http://stackoverflow.com/questions/25756589/itunes-connect-screenshots-sizes-for-all-ios-iphone-ipad-apple-watch-devices>
[processing]: <https://i.imgur.com/w67ZB6X.png>      
[error1]: <http://stackoverflow.com/questions/33314221/xcode-7-1-itunes-store-operation-failed-you-are-not-authorized-to-use-this-serv>



--------------------------------------------------------------------------------



#### Initial config with fabric (notes)

1. Added run script to build phases
2. Added 3 lines of code to AppDelegate.m
3. Signed up as apple developer ($99) took an hour or so to get approval (agreed my life to the dev rules)
4. Created 2 certs for my account in xcode settings
5. Updated my team identity in the project general settings
6. react-native bundle --minify

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
