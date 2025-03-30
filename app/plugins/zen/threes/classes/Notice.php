<?php

namespace Zen\Threes\Classes;

use Http;
use Zen\Threes\Traits\SingletonTrait;

class Notice
{
    use SingletonTrait;

    public function telegramSendMessage(string $text, ?string $chat_id = null): void
    {
        $bot_token = env('TELEGRAM_BOT_TOKEN');
        $chat_id = env('TELEGRAM_CHAT_ID', $chat_id);
        if (!$bot_token || !$chat_id) {
            return;
        }
        $api_url = 'https://api.telegram.org';
        $encodedText = urlencode($text);
        $query = "$api_url/bot$bot_token/sendMessage?chat_id=$chat_id&text=$encodedText&parse_mode=HTML";
        Http::get($query);
    }
}
