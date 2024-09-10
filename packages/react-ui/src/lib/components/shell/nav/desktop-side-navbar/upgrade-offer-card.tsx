import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../shadcn-ui";

export const UpgradeOfferCard = () => (
    <div className="mt-auto">
      <Card className="p-3">
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );