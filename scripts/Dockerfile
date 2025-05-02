FROM webdevops/php-apache:8.1

# Установка зависимостей + Composer
RUN apt-get update && \
    apt-get install -y docker.io sshpass curl nodejs npm unzip && \
    apt-get clean

# Установка Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Жесткое удаление расширения mongodb
RUN rm -f /usr/local/etc/php/conf.d/*mongodb.ini || true && \
    rm -f /usr/local/lib/php/extensions/*/mongodb.so || true && \
    yes | pecl uninstall mongodb || true

# Установка нужной версии ext-mongodb
RUN pecl install mongodb-2.0.0 && \
    docker-php-ext-enable mongodb