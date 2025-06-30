FROM webdevops/php-apache:8.1

# Установка зависимостей + Composer + pnpm
RUN apt-get update && \
    apt-get install -y docker.io sshpass curl nodejs npm unzip && \
    npm install -g pnpm && \
    apt-get clean

# Установка Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

USER 1000:1000
