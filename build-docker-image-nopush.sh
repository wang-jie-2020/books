docker-compose build --no-cache

docker tag docs_vuepress wangjie0303/docs:lastest

#docker push wangjie0303/docs:lastest

docker stop docs
docker rm docs
docker run -P -d --name docs wangjie0303/docs:lastest
