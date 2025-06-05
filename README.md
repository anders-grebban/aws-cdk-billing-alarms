## This is...
An AWS CDK app with a Billing Alarms construct used for creating Billing Alarms with email notifications to your AWS account.

It adds a Billing Alarm and an SNS Topic and Subscription for the configured email address.

## Prerequisites

- Billing Alerts (sends billing data to CloudWatch) must be active in your AWS account. (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/gs_monitor_estimated_charges_with_cloudwatch.html#gs_turning_on_billing_metrics)
- Install and configure AWS CLI
- Install AWS CDK

## Config
Set your preferences in `billing-alarms.yml`

```json
id: CustomerXBillingAlarm // The name used in AWS for the Billing Alarm
monthlyThreshold: 2000 // The threshold in USD for triggering the notifications
emails: // List of email addresses. Each address will add a SNS Subscription to the created SNS Topic.
  - user@example.com
```

## Usage
- Install and configure AWS CLI and AWS CDK
- Make sure you're on the correct AWS account
- Set your preferences in the config file (`billing-alarms.yml`)
- `cdk synth` creates the CloudFormation files locally for review
- `cdk deploy` (creates and) deploys the CloudFormation files to your AWS account