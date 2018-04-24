FROM wen911119/node-alpine-with-cnpm:latest AS builder

ADD /configs /configs
ADD /plugins /plugins
ADD /src /src
ADD /web /web
ADD .babelrc .babelrc
ADD .postcssrc.js .postcssrc.js
ADD package.json package.json
RUN cnpm install
RUN npm run build:release
RUN ls

# 基础镜像
FROM nginx:stable-alpine
# 维护者信息
LABEL maintainer="wen911119@gmail.com"

COPY --from=builder /release/web /usr/share/nginx/html/

ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD start-nginx.sh /root/start-nginx.sh

EXPOSE 80

CMD ["/bin/sh", "/root/start-nginx.sh"]
