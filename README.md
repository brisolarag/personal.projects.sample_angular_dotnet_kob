# Biggest changes when going to DELL deployment
<br>
´´´Expected steps´´´
<br>
1. build the docker image
2. push into harbor.dell.com/dfs-asset-harbor-registry
3. run the helm upgrade command

## DNS and real domains
- probably need to request a dns entry (I'ts probably availible at the dell digitalcloud)


## ImagePullSecrets
- cluster permissions to download the images from the recure registry (how to do?)

## Secrets
- kubernetes secrets (how to do?)
- hashicorp vault


| Feature               | Local Dev                 | Company Prod                              |
| ------------          | -----------------------   | -------------------------------------     |
| **Access**            | port-forward / localhost  | Real URL (https://app.corp.com)           |
| **Images**            | Local Docker Cache        | Private Registry (Artifactory/ACR)        |
| **Config**            | values.dev.yaml           | values.prod.yaml                          |
| **Secrets**           | Plain text                | Kubernetes Secrets / Vault                |
| **Deployment**        | Manual helm upgrade       | GitHub Actions / Azure DevOps Pipeline    |
| **SSL**               | None (HTTP)               | Real Certificates (HTTPS)                 |