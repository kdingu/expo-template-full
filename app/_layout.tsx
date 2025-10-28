import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { posthog } from "@/utils/posthog/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PostHogProvider } from "posthog-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "@/global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<PostHogProvider client={posthog}>
			<QueryClientProvider client={queryClient}>
				<GestureHandlerRootView>
					<GluestackUIProvider>
						<Stack screenOptions={{ headerShown: false }}></Stack>
					</GluestackUIProvider>
				</GestureHandlerRootView>
			</QueryClientProvider>
		</PostHogProvider>
	);
}
