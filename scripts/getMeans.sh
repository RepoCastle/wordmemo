#!/bin/sh

wordfile=$1;
baseurl="http://fanyi.youdao.com/openapi.do?keyfrom=CourseRanking&key=878350469&type=data&doctype=jsonp&callback=?&version=1.1&q="

while read line; do
    for word in $line; do
        url=$baseurl$word
        echo "Getting the translation for #" $word "#"
        wget "$url" -O result/$word.json
        echo "Sleep 5 seconds ..."
        sleep 5
    done
done < $wordfile
