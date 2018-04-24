FROM wen911119/node-alpine-with-cnpm:latest AS builder

ADD /configs /configs
ADD /plugins /plugins
ADD /src /src
ADD /web /web
ADD .babelrc .babelrc
ADD .postcssrc.js .postcssrc.js
ADD package.json package.json
ADD webpack.config.js webpack.config.js
RUN cnpm install
RUN npm run build:release
RUN ls

# 第二阶段上传
FROM quanchengec/oss-uploader:latest
COPY --from=builder /release/web /bundle
ADD /web/web-app-shell.html /bundle/web-app-shell.html
# 低权限key上传
ARG region=oss-cn-shanghai
ARG accessKeyId=LTAIxztVmfrlIKKp
ARG accessKeySecret=DvBimmTJCJ0aFPpgy2majGkrhJa4G4
ARG bucket=ruiyun-app-banggo
RUN ls /bundle
RUN node index.js

