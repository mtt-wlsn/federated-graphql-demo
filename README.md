# federated-graphql

A repository for experimenting with a federated graphql.

Commands

Build Docker Image

```bash
docker build -t federated-graphql-demo .
```

Generate and Deploy Kubernetes Manifests

```bash
helm upgrade --install federated-graphql-demo ./helmchart --create-namespace --namespace federated-graphql-demo
```
