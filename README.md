# Expo OneSignal FullStory Compatibility Issue

This repository demonstrates an incompatibility between the OneSignal and FullStory libraries when building an iOS app using EAS (Expo Application Services). 

## Overview

The issue occurs specifically on iOS builds. Android builds work as expected without errors.

### Reproducing the Issue
To replicate the error:
1. Build the project locally for iOS using EAS.
2. Observe the behavior depending on the order of the plugins in `app.json`.

### Behavior Details
- **OneSignal first, FullStory second**:  
   - An error occurs during the FullStory plugin step.  
   - The iOS build fails to execute essential steps, such as:  
     - Copying the `Info.plist` file.  
     - And that's why the fullstory bundle upload doesn't work.  

- **FullStory first, OneSignal second**:  
   - A build error occurs during the OneSignal step.  
   - The build process fails with the following message:  
     ```
     GoCoio/OneSignalNotificationServiceExtension: 'OneSignalFramework/OneSignalFramework.h' file not found
     ```
    - Related issue: https://github.com/OneSignal/onesignal-expo-plugin/issues/154

### Notes
- The issue is isolated to iOS builds when using these libraries together.
- Android builds are not affected and work as expected regardless of plugin order.
