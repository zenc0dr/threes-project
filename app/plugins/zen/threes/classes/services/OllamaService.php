<?php

namespace Zen\Threes\Classes\Services;

use Exception;
use Throwable;
use Http;

class OllamaService
{
    private string $host;

    public function __construct()
    {
        $this->host = env('OLLAMA_HOST', 'http://192.168.201.105:11434');
    }

    /**
     * Выполнить запрос к Ollama с поддержкой system prompt
     * @param string $model
     * @param string $user_prompt
     * @param string|null $system_prompt
     * @return string
     * @throws Exception
     */
    public static function query(string $user_prompt, ?string $system_prompt = null, string $model = 'llama3.3:latest'): string
    {
        set_time_limit(0);

        $service = new self();
        try {
            $payload = [
                'model'  => $model,
                'prompt' => $user_prompt,
                'stream' => false,
            ];

            if ($system_prompt) {
                $payload['system'] = $system_prompt;
            }

            $response = Http::timeout(3600)->post($service->host . '/api/generate', $payload);

            if (!$response || !$response->successful()) {
                throw new Exception('Ollama connection error: ' . $response->body());
            }

            return $response->json()['response'] ?? '';
        } catch (Exception | Throwable $exception) {
            throw new Exception('Ollama connection error', 0, $exception);
        }
    }
}
