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

Send subgraph schemas to Apollo Supergraph via Rover

```bash
# The Order API Schema
rover subgraph publish federated-graphql-demo@current \
  --schema ./apps/order-gql-api/schema.gql \
  --name order-gql-api \
  --routing-url http://federated-graphql-demo-order-api.federated-graphql-demo.svc.cluster.local/graphql


# The Shopper API Schema
rover subgraph publish federated-graphql-demo@current \
  --schema ./apps/shopper-gql-api/schema.gql \
  --name shopper-gql-api \
  --routing-url http://federated-graphql-demo-shopper-api.federated-graphql-demo.svc.cluster.local/graphql
```
