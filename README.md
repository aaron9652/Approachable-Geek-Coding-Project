# Approachable-Geek-Coding-Project

Before running the user profile editor, your device will need some tools.

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

### Set-up
After downloading the repository, you need to ensure your tools and their paths on your machine are set up. If any of these tools are not already set-up on your machine, links for configuration are shown below. 

* [Android SDK](https://www.dev2qa.com/how-to-set-android-sdk-path-in-windows-and-mac/)
* [Java JDK](https://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux)
* [Gradle](https://gradle.org/install/)

After ensuring your tools are set-up correctly, you can open the user profile editor in a command line. 

*Depending on the installation location of some of your tools, you might need to run your command line with admin privs.*

Navigate to the **userprofile** folder within the project. 

Run ```npm install```, this will download any needed packages or dependencies for the project. 

Start Android Studio and start one of your virtual devices. 

After our virtual device is started and connected to the internet, we can run ```ionic cordova emulate android``` in our command line that is navigated to our project.
