<?php

namespace Zen\Threes\Api\debug;

use Http;
use Zen\Threes\Classes\Services\OpenAiService;

/**
 * Данный класс существует для отладки и экспериментов
 * в нем всегда должны быть два метода: debug (по возможности оставлять пустым) и test (для теста api)
 */
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        dd(
            ths()->ai(
                'Привет моделька',
                'Ты добрая и ласковая девушка',
                'ollama'
            )
        );


        #ths()->getSetting();
        #ths()->backlog()->generateBacklog();

//        $answer = OpenAiService::query(
//            'Ты дружелюбная помощница',
//            'Привет милая, как твои делишки?'
//        );
//
//        dd($answer);

        //ths()->notice()->telegramSendMessage('Какдила?');
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
