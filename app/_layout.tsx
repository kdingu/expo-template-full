import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "@/global.css";

export default function RootLayout() {
	return (
		<GestureHandlerRootView>
			<GluestackUIProvider>
				<Stack screenOptions={{ headerShown: false }}></Stack>
			</GluestackUIProvider>
		</GestureHandlerRootView>
	);
}
