import {
  BlockStack,
  InlineStack,
  Button,
  Card,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { ExternalIcon } from "@shopify/polaris-icons";
import { useRouter } from "next/router";

const InfoPage = () => {
  const router = useRouter();
  return (
    <>
      <Page
        title="Page Title"
        backAction={{
          onAction: () => {
            router.push("/");
          },
        }}
      >
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text variant="headingMd">Wishlist App Repo</Text>
                <Text>Take a look at the code for the wishlist app</Text>
                <InlineStack align="end">
                  <Button
                    external
                    icon={ExternalIcon}
                    variant="primary"
                    onClick={() => {
                      window?.open(
                        "https://github.com/devmikeio/devmike-wishlist-app",
                        "_blank"
                      );
                    }}
                  >
                    View Code
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default InfoPage;
