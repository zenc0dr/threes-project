<?php

namespace Zen\Threes\Classes\Services;

use Exception;
use Throwable;
use Http;

class OpenAiService
{
    private string $api_key;
    public function __construct()
    {
        $this->api_key = env('OPEN_AI_API_KEY');
    }

    /**
     * Выполнить запрос к Open Ai
     * @param string $user_prompt
     * @param string $system_prompt
     * @param string $model
     * @return string
     * @throws Exception
     */
    public static function query(string $user_prompt, string $system_prompt, string $model = 'gpt-4.1'): string
    {
        $service = new self();
        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $service->api_key,
            ])->timeout(600)->post('https://api.openai.com/v1/chat/completions', [
                'model' => $model,
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => $system_prompt
                    ],
                    [
                        'role' => 'user',
                        'content' => $user_prompt
                    ],
                ],
            ]);

            if (!$response || !$response->successful()) {
                throw new Exception('API connection error');
            }

            return $response->json()['choices'][0]['message']['content'];
        } catch (Exception | Throwable $exception) {
            throw new Exception('API connection error', 0, $exception);
        }
    }
}
