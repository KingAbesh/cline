import {  Flex, Text } from "@chakra-ui/react"

export const RoundedButton = ({ children, color, content, px, ml }) => {
    return (
        <Flex backgroundColor={color} borderRadius="50%" w={px} h={px} justify="center" ml={ml} boxShadow="0px 0px 6px -1px rgba(0,0,0,0.75)">
            <Flex align="center" ><Text as="p" color="white" fontWeight="bold" fontSize="120%" verticalAlign="middle">{content}</Text></Flex>
        </Flex>
    )
}
