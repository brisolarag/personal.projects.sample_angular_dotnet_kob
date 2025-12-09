# Biggest changes when going to DELL deployment

## Expected steps
- build the docker image
- push into harbor.dell.com/dfs-asset-harbor-registry
- run the helm upgrade command

### DNS and real domains
- probably need to request a dns entry (I'ts probably availible at the dell digitalcloud)


### ImagePullSecrets
- cluster permissions to download the images from the recure registry (how to do?)

### Secrets
- kubernetes secrets (how to do?)
- hashicorp vault


### Changes overview
| Feature               | Local Dev                 | Company Prod                              |
| ------------          | -----------------------   | -------------------------------------     |
| **Access**            | port-forward / localhost  | Real URL (https://app.corp.com)           |
| **Images**            | Local Docker Cache        | Private Registry (Artifactory/ACR)        |
| **Config**            | values.dev.yaml           | values.prod.yaml                          |
| **Secrets**           | Plain text                | Kubernetes Secrets / Vault                |
| **Deployment**        | Manual helm upgrade       | GitHub Actions / Azure DevOps Pipeline    |
| **SSL**               | None (HTTP)               | Real Certificates (HTTPS)                 |