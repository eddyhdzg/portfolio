import React from "react";
import { Box, RestyleText } from "atoms";
import copies from "copywriting";
import { BorderView } from "molecules";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";
import Svg, { Path } from "react-native-svg";
import ExternalLink from "./ExternalLink";
import { Linking } from "react-native";

const Contact: React.FC = () => {
  const { contact } = copies.landing;
  const theme = useTheme<Theme>();
  return (
    <Box paddingBottom="7xl" borderColor="divider" borderBottomWidth={1}>
      <RestyleText variant="sectionTitle" marginBottom="4xl">
        {contact.title}
      </RestyleText>

      <Box
        flex={1}
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
      >
        {contact.data.map((data) => (
          <BorderView
            key={data.text}
            cardVariant="bordered"
            textVariant="regular"
            justifyContent="center"
            marginBottom={{
              xs: "2xl",
              lg: 0,
            }}
            width={{
              xs: "100%",
              sm: "48%",
              lg: "32%",
            }}
          >
            <ExternalLink
              onPress={() => {
                Linking.openURL(data.url);
              }}
            >
              <Svg
                height="24px"
                width="24px"
                viewBox="0 0 24 24"
                accessibilityRole="image"
                title={data.iconTitle}
              >
                <Path d={data.path.d} fill={theme.colors.primaryText} />
              </Svg>
              <RestyleText
                variant="regular"
                marginLeft="base"
                accessibilityRole="link"
              >
                {data.text}
              </RestyleText>
            </ExternalLink>
          </BorderView>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
