#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BillingAlarmStack } from '../lib/grebban-aws-billing-notifications-stack';
import * as YAML from 'yaml';
import * as fs from 'fs';

const app = new cdk.App();
const config = YAML.parse(fs.readFileSync('grebban-aws-billing-notifications.yml', 'utf8'));

new BillingAlarmStack(app, 'GrebbanAwsBillingNotificationsStack', {
  // Billing Alarms must reside in us-east-1 region according to below link 
  // https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html#creating_billing_alarm_with_wizard
  env: { region: 'us-east-1' },
  billingAlarm: {
    id: config.id,
    monthlyThreshold: config.monthlyThreshold,
    emails: config.emails,
  }
});