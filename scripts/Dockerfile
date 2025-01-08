FROM webdevops/php-apache:8.1
RUN apt-get update && apt-get install -y docker.io sshpass curl nodejs npm && apt-get clean
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer