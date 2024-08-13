#!/usr/bin/bash

count=1

while [ $count -lt 11 ]
    do
        touch $count-main.js
        count=$((count + 1))
    done