<?php

/**
 * Обработка запросов
 * @param array|string|null $response
 * @return string|Response
 */
function handleResponse(array | string | null $response = null): string | Response
{
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

# Проверяем файл маршрутов
$generated_routes_path = ths()->checkDir(storage_path('temp/threes/generated_routes.php'));
if (!file_exists($generated_routes_path)) {
    file_put_contents($generated_routes_path, '<?php');
}

require_once $generated_routes_path;
