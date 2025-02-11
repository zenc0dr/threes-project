<?php

function handleResponse($response)
{
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


Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        return handleResponse($response);
    }
);

# Проверяем файл маршрутов
$generated_routes_path = ths()->checkDir(storage_path('temp/threes/generated_routes.php'));
if (!file_exists($generated_routes_path)) {
    file_put_contents($generated_routes_path, '<?php');
}

require_once $generated_routes_path;
