FROM node:alpine as build
WORKDIR /src
COPY ./ ./
RUN yarn config set registry https://registry.npmmirror.com/ && yarn && yarn run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
EXPOSE 80
ENV TZ=Asia/Shanghai
COPY --from=build /src/build ./
CMD ["nginx", "-g", "daemon off;"]