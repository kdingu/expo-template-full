import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { posthog } from "@/utils/posthog/client";
import Sentry from "@/utils/sentry/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PostHogProvider } from "posthog-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

import "@/global.css";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<PostHogProvider client={posthog}>
			<QueryClientProvider client={queryClient}>
				<KeyboardProvider>
					<GestureHandlerRootView>
						<GluestackUIProvider>{children}</GluestackUIProvider>
					</GestureHandlerRootView>
				</KeyboardProvider>
			</QueryClientProvider>
		</PostHogProvider>
	);
};

const RootLayout = () => {
	return (
		<Providers>
			<Stack screenOptions={{ headerShown: false }}></Stack>
		</Providers>
	);
};

export default Sentry.wrap(RootLayout);
