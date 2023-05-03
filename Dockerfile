FROM mongo

RUN echo "security:\n  authorization: disabled" >> /etc/mongod.conf

CMD ["mongod", "--bind_ip_all"]

EXPOSE 27017