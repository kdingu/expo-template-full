import PostHog from "posthog-react-native";

export const posthog = new PostHog(String(process.env.POSTHOG_API_KEY), {
	host: "https://eu.i.posthog.com",
});
