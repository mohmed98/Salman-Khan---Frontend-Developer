import { Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import bannerImage from "../assets/banner.avif";

const Banner = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={bannerImage}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      ></VStack>
    </Flex>
  );
};
export default Banner;
