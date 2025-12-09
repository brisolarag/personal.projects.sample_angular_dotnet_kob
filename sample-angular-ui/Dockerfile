from node:20-alpine as build
workdir /app

copy package*.json ./
run npm ci

copy . .

run npm run build --prod

# ----------------------

from nginx:alpine

# copy the custom nginx config
copy nginx.conf /etc/nginx/conf.d/default.conf

# removing default nginx website
run rm -rf /usr/share/nginx/html/*

copy --from=build /app/dist/sample-angular-ui/browser /usr/share/nginx/html

expose 80

cmd ["nginx", "-g", "daemon off;"]