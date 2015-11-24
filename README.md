awesome list of resources
https://github.com/jondot/awesome-react-native

Add this to README

config changes for fabric

added run script to build phases
added 3 lines of code to AppDelegate.m


dist with fabric

signed up as apple developer ($99) took an hour or so to get approval

(agreed my life to the dev rules)
created 2 certs for my account in xcode settings
updated my team identity in the project general settings

send to iOS Device
archive

in fabric, click distribute
Send to tester
open link in mobile safari and install crashanlytics

*Downloaded to phone but does not work
	not sure if its a uuid thing or react-native didnt export correctly
	
uncommented a js line in the AppDelegate.m and ran
react-native bundle --minify

tried figuring out a way to deploy without fabric, but archiving again and trying again

2nd build not showing up :/

xcode was out of date

2015.11.17
adding CameraRoll. need to link the library
https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content

2015.11.23
adding 
	react-native-fs (so far, didnt do waht i thought it would)
	react-native-view-snapshot

---- Fabric build instructions
update version/build values
set jsCodeLocation in ApDelegate.m
react-native bundle
set iOS device 
product > archive 
Fabric > distribute


