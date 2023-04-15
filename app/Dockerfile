FROM node:16

# Define o diretorio de trabalho /usr/src/app
WORKDIR /usr/src/app

# Atualiza e instala o wget
RUN apt-get update && apt-get install -y wget

# Instala o dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expoe a porta 3000 como a da aplicacao
EXPOSE 3000

#  Copiar o conteudo do diretorio para o diretorio de trabalho
COPY . .

RUN npm install

CMD [ "node", "index.js"]
