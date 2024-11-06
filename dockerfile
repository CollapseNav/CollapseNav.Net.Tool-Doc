FROM node:lts-alpine as initnode
WORKDIR /src
COPY ./package.json ./package.json
RUN yarn config set registry https://registry.npmmirror.com/ && yarn install

FROM initnode as build
WORKDIR /src
COPY ./ ./
RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
EXPOSE 80
ENV TZ=Asia/Shanghai
COPY --from=build /src/build ./
CMD ["nginx", "-g", "daemon off;"]