# CorLife Front End Coding Exercise

Welcome!

We have the following tasks for you to attempt. You'll find each task marked as a TODO in the codebase. If you're using webstorm, you can find these using the TODO find.
Feel free to add any comments to the tasks below; if you found anything particularly challenging, for example.

First fork this repo, clone it, install any dependencies and run on either the iOS Simulator, Android Emulator or a real device.

Once you've finished, commit and push to your fork and send a link to the fork back to us.

You don't need to spend more than a couple of hours on this and don't worry about completing everything.

### TASK 01

Rename the title of the Home screen component from "Home" to "Participants".

Comments: Changed component filename, component name, updated imports in app.js and tests. Also updated route name, and changed navigations to Participants.

### TASK 02

Add the CorLife logo (located in assets/images/splash.png) to the Splash screen component - make sure the image is centered horizontally and vertically and has width and height equal to 1/2 of the Device width.

Comments: Done, kept aspect ratio also.

### TASK 03

There is a console warning message on the Home screen component - try to fix this. Hint: there are multiple ways to do this.

Comments: Flatlist elements missing key, added.

### TASK 04

Add navigation from each Participant in the list of Participants to the Participant detail screen component. You will need to pass each `participant` object, so that the Participant detail screen component can access this data.

Comments: Added onPress function, brought in navigation props and navigated to Participant, sending data as route params.

### TASK 05:

Add the `gender` field to the GraphQL query `character` and display this in the Participant detail screen component. You should ensure name is left-aligned and the gender is right-aligned,

Comments: Added gender in /src/data/queries - Aligned to the right, not 100% sure it is exactly how you wanted as I was unsure what you meant but it is aligned to the right. Also added padding.

### TASK 06:

There's an issue in building for Android; try to fix this. Run `yarn run android` to build for Android.

Comments: Changed compileSdkVersion in the build.gradle to 29

### TASK 07:

Fix the test Home.test.js so that it correctly asserts the existence of each Participant in the list.

Comments: Renamed to Participants, changed imported component to Participants, added gender to the GraphQL mock, added tests checking for the name data.

Any other feedback? Feel free to let us know!

Comments: Had to force install a couple of dependencies. Runs on IOS and Android.
