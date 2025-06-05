## This is...
A AWS CDK app with a Billing Alarms contstruct used for creating Billing Alarms with email notifications to your AWS account.

It adds a Billing Alarm and a SNS Topic and Subscription for the configured email address.

## Prerequisites

- Billing Alerts (sends billing data to ClodWatch) must be active in your AWS account. (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/gs_monitor_estimated_charges_with_cloudwatch.html#gs_turning_on_billing_metrics)
- Install and config AWS CLI
- Install AWS CDK

## Config
Set your preferences in `billing-alarms.yml`

## Usage
- Install and config AWS CLI and AWS CDK
- Make sure you're on the correct AWS account
- Set your prefs in the config file (`billing-alarms.yml`)
- `cdk synth` creates the CloudFormation files locally for review
- `cdk deploy` (creates and) deploys the CloudFormation files to your AWS account