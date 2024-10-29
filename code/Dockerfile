# install nodejs 
FROM node:18-alpine3.20

# mkdir direktori nodejs 
RUN mkdir -p /nodejs

#pindah ke direktori
WORKDIR /nodejs


# Salin package.json dan package-lock.json (jika ada)
COPY package*.json ./

#install npm
#RUN npm install -g npm@latest

#run npm
#RUN npm init
#RUN npm install --save express mysql body-parser
#RUN npm install mysql2

# install dependensi
RUN npm install 

#copy codigan yang ada di current directory (host) ke direktori container
COPY . .

#cat file conn.js yang dicopy ke container
#RUN cat conn.js


#expose port
EXPOSE 3000

#jalankan command
CMD [ "node", "server.js" ]
