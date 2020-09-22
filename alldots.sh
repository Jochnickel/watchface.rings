#!/bin/bash
for i in {0..9}; do
    node circle.ts $i `expr 10 - $i` 0 >tmp.svg && inkscape -z -e binary/digital7_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..9}; do
    node circle.ts `echo $i`0 10 100 >tmp.svg && inkscape -z -e binary/digital8_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..9}; do
    node digit.ts $i 8 white >tmp.svg && inkscape -z -e binary/digital1_$i.png -w 112 -h 32 tmp.svg;
done
for i in {10..12}; do
    node digit.ts $i 8 white >tmp.svg && inkscape -z -e binary/digital2_`expr $i - 1`.png -w 112 -h 32 tmp.svg;
done
