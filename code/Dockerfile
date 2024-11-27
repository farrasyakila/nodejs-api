# install nodejs 
FROM node:18-alpine3.20

# mkdir direktori nodejs 
RUN mkdir -p /nodejs

#pindah ke direktori
WORKDIR /nodejs

# Salin package.json dan package-lock.json (jika ada)
COPY package*.json ./

# install dependensi
RUN npm install 

#copy codigan yang ada di current directory (host) ke direktori container
COPY . .

#expose port
EXPOSE 3000

#jalankan command
CMD [ "node", "server.js" ]
