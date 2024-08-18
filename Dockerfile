# Use a imagem oficial do Nginx como base
FROM nginx:alpine

# Copie os arquivos do seu projeto para o diretório padrão do Nginx
COPY ./src /usr/share/nginx/html

# Exponha a porta 80 para acesso HTTP
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
