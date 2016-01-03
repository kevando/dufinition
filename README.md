# Dufined

**Dufined** is a mobile app designed to provide humor for humans.

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


## Changelog

### 3.2
New definition api and new way to store data

### 3.1 
New UI/UX that implements Navigator instead of NavigatorIOS

