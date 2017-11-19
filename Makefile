#
# StromDAO Business Object - Decentralized Apps
# Deployment via Makefile to automate general Quick Forward 
#

PROJECT = "Fury Mithrill Extension"


all: commit

browserify: ;browserify index.js > dist/furyMithril.js;

commit: ;git add -A;git commit -a; git push;

