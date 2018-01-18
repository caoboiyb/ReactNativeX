# ReactNativeX

[![Build Status](https://travis-ci.org/Ahiho/ReactNativeX.svg?branch=master)](https://travis-ci.org/Ahiho/ReactNativeX)

A React Native boilerplate that's config with Redux + ESlint (Airbnb style) + Facebook Flow + Prettier

## Requirement

* Nodejs v.9.2.1
* Yarn 1.3.2
* React Native CLI

### iOS

* Xcode latest version

### Android

* Android SDK
* Android NDK

## How to build React Native X Boilerplate project?

```
# branch:
# fresh-boilerplate for fresh react native project with eslint, flow, prettier
# nav-boilerplate for fresh + nav
# redux-integration for fresh + nav + redux
# master for full boilerplate
git clone -b <branch> https://github.com/Ahiho/ReactNativeX.git
cd ReactNativeX
yarn install
react-native run-ios || run- android
```

## Rename Project

Rename react-native app with just one command

> This package assumes that you created your react-native project using `react-native init`.

#### Installation

```
yarn global add react-native-rename
or
npm install react-native-rename -g
```

Switch to new branch first

> better to have back-up

```
git checkout -b rename-app
```

#### Usage

```
react-native-rename <newName>
```

> With custom Bundle Identifier (Android)

```
react-native-rename <newName> -b <bundleIdentifier>
```

#### Example

```
react-native-rename "Amazing App"
```

> With custom Bundle Identifier

```
react-native-rename "Amazing App" -b com.amazinginc.amazingapp
```
