import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Index() {
	return (
		<Box className="flex-1 justify-center items-center">
			<Heading>Heading component</Heading>
			<Text>This is Text component</Text>
		</Box>
	);
}
