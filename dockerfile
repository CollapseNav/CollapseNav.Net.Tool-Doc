# 使用node镜像通过 package.json 安装依赖, 由于 package.json 一般不会频繁变更, 所以此处可作为缓存层
FROM node:lts-alpine as initnode
WORKDIR /src
COPY ./package.json ./package.json
RUN yarn config set registry https://registry.npmmirror.com/ && yarn install

# 使用已经包含依赖的镜像进行构建, 但是由于每次构建时的文档内容一般都会有更改, 所以此处不作为缓存层
FROM initnode as build
WORKDIR /src
COPY ./ ./
RUN yarn build

# 使用nginx镜像作为最终的运行环境, 将构建好的静态文件复制到nginx的默认目录下, 并暴露80端口, 设置时区为上海
# 这里的镜像相比原来的nginx:alpine, 主要添加了上面 build 阶段生成的静态文件
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
EXPOSE 80
ENV TZ=Asia/Shanghai
COPY --from=build /src/build ./
CMD ["nginx", "-g", "daemon off;"]