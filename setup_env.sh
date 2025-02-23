#!/bin/bash

snap install ruby --classic
apt install ruby-full build-essential zlib1g-dev
gem install jekyll bundler
bundle install

apt update
apt upgrade
apt autoremove
