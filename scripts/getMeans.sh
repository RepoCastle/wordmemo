#!/bin/sh

wordfile=$1;
baseurl="http://dict.youdao.com/search?le=eng&keyfrom=dict.top&q="
while read line; do
    for word in $line; do
        url=$baseurl$word
        echo wget $url -O $word.html;
    done
done < $wordfile
