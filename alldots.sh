#!/bin/bash
for i in {0..9}; do
    node circle.ts $i 0 `expr 10 - $i` 150 100 lime darkred yellow 19 red 9 >tmp.svg && inkscape -z -e batteryI_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..1}; do
    node circle.ts `echo $i`0 10 100 150 100 lime darkred yellow 19 yellow 0 >tmp.svg && inkscape -z -e batteryX_$i.png -w 400 -h 400 tmp.svg
done
for i in {2..9}; do
    node circle.ts `echo $i`0 10 100 150 100 lime darkred >tmp.svg && inkscape -z -e batteryX_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..1}; do
    node circle.ts `expr 1 - $i` $i 0 150 100 lime darkred >tmp.svg && inkscape -z -e batteryC_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..9}; do
    node circle.ts $i 0 `expr 10 - $i` 175 60 lightblue darkblue >tmp.svg && inkscape -z -e minuteI_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..9}; do
    node circle.ts `echo $i`0 10 100 175 60 lightblue darkblue >tmp.svg && inkscape -z -e minuteX_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..1}; do
    node circle.ts `expr 1 - $i` $i 0 175 60 lightblue darkblue >tmp.svg && inkscape -z -e minuteC_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..9}; do
    node circle.ts $i 0 `expr 10 - $i` 200 60 white dimgrey >tmp.svg && inkscape -z -e secondI_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..9}; do
    node circle.ts `echo $i`0 10 100 200 60 white dimgrey >tmp.svg && inkscape -z -e secondX_$i.png -w 400 -h 400 tmp.svg
done
for i in {0..1}; do
    node circle.ts `expr 1 - $i` $i 0 200 60 white dimgrey >tmp.svg && inkscape -z -e secondC_$i.png -w 400 -h 400 tmp.svg
done