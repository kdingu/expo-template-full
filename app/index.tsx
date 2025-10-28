import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { usePostHog } from "posthog-react-native";
import { useEffect } from "react";

export default function Index() {
	const posthog = usePostHog();

	useEffect(() => {
		posthog.capture("page_view", { page: "index" });
	}, [posthog]);

	return (
		<Box className="flex-1 justify-center items-center">
			<Heading>Heading component</Heading>
			<Text>This is Text component</Text>
		</Box>
	);
}
