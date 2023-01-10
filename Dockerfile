FROM node:16.19.0-bullseye as builder
WORKDIR /app

# Copy over application files
COPY ["package.json", "yarn.lock", ".yarnrc.yml", "./"]
COPY ["./.yarn/releases", "./.yarn/releases"]

# RUN ls -a

# Install and then copy dependencies
RUN yarn install --frozen-lockfile
COPY . .

# Build the application
RUN yarn build


FROM node:16.19.0-bullseye
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 80