# React jvectormap

## About

A simple wrapper for [jvectormap](http://jvectormap.com/)

Please feel free to contribute, open issues or just enjoy this library!

## Gettings started

Install the library:

    npm install --save react-jvectormap

Include the jvectormap.css file in your project:

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen"/>


## Example usage
            <div style={{width: 500, height: 500}}>
                <VectorMap map={'us_aea'}
                           backgroundColor="#3b96ce"
                           ref="map"
                           containerStyle={{
                               width: '100%',
                               height: '100%'
                           }}
                           containerClassName="map"
                />
            </div>

Will result the following map:

<p align="center">
  <img src="./example.png" width="500" height="500" />
</p>


## Supported props:

All the [Map](http://jvectormap.com/documentation/javascript-api/jvm-map/) properties are supported as props.

Please note that `map` is a required prop, and must be one of the [supported maps](#maps);

## Supported [maps]

This plugin is brand new, and currently supports only two type of maps:

* world_mill
* us_aea

**Please feel free to request new maps! just open an issue!**