#!/bin/bash

# https://docs.aws.amazon.com/codeartifact/latest/ug/npm-yarn.html#npm-yarn-configure-yarn-command
export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token --domain hdnet --domain-owner 262788382628 --query authorizationToken --output text --profile Infrastructure.AccessCodeArtifact)
