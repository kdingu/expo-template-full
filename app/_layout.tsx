import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "@/global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<GestureHandlerRootView>
				<GluestackUIProvider>
					<Stack screenOptions={{ headerShown: false }}></Stack>
				</GluestackUIProvider>
			</GestureHandlerRootView>
		</QueryClientProvider>
	);
}
