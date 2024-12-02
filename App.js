import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LogLevel, OneSignal } from "react-native-onesignal";

const ONESIGNAL_APP_ID = "";

const initializeNotifications = (openInboxNotification) => {
  if (__DEV__) return;
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(ONESIGNAL_APP_ID);
  OneSignal.Notifications.requestPermission(true);
  OneSignal.Notifications.addEventListener("click", (event) => {
    openInboxNotification(event.notification);
  });
};

export default function App() {
  useEffect(() => {
    initializeNotifications(() => {});
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
