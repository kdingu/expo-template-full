import * as Sentry from "@sentry/react-native";

Sentry.init({
	dsn: "https://82aada68e27258c84cb0cc589ea9cca9@o4508684157714432.ingest.de.sentry.io/4510267514159184",

	// Adds more context data to events (IP address, cookies, user, etc.)
	// For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
	sendDefaultPii: true,

	// Enable Logs
	enableLogs: true,

	// Configure Session Replay
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1,
	integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

	// uncomment the line below to enable Spotlight (https://spotlightjs.com)
	// spotlight: __DEV__,
});

export default Sentry;
