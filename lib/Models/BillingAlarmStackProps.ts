import { StackProps } from "aws-cdk-lib";
import { BillingAlarmProps } from 'aws-cdk-billing-alarm';

interface ExtendedBillingAlarmProps extends BillingAlarmProps {
    id: string;
}

export interface BillingAlarmStackProps extends StackProps {
    billingAlarm: ExtendedBillingAlarmProps;
}
  