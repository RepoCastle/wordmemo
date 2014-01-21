for file in `ls *`; do 
    truncate -s $(($(stat -c '%s' $file)-1)) $file
    perl -n -e'/\?\((.*)\)/ && print $1' $file
done

