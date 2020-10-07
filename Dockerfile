FROM node:10 as BUILD
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build 

FROM nginx
EXPOSE 80
COPY --from=BUILD /usr/src/app/dist/cc-angular-frontend /usr/share/nginx/html