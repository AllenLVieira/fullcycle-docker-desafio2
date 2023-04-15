FROM nginx:latest

# Remover o arquivo padrao de configuracao do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiando o arquivo customizado nginx.conf
COPY nginx.conf /etc/nginx/conf.d/

# Criando diretorio raiz web e seu index
RUN mkdir -p /var/www/html && touch /var/www/html/index.js && touch /usr/share/nginx/html/index.js

# Copiando o HTML para dentro do diretorio
COPY html /usr/share/nginx/html/

# Instalando wget para instalar o Dockerize
RUN apt-get update && apt-get install -y wget

# Download and install Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expor a porta 80
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
