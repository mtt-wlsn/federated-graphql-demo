# Federated GraphQL Demo Using Apollo

This repository holds a simple demo application I created while experimenting with GraphQL Federation using Apollo Studio and the Apollo Router. The application is written in NestJS and contains two applications. The order app which is responsible for a simple order entity and the shopper app which is responsible for the shopper entity.

# Debugging Individual APIs Locally

After cloning the repository, run the following commands:

```bash
# Install the dependencies
yarn install

# Build the solution
yarn build

# Run the Order Service GraphQL Api
yarn start:order:debug

# Run the Shopper Service GraphQL Api
start:shopper:debug
```

# Running Locally with Federation (using Kubernetes)

### Build Docker Image

```bash
docker build -t federated-graphql-demo .
```

### Generate and Deploy Kubernetes Manifests

```bash
helm upgrade --install federated-graphql-demo ./helmchart --create-namespace --namespace federated-graphql-demo
```

### Setup Apollo Studio Account and Supergraph

At this point you need to create an account with [Apollo Studio](https://studio.apollographql.com/). Next, create a new Supergraph within Studio. Make sure you save the generated Apollo Key for later use.

### Send subgraph schemas to Apollo Supergraph via Rover

```bash
# The Shopper API Schema
rover subgraph publish your-supergraph-name-here \
  --schema ./apps/shopper-gql-api/schema.gql \
  --name shopper-gql-api \
  --routing-url http://federated-graphql-demo-shopper-api.federated-graphql-demo.svc.cluster.local/graphql

# The Order API Schema
rover subgraph publish your-supergraph-name-here \
  --schema ./apps/order-gql-api/schema.gql \
  --name order-gql-api \
  --routing-url http://federated-graphql-demo-order-api.federated-graphql-demo.svc.cluster.local/graphql
```

### Create the Router

```bash
helm upgrade --install --set managedFederation.apiKey="REDACTED" --set managedFederation.graphRef="your-supergraph-name-here" --create-namespace --namespace router-deploy federated-graphql-demo-router oci://ghcr.io/apollographql/helm-charts/router --version 1.0.0-rc.11 --values ./helmchart/router-values.yaml
```

### Update the Apollo Studio Supergraph Connection String

Finally, update the Apollo Studio Supergraph connection settings with the URL generated from the k8s when forwarding the routers service port.

If you don't wish to use Kubernetes you can easily spin up the Apollo Router locally using the binary. [Visit this page for instructions.](https://www.apollographql.com/docs/router/quickstart#running-the-binary)
