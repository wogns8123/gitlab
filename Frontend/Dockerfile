FROM node:16.15.0 as build-stage
WORKDIR /var/jenkins_home/workspace/react
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage
# RUN apk update && apk add certbot

COPY --from=build-stage /var/jenkins_home/workspace/react/build /usr/share/nginx/html
#Nginx 추후 설정
COPY --from=build-stage /var/jenkins_home/workspace/react/nginx_conf/nginx.conf /etc/nginx/conf.d/default.conf

# RUN mkdir /etc/nginx/ssl
#COPY ./fullchain2.pem /etc/nginx/ssl/
#COPY ./privkey2.pem /etc/nginx/ssl/
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g","daemon off;"]
