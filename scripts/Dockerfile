FROM webdevops/php-apache:8.1

# Установка зависимостей + Composer + pnpm
RUN apt-get update && \
    apt-get install -y docker.io sshpass curl nodejs npm unzip && \
    npm install -g pnpm && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Установка Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Копируем bash_aliases
COPY bash_aliases /home/application/.bash_aliases

# Подключаем его в .bashrc
RUN echo 'if [ -f ~/.bash_aliases ]; then . ~/.bash_aliases; fi' >> /home/application/.bashrc


USER 1000:1000
