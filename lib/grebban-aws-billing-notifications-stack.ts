import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BillingAlarm } from 'aws-cdk-billing-alarm';
import { BillingAlarmStackProps } from './Models/BillingAlarmStackProps';

export class BillingAlarmStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BillingAlarmStackProps) {
    super(scope, id, props);

    // Create billing alarm with provided configuration
    new BillingAlarm(this, props.billingAlarm.id, props.billingAlarm);
  }
}
