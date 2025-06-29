<?php

use Symfony\Component\HttpFoundation\BinaryFileResponse;

function handleResponse(array | string | \Symfony\Component\HttpFoundation\Response | null $response = null)
{
    if ($response instanceof BinaryFileResponse) {
        return $response;
    }

    if (is_null($response)) {
        return '';
    }

    if (is_array($response)) {
        if (!isset($response['success'])) {
            $response['success'] = true;
        }
        if (!isset($response['messages'])) {
            $response['messages'] = [];
        }
    }

    $has_messages = $response
        && isset($response['messages'])
        && is_array($response['messages']);

    if ($has_messages) {
        $response['messages'] = ths()->messages()->pushMessages($response['messages']);
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


Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        return handleResponse($response);
    }
);

Route::view('/app/node/{nid?}', 'zen.threes::threes');
Route::view('/login', 'zen.threes::threes');
Route::view('/profile', 'zen.threes::threes');
