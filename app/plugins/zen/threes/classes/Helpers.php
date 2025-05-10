<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Carbon;
use Zen\Threes\Classes\Helpers\Debug;
use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\State;
use Zen\Threes\Classes\Helpers\Strings;
use Zen\Threes\Classes\Helpers\Yaml;
use Zen\Threes\Classes\Helpers\Icon;
use Zen\Threes\Classes\Helpers\Env;
use Zen\Threes\Classes\Helpers\Schema;

class Helpers
{
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек
    use State;    # Управлением состоянием (сессия Threes)
    use Carbon;   # Создание объекта Carbon
    use Icon;     # Сервис иконок
    use Env;      # Переменные окружения
    use Schema;   # Управление схемами

    /**
     * Ноды, хранят информацию для схемы, доступны по $nid
     * @return Nodes
     */
    public function nodes(): Nodes
    {
        return Nodes::getInstance();
    }

    /**
     * Хранилище нод
     * @return Store
     */
    public function store(): Store
    {
        return Store::getInstance();
    }

    /**
     * Система сообщений
     * @return Messages
     */
    public function messages(): Messages
    {
        return Messages::getInstance();
    }

    public function notice(): Notice
    {
        return Notice::getInstance();
    }

    /**
     * Система событий
     * @return Events
     */
    public function events(): Events
    {
        return Events::getInstance();
    }

    public function versions(): Versions
    {
        return Versions::getInstance();
    }

    public function backlog(): Backlog
    {
        return Backlog::getInstance();
    }

    public function ai(
        string $prompt,
        string $system_prompt = null,
        string $service = 'openai',
        string $model = null
    ): ?string {
        if ($service === 'openai') {
            if (!$system_prompt) {
                $system_prompt = ths()->getSetting('default_prompt');
            }
            if (!$model) {
                $model = 'gpt-4.1';
            }
            return \Zen\Threes\Classes\Services\OpenAiService::query($prompt, $system_prompt, $model);
        }

        if ($service === 'ollama') {
            if (!$model) {
                $model = 'llama3.3:latest';
            }
            return \Zen\Threes\Classes\Services\OllamaService::query($prompt, $system_prompt, $model);
        }

        return null;
    }
}
