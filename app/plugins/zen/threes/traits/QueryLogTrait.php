<?php

namespace Zen\Threes\Traits;

use ReflectionClass;

use Zen\Threes\Models\Query as QueryModel;

/**
 * Логирование запросов
 * Использование: Добавить трейт в класс и все protected методы будут вызваны через эту прослойку
 * Например чтобы повторить последний запрос, достаточно к эндпоинту api добавить &debug
 */
trait QueryLogTrait
{

    public function __call($method, $arguments)
    {
        $class_name = str_replace('\\', '.', (new ReflectionClass($this))->getName());
        $call = "$class_name.$method";

        if (request()->has('debug')) {
            $last_query = QueryModel::where('call', $call)
                ->orderBy('id', 'desc')
                ->first();
            if ($last_query) {
                $data = ths()->fromJson($last_query->data);
                unset($data['debug']);
                request()->merge($data);
            }
        } else {
            QueryModel::create([
                'call'=> $call,
                'data' => request()->all()
            ]);
        }

        if (method_exists($this, $method)) {
            return call_user_func_array([$this, $method], $arguments);
        } else {
            throw new \BadMethodCallException("Method $method does not exist");
        }
    }
}
