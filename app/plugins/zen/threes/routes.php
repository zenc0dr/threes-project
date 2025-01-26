<?php

Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        if (is_null($response)) {
            return '';
        }
        if (!is_string($response)) {
            return Response::make(
                json_encode($response, 128 | 256),
                200,
                ['Content-Type' => 'application/json']
            );
        } else {
            return $response;
        }
    }
);
