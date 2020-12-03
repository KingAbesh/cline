import { Text } from "@chakra-ui/react";


export const CustomText = ({content, pt, ml}) => (
    <Text as="span" color="grey" textAlign="start" fontWeight="500" cursor="pointer" fontSize="1.1rem" pt={pt} ml={ml}>{content}</Text>
  )