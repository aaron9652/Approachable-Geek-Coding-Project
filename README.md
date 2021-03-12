# Approachable-Geek-Coding-Project

Before running the user profile editor as an Android application, your device will need some tools. However, you may run the application through your browser by running the ```ionic serve``` command in the **userprofile** directory. 

Some of these tools may require setting up, such as Java JDK or Android SDK.

### Tools
* ###### [Node.js](https://nodejs.org/en/)
  * Download the latest version according to your OS
* ###### [Android Studio](https://developer.android.com/studio)
  * This will give you the SDK and Android emulated device needed to run the app
* ##### [Java JDK](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
  * This will give you our Java JDK for Java development. 
* ###### [Gradle](https://gradle.org/install/)
  * Gradle will act as the build tool for the application. 
* ##### [Ionic](https://ionicframework.com/docs/intro/cli)
  * Ionic framework that runs our application. 

### Set-up
After downloading the repository, you need to ensure your tools and their paths on your machine are set up. If any of these tools are not already set-up on your machine, links for configuration are shown below. 

* [Android SDK](https://www.dev2qa.com/how-to-set-android-sdk-path-in-windows-and-mac/)
* [Java JDK](https://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux)
* [Gradle](https://gradle.org/install/)
  * If you run into an issue of Gradle not being found, you might not have permissions in your command line to access those files. You can work-around this issue by running the command line with admin privs.  

After ensuring your tools are set-up correctly, you can open the user profile editor in a command line. 

*Depending on the installation location of some of your tools, you might need to run your command line with admin privs.*

Navigate to the **userprofile** folder within the project. 

Run ```npm install```, this will download any needed packages or dependencies for the project. 

Some packages and dependencies may not install with the application. The following are some instructions for further set-up of the application. 

* Install Angular DevKit ```npm install @angular-devkit/core```
* Install Firebase ```npm install firebase```
* Install ionic-native ```npm install @ionic-native/core```
* Install web-view ```cordova plugin add cordova-plugin-ionic-webview```
* Install whitelist ```cordova plugin add cordova-plugin-whitelist```

If other packages happen to be missing from the project and your build fails, they can be added through node.js.

Start Android Studio and start one of your virtual devices. 

After the virtual device is started and connected to the internet, we can run ```ionic cordova emulate android``` in our command line that is navigated to the project. This will build the project and run it through our virtual device. 
